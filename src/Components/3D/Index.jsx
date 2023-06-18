import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { CampusModel } from "./CampusModel";
import { FinalGeb2 } from "./FinalGeb2";
import { FinalGeb4 } from "./FinalGeb4";
import { FinalGeb3 } from "./FinalGeb3";
import { FinalGeb5 } from "./FinalGeb5";
import { FinalGeb6 } from "./FinalGeb6";
import { GEB4 } from "./GEB4";
import Loader from "./Loader/Loader";
import gsap from "gsap";
import { PresentationControls } from "@react-three/drei";

const CameraController = ({ activeState }) => {
  console.log(activeState);
  const { camera } = useThree();
  const gsapAnimation = (pos) => {
    gsap.to(camera.position, {
      x: pos.x,
      y: pos.y,
      z: pos.z,
      duration: 4,
      yoyoEase: true,
    });
  };
  useEffect(() => {
    switch (activeState) {
      case 0:
        gsapAnimation({ x: 264, y: 37, z: -158 });
        break;
      case 1:
        gsapAnimation({ x: 246, y: 13.2, z: -102 });
        break;
      case 2:
        gsapAnimation({ x: 178, y: 27.200000000000045, z: 2 });
        break;
      case 3:
        gsapAnimation({ x: 208, y: 17.200000000000045, z: -120 });
        break;
      case 4:
        gsapAnimation({ x: 118, y: 7.2000000000000455, z: -128 });
        break;
      case 5:
        gsapAnimation({ x: 86, y: 29.200000000000045, z: -20 });
        break;
      case 6:
        gsapAnimation({ x: 58, y: 13.200000000000045, z: -84 });
        break;

      default:
        break;
    }
  }, [activeState]);
  return;
};

export default function Index() {
  const [activeState, setActiveState] = useState(0);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 0], fov: 37 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Suspense fallback={<Loader />}>
          <directionalLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} />
          <PresentationControls polar={[0, 0]}>
            <CampusModel setActiveState={setActiveState} />
            <FinalGeb2 setActiveState={setActiveState} />
            <FinalGeb4 setActiveState={setActiveState} />
            <FinalGeb3 setActiveState={setActiveState} />
            <FinalGeb5 setActiveState={setActiveState} />
            <FinalGeb6 setActiveState={setActiveState} />
            <GEB4 setActiveState={setActiveState} />
          </PresentationControls>

          <CameraController activeState={activeState} />
        </Suspense>
      </Canvas>
      <div
        style={{
          zIndex: 100,
          position: "absolute",
          top: 0,
          padding: "1rem",
          display: activeState === 0 ? "none" : "flex",
        }}
      >
        <button
          onClick={() => setActiveState(0)}
          style={{
            padding: ".7rem 1rem",
            border: "none",
            backgroundColor: "#2461ef",
            color: "#fff",
            borderRadius: "10px",
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
