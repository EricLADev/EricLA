"use client";

import Image from "@node_modules/next/image";
import dashicons_smiley from "@public/assets/icons/dashicons--smiley.svg";
import circular_helloworld from "@public/assets/icons/circular_helloworld3.svg";
import france from "@public/assets/icons/france.svg";
import hand from "@public/assets/icons/hand-waving.svg";
import bicycle from "@public/assets/icons/bicycle.svg";
import html from "@public/assets/icons/html6.svg";
import hi from "@public/assets/icons/hi06.svg";
import tr808 from "@public/assets/icons/tr808.png";
import wheel from "@public/assets/icons/wheel.png";
import cursor from "@public/assets/icons/cursor.svg";
import reason from "@public/assets/icons/reasonstudios.svg";
import ableton from "@public/assets/icons/abletonlive.svg";
import react from "@public/assets/icons/react-icon.svg";
import tailwind from "@public/assets/icons/tailwindcss.svg";
import digitalid from "@public/assets/icons/digital-id.svg";
import and from "@public/assets/icons/and.svg";
import arrow_brush from "@public/assets/icons/arrow_brush.svg";
import thumb from "@public/assets/icons/thumbs-up-solid.svg";
import welcome from "@public/assets/icons/welcome_c.svg";
import me01 from "@public/assets/header/me01.png";
import {motion} from "@node_modules/framer-motion";
import Weather from "@components/contact/weather";
import React from "react";
import getintouch03 from "@public/assets/contact/getintouch_03_amber.svg";
import Circular from "@components/loops/circular";

const Header = () => {

    return (
        <section id="_header"
                 className="_section w-full min-h-[100dvh] h-full flex relative font-hkgrotesk font-[900] capitalize">

            <div
                className="w-[1000px] h-[600px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] grid grid-rows-3 gap-5 text-zinc-100">

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
                        className="absolute -bottom-5 -left-32 size-52 bg-orange-400 border-8 border-orange-400 -rotate-12 rounded-full overflow-hidden">
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
                        className="absolute -bottom-36 -left-44 size-40 rounded-full bg-amber-300 border-8 border-amber-300 rotate-[10deg] overflow-hidden flex justify-center items-center">
                        <Image
                            /*fill
                            style={{objectFit: "cover"}}*/
                            style={{width: '55%', height: '55%'}}
                            src={dashicons_smiley}
                            alt="dashicons_smiley"
                            priority
                        />
                        {/*<motion.div
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
                        </motion.div>*/}


                        <Circular clssnm={"absolute -top-[10%] -left-[10%] size-[120%] flex justify-center items-center"} baseVelocity={-1.25}>
                            <Image
                                style={{width: '85%', height: '85%'}}
                                src={circular_helloworld}
                                alt="circular_helloworld"
                                priority
                            />
                        </Circular>


                    </div>

                    <div className="absolute bottom-0 right-20 -rotate-[3deg]">
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

                <div className="relative flex justify-center items-center z-[1]">
                    <span className="capitalize text-zinc-950 text-[10rem] mr-5">Hello, </span>
                    <span className="capitalize text-zinc-950 text-[10rem] mr-5">I'm</span>
                    <span
                        className="capitalize bg-zinc-900 text-[10rem] text-zinc-100 px-10 py-0">Éric</span>

                    {/*<div
                        className="absolute bottom-8 -right-12 size-16 flex justify-center items-center bg-white rounded-xl rotate-6 overflow-hidden">
                        <Image
                            style={{width: '60%', height: '60%'}}
                            src={ableton}
                            alt="Ableton"
                            priority
                        />
                    </div>

                    <div
                        className="absolute -bottom-4 -right-12 size-16 flex justify-center items-center bg-white rounded-xl rotate-6 overflow-hidden">
                        <Image
                            style={{width: '60%', height: '60%'}}
                            src={reason}
                            alt="Reason"
                            priority
                        />
                    </div>*/}
                </div>

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

                    <div className="absolute top-0 left-0 size-44 bg-[#c93744] rounded-full overflow-hidden">
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-40 border-4 border-dashed border-zinc-950 rounded-full p-5">
                            <Image
                                style={{width: '95%', height: '95%'}}
                                src={hand}
                                alt="Hand"
                                priority
                            />
                        </div>
                    </div>

                    <div className="absolute top-10 left-36 size-36 bg-[#f4afce] rounded-full rotate-6 overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-28 border-[2px] border-dotted border-zinc-950 rounded-full"></div>
                        <div className="absolute w-1/2 h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f4afce]"></div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-28 text-green-600 rounded-full">
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

                    <div className="absolute -top-10 -right-4 size-40 -rotate-[5deg] rounded-full overflow-hidden">
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