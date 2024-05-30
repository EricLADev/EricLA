"use client"

import ContactP5 from "@components/contact/contactP5";
import ContactForm from "@components/contact/contactForm";
import Sound from "@components/sounds/sound";
import Image from 'next/image';
//import contactImg from "@public/assets/images/animation_phone_04.gif";
//import contactImg from "@public/assets/images/phone01_center.gif";
import contactImg from "@public/assets/images/mail01_center.gif";
import bgContact01 from "@public/assets/backgrounds/contact (27).jpg";
// 18/19/20/21/22/24/27/28/29/30
import arrow07 from "@public/assets/backgrounds/arrow07.svg";
import { motion } from "framer-motion";
import { useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import useDimension from "@hook/useDimension";
import {useMotionValueEvent} from "@node_modules/framer-motion";
import eiffel from "@public/assets/icons/eiffel.svg";
import eiffel_tower from "@public/assets/icons/eiffel-tower.svg";
import metrodeparis from "@public/assets/icons/metrodeparis.svg";
import france from "@public/assets/icons/france.svg";
import SouthEastIcon from '@mui/icons-material/SouthEast';
import ExpandMoreIcon from "@node_modules/@mui/icons-material/ExpandMore";
import EastIcon from '@mui/icons-material/East';

const Contact = () => {

    const { width,height} = useDimension();
    const containerContact = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerContact,
        offset: ['start end', 'end start']
    });
    const y   = useTransform(scrollYProgress, [0,.5], [-500, 0]);
    const mt  = useTransform(scrollYProgress, [0,.5], [100, 0]);
    const op  = useTransform(scrollYProgress, [0,.5], [.5, 1]);
    const sc  = useTransform(scrollYProgress, [0,.5], [.98, 1]);
    const rty = useTransform(scrollYProgress, [0,.5], [2, 0]);

    const stylesAnim= (width>=1024) ? {
        scale: sc,
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
                className="relative z-9 w-full lg:min-h-[100dvh] h-auto lg:h-full flex bg-black overflow-hidden">

                <motion.div
                    style={...stylesAnim}
                    /*className="bg-amber-400 w-full h-auto lg:h-full p-[var(--main-padding)]">*/
                    className="bg-amber-400 w-full h-auto lg:h-full p-3">
                    <div className="w-full max-w-[1900px] py-20 mx-auto h-auto lg:h-full lg:flex lg:justify-center lg:items-center">

                        <div className="w-full lg:w-1/2 max-w-[850px] text-left lg:text-right font-hkgrotesk pr-4 flex flex-col justify-center">
                            <p className="text-[6rem] leading-[4.75rem] lg:text-[8rem] lg:leading-[6rem] xl:text-[10rem] xl:leading-[7.5rem] 2xl:text-[12rem] 2xl:leading-[9rem] 3xl:text-[15rem] 3xl:leading-[11rem] uppercase font-bold">Get in</p>
                            <p className="text-[6rem] leading-[4.75rem] lg:text-[8rem] lg:leading-[6rem] xl:text-[10rem] xl:leading-[7.5rem] 2xl:text-[12rem] 2xl:leading-[9rem] 3xl:text-[15rem] 3xl:leading-[11rem] uppercase font-bold">touch</p>
                            <p className="mt-2 text-[3.5rem] leading-[3rem] lg:text-[5rem] lg:leading-[4rem] xl:text-[6rem] xl:leading-[5rem] uppercase font-light flex justify-start lg:justify-end">
                                <span
                                    className="block relative w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] xl:w-[80px] xl:h-[80px] rounded-full border-2 border-zinc-900 overflow-hidden">
                                    <Image
                                        fill
                                        style={{objectFit: "cover"}}
                                        src={eiffel}
                                        alt="Eiffel"
                                        priority
                                    />
                                </span>
                                <span
                                    className="ml-2 block relative w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] xl:w-[80px] xl:h-[80px] rounded-full border-2 border-zinc-900 overflow-hidden">
                                    <Image
                                        fill
                                        style={{objectFit: "cover"}}
                                        src={eiffel_tower}
                                        alt="Eiffel Tower"
                                        priority
                                    />
                                </span>
                                Paris
                                <span
                                    className="ml-1 block relative w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] xl:w-[80px] xl:h-[80px] rounded-full overflow-hidden">
                                    <Image
                                        fill
                                        style={{objectFit: "cover"}}
                                        src={metrodeparis}
                                        alt="Metro de Paris"
                                        priority
                                    />
                                </span>
                            </p>
                            <p className="lg:ml-10 text-[3.5rem] leading-[3rem] lg:text-[5rem] lg:leading-[4rem] xl:text-[6rem] xl:leading-[5rem] uppercase font-light flex justify-start lg:justify-end">Orleans</p>
                            <p className="text-[3.5rem] leading-[3rem] lg:text-[5rem] lg:leading-[4rem] xl:text-[6rem] xl:leading-[5rem] uppercase font-light flex justify-start lg:justify-end">
                                <span
                                    className="ml-1 block relative w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] xl:w-[80px] xl:h-[80px] rounded-full overflow-hidden">
                                    <Image
                                        fill
                                        style={{objectFit: "cover"}}
                                        src={france}
                                        alt="France"
                                        priority
                                    />
                                </span>
                                France
                            </p>
                            <p className="text-[1.75rem] leading-[1.5rem] lg:text-[2.5rem] lg:leading-[2.5rem] xl:text-[4rem] xl:leading-[3.5rem] uppercase font-light">Contact me here</p>
                            <p className="mt-2 lg:mt-1 xl:mt-3">
                                <EastIcon className="mt-[-8px] lg:mt-[-15px] xl:mt-[-20px] text-zinc-900 text-[3rem] lg:text-[5rem]" />
                                <span className="py-1 px-4 bg-zinc-900 text-amber-400 lowercase text-[1.25rem] leading-[1.25rem] lg:text-[2rem] lg:leading-[2rem] xl:text-[2.5rem] xl:leading-[2.75rem]">ela.dev.job@gmail.com</span>
                            </p>
                            <p className="text-md font-medium mr-[100px]">Copyright © Eric L.A. 2024</p>
                        </div>

                        <div className="w-full lg:w-1/2 max-w-[850px] flex flex-col justify-center lg:pl-4 mt-5 lg:mt-0">
                            <div className="flex items-center">
                                <p className="ml-[-10px]"><SouthEastIcon sx={{color: '#18181b', fontSize: '5rem'}} /></p>
                                <p className="text-[1.4rem] leading-[1.25rem] font-bold uppercase">Or<br/>Send a message<br/>Here</p>
                            </div>
                            <div className="w-full lg:max-w-[400px] xl:max-w-[550px] mt-[7px]">
                                <ContactForm/>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </section>
        </>
    );
};


export default Contact;