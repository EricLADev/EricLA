"use client";

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
    AsciiRenderer,
    Backdrop,
    Center,
    ContactShadows, Decal,
    OrbitControls, PerspectiveCamera,
    PresentationControls,
    Text3D, useTexture
} from '@react-three/drei'
import LetterO from "@components/header/LetterO";
import Infos from "@components/header/infos";
import Bulle3d from "@components/header/bulle3d";
import jsonFont from "@public/assets/fonts/Inter_Bold.json";
import {OrthographicCamera, useGLTF} from "@node_modules/@react-three/drei";

const Header = () => {

    return (
        <section id="_header" className="_section w-full h-full relative flex">
            {/*<div className="absolute w-[20px] h-[20px] top-[50%] left-[50%] mx-[-10px] my-[-10px] bg-green-600 z-50"></div>*/}
            {/*<Canvas orthographic camera={{position: [0, 0, 100], zoom: 100}} className="canvas">*/}
            <Canvas className="canvas">

                {/*<ambientLight intensity={0.5}/>
                <directionalLight position={[10, 10, 10]}/>*/}
                {/*<color attach="background" args={['black']}/>*/}
                <OrthographicCamera position={[0, 0, 0]}>

                    <spotLight position={[10, 10, 10]} angle={0.35} penumbra={1} decay={0} intensity={Math.PI}/>
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>

                    <Center position={[-0.45, 0, 0]} rotation={[0, 0, 0]}>
                        {/*<Bulle/>*/}
                        {/*<Hi/>*/}
                    </Center>

                    {/*<axesHelper scale={2} position={[0, 0, 0]} onUpdate={(self) => self.setColors('#ff2080', '#20ff80', '#2080ff')}/>*/}
                    {/*<OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2}
                                   maxPolarAngle={Math.PI / 2}/>*/}
                </OrthographicCamera>
                {/*<AsciiRenderer characters=" ...-+¤=<>10[]#" resolution="0.14" fgColor="#27272a" bgColor="#f4f4f5"/>*/}
            </Canvas>
            <Infos/>
        </section>
    );

};


function Bulle(props) {

    const ref = useRef()
    const { nodes, materials } = useGLTF('/assets/glb/bulle06.glb')
    const viewport = useThree((state) => state.viewport)
    useFrame((state, delta) => (ref.current.rotation.z += delta / 5))

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                material={nodes.Text.material}
                rotation={[Math.PI / 2, 0, 0]}

                ref={ref}
                position={[0, 2.1, 0]}
                /*scale={Math.min(viewport.width, viewport.height) / 5}*/
                scale={viewport.height / 2.5}
            >
                <meshStandardMaterial color="#cbd5e1" />
            </mesh>
        </group>
    )
}

function Hi(props) {

    const ref = useRef()
    const { nodes, materials } = useGLTF('/assets/glb/hi.glb')
    const viewport = useThree((state) => state.viewport)
    useFrame((state, delta) => (ref.current.rotation.z -= delta / 5))

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                material={nodes.Text.material}
                rotation={[Math.PI / 2, 0, 0]}

                ref={ref}
                position={[0, 4.1, 0]}
                /*scale={Math.min(viewport.width, viewport.height) / 5}*/
                scale={viewport.height / 5}
            >
                <meshStandardMaterial color="#cbd5e1" />
            </mesh>
        </group>
    )
}


export default Header;

useGLTF.preload('/assets/glb/bulle06.glb');
useGLTF.preload('/assets/glb/hi.glb');