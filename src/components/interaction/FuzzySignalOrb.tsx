"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { useEffect, useRef, type ComponentProps } from "react";
import * as THREE from "three";

/**
 * Hero orb: translucent amniotic shell over a fetal image core.
 * Outer shell breathes gently; mouse proximity softens the shimmer.
 */

function AmnioticShell({
  energyRef,
}: {
  energyRef: React.MutableRefObject<number>;
}) {
  const outer = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);
  const matOuter = useRef<THREE.MeshPhysicalMaterial>(null);
  const matInner = useRef<THREE.MeshPhysicalMaterial>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const energy = energyRef.current;
    const breathe = 1 + 0.018 * Math.sin(t * 0.9) + energy * 0.025;

    if (outer.current) outer.current.scale.setScalar(breathe);
    if (inner.current) {
      inner.current.scale.setScalar(breathe * 0.97);
      inner.current.rotation.y = t * 0.06;
    }

    if (matOuter.current) {
      matOuter.current.opacity =
        0.22 + 0.04 * Math.sin(t * 1.1) + energy * 0.08;
    }
    if (matInner.current) {
      matInner.current.opacity =
        0.08 + 0.03 * Math.sin(t * 0.95 + 1) + energy * 0.05;
    }
  });

  return (
    <group>
      <mesh ref={outer}>
        <sphereGeometry args={[1, 64, 48]} />
        <meshPhysicalMaterial
          ref={matOuter}
          color="#f2f1ee"
          transparent
          opacity={0.24}
          roughness={0.12}
          metalness={0.02}
          clearcoat={0.9}
          clearcoatRoughness={0.2}
          ior={1.35}
          reflectivity={0.4}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      <mesh ref={inner}>
        <sphereGeometry args={[0.96, 48, 32]} />
        <meshPhysicalMaterial
          ref={matInner}
          color="#e8e6e1"
          transparent
          opacity={0.1}
          roughness={0.35}
          metalness={0}
          clearcoat={0.3}
          clearcoatRoughness={0.5}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Scene({ energyRef }: { energyRef: React.MutableRefObject<number> }) {
  const spin = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    if (spin.current) spin.current.rotation.y += dt * 0.1;
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3.5, 2.5, 2]} intensity={1.35} color="#ffffff" />
      <pointLight position={[-2, -1, 2]} intensity={0.45} color="#d8d6d2" />
      <pointLight position={[1.2, 1.8, -1.5]} intensity={0.5} color="#f5f4f1" />
      <group ref={spin}>
        <AmnioticShell energyRef={energyRef} />
      </group>
      <ContactShadows
        position={[0, -1.35, 0]}
        opacity={0.35}
        scale={5}
        blur={2.6}
        far={3.5}
        color="#000000"
      />
    </>
  );
}

export function FuzzySignalOrb({ className, ...props }: ComponentProps<"div">) {
  const energyRef = useRef(0.12);
  const targetRef = useRef(0.12);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      energyRef.current += (targetRef.current - energyRef.current) * 0.1;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      {...props}
      className={`relative h-full w-full touch-none bg-[#0a0a0a] ${className ?? ""}`}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        const dist = Math.sqrt(nx * nx + ny * ny);
        targetRef.current = THREE.MathUtils.clamp(1.1 - dist * 2.2, 0.08, 1);
      }}
      onPointerLeave={() => {
        targetRef.current = 0.12;
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-fetus.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[48%] z-0 w-[58%] max-w-none -translate-x-1/2 -translate-y-1/2 select-none object-contain"
        draggable={false}
      />

      <Canvas
        camera={{ position: [0, 0.1, 3.2], fov: 36 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        <Scene energyRef={energyRef} />
      </Canvas>
    </div>
  );
}
