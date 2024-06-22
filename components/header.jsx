"use client";

import Image from "@node_modules/next/image";
import dashicons_smiley from "@public/assets/icons/dashicons--smiley.svg";

import circular_helloworld1 from "@public/assets/icons/circular_helloworld.svg";
import circular_helloworld2 from "@public/assets/icons/circular_helloworld2.svg";
import circular_helloworld3 from "@public/assets/icons/circular_helloworld3.svg";

import helloworld01 from "@public/assets/icons/hello_world_01.svg";
import helloworld02 from "@public/assets/icons/hello_world_02.svg";
import helloworld10 from "@public/assets/icons/hello_world_10.svg";
import helloworld14 from "@public/assets/icons/hello_world_14.svg";
import helloworld15 from "@public/assets/icons/hello_world_15.svg";
import helloworld16 from "@public/assets/icons/hello_world_16.svg";
import helloworld17 from "@public/assets/icons/hello_world_17.svg";
import helloworld18 from "@public/assets/icons/hello_world_18.svg";
import helloworld19 from "@public/assets/icons/hello_world_19.svg";
import helloworld20 from "@public/assets/icons/hello_world_20.svg";
import helloworld21 from "@public/assets/icons/hello_world_21.svg";
import helloworld23 from "@public/assets/icons/hello_world_23.svg";

import france from "@public/assets/icons/france.svg";
import hand from "@public/assets/icons/hand-waving.svg";
import bicycle from "@public/assets/icons/bicycle.svg";
import html from "@public/assets/icons/html6.svg";
import hi from "@public/assets/icons/hi07.svg";
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

import music_production_01 from "@public/assets/icons/music_production_01.svg";
import music_production_02 from "@public/assets/icons/music_production_02.svg";
import music_production_03 from "@public/assets/icons/music_production_03.svg";
import music_production_04 from "@public/assets/icons/music_production_04.svg";
import music_production_05 from "@public/assets/icons/music_production_05.svg";

import dotted_01 from "@public/assets/icons/dotted_01.svg";
import dotted_02 from "@public/assets/icons/dotted_02.svg";
import dotted_03 from "@public/assets/icons/dotted_03.svg";
import dotted_04 from "@public/assets/icons/dotted_04.svg";
import dotted_05 from "@public/assets/icons/dotted_05.svg";

import dotted_07 from "@public/assets/icons/dotted_07.svg";
import dotted_08 from "@public/assets/icons/dotted_08.svg";
import dotted_09 from "@public/assets/icons/dotted_09.svg";
import dotted_10 from "@public/assets/icons/dotted_10.svg";
import dotted_11 from "@public/assets/icons/dotted_11.svg";
import dotted_12 from "@public/assets/icons/dotted_12.svg";
import dotted_13 from "@public/assets/icons/dotted_13.svg";
import dotted_14 from "@public/assets/icons/dotted_14.svg";
import dotted_15 from "@public/assets/icons/dotted_15.svg";
import dotted_16 from "@public/assets/icons/dotted_16.svg";
import dotted_17 from "@public/assets/icons/dotted_17.svg";
import dotted_18 from "@public/assets/icons/dotted_18.svg";

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
import React, {useRef, useState} from "react";
import getintouch03 from "@public/assets/contact/getintouch_03_amber.svg";
import Circular from "@components/loops/circular";
import {useFrame, useLoader, useThree} from "@node_modules/@react-three/fiber";
import * as THREE from "three";

const Header = () => {

    return (
        <section id="_header"
                 className="_section w-full min-h-[100vh] h-full flex relative">

            <div className="
                scale-75
                xl:scale-90
                2xl:scale-100
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                flex justify-center items-center
                font-urbanist font-[900] text-[9rem] leading-[.8] z-[1]">

                <Hi/>
                <HelloWorld/>
                <Hand/>

                <div
                    className="absolute -top-[10.75rem] left-[19rem] size-48 rounded-full overflow-hidden flex justify-center items-center">
                    <Image
                        style={{width: '100%', height: '100%'}}
                        src={dotted_05}
                        alt="Weather"
                        priority
                    />
                </div>

                <div className="absolute -top-28 left-64 -rotate-[3deg]">
                    <Weather/>
                </div>

                <span className="text-zinc-950 mr-5 z-0">Hello, </span>
                <span className="text-zinc-950 mr-5">I'm</span>
                {/*<span className="text-zinc-950">Éric</span>*/}
                <span className="bg-zinc-900 text-zinc-100 px-10 py-14">Éric</span>

                <Vinyl/>
                <Music/>

                <DigitalId/>
                <Bike/>

                <Cursor/>
                <FrontendDev/>

            </div>

        </section>
    );

};

function Hi() {
    return (
        <div
            className="absolute -top-28 -left-40 size-52 bg-orange-500 border-8 border-orange-500 -rotate-12 rounded-full overflow-hidden">
            <Image
                fill
                style={{objectFit: "cover"}}
                //style={{width: '100%', height: 'auto'}}
                src={hi}
                alt="Hi!"
                priority
            />
        </div>
    );
}

function HelloWorld() {
    return (
        <div
            className="absolute -top-40 -left-0 size-40 rounded-full bg-amber-400 border-[.5rem] border-amber-400 rotate-[10deg] overflow-hidden flex justify-center items-center">
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
                    style={{width: '84%', height: '85%'}}
                    src={helloworld02}
                    alt="Hello World"
                    priority
                />
            </Circular>
        </div>
    );
}

function Hand() {
    return (
        <div
            className="absolute top-16 -left-40 size-40 bg-[#c93744] rounded-full overflow-hidden">
            <div
                //animate={{ scale: 1.2 }}
                //transition={{ duration: .5, repeatDelay: 5, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-36 border-4 border-dashed border-zinc-950 rounded-full p-5">
                <Image
                    style={{width: '90%', height: '90%'}}
                    src={hand}
                    alt="Hand"
                    priority
                />
            </div>
        </div>
    );
}

function Music() {
    return (
        <>
            <div
                className="absolute -bottom-[12.5rem] left-[2.5rem] size-[15rem] rounded-full overflow-hidden flex justify-center items-center">
                <Image
                    style={{width: '90%', height: '90%'}}
                    src={dotted_11}
                    alt="Hi!"
                    priority
                />
            </div>
            <div
                className="absolute -bottom-28 left-48 size-28 bg-zinc-100 -rotate-6 rounded-full overflow-hidden">
                <Image
                    fill
                    style={{objectFit: "cover"}}
                    src={vinyl}
                    alt="Vinyl"
                    priority
                />
            </div>
            <div
                className="absolute -bottom-40 left-20 size-40 flex justify-center items-center border-0 border-white bg-zinc-950 -rotate-6 rounded-full overflow-hidden">
                <Image
                    style={{width: '92%', height: '92%'}}
                    src={music_production_02}
                    alt="music_production"
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
        </>
    )
        ;
}

function Vinyl() {
    return (
        <></>
    );
}

function Cursor() {

    return (
        <div className="absolute -bottom-32 -right-16 size-44 -rotate-[6deg] rounded-full overflow-hidden">
            <Image
                fill
                style={{objectFit: "cover"}}
                src={cursor}
                alt="Cursor"
                priority
            />
        </div>
    )
}

function FrontendDev() {
    return (
        <div
            className="absolute -bottom-28 -right-10 -translate-x-[50%] rotate-[5deg] flex items-center border-[7px] border-zinc-50 bg-[#c2d03b] p-5 rounded-l-full">
            <div className="relative size-16 rounded-full bg-[#c93744] overflow-hidden mr-5 ml-2">
                <Image
                    fill
                    style={{objectFit: "cover"}}
                    src={html}
                    alt="html"
                    priority
                />
            </div>
            <div
                className="capitalize text-zinc-950 text-[2.75rem] leading-[2.25rem] font-firacond font-medium text-left py-1">
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
    );
}

function Bike() {
    return (
        <>
            <div
                className="absolute -top-14 -right-20 size-36 bg-[#f4afce] rounded-full -rotate-12 overflow-hidden">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-28 border-[2px] border-dotted border-zinc-950 rounded-full"></div>
                <div
                    className="absolute w-1/2 h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f4afce]"></div>

                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-28 text-green-600 rounded-full">
                    <p className="absolute -top-2 left-1/2 -translate-x-1/2 text-[1.5rem] font-medium px-5 py-1">Bike</p>
                    <Image
                        style={{width: '55%', height: '55%'}}
                        src={bicycle}
                        alt="bicycle"
                        priority
                    />
                    <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[1.5rem] font-medium px-5 py-1">More</p>
                </div>
            </div>
        </>
    );
}

function DigitalId() {
    return (
        <>
            <div
                className="absolute -top-[5.9rem] -right-[7.4rem] size-56 rounded-full overflow-hidden flex justify-center items-center -z-10">
                <Image
                    style={{width: '90%', height: '90%'}}
                    src={dotted_18}
                    alt="Hi!"
                    priority
                />
            </div>
            <div className="absolute bottom-10 -right-28 size-32 bg-[#c93744] rounded-full overflow-hidden">
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
        </>
    );
}

export default Header;