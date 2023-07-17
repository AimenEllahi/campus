import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useGLTF } from "@react-three/drei";

export default function ModelLandscape() {
  const { scene } = useGLTF("/Landscapenew.glb");
  const { camera } = useThree();
  const { cameraPosition, cameraRotation } = useControls("Camera", {
    //{"cameraPosition":[26,28,207]}
    cameraPosition: { value: [26, 28, 207], step: 1 }, // Add camera position control
    cameraRotation: { value: [-0.2, 0, 0], step: 0.2 }, // Add camera rotation control
  });

  useEffect(() => {
    camera.position.set(...cameraPosition);
    camera.rotation.set(...cameraRotation);
  }, [cameraPosition, cameraRotation]);

  // useEffect(() => {
  //   camera.position.set(26, 28, 207);
  //   camera.rotation.set(-0.2, 0, 0);
  // }, []);

  return (
    <primitive object={scene} dispose={null} position={[0, 0, 0]} scale={3} />
  );
}
