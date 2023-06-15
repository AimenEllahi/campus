import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { Campus } from "./Campus";
import { FinalGeb2 } from "./FinalGeb2";
import { FinalGeb4 } from "./FinalGeb4";
import { FinalGeb3 } from "./FinalGeb3";
import { FinalGeb5 } from "./FinalGeb5";
import { FinalGeb6 } from "./FinalGeb6";
import { GEB4 } from "./GEB4";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center style={{ color: "black" }}>
      {progress} % loaded
    </Html>
  );
};

export default function Index() {
  

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 0], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Suspense fallback={<Loader />}>
          <Campus />
          <FinalGeb2 />
          <FinalGeb4 />
          <FinalGeb3 />
          <FinalGeb5 />
          <FinalGeb6 />
          <GEB4 />
        </Suspense>
      </Canvas>
    </div>
  );
}
