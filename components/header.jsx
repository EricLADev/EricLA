"use client";

import Image from "next/image";
import dashicons_smiley from "@public/assets/icons/dashicons--smiley.svg";
import helloworld02 from "@public/assets/icons/hello_world_02.svg";
import hand from "@public/assets/icons/hand-waving.svg";
import bicycle from "@public/assets/icons/bicycle.svg";
import html from "@public/assets/icons/html6.svg";
import hi from "@public/assets/icons/hi07.svg";
import cursor from "@public/assets/icons/cursor.svg";
import reason from "@public/assets/icons/reasonstudios.svg";
import ableton from "@public/assets/icons/abletonlive.svg";
import react from "@public/assets/icons/react-icon.svg";
import tailwind from "@public/assets/icons/tailwindcss.svg";
import digitalid from "@public/assets/icons/digital-id.svg";
import music_production_02 from "@public/assets/icons/music_production_02.svg";
import dotted_11 from "@public/assets/icons/dotted_11.svg";
import dotted_18 from "@public/assets/icons/dotted_18.svg";
import vinyl from "@public/assets/icons/vinyl_01.svg";

import {motion} from "framer-motion";
import Weather from "@components/contact/weather";
import Circular from "@components/loops/circular";

const Header = () => {
    
    return (
        <section id="_header"
                 className="_section w-full min-h-[100vh] h-full flex relative">

            <div className="

                scale-70
                md:scale-90
                2xl:scale-100

                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                flex justify-center items-center
                font-urbanist font-[900] text-[6rem] lg:text-[8rem] xl:text-[9rem] leading-[.8] z-[1]"
            >

                <HelloWorld />
                <Hi />
                <Hand />

                <div className="scale-90 lg:scale-100 w-[310px] absolute -top-32 left-10 lg:-top-36 lg:left-64 rotate-[6deg] lg:-rotate-[3deg] flex justify-center items-center">
                    <Weather />
                </div>

                <motion.span className="hidden lg:inline text-zinc-950 mr-5 z-0">Hello, </motion.span>
                <motion.span className="text-zinc-950 mr-5 z-10">I'm</motion.span>
                {/*<span className="text-zinc-950">Éric</span>*/}
                <motion.span className="bg-zinc-900 text-zinc-100 px-10 py-14">Éric</motion.span>

                <DigitalId />
                <Bike />

                <Cursor />
                <FrontendDev />

                <Music />

            </div>

        </section>
    );

};

function Hi() {
    return (
        <div
            className="scale-80 lg:scale-100 absolute -top-16 -left-40 size-52 bg-orange-400 border-8 border-orange-400 -rotate-12 rounded-full overflow-hidden">
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
            className="scale-80 lg:scale-100 absolute -top-32 -left-16 lg:-top-36 lg:-left-6 size-40 rounded-full bg-amber-400 border-[.5rem] border-amber-400 rotate-[10deg] overflow-hidden flex justify-center items-center">
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
            className="hidden lg:block absolute top-24 -left-40 size-40 bg-[#c93744] rounded-full overflow-hidden -mt-[80px] ml-[30px] lg:ml-0 lg:mt-0">
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
                className="scale-90 lg:scale-100 absolute -bottom-[8.5rem] -left-[7.5rem] lg:-bottom-[12.5rem] lg:left-10 size-[15rem] rounded-full overflow-hidden flex justify-center items-center">
                <Image
                    style={{width: '90%', height: '90%'}}
                    src={dotted_11}
                    alt="Dotted 11"
                    priority
                />
            </div>
            <div
                className="scale-90 lg:scale-100 absolute -bottom-6 -left-28 lg:-bottom-36 lg:left-44 size-28 bg-zinc-100 rotate-180 lg:-rotate-6 rounded-full overflow-hidden">
                <Image
                    fill
                    style={{objectFit: "cover"}}
                    src={vinyl}
                    alt="Vinyl"
                    priority
                />
            </div>
            <div
                className="scale-90 lg:scale-100 absolute -bottom-24 -left-20 lg:-bottom-40 lg:left-20 size-40 flex justify-center items-center border-0 border-white bg-zinc-950 -rotate-6 rounded-full">
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

function Cursor() {

    return (
        <div
            className="hidden lg:block absolute -bottom-28 lg:-bottom-32 -right-20 lg:-right-16 size-44 -rotate-[6deg] rounded-full overflow-hidden">
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
            className="scale-85 lg:scale-100 absolute -bottom-24 -right-48 lg:-bottom-28 lg:-right-10 -translate-x-[50%] rotate-[5deg] flex items-center border-[7px] border-zinc-50 bg-[#c2d03b] p-5 rounded-l-full">
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
                className="scale-90 lg:scale-100 absolute -top-[8.5rem] -right-[7.5rem] lg:-top-[5.9rem] lg:-right-[7.4rem] size-56 rounded-full overflow-hidden flex justify-center items-center -z-10">
                <Image
                    style={{width: '90%', height: '90%'}}
                    src={dotted_18}
                    alt="Dotted 18"
                    priority
                />
            </div>
            <div
                className="absolute -top-24 -right-20 lg:-top-14 lg:-right-20 size-36 lg:size-36 bg-[#f4afce] rounded-full -rotate-12 overflow-hidden">
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
        <div
            className="scale-90 lg:scale-100 absolute bottom-10 -right-28 size-32 bg-sky-600 rounded-full overflow-hidden">
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
    );
}

export default Header;