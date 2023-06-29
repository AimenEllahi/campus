/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Geb7.glb --transform
*/

import React, { useRef } from "react";
import { useGLTF, PresentationControls } from "@react-three/drei";
import { useControls } from "leva";

export function Geb7(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Models/Geb7-transformed.glb");

  return (
    <PresentationControls enabled={true} azimuth={[-0.2, 0.2]} polar={[0, 0]}>
      <group
        onClick={() => props.setActiveState(7)}
        ref={group}
        {...props}
        dispose={null}
        position={[189, -6, 14]}
        rotation={[-0.1, 0.40000000000000235, 0]}
        scale={2}
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
            name='LIght_C_Street003'
            position={[10.425, -2.806, 11.147]}
            scale={0.115}
          >
            <mesh
              name='Circle015'
              geometry={nodes.Circle015.geometry}
              material={materials["Metal_Color_Palette.004"]}
            />
            <mesh
              name='Circle015_1'
              geometry={nodes.Circle015_1.geometry}
              material={materials["Emission_ Color_Palette.004"]}
            />
          </group>
          <group
            name='LIght_C_Street002'
            position={[10.425, -2.806, 8.183]}
            scale={0.115}
          >
            <mesh
              name='Circle015'
              geometry={nodes.Circle015.geometry}
              material={materials["Metal_Color_Palette.004"]}
            />
            <mesh
              name='Circle015_1'
              geometry={nodes.Circle015_1.geometry}
              material={materials["Emission_ Color_Palette.004"]}
            />
          </group>
          <group
            name='LIght_C_Street001'
            position={[10.425, -2.806, 3.281]}
            scale={0.115}
          >
            <mesh
              name='Circle015'
              geometry={nodes.Circle015.geometry}
              material={materials["Metal_Color_Palette.004"]}
            />
            <mesh
              name='Circle015_1'
              geometry={nodes.Circle015_1.geometry}
              material={materials["Emission_ Color_Palette.004"]}
            />
          </group>
          <group
            name='LIght_C_Street'
            position={[10.425, -2.806, 0.377]}
            scale={0.115}
          >
            <mesh
              name='Circle015'
              geometry={nodes.Circle015.geometry}
              material={materials["Metal_Color_Palette.004"]}
            />
            <mesh
              name='Circle015_1'
              geometry={nodes.Circle015_1.geometry}
              material={materials["Emission_ Color_Palette.004"]}
            />
          </group>
          <group name='Handlebar001' position={[7.891, -1.785, 3.723]}>
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
          <group name='Handlebar' position={[7.891, -1.785, -0.343]}>
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
            position={[7.761, -2.432, 7.296]}
            scale={0.394}
          />
          <mesh
            name='Cube197'
            geometry={nodes.Cube197.geometry}
            material={materials["Material.432"]}
            position={[8.276, -2.432, 8.065]}
            scale={0.394}
          />
          <mesh
            name='Cube196'
            geometry={nodes.Cube196.geometry}
            material={materials["Material.432"]}
            position={[8.276, -2.432, 8.833]}
            scale={0.394}
          />
          <mesh
            name='Cube195'
            geometry={nodes.Cube195.geometry}
            material={materials["Material.432"]}
            position={[8.276, -2.432, 9.668]}
            scale={0.394}
          />
          <mesh
            name='Cube194'
            geometry={nodes.Cube194.geometry}
            material={materials["Material.432"]}
            position={[8.276, -2.432, 10.571]}
            scale={0.394}
          />
          <mesh
            name='Cube193'
            geometry={nodes.Cube193.geometry}
            material={materials["Material.432"]}
            position={[8.276, -2.432, 11.448]}
            scale={0.394}
          />
          <mesh
            name='Cube191'
            geometry={nodes.Cube191.geometry}
            material={materials["Material.432"]}
            position={[8.276, -2.432, 3.629]}
            scale={0.394}
          />
          <mesh
            name='Cube190'
            geometry={nodes.Cube190.geometry}
            material={materials["Material.432"]}
            position={[8.276, -2.432, 2.752]}
            scale={0.394}
          />
          <mesh
            name='Cube189'
            geometry={nodes.Cube189.geometry}
            material={materials["Material.432"]}
            position={[8.276, -2.432, 1.849]}
            scale={0.394}
          />
          <mesh
            name='Cube188'
            geometry={nodes.Cube188.geometry}
            material={materials["Material.432"]}
            position={[8.276, -2.432, 1.015]}
            scale={0.394}
          />
          <mesh
            name='Cube187'
            geometry={nodes.Cube187.geometry}
            material={materials["Material.432"]}
            position={[8.276, -2.432, 0.247]}
            scale={0.394}
          />
          <mesh
            name='Cube186'
            geometry={nodes.Cube186.geometry}
            material={materials["Material.432"]}
            position={[8.276, -2.432, -0.522]}
            scale={0.394}
          />
          <group
            name='Circle018'
            position={[2.875, -2.257, 6.636]}
            scale={0.213}
          >
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
          <group
            name='Circle017'
            position={[2.839, -2.37, 6.636]}
            scale={0.213}
          >
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
            position={[8.731, -2.085, 5.463]}
            scale={0.213}
          />
          <group
            name='Tree001'
            position={[6.829, -2.875, -2.358]}
            rotation={[-Math.PI, 1.568, -Math.PI]}
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
            position={[7.3, -2.921, -1.674]}
            rotation={[-Math.PI, 1.568, -Math.PI]}
            scale={0.278}
          >
            <mesh
              name='Cylinder011'
              geometry={nodes.Cylinder011.geometry}
              material={materials["Tree 1.001"]}
            />
            <mesh
              name='Cylinder011_1'
              geometry={nodes.Cylinder011_1.geometry}
              material={materials["Tree 1.001"]}
            />
          </group>
          <group
            name='Tree009'
            position={[6.414, -2.867, 14.405]}
            rotation={[2.916, 1.518, -2.924]}
            scale={0.225}
          >
            <mesh
              name='Cylinder011'
              geometry={nodes.Cylinder011.geometry}
              material={materials["Tree 1.001"]}
            />
            <mesh
              name='Cylinder011_1'
              geometry={nodes.Cylinder011_1.geometry}
              material={materials["Tree 1.001"]}
            />
          </group>
          <group
            name='Tree007'
            position={[5.68, -1.355, 14.085]}
            rotation={[0, -0.667, 0]}
            scale={0.298}
          >
            <mesh
              name='Cylinder006'
              geometry={nodes.Cylinder006.geometry}
              material={materials["Tree 1.001"]}
            />
            <mesh
              name='Cylinder006_1'
              geometry={nodes.Cylinder006_1.geometry}
              material={materials["Tree 1.001"]}
            />
          </group>
          <group
            name='Tree003'
            position={[5.89, -2.23, 14.811]}
            rotation={[2.916, 1.518, -2.924]}
            scale={0.126}
          >
            <mesh
              name='Cylinder006'
              geometry={nodes.Cylinder006.geometry}
              material={materials["Tree 1.001"]}
            />
            <mesh
              name='Cylinder006_1'
              geometry={nodes.Cylinder006_1.geometry}
              material={materials["Tree 1.001"]}
            />
          </group>
          <group
            name='Tree004'
            position={[6.322, -1.611, -1.949]}
            rotation={[-Math.PI, 0.646, -Math.PI]}
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
            name='Torus004'
            geometry={nodes.Torus004.geometry}
            material={materials["Material.087"]}
            position={[3.451, -1.618, -1.634]}
            rotation={[Math.PI, 0.023, 1.558]}
            scale={0.071}
          />
          <mesh
            name='Torus003'
            geometry={nodes.Torus003.geometry}
            material={materials["Material.087"]}
            position={[2.566, -1.668, 2.105]}
            rotation={[Math.PI, 0.023, 1.558]}
            scale={0.071}
          />
          <mesh
            name='Torus002'
            geometry={nodes.Torus002.geometry}
            material={materials["Material.087"]}
            position={[1.555, -1.711, 5.21]}
            rotation={[Math.PI, 0.023, 1.558]}
            scale={0.071}
          />
          <mesh
            name='Torus001'
            geometry={nodes.Torus001.geometry}
            material={materials["Material.087"]}
            position={[1.476, -2.088, 9.745]}
            rotation={[Math.PI, 0.023, 1.558]}
            scale={0.071}
          />
          <mesh
            name='Torus'
            geometry={nodes.Torus.geometry}
            material={materials["Material.087"]}
            position={[1.477, -2.088, 10.195]}
            rotation={[Math.PI, 0.023, 1.558]}
            scale={0.071}
          />
          <mesh
            name='Text003'
            geometry={nodes.Text003.geometry}
            material={materials["Material.432"]}
            position={[1.556, -1.063, 8.132]}
            rotation={[1.577, 0.012, -1.55]}
            scale={0.725}
          />
          <mesh
            name='Text001'
            geometry={nodes.Text001.geometry}
            material={materials["Material.077"]}
            position={[1.573, -2.756, 14.599]}
            rotation={[1.577, 0.012, -1.55]}
            scale={3.986}
          />
          <mesh
            name='Plane019'
            geometry={nodes.Plane019.geometry}
            material={materials["Material.432"]}
            position={[1.658, -4.166, 9.072]}
            rotation={[-1.57, 0, -1.734]}
          />
          <mesh
            name='Plane018'
            geometry={nodes.Plane018.geometry}
            material={materials["Material.432"]}
            position={[1.659, -4.166, 9.201]}
            rotation={[-1.57, 0, -1.734]}
          />
          <mesh
            name='Plane017'
            geometry={nodes.Plane017.geometry}
            material={materials["Material.432"]}
            position={[1.6, -4.166, 10.795]}
            rotation={[-1.57, 0, -1.734]}
          />
          <mesh
            name='Plane011'
            geometry={nodes.Plane011.geometry}
            material={materials["Material.432"]}
            position={[1.654, -4.166, 7.635]}
            rotation={[-1.57, 0, -1.734]}
          />
          <mesh
            name='Plane016'
            geometry={nodes.Plane016.geometry}
            material={materials["Material.432"]}
            position={[1.654, -4.166, 7.562]}
            rotation={[-1.57, 0, -1.734]}
          />
          <mesh
            name='Plane015'
            geometry={nodes.Plane015.geometry}
            material={materials["Material.432"]}
            position={[1.632, -4.157, 9.138]}
            rotation={[-1.57, 0, -1.734]}
          />
          <mesh
            name='Plane014'
            geometry={nodes.Plane014.geometry}
            material={materials["Material.432"]}
            position={[1.608, -4.157, 10.876]}
            rotation={[-1.57, 0, -1.734]}
          />
          <mesh
            name='Plane013'
            geometry={nodes.Plane013.geometry}
            material={materials["Material.432"]}
            position={[1.584, -4.157, 12.626]}
            rotation={[-1.57, 0, -1.734]}
          />
          <mesh
            name='Plane012'
            geometry={nodes.Plane012.geometry}
            material={materials["Material.432"]}
            position={[1.49, -0.392, 12.597]}
            rotation={[0, -0.03, -1.573]}
          />
          <mesh
            name='Plane010'
            geometry={nodes.Plane010.geometry}
            material={materials["Material.432"]}
            position={[1.49, -0.333, 12.597]}
            rotation={[0, -0.03, -1.573]}
          />
          <mesh
            name='Plane009'
            geometry={nodes.Plane009.geometry}
            material={materials["glass.002"]}
            position={[1.46, -1.843, 10.657]}
            rotation={[-Math.PI, 0.013, 1.572]}
          />
          <mesh
            name='Plane008'
            geometry={nodes.Plane008.geometry}
            material={materials["Material.432"]}
            position={[1.49, 2.819, 12.597]}
            rotation={[0, -0.03, -1.573]}
          />
          <mesh
            name='Plane007'
            geometry={nodes.Plane007.geometry}
            material={materials["Material.432"]}
            position={[1.49, 2.889, 12.597]}
            rotation={[0, -0.03, -1.573]}
          />
          <mesh
            name='Plane006'
            geometry={nodes.Plane006.geometry}
            material={materials["Material.432"]}
            position={[1.49, 2.029, 12.597]}
            rotation={[0, -0.03, -1.573]}
          />
          <mesh
            name='Plane002'
            geometry={nodes.Plane002.geometry}
            material={materials["Material.432"]}
            position={[1.49, 0.967, 12.597]}
            rotation={[0, -0.03, -1.573]}
          />
          <mesh
            name='Plane001'
            geometry={nodes.Plane001.geometry}
            material={materials["glass.002"]}
            position={[-3.543, -1.798, 15.49]}
            rotation={[Math.PI, -1.557, 1.572]}
          />
          <mesh
            name='Plane005'
            geometry={nodes.Plane005.geometry}
            material={materials["glass.002"]}
            position={[-3.543, -1.843, 15.49]}
            rotation={[Math.PI, -1.557, 1.572]}
          />
          <mesh
            name='Plane003'
            geometry={nodes.Plane003.geometry}
            material={materials["Material.003"]}
            position={[-3.543, -1.798, 15.49]}
            rotation={[Math.PI, -1.557, 1.572]}
          />
          <mesh
            name='Plane004'
            geometry={nodes.Plane004.geometry}
            material={materials["Material.002"]}
            position={[-3.543, -1.798, 15.49]}
            rotation={[Math.PI, -1.557, 1.572]}
          />
          <mesh
            name='Grass006'
            geometry={nodes.Grass006.geometry}
            material={materials["Tree 1.001"]}
            position={[6.216, -2.858, 14.633]}
            rotation={[1.116, -1.21, 1.45]}
            scale={0.389}
          />
          <mesh
            name='Grass005'
            geometry={nodes.Grass005.geometry}
            material={materials["Tree 1.001"]}
            position={[7.288, -2.88, -2.054]}
            rotation={[0, -0.02, 0]}
            scale={0.389}
          />
          <mesh
            name='Grass004'
            geometry={nodes.Grass004.geometry}
            material={materials["Tree 1.001"]}
            position={[5.817, -2.903, 14.965]}
            rotation={[1.958, -1.007, 2.089]}
            scale={0.389}
          />
          <mesh
            name='Grass003'
            geometry={nodes.Grass003.geometry}
            material={materials["Tree 1.001"]}
            position={[6.151, -2.807, 14.449]}
            rotation={[0.09, -0.422, -0.107]}
            scale={0.389}
          />
          <mesh
            name='Grass002'
            geometry={nodes.Grass002.geometry}
            material={materials["Tree 1.001"]}
            position={[5.879, -2.88, 14.005]}
            rotation={[0, -0.02, 0]}
            scale={0.389}
          />
          <mesh
            name='Grass001'
            geometry={nodes.Grass001.geometry}
            material={materials["Tree 1.001"]}
            position={[7.56, -2.88, -1.61]}
            rotation={[0.09, -0.422, -0.107]}
            scale={0.389}
          />
          <mesh
            name='Cube003'
            geometry={nodes.Cube003.geometry}
            material={materials["Material.079"]}
            position={[2.64, -1.962, 5.584]}
            rotation={[0, 1.275, 0]}
            scale={1.303}
          />
          <mesh
            name='Cube002'
            geometry={nodes.Cube002.geometry}
            material={materials["Material.079"]}
            position={[4.559, -2.024, -1.218]}
            rotation={[0, 1.275, 0]}
            scale={1.303}
          />
          <mesh
            name='Cube001'
            geometry={nodes.Cube001.geometry}
            material={materials["Material.079"]}
            position={[3.684, -2.024, 2.488]}
            rotation={[0, 1.275, 0]}
            scale={1.303}
          />
          <mesh
            name='Cube'
            geometry={nodes.Cube.geometry}
            material={materials["Tree 1.001"]}
            position={[1.677, -0.01, 3.846]}
            rotation={[0, 0.05, 0]}
            scale={2.827}
          />
          <mesh
            name='Cone'
            geometry={nodes.Cone.geometry}
            material={nodes.Cone.material}
            position={[0.376, 0, 5.69]}
          />
        </group>
      </group>
    </PresentationControls>
  );
}

useGLTF.preload("/Geb7-transformed.glb");
