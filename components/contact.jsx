"use client"

import ContactForm from "@components/contact/contactForm";
import Image from 'next/image';


import React, {Suspense, useRef} from "react";
import useDimension from "@hook/useDimension";
import {useMotionValueEvent} from "@node_modules/framer-motion";
import eiffel from "@public/assets/icons/eiffel.svg";
import eiffel_tower from "@public/assets/icons/eiffel-tower.svg";
import getintouch01 from "@public/assets/contact/getintouch_01_amber.svg";
import getintouch02 from "@public/assets/contact/getintouch_02_amber.svg";
import getintouch03 from "@public/assets/contact/getintouch_03_amber.svg";
import getintouch04 from "@public/assets/contact/getintouch_04_amber.svg";

import getintouch07 from "@public/assets/contact/getintouch_07_amber.svg";
import getintouch08 from "@public/assets/contact/getintouch_08_amber.svg";
import getintouch09 from "@public/assets/contact/getintouch_09_amber.svg";
import getintouch10 from "@public/assets/contact/getintouch_10_amber.svg";
import getintouch11 from "@public/assets/contact/getintouch_11_amber.svg";
import getintouch12 from "@public/assets/contact/getintouch_12_amber.svg";
import getintouch13 from "@public/assets/contact/getintouch_13_amber.svg";
import getintouch14 from "@public/assets/contact/getintouch_14_amber.svg";
import getintouch15 from "@public/assets/contact/getintouch_15_amber.svg";
import getintouch16 from "@public/assets/contact/getintouch_16_amber.svg";
import getintouch17 from "@public/assets/contact/getintouch_17_amber.svg";
import getintouch18 from "@public/assets/contact/getintouch_18_amber.svg";
import getintouch19 from "@public/assets/contact/getintouch_19_amber.svg";
import getintouch20 from "@public/assets/contact/getintouch_20_amber.svg";
import getintouch21 from "@public/assets/contact/getintouch_21_amber.svg";
import getintouch22 from "@public/assets/contact/getintouch_22_amber.svg";
import getintouch23 from "@public/assets/contact/getintouch_23_amber.svg";
import getintouch24 from "@public/assets/contact/getintouch_24_amber.svg";
import getintouch25 from "@public/assets/contact/getintouch_25_amber.svg";
import getintouch26 from "@public/assets/contact/getintouch_26_amber.svg";
import getintouch27 from "@public/assets/contact/getintouch_27_amber.svg";
import getintouch28 from "@public/assets/contact/getintouch_28_amber.svg";
import getintouch29 from "@public/assets/contact/getintouch_29_amber.svg";

import getintouch30 from "@public/assets/contact/getintouch_30_amber.svg";

import coffee01 from "@public/assets/contact/coffee_01_amber.svg";

import arrows01 from "@public/assets/contact/arrows_01_amber.svg";
import arrows02 from "@public/assets/contact/arrows_02_amber.svg";
import arrows03 from "@public/assets/contact/arrows_03_amber.svg";

import metrodeparis from "@public/assets/icons/metrodeparis.svg";
import france from "@public/assets/icons/france.svg";
import SouthEastIcon from '@mui/icons-material/SouthEast';
import ExpandMoreIcon from "@node_modules/@mui/icons-material/ExpandMore";
import EastIcon from '@mui/icons-material/East';
import Weather from "@components/contact/weather";
import react from "@public/assets/icons/react-icon.svg";

import {motion, useAnimationFrame, useScroll, useSpring, useTransform, useVelocity, useMotionValue} from 'framer-motion';
import { wrap } from "@motionone/utils";
import Circular from "@components/loops/circular";
import Bulle3d from "@components/header/bulle3d";
import {AsciiRenderer, CameraControls, ContactShadows, PresentationControls} from "@node_modules/@react-three/drei";
import {Canvas, useFrame, useLoader, useThree} from "@node_modules/@react-three/fiber";
import LetterO from "@components/header/LetterO";
import Hi from "@components/header/hi";
import {Environment, OrbitControls, PerspectiveCamera, RoundedBox, useTexture} from "@react-three/drei";
import * as THREE from "three";
import './util';

const Contact = () => {

    const { width,height} = useDimension();
    const containerContact = useRef(null);
    const git01 = useRef(null)
    //const git02 = useRef(null)
    const git03 = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerContact,
        offset: ['start end', 'end start']
    });
    const y   = useTransform(scrollYProgress, [0,.5], [-500, 0]);
    const mt  = useTransform(scrollYProgress, [0,.5], [100, 0]);
    const op  = useTransform(scrollYProgress, [0,.5], [.25, 1]);
    const sc  = useTransform(scrollYProgress, [0,.5], [.98, 1]);
    const rty = useTransform(scrollYProgress, [0,.5], [2, 0]);

    const stylesAnim= (width>=1024) ? {
        //scale: sc,
        opacity: op,
        //rotateZ: rty,
        marginTop: mt,
        y:y
    } : null;



    return (
        <>
            {/*<section id="_contact" className="w-0 h-0 invisible" />*/}
            <section
                id="_contact"
                ref={containerContact}
                className="relative z-9 w-full lg:min-h-[100dvh] h-full flex bg-black overflow-hidden">

                <motion.div style={...stylesAnim} className="bg-amber-500 w-full h-full flex overflow-hidden">
                {/*<div className="bg-amber-500 w-full h-full flex overflow-hidden">*/}

                    {(width>=1024) && (
                        <div
                            className="relative w-6/12 lg:w-7/12 h-full p-[var(--main-padding-2xl)] flex flex-col justify-center items-center bg-zinc-950">

                           {/* <Circular
                                clssnm={"absolute top-[-.5%] left-[-.5%] size-[101%] flex justify-center items-center"}
                                baseVelocity={-.45}>
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    src={getintouch30}
                                    alt="Getintouch02"
                                    priority
                                />
                            </Circular>*/}

                            {/*<Circular
                                clssnm={"absolute top-[8.5%] left-[8.5%] size-[83%] flex justify-center items-center"}
                                baseVelocity={-.95}>
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    src={getintouch30}
                                    alt="Getintouch02"
                                    priority
                                />
                            </Circular>*/}

                            <Circular
                                clssnm={"absolute top-[16%] left-[16%] size-[68%] flex justify-center items-center"}
                                baseVelocity={.95}>
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    src={getintouch30}
                                    alt="Getintouch02"
                                    priority
                                />
                            </Circular>

                            <Circular
                                clssnm={"absolute top-[22.5%] left-[22.5%] size-[55%] flex justify-center items-center"}
                                baseVelocity={.45}>
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    src={getintouch30}
                                    alt="Getintouch02"
                                    priority
                                />
                            </Circular>

                            <div
                                className="w-3/5 h-3/5">
                                {/*<div className="w-full h-full">*/}

                                <Suspense>
                                    <Canvas>

                                        <ambientLight intensity={2}/>
                                        {/*<PerspectiveCamera
                                        makeDefault
                                        position={[100, 80, 0]}
                                        fov={60}
                                        zoom={1}
                                    />*/}

                                        {/*<PerspectiveCamera
                                        makeDefault
                                        position={[75, 30, 0]}
                                        fov={90}
                                        zoom={1}
                                    />*/}
                                        {/*<Cyl4 args={[1.25, 1.25, .5, 50, 50, true]}/>*/}
                                        <group rotation-z={-.25}>
                                            {/* <Box args={[1.5, 1.5, 1.5]}/>*/}
                                            {/*<Cyl3 args={[1, 1, .4, 50, 50, false]}/>*/}

                                            <Cyl2 args={[2.25, 2.25, .7, 50, 50, true]}/>
                                            <Cyl1 args={[3, 3, 1, 50, 50, true]}/>
                                            {/*<MyEarth args={[1.5, 50, 50, 1.5]} />*/}
                                        </group>


                                        <OrbitControls
                                            enableZoom={false}
                                            enablePan={false}
                                            enableRotate={true}
                                        />
                                    </Canvas>
                                </Suspense>
                            </div>

                        </div>
                    )
                    }

                    <div
                        className="
                        p-[var(--main-padding-sm)]
                        lg:p-[var(--main-padding-lg)]
                        2xl:p-[var(--main-padding-2xl)]

                        relative w-full lg:w-5/12 h-full flex flex-col justify-center mr-10">
                        <h3 className="uppercase font-grotesk font-extrabold text-[3rem] 3xl:text-[6rem] leading-[.85] pb-10 -ml-[4px]">Say
                            Hello</h3>
                        <ContactForm/>
                    </div>

                    <div className="

                            h-[var(--nav-burger-container-height)]
                            sm:h-[var(--nav-burger-container-height-sm)]
                            2xl:h-[var(--nav-burger-container-height-2xl)]

                            absolute bottom-4 left-4
                            text-[.8rem] font-medium text-zinc-950 lg:text-amber-500 font-hkgrotesk
                            flex items-end
                            ">
                        <ul>
                            <li>© Eric L.A. 2024</li>
                            <li>ela.dev.job@gmail.com</li>
                        </ul>
                    </div>

                </motion.div>

            </section>
        </>
    );
};

const Box = (props) => {
    const boxRef = useRef();
    const repeatX = 0.25;
    const repeatY = 0.25;

    const base = useLoader(THREE.TextureLoader, "assets/texture/base.jpg");
    base.wrapS = THREE.RepeatWrapping;
    base.wrapT = THREE.RepeatWrapping;
    base.repeat.set(repeatX, repeatY);

    const bump = useLoader(THREE.TextureLoader, "assets/texture/height.png");
    bump.wrapS = THREE.RepeatWrapping;
    bump.wrapT = THREE.RepeatWrapping;
    bump.repeat.set(repeatX, repeatY);

    const ao = useLoader(THREE.TextureLoader, "assets/texture/ao.jpg");
    ao.wrapS = THREE.RepeatWrapping;
    ao.wrapT = THREE.RepeatWrapping;
    ao.repeat.set(repeatX, repeatY);

    const normal = useLoader(THREE.TextureLoader, "assets/texture/normal.jpg");
    normal.wrapS = THREE.RepeatWrapping;
    normal.wrapT = THREE.RepeatWrapping;
    normal.repeat.set(repeatX, repeatY);

    const rough = useLoader(THREE.TextureLoader, "assets/texture/roughness.jpg");
    rough.wrapS = THREE.RepeatWrapping;
    rough.wrapT = THREE.RepeatWrapping;
    rough.repeat.set(repeatX, repeatY);

    const Material1 = useLoader(THREE.TextureLoader, "assets/texture/work_.png");
    const Material2 = useLoader(THREE.TextureLoader, "assets/texture/work_.png");
    const Material3 = useLoader(THREE.TextureLoader, "assets/texture/work_.png");
    const Material4 = useLoader(THREE.TextureLoader, "assets/texture/work_.png");
    const Material5 = useLoader(THREE.TextureLoader, "assets/texture/work_.png");
    const Material6 = useLoader(THREE.TextureLoader, "assets/texture/work_.png");

    Material1.wrapS = Material1.wrapT = THREE.RepeatWrapping;
    Material2.wrapS = Material2.wrapT = THREE.RepeatWrapping;
    Material3.wrapS = Material3.wrapT = THREE.RepeatWrapping;
    Material4.wrapS = Material4.wrapT = THREE.RepeatWrapping;
    Material5.wrapS = Material5.wrapT = THREE.RepeatWrapping;
    Material6.wrapS = Material6.wrapT = THREE.RepeatWrapping;

    const viewport = useThree((state) => state.viewport)
    useFrame((state, delta) => (boxRef.current.rotation.y -= delta))

    return (
        <mesh rotation-y={Math.PI * 0.25} ref={boxRef}>
            <RoundedBox
                castShadow
                receiveShadow
                radius={0.35}
                smoothness={15} {...props} />
            <meshPhysicalMaterial
                map={base}
                bumpMap={bump}
                aoMap={ao}
                normalMap={normal}
                roughnessMap={rough}
            />
        </mesh>
    );
};

function Cyl1(props) {
    const ref1 = useRef();

    const matRef = useRef();
    const repeatX = 7;
    const repeatY = 2;

    const texture = useLoader(THREE.TextureLoader, "assets/texture/getintouch_texture_02.svg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    /*texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeatX, repeatY);*/


    //const dayTexture = useTexture('assets/texture/getintouch_texture_01.png');
    const viewport = useThree((state) => state.viewport)
    //useFrame((state, delta) => (ref1.current.rotation.x = ref1.current.rotation.y += delta / 2))
    useFrame((state, delta) => (ref1.current.rotation.y -= delta / 2))
    //useFrame((state, delta) => (ref1.current.rotation.z -= Math.sin(delta)))
    //useFrame((state, delta) => (ref1.current.rotation.z -= delta / 2))
    return (
        <mesh position={[0, 0, 0]} rotation-y={-.1} rotation-x={.60}
              scale={Math.min(viewport.width, viewport.height) / 10} ref={ref1}>
            <cylinderGeometry {...props} />
            <meshStandardMaterial
                map={texture}
                transparent={true}
                side={THREE.DoubleSide}
                depthTest={false}
                toneMapped={true}
                map-repeat={[4, 1]}
            />
        </mesh>
    )
}

function Cyl2(props) {
    const ref2 = useRef();


    const texture = useLoader(THREE.TextureLoader, "assets/texture/getintouch_texture_02.svg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    //const dayTexture = useTexture('assets/texture/getintouch_texture_01.png');
    const viewport = useThree((state) => state.viewport)
    //useFrame((state, delta) => (ref.current.rotation.x = ref2.current.rotation.y += delta / 2))
    useFrame((state, delta) => (ref2.current.rotation.y -= delta / 3))
    //useFrame((state, delta) => (ref2.current.rotation.z -= delta / 2))
    return (
        <mesh position={[0, -0.1, 0]} rotation-x={-.2} rotation-y={.4} scale={Math.min(viewport.width, viewport.height) / 10} ref={ref2}>
            <cylinderGeometry {...props} />
            <meshStandardMaterial
                map={texture}
                transparent={true}
                side={THREE.DoubleSide}
                depthTest={false}
                toneMapped={true}
                map-repeat={[3, 1]}
            />
        </mesh>
    )
}

function Cyl4(props) {
    const ref2 = useRef();


    const texture = useLoader(THREE.TextureLoader, "assets/texture/getintouch_texture_02.svg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    //const dayTexture = useTexture('assets/texture/getintouch_texture_01.png');
    const viewport = useThree((state) => state.viewport)
    //useFrame((state, delta) => (ref.current.rotation.x = ref2.current.rotation.y += delta / 2))
    useFrame((state, delta) => (ref2.current.rotation.y -= delta / 3))
    //useFrame((state, delta) => (ref2.current.rotation.z -= delta / 2))
    return (
        <mesh position={[0, 0, 0]} rotation-x={.2} rotation-y={.1} scale={Math.min(viewport.width, viewport.height) / 10} ref={ref2}>
            <cylinderGeometry {...props} />
            <meshStandardMaterial
                map={texture}
                transparent={true}
                side={THREE.DoubleSide}
                depthTest={false}
                toneMapped={true}
                map-repeat={[3, 1]}
            />
        </mesh>
    )
}

function Cyl3(props) {

    const ref3 = useRef();

    const sideMaterial = useLoader(THREE.TextureLoader, "assets/texture/getintouch_texture_02.svg");
    const topMaterial = useLoader(THREE.TextureLoader, "assets/contact/mail_bkg.svg");
    const bottomMaterial = useLoader(THREE.TextureLoader, "assets/contact/mail_bkg.svg");


    sideMaterial.wrapS = sideMaterial.wrapT = THREE.RepeatWrapping;
    topMaterial.wrapS = topMaterial.wrapT = THREE.RepeatWrapping;
    /*texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeatX, repeatY);*/


    //const dayTexture = useTexture('assets/texture/getintouch_texture_01.png');
    const viewport = useThree((state) => state.viewport)
    useFrame((state, delta) => (ref3.current.rotation.x -= delta/3))
    useFrame((state, delta) => (ref3.current.rotation.y -= delta/3))
    useFrame((state, delta) => (ref3.current.rotation.z -= delta/3))

    return (
        <mesh scale={Math.min(viewport.width, viewport.height) / 10}
              ref={ref3}>
            <cylinderGeometry {...props} />
            <meshStandardMaterial
                attach="material-0"
                map={sideMaterial}
                depthTest={true}
                map-repeat={[2, 1]}
            />
            <meshStandardMaterial
                attach="material-1"
                side={THREE.DoubleSide}
                map={topMaterial}
            />
            <meshStandardMaterial
                attach="material-2"
                side={THREE.DoubleSide}
                map={bottomMaterial}
            />
        </mesh>
    )
}

export default Contact;