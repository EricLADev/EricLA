"use client";

import React, { useRef } from 'react'
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
import Weather from "@components/contact/weather";
import Sound05 from "@components/sounds/sound05";
import Image from "@node_modules/next/image";
import dashicons_smiley from "@public/assets/icons/dashicons--smiley.svg";
import circular_helloworld from "@public/assets/icons/circular_helloworld3.svg";
import france from "@public/assets/icons/france.svg";
import eiffel_tower from "@public/assets/icons/eiffel-tower.svg";
import peace from "@public/assets/icons/ph--hand-peace-duotone.svg";
import html from "@public/assets/icons/html6.svg";
import hi from "@public/assets/icons/hi06.svg";
import tr808 from "@public/assets/icons/tr808.png";
import wheel from "@public/assets/icons/wheel.png";
import cursor from "@public/assets/icons/cursor.svg";
import and from "@public/assets/icons/and.svg";
import arrow_brush from "@public/assets/icons/arrow_brush.svg";
import welcome from "@public/assets/icons/welcome_c03.svg";
import me01 from "@public/assets/header/me01.png";
import {motion} from "@node_modules/framer-motion";

const Header = () => {

    return (
        <section id="_header" className="_section w-full min-h-[100dvh] h-full flex relative font-hkgrotesk font-[700] capitalize">

            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
                <span className="capitalize text-zinc-950 text-[10rem] mr-5">I'm</span>
                <span
                    className="capitalize ml-5 bg-zinc-900 text-[10rem] text-zinc-100 rotate-[5deg] px-11 py-2">Éric</span>

                <div
                    className="absolute -top-34 left-10 size-32 -rotate-[5deg] rounded-full overflow-hidden">
                    <Image
                        fill
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={and}
                        alt="And"
                        priority
                    />
                </div>

                <div
                    className="absolute -top-40 -left-32 size-52 bg-amber-500 border-8 border-amber-500 -rotate-12 rounded-full overflow-hidden">
                    <Image
                        fill
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={hi}
                        alt="Hi!"
                        priority
                    />
                </div>

                <div
                    className="absolute -top-40 -right-16 size-72 rotate-[10deg] overflow-hidden">
                    <Image
                        fill
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={welcome}
                        alt="Welcome"
                        priority
                    />
                </div>

                <div className="absolute -bottom-48 -left-56 size-64 rounded-full overflow-hidden">
                    <Image
                        fill
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={arrow_brush}
                        alt="Arrow Brush"
                        priority
                    />
                </div>

                <div
                    className="absolute -bottom-28 left-[50%] -translate-x-[50%] rotate-[5deg] flex items-center border-[7px] border-zinc-50 bg-[#c2d03b] p-5 rounded-l-full">
                    <div className="relative size-20 rounded-full bg-[#c93744] overflow-hidden mr-5">
                        <Image
                            fill
                            style={{objectFit: "cover"}}
                            //style={{width: '100%', height: 'auto'}}
                            src={html}
                            alt="html"
                            priority
                        />
                    </div>
                    <div className="uppercase text-zinc-950 text-[3.5rem] leading-[3rem] font-medium text-left">
                        Frontend<br/>Developer
                    </div>
                </div>

                <div className="absolute -bottom-24 -right-10 size-40 -rotate-12 rounded-full overflow-hidden">
                    <Image
                        fill
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={cursor}
                        alt="Cursor"
                        priority
                    />
                </div>

            </div>

            <div
                className="w-5/6 h-5/6 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] grid grid-cols-7 gap-2 text-zinc-100">
                <div className="bg-transparent relative"><Weather/></div>
                <div className="bg-transparent">2</div>
                <div className="bg-transparent">3</div>
                <div className="bg-transparent">4</div>
                <div className="bg-transparent">5</div>
                <div className="bg-transparent">6</div>
                <div className="bg-transparent">7</div>
                <div className="bg-transparent">8</div>
                <div className="bg-transparent relative">
                    9
                </div>
                <div className="bg-transparent relative">
                    10
                </div>
                <div className="bg-transparent relative">
                    11
                </div>
                <div className="bg-transparent relative">
                    12
                </div>
                <div className="bg-transparent relative">
                    <div
                        className="absolute top-0 left-0 size-44 rounded-full bg-amber-400 border-8 border-amber-400 rotate-12 overflow-hidden z-[4] flex justify-center items-center">
                        <Image
                            /*fill
                            style={{objectFit: "cover"}}*/
                            style={{width: '55%', height: '55%'}}
                            src={dashicons_smiley}
                            alt="dashicons_smiley"
                            priority
                        />
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full"
                            animate={{rotate: 360}}
                            transition={{ease: "linear", duration: 40, repeat: Infinity}}
                        >
                            <Image
                                fill
                                style={{objectFit: "cover"}}
                                //style={{width: '100%', height: 'auto'}}
                                src={circular_helloworld}
                                alt="circular_helloworld"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="bg-transparent">14</div>
                <div className="bg-transparent">15</div>
                <div className="bg-transparent relative">16</div>
                <div className="bg-transparent relative">
                    17
                </div>
                <div className="bg-transparent">18</div>
                <div className="bg-transparent relative">
                    19
                </div>
                <div className="bg-transparent relative">
                    {/*<div
                        className="absolute top-0 -right-20 size-52 rounded-full bg-zinc-300 rotate-12 overflow-hidden flex justify-center items-center">
                        <Image
                            style={{width: '85%', height: 'auto'}}
                            src={wheel}
                            alt="wheel"
                            priority
                        />
                    </div>*/}
                </div>
                <div className="bg-transparent relative">
                    {/*<div
                        className="absolute top-0 -right-20 size-52 rounded-full bg-zinc-900 rotate-12 overflow-hidden flex justify-center items-center">
                        <Image
                            style={{width: '70%', height: 'auto'}}
                            src={tr808}
                            alt="tr808"
                            priority
                        />
                    </div>*/}
                </div>
                <div className="bg-transparent">22</div>
                <div className="bg-transparent">23</div>
            </div>

            {/*<div className="absolute w-5/6 h-5/6 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">

                <div className="absolute top-[7rem] left-[7rem]">
                    <Weather/>
                </div>

                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex">

                    <span
                        className="bg-amber-400 text-zinc-100 -rotate-[10deg] text-[10rem] px-16 py-2 opacity-90 rounded-tl-[5rem]">I'm</span>
                    <span
                        className="bg-zinc-900 text-zinc-100 rotate-[5deg] text-[10rem] px-16 py-2 opacity-95 rounded-br-[5rem]">Eric</span>

                    <div className="absolute -top-[7rem] -left-[22rem] size-[30rem] rounded-full -rotate-[18deg]">
                        <Image
                            fill
                            style={{objectFit: "contain"}}
                            //style={{width: '100%', height: 'auto'}}
                            src={peace}
                            alt="peace"
                            priority
                        />
                    </div>

                </div>

                <div
                    className="absolute bottom-0 left-0 size-80 rounded-full bg-zinc-900 -rotate-[30deg] overflow-hidden">
                    <Image
                        fill
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={me01}
                        alt="me01"
                        priority
                    />
                </div>

                <div
                    className="absolute bottom-0 left-52 size-40 rounded-full bg-amber-400 border-[2rem] border-amber-400 box-content rotate-12 overflow-hidden">
                    <Image
                        fill
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={dashicons_smiley}
                        alt="dashicons_smiley"
                        priority
                    />
                </div>

                <div
                    className="absolute bottom-[20rem] right-0 size-80 rounded-full rotate-[30deg] overflow-hidden">
                    <Image
                        fill
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={france}
                        alt="france"
                        priority
                    />
                </div>

                <div
                    className="absolute bottom-0 right-[10rem] size-80 rounded-full border-[2rem] border-zinc-900 -rotate-[15deg] overflow-hidden">
                    <Image
                        fill
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={eiffel_tower}
                        alt="eiffel-tower"
                        priority
                    />
                </div>

            </div>*/}


            {/*<div className="relative aspect-square h-full">
                <Image
                    fill
                    style={{objectFit: "cover"}}
                    //style={{width: '100%', height: 'auto'}}
                    src={me}
                    alt="me"
                    priority
                />
            </div>*/}
            {/*<Sound05 />*/}
            {/*<Canvas shadows camera={{position: [0, 0, 15], fov: 30}}>
                <color attach="background" args={['black']}/>
                <Experience/>
                <spotLight position={[10, 10, 10]} angle={0.35} penumbra={1} decay={0} intensity={Math.PI}/>
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>
                <AsciiRenderer characters=" ...-+¤=<>10[]#" resolution="0.11" fgColor="#27272a" bgColor="#f4f4f5"/>
            </Canvas>
            <Infos/>*/}
        </section>
    );

};

export default Header;