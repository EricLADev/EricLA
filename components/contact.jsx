"use client"

import ContactForm from "@components/contact/contactForm";
import Image from 'next/image';


import React, { useRef } from "react";
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
import {AsciiRenderer, ContactShadows, PresentationControls} from "@node_modules/@react-three/drei";
import {Canvas, useFrame, useThree} from "@node_modules/@react-three/fiber";
import LetterO from "@components/header/LetterO";
import Hi from "@components/header/hi";


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

                <motion.div style={...stylesAnim} className="bg-amber-500 w-full h-full flex ">

                    <div
                        className="relative w-full h-full p-[var(--main-padding-2xl)] flex flex-col justify-center bg-zinc-950">

                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3">

                           {/* <Canvas className="canvas">
                                <spotLight position={[10, 10, 10]} angle={0.35} penumbra={1} decay={0} intensity={Math.PI}/>
                                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>
                                <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000" />
                                <PresentationControls
                                    global
                                    config={{ mass: 2, tension: 500 }}
                                    snap={{ mass: 4, tension: 1500 }}
                                    rotation={[0, 0.3, 0]}
                                    polar={[-Math.PI / 3, Math.PI / 3]}
                                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                                    <Earth />
                                </PresentationControls>
                            </Canvas>*/}
                        </div>

                        <Circular clssnm={"absolute top-[8.5%] left-[8.5%] size-[83%] flex justify-center items-center"}
                                  baseVelocity={-.95}>
                            <Image
                                style={{width: '100%', height: '100%'}}
                                src={getintouch30}
                                alt="Getintouch02"
                                priority
                            />
                        </Circular>

                        <Circular clssnm={"absolute top-[16%] left-[16%] size-[68%] flex justify-center items-center"}
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

                    </div>

                    <div className="w-full h-full p-[var(--main-padding-2xl)] flex flex-col justify-center">
                        <ContactForm/>
                    </div>

                </motion.div>

            </section>
        </>
    );
};

function Earth(props) {
    const ref = useRef()
    const viewport = useThree((state) => state.viewport)
    useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
    return (
        <mesh scale={Math.min(viewport.width, viewport.height) / 5} {...props} ref={ref}>
            <sphereGeometry args={[1, 50, 50, 20]} />
            <meshStandardMaterial color="red" />
        </mesh>
    )
}

export default Contact;