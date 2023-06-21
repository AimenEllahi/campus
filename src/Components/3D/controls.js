import React, { useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";

import { MapControls } from "three/addons/controls/MapControls.js";

extend({ MapControls });

function Controls(props) {
  const controls = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    controls.current.update();
  });
  return (
    <mapControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping={true}
      dampingFactor={0.001}
      minDistance={200}
      maxDistance={800}
      maxPolarAngle={Math.PI / 2}
      {...props}
    />
  );
}

export default Controls;
