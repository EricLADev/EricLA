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
import {Experience} from "@components/header/experience";

const Header = () => {

    return (
        <section id="_header" className="_section w-full min-h-[100dvh] h-full relative flex">
            <Canvas shadows camera={{position: [0, 0, 15], fov: 30}}>
                <color attach="background" args={['black']}/>
                <Experience/>
                <spotLight position={[10, 10, 10]} angle={0.35} penumbra={1} decay={0} intensity={Math.PI}/>
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>
                <AsciiRenderer characters=" ...-+¤=<>10[]#" resolution="0.11" fgColor="#27272a" bgColor="#f4f4f5"/>
            </Canvas>
            <Infos/>
        </section>
    );

};

export default Header;