import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { CampusModel } from "./CampusModel";
import { FINALgeb2 } from "./FINALgeb2";
import { FINALgeb4 } from "./FINALgeb4";
import { FINALgeb3 } from "./FINALgeb3";
import { FINALgeb5 } from "./FINALgeb5";
import { FINALgeb6 } from "./FINALgeb6";
import { Geb7 } from "./Geb7";
import { FINALgeb1 } from "./FINALgeb1";
import { FINALgeb9 } from "./FINALgeb9";
import { FINALgeb7 } from "./FINALgeb7";
// import { Landscapenew } from "./Landscapenew";
import Loader from "./Loader/Loader";
import gsap from "gsap";
import { PresentationControls, OrbitControls } from "@react-three/drei";
//import Controls from "./controls";
import { useControls } from "leva";
//define useGLTF hook
import { useGLTF } from "@react-three/drei";
import ModelLandscape from "./ModelLandscape";

const CameraController = ({ activeState }) => {
  console.log(activeState);
  const { camera } = useThree();
  const gsapAnimation = (pos, duration) => {
    gsap.to(camera.position, {
      x: pos.x,
      y: pos.y,
      z: pos.z,
      duration: duration || 4,
      yoyoEase: true,
    });
  };
  useEffect(() => {
    switch (activeState) {
      //{"cameraPosition":[26,28,207]}
      case 0:
        gsapAnimation({ x: 26, y: 28, z: 207 });
        break;
      case 1:
        gsapAnimation({ x: 65, y: 16, z: -54 }); //
        break;
      case 2:
        gsapAnimation({ x: 115, y: 20, z: 51 }); //
        break;
      case 3:
        gsapAnimation({ x: 68, y: 13, z: -108 });
        break;
      case 4:
        gsapAnimation({ x: 26, y: 6, z: 147 }, 2); //
        break;
      case 5:
        gsapAnimation({ x: 214, y: 7.2, z: -114 });
        break;
      case 6:
        gsapAnimation({ x: 126, y: 11.2, z: 26 });
        break;
      case 7:
        gsapAnimation({ x: 240, y: 1.2, z: -22 });
        break;

      case 9:
        gsapAnimation({ x: 180, y: 5.2, z: 52 });
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
      <Canvas camera={{ position: [0, 0, 0], fov: 45, far: 10000 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Suspense fallback={<Loader />}>
          <directionalLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} />
          <PresentationControls
            enabled={activeState === 0}
            polar={[0, 0]}
            azimuth={[-0.2, 0.2]}
          >
            {/* <CampusModel setActiveState={setActiveState} /> */}

            {/* <Landscapenew setActiveState={setActiveState} /> */}
            <ModelLandscape setActiveState={setActiveState} />
            <FINALgeb1 setActiveState={setActiveState} />
            <FINALgeb2 setActiveState={setActiveState} />
            <FINALgeb3 setActiveState={setActiveState} />
            <FINALgeb4 setActiveState={setActiveState} />
            <FINALgeb5 setActiveState={setActiveState} />
            <FINALgeb6 setActiveState={setActiveState} />
            <FINALgeb7 setActiveStat={setActiveState} />
            <FINALgeb9 setActiveState={setActiveState} />

            {/*
           
            
            
            <Geb7 setActiveState={setActiveState} />
            <GEB4 setActiveState={setActiveState} /> */}
          </PresentationControls>

          {/* <Controls /> */}

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
