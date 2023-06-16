import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { CampusModel } from "./CampusModel";
import { FinalGeb2 } from "./FinalGeb2";
import { FinalGeb4 } from "./FinalGeb4";
import { FinalGeb3 } from "./FinalGeb3";
import { FinalGeb5 } from "./FinalGeb5";
import { FinalGeb6 } from "./FinalGeb6";
import { GEB4 } from "./GEB4";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html style={{ color: "black"
    ,marginTop: "22vw", marginLeft: "48vw"
     }}>
      {progress} % loaded
    </Html>
  );
};

export default function Index() {
  

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 0], fov: 37 }} >
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Suspense fallback={<Loader />}>
          <directionalLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} />
          <CampusModel />
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
