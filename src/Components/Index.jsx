import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { Campus } from "./Campus";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center style={{ color: "black" }}>
      {progress} % loaded
    </Html>
  );
};

export default function Index() {
  //camera

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 0], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Suspense fallback={<Loader />}>
          <Campus />
        </Suspense>
      </Canvas>
    </div>
  );
}
