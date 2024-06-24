"use client"

import Sound from "@components/sounds/sound";
import Sound01 from "@components/sounds/sound01";
import Sound02 from "@components/sounds/sound02";
import Sound03 from "@components/sounds/sound03";
import Sound04 from "@components/sounds/sound04";
import Sound05 from "@components/sounds/sound05";
import {OrbitControls, Stats} from "@node_modules/@react-three/drei";
import {Canvas, useFrame, useLoader, useThree} from "@node_modules/@react-three/fiber";
import React, {Suspense, useEffect, useRef, useState} from "react";
import * as THREE from "three";
import {Box} from "@react-three/drei";
import {useControls} from "@node_modules/leva";

const Comminsoon = () => {

    return (
        <section id="_sounds" className="w-full min-h-[100dvh] h-full relative flex justify-center items-center bg-emerald-200">

            {/*<Canvas camera={{ fov: 20, position: [4, 4, 1.5] }} style={{width: 1500, height: 1000}} shadows>*/}
            <Canvas className="w-full h-full" camera={{fov: 20, position: [1, 0, 0]}} shadows>

                <ambientLight intensity={.5}/>

                {/*<spotLight position={[2, 2, 2]} angle={.15} penumbra={.2} decay={0.3} intensity={Math.PI}/>*/}
                <pointLight position={[10, 10, 10]} decay={0.5} intensity={Math.PI}/>
                <Cyl2 position={[0, .1412, 0]} rotation={[-Math.PI / 2, 0, 0]}/>
                <Cyl1 position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}/>
                <Cyl3 position={[0, -.1412, 0]} rotation={[-Math.PI / 2, 0, 0]}/>
                {/*<Cyl2 position={[0, .141, 0]} rotation={[-Math.PI / 2, 0, 0]} />*/}
                <OrbitControls/>
                <Stats/>
            </Canvas>

        </section>
    );
};


function Cyl1(props) {
    const ref1 = useRef();

    const texture = useLoader(THREE.TextureLoader, "assets/sound/is_under.svg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.rotation = Math.PI / 2;
    texture.center = new THREE.Vector2(0.5, 0.5); // center of texture.



    //const dayTexture = useTexture('assets/texture/getintouch_texture_01.png');
    const viewport = useThree((state) => state.viewport)
    //useFrame((state, delta) => (ref1.current.rotation.x = ref1.current.rotation.y += delta / 2))
    useFrame((state, delta) => (ref1.current.rotation.y -= delta / 2))
    //useFrame((state, delta) => (ref1.current.rotation.z -= Math.sin(delta)))
    //useFrame((state, delta) => (ref1.current.rotation.z -= delta / 2))

    return (
        <mesh {...props}
              scale={Math.min(viewport.height) / 15} ref={ref1} >
            <cylinderGeometry  args={[3, 3, 30, 50, 50, false]} />
            <meshStandardMaterial
                map={texture}
                //transparent={true}
                side={THREE.DoubleSide}
                //depthTest={false}
                toneMapped={true}
                //map-repeat={[1, 1]}
            />
        </mesh>
    )
}

function Cyl2(props) {
    const ref1 = useRef();

    const texture = useLoader(THREE.TextureLoader, "assets/sound/sound_section.svg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.rotation = Math.PI / 2;
    texture.center = new THREE.Vector2(0.5, 0.5); // center of texture.


    //const dayTexture = useTexture('assets/texture/getintouch_texture_01.png');
    const viewport = useThree((state) => state.viewport)
    //useFrame((state, delta) => (ref1.current.rotation.x = ref1.current.rotation.y += delta / 2))
    useFrame((state, delta) => (ref1.current.rotation.y += delta / 2))
    //useFrame((state, delta) => (ref1.current.rotation.z -= Math.sin(delta)))
    //useFrame((state, delta) => (ref1.current.rotation.z -= delta / 2))
    return (
        <mesh {...props}
              scale={Math.min(viewport.height) / 15} ref={ref1} >
            <cylinderGeometry  args={[3, 3, 50, 50, 50, false]} />
            <meshStandardMaterial
                map={texture}
                //transparent={true}
                side={THREE.DoubleSide}
                //depthTest={false}
                toneMapped={true}
                map-repeat={[4, 10]}
            />
        </mesh>
    )
}

function Cyl3(props) {
    const ref1 = useRef();

    const texture = useLoader(THREE.TextureLoader, "assets/sound/construction.svg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.rotation = Math.PI / 2;
    texture.center = new THREE.Vector2(0.5, 0.5); // center of texture.


    //const dayTexture = useTexture('assets/texture/getintouch_texture_01.png');
    const viewport = useThree((state) => state.viewport)
    //useFrame((state, delta) => (ref1.current.rotation.x = ref1.current.rotation.y += delta / 2))
    useFrame((state, delta) => (ref1.current.rotation.y += delta / 2))
    //useFrame((state, delta) => (ref1.current.rotation.z -= Math.sin(delta)))
    //useFrame((state, delta) => (ref1.current.rotation.z -= delta / 2))
    return (
        <mesh {...props}
              scale={Math.min(viewport.height) / 15} ref={ref1} >
            <cylinderGeometry  args={[3, 3, 50, 50, 50, false]} />
            <meshStandardMaterial
                map={texture}
                //transparent={true}
                side={THREE.DoubleSide}
                //depthTest={false}
                toneMapped={true}
                map-repeat={[4, 10]}
            />
        </mesh>
    )
}

export default Comminsoon;