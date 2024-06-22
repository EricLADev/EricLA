"use client";

import Image from "@node_modules/next/image";
import dashicons_smiley from "@public/assets/icons/dashicons--smiley.svg";
import circular_helloworld from "@public/assets/icons/circular_helloworld3.svg";
import france from "@public/assets/icons/france.svg";
import hand from "@public/assets/icons/hand-waving.svg";
import bicycle from "@public/assets/icons/bicycle.svg";
import html from "@public/assets/icons/html6.svg";
import hi from "@public/assets/icons/hi02.svg";
import tr808 from "@public/assets/icons/tr808.png";
import wheel from "@public/assets/icons/wheel.png";
import cursor from "@public/assets/icons/cursor.svg";
import reason from "@public/assets/icons/reasonstudios.svg";
import ableton from "@public/assets/icons/abletonlive.svg";
import react from "@public/assets/icons/react-icon.svg";
import tailwind from "@public/assets/icons/tailwindcss.svg";
import digitalid from "@public/assets/icons/digital-id.svg";

import music_01 from "@public/assets/icons/music_01.svg";
import music_02 from "@public/assets/icons/music_02.svg";
import music_03 from "@public/assets/icons/music_03.svg";
import music_04 from "@public/assets/icons/music_04.svg";
import music_05 from "@public/assets/icons/music_05.svg";
import music_06 from "@public/assets/icons/music_06.svg";
import music_07 from "@public/assets/icons/music_07.svg";
import music_08 from "@public/assets/icons/music_08.svg";
import music_09 from "@public/assets/icons/music_09.svg";

import vinyl from "@public/assets/icons/vinyl_01.svg";

import eiffel from "@public/assets/icons/eiffel-tower.svg";
import metro from "@public/assets/icons/metrodeparis.svg";

import and from "@public/assets/icons/and.svg";
import arrow_brush from "@public/assets/icons/arrow_brush.svg";
import thumb from "@public/assets/icons/thumbs-up-solid.svg";
import welcome from "@public/assets/icons/welcome_c.svg";
import me01 from "@public/assets/header/me01.png";
import {motion, useDragControls} from "framer-motion";
import Weather from "@components/contact/weather";
import React, {useState} from "react";
import getintouch03 from "@public/assets/contact/getintouch_03_amber.svg";
import Circular from "@components/loops/circular";

const Header = () => {

    return (
        <section id="_header"
                 className="_section w-full min-h-[100vh] h-full flex relative">

            <div
                className="w-[1000px] h-[600px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] grid grid-rows-3 gap-5 text-zinc-100 scale-75 xl:scale-100">

                <div className="relative z-[2]">

                    {/*<div
                        className="absolute bottom-8 left-5 size-32 -rotate-[5deg] rounded-full overflow-hidden">
                        <Image
                            fill
                            style={{objectFit: "cover"}}
                            //style={{width: '100%', height: 'auto'}}
                            src={and}
                            alt="And"
                            priority
                        />
                    </div>*/}

                    <div
                        className="absolute -bottom-5 -left-32 size-48 bg-amber-500 border-8 border-amber-500 -rotate-12 rounded-full overflow-hidden">
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
                        className="absolute -bottom-36 -left-44 size-40 rounded-full bg-amber-400 border-8 border-amber-400 rotate-[10deg] overflow-hidden flex justify-center items-center">
                        <Image
                            style={{width: '55%', height: '55%'}}
                            src={dashicons_smiley}
                            alt="dashicons_smiley"
                            priority
                        />
                        <Circular
                            clssnm={"absolute -top-[10%] -left-[10%] size-[120%] flex justify-center items-center"}
                            baseVelocity={-1.25}>
                            <Image
                                style={{width: '85%', height: '85%'}}
                                src={circular_helloworld}
                                alt="circular_helloworld"
                                priority
                            />
                        </Circular>
                    </div>

                    <div
                        className="absolute top-2 left-10 size-40 bg-[#c93744] rounded-full overflow-hidden">
                        <div
                            //animate={{ scale: 1.2 }}
                            //transition={{ duration: .5, repeatDelay: 5, repeat: Infinity }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-36 border-4 border-dashed border-zinc-950 rounded-full p-5">
                            <Image
                                style={{width: '95%', height: '95%'}}
                                src={hand}
                                alt="Hand"
                                priority
                            />
                        </div>
                    </div>

                    <div
                        className="absolute top-14 right-80 size-20 bg-zinc-100 -rotate-6 rounded-full overflow-hidden">
                        <Image
                            fill
                            style={{objectFit: "cover"}}
                            src={metro}
                            alt="metro"
                            priority
                        />
                    </div>

                    <div
                        className="absolute top-12 right-96 size-32 border-8 border-zinc-950 bg-zinc-100 rotate-6 rounded-full overflow-hidden">
                        <Image
                            fill
                            style={{objectFit: "cover"}}
                            src={eiffel}
                            alt="eiffel"
                            priority
                        />
                    </div>

                    <div
                        className="absolute bottom-0 left-96 size-36 bg-[#f4afce] rounded-full rotate-12 overflow-hidden">
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-28 border-[2px] border-dotted border-zinc-950 rounded-full"></div>
                        <div
                            className="absolute w-1/2 h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f4afce]"></div>

                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-28 text-green-600 rounded-full">
                            <p className="absolute -top-3 left-1/2 -translate-x-1/2 text-[1.5rem] font-medium px-5 py-1">Bike</p>
                            <Image
                                style={{width: '55%', height: '55%'}}
                                src={bicycle}
                                alt="bicycle"
                                priority
                            />
                            <p className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[1.5rem] font-medium px-5 py-1">More</p>
                        </div>
                    </div>

                    <div className="absolute bottom-2 right-20 -rotate-[3deg]">
                        <Weather/>
                    </div>

                    <div className="absolute -bottom-20 -right-20 size-32 bg-[#c93744] rounded-full overflow-hidden">
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-28 border-2 border-double border-zinc-950 rotate-12 rounded-full p-5">
                            <Image
                                style={{width: '90%', height: '90%'}}
                                src={digitalid}
                                alt="Digital ID"
                                priority
                            />
                        </div>
                    </div>

                </div>

                <h1 className="relative flex justify-center items-center font-cabin font-[700] text-[9rem] z-[1]">
                <span className="text-zinc-950 mr-5">Hello, </span>
                    <span className="text-zinc-950 mr-5">I'm</span>
                    <span className="bg-zinc-900 text-zinc-100 px-10 py-0">Éric</span>
                </h1>

                <div className="relative z-[2]">

                    {/*<div className="absolute -top-20 -left-64 size-64 rounded-full overflow-hidden">
                        <Image
                            fill
                            style={{objectFit: "cover"}}
                            src={arrow_brush}
                            alt="Arrow Brush"
                            priority
                        />
                    </div>*/}

                    <div
                        className="absolute bottom-10 left-48 size-28 bg-white -rotate-6 rounded-full overflow-hidden">
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full rounded-full">
                            <Image
                                fill
                                style={{objectFit: "cover"}}
                                src={vinyl}
                                alt="Vinyl"
                                priority
                            />
                        </div>
                    </div>

                    <div
                        className="absolute bottom-0 left-20 size-40 flex justify-center items-center border-0 border-white bg-zinc-950 -rotate-6 rounded-full overflow-hidden">
                        <Image
                            style={{width: '88%', height: '88%'}}
                            src={music_07}
                            alt="music_01"
                            priority
                        />
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center size-28 rounded-full p-5">
                            <Image
                                style={{width: '35%', height: '35%'}}
                                src={reason}
                                alt="Reason"
                                priority
                            />
                            <Image
                                style={{width: '45%', height: '45%'}}
                                src={ableton}
                                alt="Ableton"
                                priority
                            />
                        </div>
                    </div>

                    <div
                        className="absolute -top-2 left-[65%] -translate-x-[50%] rotate-[5deg] flex items-center border-[7px] border-zinc-50 bg-[#c2d03b] p-5 rounded-l-full">
                        <div className="relative size-20 rounded-full bg-[#c93744] overflow-hidden mr-5">
                            <Image
                                fill
                                style={{objectFit: "cover"}}
                                src={html}
                                alt="html"
                                priority
                            />
                        </div>
                        <div
                            className="capitalize text-zinc-950 text-[3.25rem] leading-[2.75rem] font-bold text-left">
                            Frontend<br/>Developer
                        </div>

                        <div className="absolute -top-8 -right-10 size-20 -rotate-12 overflow-hidden">
                            <Image
                                fill
                                style={{objectFit: "cover"}}
                                src={react}
                                alt="React"
                                priority
                            />
                        </div>

                        <div
                            className="absolute -bottom-8 -right-8 size-14 bg-white border-[10px] border-white rounded-2xl -rotate-12 overflow-hidden">
                            <Image
                                fill
                                style={{objectFit: "cover"}}
                                src={tailwind}
                                alt="Tailwind"
                                priority
                            />
                        </div>
                    </div>

                    <div className="absolute -top-10 -right-12 size-52 -rotate-[5deg] rounded-full overflow-hidden">
                        <Image
                            fill
                            style={{objectFit: "cover"}}
                            src={cursor}
                            alt="Cursor"
                            priority
                        />
                    </div>

                </div>

            </div>

        </section>
    );

};

export default Header;