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
import { useRef } from "react";
import useDimension from "@hook/useDimension";
import {useMotionValueEvent} from "@node_modules/framer-motion";

const Contact = () => {

    const { width,height} = useDimension();
    const containerContact = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerContact,
        offset: ['start end', 'end start']
    });
    const y   = useTransform(scrollYProgress, [0,.5], [-800, 0]);
    const mt  = useTransform(scrollYProgress, [0,.5], [100, 0]);
    const op  = useTransform(scrollYProgress, [0,.5], [.5, 1]);
    const sc  = useTransform(scrollYProgress, [0,.5], [.95, 1]);
    const rty = useTransform(scrollYProgress, [0,.5], [2, 0]);

    const stylesAnim= (width>=1280) ? {
        scale: sc,
        opacity: op,
        //rotateZ: rty,
        marginTop: mt,
        y:y
    } : null;

    /*useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Value:", latest)
    })*/

    return (
        <section
            id="_contact"
            ref={containerContact}
            className="w-full h-auto lg:h-full bg-black flex flex-col overflow-visible md:overflow-hidden">

            <motion.div
                style={...stylesAnim}
                className="w-full h-auto lg:h-full pl-5 pr-5 flex flex-col md:flex-row content-center items-center justify-center bg-blue-300">
                <div className="w-full h-[100vh] lg:h-auto flex flex-col justify-center text-center md:w-4/5 2xl:pb-[2rem]">
                    <h3 className="
                        text-[4.5rem] leading-[3.5rem]
                        sm:text-[6rem] sm:leading-[5rem]
                        xl:text-[8rem] xl:leading-[7rem]
                        2xl:text-[9rem] 2xl:leading-[8rem]
                        3xl:text-[10rem] 3xl:leading-[9rem]
                        capitalize tracking-tight font-[700] text-zinc-950 font-fira"
                    >
                        Get in touch
                    </h3>
                    <p><span className="bg-zinc-950 text-zinc-100 px-8 py-3 text-xl font-medium">ela.dev.job@gmail.com</span></p>
                    <p className="mt-10 text-xl font-medium">Copyright © Eric L.A. 2024</p>
                </div>
                <div className="w-full h-[100vh] lg:h-auto flex flex-col justify-center sm:w-3/5 xl:w-[500px] 3xl:w-[700px]">
                    <ContactForm/>
                </div>

            </motion.div>


        </section>
    );
};


export default Contact;