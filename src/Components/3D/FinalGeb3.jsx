/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 FINALgeb3.glb --transform
*/

import React, { useRef } from "react";
import { useGLTF, PresentationControls } from "@react-three/drei";
import { useControls } from "leva";

export function FINALgeb3(props) {
  const { nodes, materials } = useGLTF("/Models/FINALgeb3-transformed.glb");
  const { pos, rot } = useControls("geb3", {
    pos: {
      //{"pos":[108,2,90]}
      value: [108, 2, 90],
      step: 2,
    },
    rot: { value: [0, -1.6, 0], step: 0.2 },
  });

  return (
    <PresentationControls enabled={true} azimuth={[-0.2, 0.2]} polar={[0, 0]}>
      <group
        name='building5'
        {...props}
        dispose={null}
        position={pos}
        rotation={rot}
        scale={2.2}
        onClick={() => props.setActiveState(5)}
      >
        <mesh
          geometry={nodes.Street_FLF001.geometry}
          material={materials.Metallic}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Text003.geometry}
          material={materials["Material.083"]}
          position={[-0.148, -0.98, 5.156]}
          rotation={[1.566, 0.007, -3.132]}
          scale={0.461}
        />
        <mesh
          geometry={nodes.Text001.geometry}
          material={materials["Material.062"]}
          position={[-0.125, -2.093, 5.16]}
          rotation={[1.566, 0.007, -3.132]}
          scale={2.016}
        />
        <mesh
          geometry={nodes.Street_FLF002.geometry}
          material={materials.street}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF003.geometry}
          material={materials["roow.001"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF004.geometry}
          material={materials["ручка.001"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF006.geometry}
          material={materials["Material.010"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF007.geometry}
          material={materials["Material.083"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF008.geometry}
          material={materials["Material.447"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF016.geometry}
          material={materials["Material.031"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF017.geometry}
          material={materials["glass.001"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF040.geometry}
          material={materials["glass.003"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF046.geometry}
          material={materials["Material.136"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF047.geometry}
          material={materials["Material.137"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF048.geometry}
          material={materials["Material.138"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF049.geometry}
          material={materials["Material.139"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF090.geometry}
          material={materials["Material.180"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF135.geometry}
          material={materials["Geb2.003"]}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF151.geometry}
          material={materials.Grey}
          position={[-3.907, -2.853, 4.911]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <group
          position={[0.683, -2.037, 7.403]}
          rotation={[-Math.PI, 0.53, -Math.PI]}
        >
          <mesh
            geometry={nodes.Plane297.geometry}
            material={materials["dbl_Layer0_001.004"]}
          />
          <mesh
            geometry={nodes.Plane297_1.geometry}
            material={materials["dbl_Layer0_002.004"]}
          />
          <mesh
            geometry={nodes.Plane297_2.geometry}
            material={materials["dbl_Layer0_003.004"]}
          />
          <mesh
            geometry={nodes.Plane297_3.geometry}
            material={materials["dbl_Layer0_004.004"]}
          />
          <mesh
            geometry={nodes.Plane297_4.geometry}
            material={materials["dbl_Layer0_005.004"]}
          />
          <mesh
            geometry={nodes.Plane297_5.geometry}
            material={materials["dbl_Layer0_006.004"]}
          />
          <mesh
            geometry={nodes.Plane297_6.geometry}
            material={materials["dbl_Layer0_007.004"]}
          />
          <mesh
            geometry={nodes.Plane297_7.geometry}
            material={materials["dbl_Layer0_008.004"]}
          />
        </group>
        <group
          position={[-3.907, -2.927, 4.589]}
          rotation={[Math.PI, -0.005, Math.PI]}
        >
          <mesh
            geometry={nodes.Plane153.geometry}
            material={materials["Material.310"]}
          />
          <mesh
            geometry={nodes.Plane153_1.geometry}
            material={materials["Material.311"]}
          />
          <mesh
            geometry={nodes.Plane153_2.geometry}
            material={materials["Material.312"]}
          />
        </group>
        <group
          position={[-3.907, -2.927, 4.589]}
          rotation={[Math.PI, -0.005, Math.PI]}
        >
          <mesh
            geometry={nodes.Plane154.geometry}
            material={materials["Material.308"]}
          />
          <mesh
            geometry={nodes.Plane154_1.geometry}
            material={materials["Material.309"]}
          />
        </group>
        <mesh
          geometry={nodes.Street_FLF024.geometry}
          material={materials["Material.299"]}
          position={[-3.907, -2.927, 4.589]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <mesh
          geometry={nodes.Street_FLF274.geometry}
          material={materials["Material.431"]}
          position={[-3.738, -2.927, -2.31]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
        <group
          position={[-3.738, -2.927, -2.31]}
          rotation={[Math.PI, -0.005, Math.PI]}
        >
          <mesh
            geometry={nodes.Plane159.geometry}
            material={materials["Material.380"]}
          />
          <mesh
            geometry={nodes.Plane159_1.geometry}
            material={materials["Material.381"]}
          />
        </group>
        <group
          position={[-3.738, -2.927, -2.31]}
          rotation={[Math.PI, -0.005, Math.PI]}
        >
          <mesh
            geometry={nodes.Plane160.geometry}
            material={materials["Material.378"]}
          />
          <mesh
            geometry={nodes.Plane160_1.geometry}
            material={materials["Material.379"]}
          />
        </group>
        <mesh
          geometry={nodes.Street_FLF029.geometry}
          material={materials["Material.374"]}
          position={[-3.738, -2.927, -2.31]}
          rotation={[Math.PI, -0.005, Math.PI]}
        />
      </group>
    </PresentationControls>
  );
}

useGLTF.preload("/FINALgeb3-transformed.glb");
