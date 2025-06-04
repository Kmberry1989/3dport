import { useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const ShootingStar = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);

  const timer = useRef(0);
  const delay = useRef(Math.random() * 6 + 4);
  const life = useRef(0);
  const direction = useRef(new THREE.Vector3());
  const speed = 3;
  const lifetime = 1.5;

  useFrame((_, delta) => {
    if (active) {
      life.current += delta;
      if (ref.current) {
        ref.current.position.addScaledVector(direction.current, delta * speed);
      }

      if (life.current > lifetime) {
        setActive(false);
        timer.current = 0;
        delay.current = Math.random() * 6 + 4;
        life.current = 0;
      }
    } else {
      timer.current += delta;
      if (timer.current > delay.current) {
        if (ref.current) {
          ref.current.position.set(
            Math.random() * 4 - 2,
            Math.random() * 2 - 1,
            -1
          );
        }
        direction.current
          .set(
            Math.random() * 0.5 - 0.25,
            Math.random() * 0.2 - 0.1,
            -1
          )
          .normalize();
        setActive(true);
      }
    }
  });

  return (
    <mesh ref={ref} visible={active}>
      <sphereGeometry args={[0.01, 8, 8]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

const Stars = () => {
  const group = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.x -= delta / 10;
      group.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={group} rotation={[0, 0, Math.PI / 4]}>
      <Sparkles
        count={800}
        size={1.5}
        scale={6}
        color="#ffffff"
        speed={0.2}
      />
      <ShootingStar />
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-auto w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
