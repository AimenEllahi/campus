/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Geb9.glb --transform
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";
export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/Models/Geb9-transformed.glb"
  );

  return (
    <group
      position={[145, 4, 94]}
      rotation={[0, 1.6, -0.2]}
      ref={group}
      {...props}
      dispose={null}
      scale={1.2}
      onClick={() => props.setActiveState(9)}
    >
      <group name='Scene'>
        <group
          name='Street_FLF002'
          position={[1.583, -2.853, -16.096]}
          rotation={[Math.PI, -0.005, Math.PI]}
        >
          <mesh
            name='Plane048'
            geometry={nodes.Plane048.geometry}
            material={materials["street.004"]}
          />
          <mesh
            name='Plane048_1'
            geometry={nodes.Plane048_1.geometry}
            material={materials["roow.005"]}
          />
          <mesh
            name='Plane048_2'
            geometry={nodes.Plane048_2.geometry}
            material={materials["ручка.008"]}
          />
          <mesh
            name='Plane048_3'
            geometry={nodes.Plane048_3.geometry}
            material={materials["street.004"]}
          />
          <mesh
            name='Plane048_4'
            geometry={nodes.Plane048_4.geometry}
            material={materials["roow.005"]}
          />
          <mesh
            name='Plane048_5'
            geometry={nodes.Plane048_5.geometry}
            material={materials["ручка.008"]}
          />
        </group>
        <group
          name='LIght_C_Street001'
          position={[5.112, -2.806, 1.942]}
          scale={0.115}
        >
          <mesh
            name='Circle017_1'
            geometry={nodes.Circle017_1.geometry}
            material={materials["Metal_Color_Palette.006"]}
          />
          <mesh
            name='Circle017_2'
            geometry={nodes.Circle017_2.geometry}
            material={materials["Emission_ Color_Palette.006"]}
          />
        </group>
        <group name='Handlebar001' position={[4.915, -1.785, 13.178]}>
          <mesh
            name='Cube158'
            geometry={nodes.Cube158.geometry}
            material={materials["Handlebar.002"]}
          />
          <mesh
            name='Cube158_1'
            geometry={nodes.Cube158_1.geometry}
            material={materials["Wheel.001"]}
          />
          <mesh
            name='Cube158_2'
            geometry={nodes.Cube158_2.geometry}
            material={materials["Pedals_Seat.001"]}
          />
          <mesh
            name='Cube158_3'
            geometry={nodes.Cube158_3.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            name='Cube158_4'
            geometry={nodes.Cube158_4.geometry}
            material={materials["Chain.002"]}
          />
        </group>
        <mesh
          name='Cube198'
          geometry={nodes.Cube198.geometry}
          material={materials["Material.432"]}
          position={[5.26, -2.432, 8.045]}
          scale={0.394}
        />
        <mesh
          name='Cube197'
          geometry={nodes.Cube197.geometry}
          material={materials["Material.432"]}
          position={[5.26, -2.432, 8.814]}
          scale={0.394}
        />
        <mesh
          name='Cube196'
          geometry={nodes.Cube196.geometry}
          material={materials["Material.432"]}
          position={[5.26, -2.432, 9.582]}
          scale={0.394}
        />
        <mesh
          name='Cube195'
          geometry={nodes.Cube195.geometry}
          material={materials["Material.432"]}
          position={[5.26, -2.432, 10.416]}
          scale={0.394}
        />
        <mesh
          name='Cube194'
          geometry={nodes.Cube194.geometry}
          material={materials["Material.432"]}
          position={[5.26, -2.432, 11.319]}
          scale={0.394}
        />
        <mesh
          name='Cube193'
          geometry={nodes.Cube193.geometry}
          material={materials["Material.432"]}
          position={[5.26, -2.432, 12.196]}
          scale={0.394}
        />
        <mesh
          name='Cube191'
          geometry={nodes.Cube191.geometry}
          material={materials["Material.432"]}
          position={[5.3, -2.432, 13.084]}
          scale={0.394}
        />
        <group name='Circle018' position={[4.511, -2.257, 6.938]} scale={0.213}>
          <mesh
            name='Circle019'
            geometry={nodes.Circle019.geometry}
            material={materials.Blue}
          />
          <mesh
            name='Circle019_1'
            geometry={nodes.Circle019_1.geometry}
            material={materials["Material.432"]}
          />
        </group>
        <group name='Circle017' position={[4.475, -2.37, 6.929]} scale={0.213}>
          <mesh
            name='Circle020'
            geometry={nodes.Circle020.geometry}
            material={materials["Metallic.004"]}
          />
          <mesh
            name='Circle020_1'
            geometry={nodes.Circle020_1.geometry}
            material={materials["Material.432"]}
          />
        </group>
        <mesh
          name='Circle016'
          geometry={nodes.Circle016.geometry}
          material={materials.Blue}
          position={[4.475, -2.085, 6.907]}
          scale={0.213}
        />
        <group
          name='Tree001'
          position={[5.209, -2.875, -0.598]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.219}
        >
          <mesh
            name='Cube043'
            geometry={nodes.Cube043.geometry}
            material={materials["Tree 1.001"]}
          />
          <mesh
            name='Cube043_1'
            geometry={nodes.Cube043_1.geometry}
            material={materials["Tree 1.001"]}
          />
          <mesh
            name='Cube043_2'
            geometry={nodes.Cube043_2.geometry}
            material={materials["Tree 1.001"]}
          />
        </group>
        <group
          name='Tree002'
          position={[5.696, -2.921, 0.075]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.278}
        >
          <mesh
            name='Cylinder011_1'
            geometry={nodes.Cylinder011_1.geometry}
            material={materials["Tree 1.001"]}
          />
          <mesh
            name='Cylinder011_2'
            geometry={nodes.Cylinder011_2.geometry}
            material={materials["Tree 1.001"]}
          />
        </group>
        <group
          name='Tree009'
          position={[5.204, -2.867, 16.171]}
          rotation={[2.987, 1.494, -2.995]}
          scale={0.225}
        >
          <mesh
            name='Cylinder011_1'
            geometry={nodes.Cylinder011_1.geometry}
            material={materials["Tree 1.001"]}
          />
          <mesh
            name='Cylinder011_2'
            geometry={nodes.Cylinder011_2.geometry}
            material={materials["Tree 1.001"]}
          />
        </group>
        <group
          name='Tree007'
          position={[4.463, -1.355, 15.868]}
          rotation={[0, -0.642, 0]}
          scale={0.298}
        >
          <mesh
            name='Cylinder006_1'
            geometry={nodes.Cylinder006_1.geometry}
            material={materials["Tree 1.001"]}
          />
          <mesh
            name='Cylinder006_2'
            geometry={nodes.Cylinder006_2.geometry}
            material={materials["Tree 1.001"]}
          />
        </group>
        <group
          name='Tree003'
          position={[4.69, -2.23, 16.589]}
          rotation={[2.987, 1.494, -2.995]}
          scale={0.126}
        >
          <mesh
            name='Cylinder006_1'
            geometry={nodes.Cylinder006_1.geometry}
            material={materials["Tree 1.001"]}
          />
          <mesh
            name='Cylinder006_2'
            geometry={nodes.Cylinder006_2.geometry}
            material={materials["Tree 1.001"]}
          />
        </group>
        <group
          name='Tree004'
          position={[4.712, -1.611, -0.176]}
          rotation={[-Math.PI, 0.621, -Math.PI]}
          scale={0.219}
        >
          <mesh
            name='Cube044'
            geometry={nodes.Cube044.geometry}
            material={materials["Tree 1.001"]}
          />
          <mesh
            name='Cube044_1'
            geometry={nodes.Cube044_1.geometry}
            material={materials["Tree 1.001"]}
          />
          <mesh
            name='Cube044_2'
            geometry={nodes.Cube044_2.geometry}
            material={materials["Tree 1.001"]}
          />
        </group>
        <mesh
          name='Text001'
          geometry={nodes.Text001.geometry}
          material={materials["Material.105"]}
          position={[3.17, -2.511, 2.162]}
          rotation={[1.423, 0.012, -1.591]}
          scale={2.076}
        />
        <mesh
          name='Text'
          geometry={nodes.Text.geometry}
          material={materials["Material.105"]}
          position={[3.141, -1.009, 1.077]}
          rotation={[-3.121, -0.019, -1.564]}
          scale={1.34}
        />
        <mesh
          name='Plane009'
          geometry={nodes.Plane009.geometry}
          material={materials["Material.099"]}
          position={[2.346, -2.011, 3.201]}
          rotation={[1.571, -0.001, -1.598]}
          scale={0.837}
        />
        <mesh
          name='Plane008'
          geometry={nodes.Plane008.geometry}
          material={materials["Material.099"]}
          position={[2.346, 1.337, 3.201]}
          rotation={[1.571, -0.001, -1.598]}
          scale={0.837}
        />
        <mesh
          name='Plane006'
          geometry={nodes.Plane006.geometry}
          material={materials["Material.099"]}
          position={[2.346, -0.666, 3.201]}
          rotation={[1.571, -0.001, -1.598]}
          scale={0.837}
        />
        <mesh
          name='Plane005'
          geometry={nodes.Plane005.geometry}
          material={materials["Material.095"]}
          position={[3.253, -1.79, 11.839]}
          rotation={[1.571, -0.001, -1.598]}
          scale={0.493}
        />
        <mesh
          name='Plane002'
          geometry={nodes.Plane002.geometry}
          material={materials["Material.095"]}
          position={[3.145, 1.579, 7.864]}
          rotation={[1.571, -0.001, -1.598]}
          scale={0.493}
        />
        <mesh
          name='Plane004'
          geometry={nodes.Plane004.geometry}
          material={materials["Material.094"]}
          position={[3.145, -1.79, 7.864]}
          rotation={[1.571, -0.001, -1.598]}
          scale={0.493}
        />
        <mesh
          name='Plane001'
          geometry={nodes.Plane001.geometry}
          material={materials["Material.094"]}
          position={[3.254, -0.034, 11.856]}
          rotation={[1.571, -0.001, -1.598]}
          scale={0.493}
        />
        <mesh
          name='Plane003'
          geometry={nodes.Plane003.geometry}
          material={materials["Material.093"]}
          position={[3.145, -0.07, 7.864]}
          rotation={[1.571, -0.001, -1.598]}
          scale={0.493}
        />
        <mesh
          name='Plane'
          geometry={nodes.Plane.geometry}
          material={materials["Material.090"]}
          position={[3.254, 1.579, 11.856]}
          rotation={[1.571, -0.001, -1.598]}
          scale={0.493}
        />
        <group
          name='Layer0_001'
          position={[2.907, -2.06, 4.516]}
          rotation={[-Math.PI, 0.897, -Math.PI]}
          scale={0.019}
        >
          <mesh
            name='Mesh004'
            geometry={nodes.Mesh004.geometry}
            material={materials["dbl_Layer0_001.004"]}
          />
          <mesh
            name='Mesh004_1'
            geometry={nodes.Mesh004_1.geometry}
            material={materials["dbl_Layer0_002.004"]}
          />
          <mesh
            name='Mesh004_2'
            geometry={nodes.Mesh004_2.geometry}
            material={materials["dbl_Layer0_003.004"]}
          />
          <mesh
            name='Mesh004_3'
            geometry={nodes.Mesh004_3.geometry}
            material={materials["dbl_Layer0_003.004"]}
          />
          <mesh
            name='Mesh004_4'
            geometry={nodes.Mesh004_4.geometry}
            material={materials["dbl_Layer0_005.004"]}
          />
          <mesh
            name='Mesh004_5'
            geometry={nodes.Mesh004_5.geometry}
            material={materials["dbl_Layer0_005.004"]}
          />
          <mesh
            name='Mesh004_6'
            geometry={nodes.Mesh004_6.geometry}
            material={materials["dbl_Layer0_005.004"]}
          />
          <mesh
            name='Mesh004_7'
            geometry={nodes.Mesh004_7.geometry}
            material={materials["dbl_Layer0_008.004"]}
          />
        </group>
        <mesh
          name='Grass006'
          geometry={nodes.Grass006.geometry}
          material={materials["Tree 1.001"]}
          position={[5.012, -2.858, 16.403]}
          rotation={[1.059, -1.199, 1.39]}
          scale={0.389}
        />
        <mesh
          name='Grass005'
          geometry={nodes.Grass005.geometry}
          material={materials["Tree 1.001"]}
          position={[5.676, -2.88, -0.305]}
          rotation={[0, 0.004, 0]}
          scale={0.389}
        />
        <mesh
          name='Grass004'
          geometry={nodes.Grass004.geometry}
          material={materials["Tree 1.001"]}
          position={[4.621, -2.903, 16.745]}
          rotation={[1.922, -1.016, 2.046]}
          scale={0.389}
        />
        <mesh
          name='Grass003'
          geometry={nodes.Grass003.geometry}
          material={materials["Tree 1.001"]}
          position={[4.942, -2.807, 16.221]}
          rotation={[0.089, -0.398, -0.109]}
          scale={0.389}
        />
        <mesh
          name='Grass002'
          geometry={nodes.Grass002.geometry}
          material={materials["Tree 1.001"]}
          position={[4.66, -2.88, 15.784]}
          rotation={[0, 0.004, 0]}
          scale={0.389}
        />
        <mesh
          name='Grass001'
          geometry={nodes.Grass001.geometry}
          material={materials["Tree 1.001"]}
          position={[5.958, -2.88, 0.133]}
          rotation={[0.089, -0.398, -0.109]}
          scale={0.389}
        />
        <mesh
          name='Cylinder040'
          geometry={nodes.Cylinder040.geometry}
          material={materials["Material.112"]}
          position={[2.356, 0.514, 4.56]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder039'
          geometry={nodes.Cylinder039.geometry}
          material={materials["Material.112"]}
          position={[3.123, 0.514, 6.297]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder038'
          geometry={nodes.Cylinder038.geometry}
          material={materials["Material.112"]}
          position={[3.117, 0.514, 6.104]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder037'
          geometry={nodes.Cylinder037.geometry}
          material={materials["Material.112"]}
          position={[3.112, 0.514, 5.902]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder036'
          geometry={nodes.Cylinder036.geometry}
          material={materials["Material.112"]}
          position={[3.106, 0.514, 5.695]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder035'
          geometry={nodes.Cylinder035.geometry}
          material={materials["Material.112"]}
          position={[3.101, 0.514, 5.511]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder034'
          geometry={nodes.Cylinder034.geometry}
          material={materials["Material.112"]}
          position={[3.096, 0.514, 5.318]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder033'
          geometry={nodes.Cylinder033.geometry}
          material={materials["Material.112"]}
          position={[3.09, 0.514, 5.116]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder032'
          geometry={nodes.Cylinder032.geometry}
          material={materials["Material.112"]}
          position={[3.085, 0.514, 4.909]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder031'
          geometry={nodes.Cylinder031.geometry}
          material={materials["Material.112"]}
          position={[3.08, 0.514, 4.733]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder030'
          geometry={nodes.Cylinder030.geometry}
          material={materials["Material.112"]}
          position={[3.075, 0.514, 4.54]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder029'
          geometry={nodes.Cylinder029.geometry}
          material={materials["Material.112"]}
          position={[3.069, 0.514, 4.338]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder028'
          geometry={nodes.Cylinder028.geometry}
          material={materials["Material.112"]}
          position={[3.064, 0.514, 4.132]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder027'
          geometry={nodes.Cylinder027.geometry}
          material={materials["Material.112"]}
          position={[3.059, 0.514, 3.952]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder026'
          geometry={nodes.Cylinder026.geometry}
          material={materials["Material.112"]}
          position={[3.054, 0.514, 3.758]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder025'
          geometry={nodes.Cylinder025.geometry}
          material={materials["Material.112"]}
          position={[3.048, 0.514, 3.556]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder024'
          geometry={nodes.Cylinder024.geometry}
          material={materials["Material.112"]}
          position={[3.043, 0.514, 3.35]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder023'
          geometry={nodes.Cylinder023.geometry}
          material={materials["Material.112"]}
          position={[3.038, 0.514, 3.192]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder022'
          geometry={nodes.Cylinder022.geometry}
          material={materials["Material.112"]}
          position={[3.033, 0.514, 2.999]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder021'
          geometry={nodes.Cylinder021.geometry}
          material={materials["Material.112"]}
          position={[3.028, 0.514, 2.797]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder020'
          geometry={nodes.Cylinder020.geometry}
          material={materials["Material.112"]}
          position={[3.022, 0.514, 2.59]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder019'
          geometry={nodes.Cylinder019.geometry}
          material={materials["Material.112"]}
          position={[3.022, -1.195, 2.59]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder018'
          geometry={nodes.Cylinder018.geometry}
          material={materials["Material.112"]}
          position={[3.028, -1.195, 2.797]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder017'
          geometry={nodes.Cylinder017.geometry}
          material={materials["Material.112"]}
          position={[3.033, -1.195, 2.999]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder016'
          geometry={nodes.Cylinder016.geometry}
          material={materials["Material.112"]}
          position={[3.038, -1.195, 3.192]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder015'
          geometry={nodes.Cylinder015.geometry}
          material={materials["Material.112"]}
          position={[3.043, -1.195, 3.35]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder014'
          geometry={nodes.Cylinder014.geometry}
          material={materials["Material.112"]}
          position={[3.048, -1.195, 3.556]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder013'
          geometry={nodes.Cylinder013.geometry}
          material={materials["Material.112"]}
          position={[3.054, -1.195, 3.758]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder012'
          geometry={nodes.Cylinder012.geometry}
          material={materials["Material.112"]}
          position={[3.059, -1.195, 3.952]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder011'
          geometry={nodes.Cylinder011.geometry}
          material={materials["Material.112"]}
          position={[3.064, -1.195, 4.132]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder010'
          geometry={nodes.Cylinder010.geometry}
          material={materials["Material.112"]}
          position={[3.069, -1.195, 4.338]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder009'
          geometry={nodes.Cylinder009.geometry}
          material={materials["Material.112"]}
          position={[3.075, -1.195, 4.54]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder008'
          geometry={nodes.Cylinder008.geometry}
          material={materials["Material.112"]}
          position={[3.08, -1.195, 4.733]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder007'
          geometry={nodes.Cylinder007.geometry}
          material={materials["Material.112"]}
          position={[3.085, -1.195, 4.909]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder006'
          geometry={nodes.Cylinder006.geometry}
          material={materials["Material.112"]}
          position={[3.09, -1.195, 5.116]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder005'
          geometry={nodes.Cylinder005.geometry}
          material={materials["Material.112"]}
          position={[3.096, -1.195, 5.318]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder004'
          geometry={nodes.Cylinder004.geometry}
          material={materials["Material.112"]}
          position={[3.101, -1.195, 5.511]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder003'
          geometry={nodes.Cylinder003.geometry}
          material={materials["Material.112"]}
          position={[3.106, -1.195, 5.695]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder002'
          geometry={nodes.Cylinder002.geometry}
          material={materials["Material.112"]}
          position={[3.112, -1.195, 5.902]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder001'
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.112"]}
          position={[3.117, -1.195, 6.104]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cylinder'
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.112"]}
          position={[3.123, -1.195, 6.297]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.043}
        />
        <mesh
          name='Cube006'
          geometry={nodes.Cube006.geometry}
          material={materials["Material.111"]}
          position={[2.494, -2.063, 2.562]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.038}
        />
        <mesh
          name='Cube005'
          geometry={nodes.Cube005.geometry}
          material={materials["Material.111"]}
          position={[2.387, 1.701, 2.564]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.038}
        />
        <mesh
          name='Cube004'
          geometry={nodes.Cube004.geometry}
          material={materials["Material.111"]}
          position={[2.257, -0.002, 2.568]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.038}
        />
        <mesh
          name='Cube003'
          geometry={nodes.Cube003.geometry}
          material={materials["Material.111"]}
          position={[3.211, -1.723, 9.761]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.038}
        />
        <mesh
          name='Cube002'
          geometry={nodes.Cube002.geometry}
          material={materials["Material.111"]}
          position={[3.211, -0.014, 9.761]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.038}
        />
        <mesh
          name='Cube001'
          geometry={nodes.Cube001.geometry}
          material={materials["Material.111"]}
          position={[3.211, 1.713, 9.761]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={0.038}
        />
        <mesh
          name='Cube'
          geometry={nodes.Cube.geometry}
          material={materials["Tree 1.001"]}
          position={[2.061, -1.513, 13.208]}
          rotation={[-Math.PI, 1.544, -Math.PI]}
          scale={1.39}
        />
        <mesh
          name='Cone'
          geometry={nodes.Cone.geometry}
          material={nodes.Cone.material}
          position={[1.749, 0, 6.264]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Geb9-transformed.glb");
