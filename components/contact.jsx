"use client"

import getintouch from "@public/assets/contact/circular_getintouch_stone400.svg";
import circular_contactme from "@public/assets/contact/circular_contactme_stone400.svg";
import arrows01 from "@public/assets/contact/circular_arrows1_stone300.svg";
import vertical from "@public/assets/contact/vertical_01_sky.svg";
import tech from "@public/assets/contact/circular_tech_stone300.svg";

import {Tooltip} from "@mui/material";
import {styled, tooltipClasses} from "@node_modules/@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

import ContactForm from "@components/contact/contactForm";
import Image from 'next/image';
import {Suspense, useRef} from "react";
import useDimension from "@hook/useDimension";
import {motion, useScroll, useTransform} from 'framer-motion';
import Circular from "@components/loops/circular";
import {Canvas, useFrame, useLoader, useThree} from "@node_modules/@react-three/fiber";
import {OrbitControls,RoundedBox} from "@react-three/drei";
import * as THREE from "three";

const Contact = () => {

    const { width} = useDimension();
    const containerContact = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerContact,
        offset: ['start end', 'end start']
    });
    const y   = useTransform(scrollYProgress, [0,.5], [-500, 0]);
    const mt  = useTransform(scrollYProgress, [0,.5], [100, 0]);
    const op  = useTransform(scrollYProgress, [0,.5], [.25, 1]);
    //const sc  = useTransform(scrollYProgress, [0,.5], [.98, 1]);
    //const rty = useTransform(scrollYProgress, [0,.5], [2, 0]);

    const stylesAnim= (width>=1024) ? {
        //scale: sc,
        opacity: op,
        //rotateZ: rty,
        marginTop: mt,
        y:y
    } : null;

    const tooltipVariant = {
        initial: {
            opacity: 1,
        },
        hovered: {
            opacity: .5,
            transition: {
                //type: "spring",
                //bounce: 0,
                //ease: [0,.65,.25,.95],
                duration: .25}
        },
    };

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} slotProps={{
            popper: {
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 14],
                        },
                    },
                ],
            },
        }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: 'transparent',
            border: '0 none',
            fontSize: '13px',
            fontWeight: '400',
            marginTop: '50px'
        },
    }));



    return (
        <>
            {/*<section id="_contact" className="w-0 h-0 invisible" />*/}
            <section
                id="_contact"
                ref={containerContact}
                className="relative z-9 w-full lg:min-h-[100vh] h-full flex bg-black overflow-hidden">

                <motion.div style={...stylesAnim} className="w-full h-full overflow-hidden">
                {/*<div className="bg-amber-500 w-full h-full flex overflow-hidden">*/}
                    <div className="bg-stone-400 w-full h-full flex overflow-hidden">

                    {(width>=1024) && (
                        <div
                            className="relative w-6/12 lg:w-7/12 h-full p-[var(--main-padding-2xl)] hidden lg:flex lg:flex-col justify-center items-center bg-stone-900">

                            <div className="staticnoise absolute top-0 left-0 w-full h-full z-0 opacity-5"></div>

                            {/*<Circular
                                clssnm={"opacity-5 absolute top-[-12.5%] left-[-12.5%] size-[125%] flex justify-center items-center"}
                                baseVelocity={-.55}>
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    src={vertical}
                                    alt="vertical"
                                    priority
                                />
                            </Circular>*/}

                            {/*<Circular
                                clssnm={"opacity-10 absolute top-[1.5%] left-[1.5%] size-[97%] flex justify-center items-center"}
                                baseVelocity={-.45}>
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    src={vertical}
                                    alt="vertical"
                                    priority
                                />
                            </Circular>*/}

                            <Circular
                                clssnm={"opacity-30 absolute top-[8.5%] left-[8.5%] size-[83%] flex justify-center items-center"}
                                baseVelocity={-.95}>
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    src={arrows01}
                                    alt="Vertical"
                                    priority
                                />
                            </Circular>

                            {/*<Circular
                                clssnm={"opacity-40 absolute top-[8.5%] left-[8.5%] size-[83%] flex justify-center items-center"}
                                baseVelocity={-.95}>
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    src={arrows01}
                                    alt="Contact"
                                    priority
                                />
                            </Circular>*/}

                            <Circular
                                clssnm={"absolute top-[16%] left-[16%] size-[68%] flex justify-center items-center"}
                                baseVelocity={.95}>
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    src={getintouch}
                                    alt="Get In Touch"
                                    priority
                                />
                            </Circular>

                            <Circular
                                clssnm={"absolute top-[22.5%] left-[22.5%] size-[55%] flex justify-center items-center"}
                                baseVelocity={.45}>
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    src={circular_contactme}
                                    alt="Contact me"
                                    priority
                                />
                            </Circular>

                            <Circular
                                clssnm={"opacity-70 absolute top-[26%] left-[26%] size-[48%] flex justify-center items-center"}
                                baseVelocity={-.35}>
                                <Image
                                    style={{width: '100%', height: '100%'}}
                                    src={tech}
                                    alt="Tech"
                                    priority
                                />
                            </Circular>

                            <HtmlTooltip
                                title={
                                    <span
                                        className="bg-zinc-100 bg-opacity-80 text-zinc-950 pl-[12px] pr-[16px] py-[8px] rounded-[7px] flex justify-center items-center">
                                        <motion.span
                                            animate={{opacity: 1}}
                                            transition={{repeat: Infinity, duration: .2}}
                                            className="opacity-0 text-[1rem] flex items-center">
                                            <span className="flex">
                                                <span className="copy">
                                                    <ContentCopyIcon sx={{fontSize: '14px'}}/>
                                                </span>
                                                <span className="copied">
                                                    <DoneIcon sx={{fontSize: '15px'}}/>
                                                </span>
                                                <span className="block w-[1px]"></span>
                                            </span>_
                                        </motion.span>
                                        Click to copy: ela.dev.job@gmail.com
                                        {/*<span className="clipboard-copied hidden text-green-700 font-bold"> ---- copied!</span>*/}
                                    </span>
                                } followCursor
                            >
                                <motion.div
                                    onClick={function() { navigator.clipboard.writeText("ela.dev.job@gmail.com"); document.getElementsByClassName('MuiTooltip-popper')[0].classList.add('clicked'); }}
                                    className="w-3/5 h-3/5 cursor-copy"
                                    initial={"initial"}
                                    whileHover={"hovered"}
                                    variants={tooltipVariant}
                                >
                                    <Suspense>
                                        <Canvas>
                                            {/*<ambientLight intensity={2.5}/>*/}
                                            <ambientLight intensity={.5}/>
                                            <directionalLight intensity={1.5} position={[10, 10, 10]}/>
                                            <group rotation-x={0.15} rotation-z={-.15}>
                                                {/*<Cyl3 args={[1, 1, .4, 50, 50, false]}/>*/}
                                                {/*<Cyl5 args={[2.4, 2.4, 3.5, 50, 50, true]}/>*/}
                                                <Cyl2 args={[2.6, 2.6, .95, 60, 60, true]}/>
                                            </group>
                                            {/*<group rotation-x={0.6} rotation-z={-.1}>
                                                <Cyl1 args={[3.15, 3.2, .5, 50, 50, true]}/>
                                            </group>*/}
                                            {/*<OrbitControls
                                                enableZoom={false}
                                                enablePan={false}
                                                enableRotate={true}
                                            />*/}
                                        </Canvas>
                                    </Suspense>
                                </motion.div>
                            </HtmlTooltip>

                        </div>
                    )
                    }

                        <div
                            className="
                        p-[var(--main-padding-sm)]
                        lg:p-[var(--main-padding-lg)]
                        2xl:p-[var(--main-padding-2xl)]

                        relative w-full lg:w-5/12 h-full flex flex-col justify-center mr-10">
                            <div className="staticnoise absolute top-0 left-0 w-[125%] h-full z-0 opacity-5"></div>
                            <h3 className="uppercase font-extrabold text-[3rem] 3xl:text-[6rem] leading-[.85] pb-10 -ml-[4px]">Say
                                Hello</h3>
                            <ContactForm/>
                        </div>

                        <div className="
                            flex lg:hidden

                            h-[var(--nav-burger-container-height)]
                            sm:h-[var(--nav-burger-container-height-sm)]
                            2xl:h-[var(--nav-burger-container-height-2xl)]

                            absolute bottom-4 left-4
                            text-[.8rem] font-medium text-zinc-950 lg:text-amber-500
                            items-end
                            ">
                        <ul>
                            <li>© Eric L.A. 2024</li>
                            <li>ela.dev.job@gmail.com</li>
                        </ul>
                    </div>

                    </div>

                </motion.div>

            </section>
        </>
    );
};

function Cyl1(props) {
    const ref1 = useRef();

    const texture = useLoader(THREE.TextureLoader, "assets/contact/text_tech_02.svg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    const viewport = useThree((state) => state.viewport)
    useFrame((state, delta) => (ref1.current.rotation.y -= delta / 5))
    return (
        <mesh position={[0, 0, 0]}
              scale={Math.min(viewport.width, viewport.height) / 10} ref={ref1}>
            <cylinderGeometry {...props} />
            <meshStandardMaterial
                map={texture}
                transparent={true}
                side={THREE.DoubleSide}
                depthTest={false}
                toneMapped={true}
                map-repeat={[2, 1]}
            />
        </mesh>
    )
}


function Cyl2(props) {

    const ref2 = useRef();
    const texture = useLoader(THREE.TextureLoader, "assets/contact/text_me_stone300.svg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    const viewport = useThree((state) => state.viewport)
    //useFrame((state, delta) => (ref.current.rotation.x = ref2.current.rotation.y += delta / 2))
    useFrame((state, delta) => (ref2.current.rotation.y -= delta / 5))
    //useFrame((state, delta) => (ref2.current.rotation.z -= delta / 2))
    return (
            <mesh
                position={[0, 0, 0]}
                scale={Math.min(viewport.width, viewport.height) / 10} ref={ref2}>
                <cylinderGeometry {...props} />
                <meshStandardMaterial
                    map={texture}
                    transparent={true}
                    side={THREE.DoubleSide}
                    depthTest={false}
                    toneMapped={true}
                    map-repeat={[1, 1]}
                />
            </mesh>
    )
}

function Cyl3(props) {

    const ref3 = useRef();

    const sideMaterial = useLoader(THREE.TextureLoader, "assets/contact/getintouch_texture_02.svg");
    const topMaterial = useLoader(THREE.TextureLoader, "assets/contact/mail_bkg.svg");
    const bottomMaterial = useLoader(THREE.TextureLoader, "assets/contact/mail_bkg.svg");

    sideMaterial.wrapS = sideMaterial.wrapT = THREE.RepeatWrapping;
    topMaterial.wrapS = topMaterial.wrapT = THREE.RepeatWrapping;
    /*texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeatX, repeatY);*/

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

function Cyl4(props) {
    const ref2 = useRef();

    const texture = useLoader(THREE.TextureLoader, "assets/contact/getintouch_texture_02.svg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

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

function Cyl5(props) {
    const ref2 = useRef();
    const texture = useLoader(THREE.TextureLoader, "assets/contact/contactme_02.svg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    const viewport = useThree((state) => state.viewport)
    //useFrame((state, delta) => (ref.current.rotation.x = ref2.current.rotation.y += delta / 2))
    useFrame((state, delta) => (ref2.current.rotation.y -= delta / 10))
    //useFrame((state, delta) => (ref2.current.rotation.z -= delta / 2))
    return (
        <mesh position={[0, 0, 0]} scale={Math.min(viewport.width, viewport.height) / 10} ref={ref2}>
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

export default Contact;