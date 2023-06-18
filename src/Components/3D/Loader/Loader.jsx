import React from "react";

import { useProgress, Html } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: "4rem",
            textAlign: "center",
            height: "10%",
          }}
        >
          {" "}
          {progress.toFixed(0)} % loaded
        </span>
      </div>
    </Html>
  );
};

export default Loader;
