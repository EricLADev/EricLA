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

    const { height} = useDimension();
    const containerContact = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerContact,
        offset: ['start end', 'end start']
    });
    const y   = useTransform(scrollYProgress, [0,.5], [800, 0]);
    const y2  = useTransform(scrollYProgress, [0,.5], [-2000, 5000]);
    const op  = useTransform(scrollYProgress, [0,.5], [.5, 1]);
    const sc  = useTransform(scrollYProgress, [0,.5], [.96, 1]);
    const rty = useTransform(scrollYProgress, [0,.5], [3, 0]);

    /*useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Value:", latest)
    })*/

    return (
        <>
            <section ref={containerContact} id="_contact" className="bg-transparent z-0"></section>
            <section className="fixed bottom-0 left-0 z-[1] bg-black">

                <motion.div style={{scale: sc, top: y, opacity: op, rotateZ:rty}}
                            className="absolute top-0 left-0 w-full h-full flex items-center content-center bg-amber-500">

                    {/*<motion.div
                        style={{y}}
                        className="absolute z-0 -top-[25%] left-0 w-full min-h-[120%] opacity-90">
                        <Image
                            fill
                            className="contact"
                            style={{objectFit: "cover"}}
                            src={bgContact01}
                            alt="Contact"
                            priority>
                        </Image>
                    </motion.div>*/}


                    <div className="w-full mx-auto lg:max-w-screen-xl px-5 bg-white bg-opacity-0">
                        <div className="text-center">
                            <h3 className="text-[9rem] leading-[8vw] capitalize tracking-tight font-[700] text-zinc-950 font-fira">Get
                                in touch</h3>
                        </div>
                        <ContactForm/>
                    </div>

                </motion.div>

            </section>
        </>
    );
};


export default Contact;