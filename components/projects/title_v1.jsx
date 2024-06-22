"use client"

import Image from "@node_modules/next/image";
import React, {useEffect, useRef} from "react";
import {motion, useScroll, useTransform} from 'framer-motion';
import {useAnimation, useInView, useMotionValueEvent} from "@node_modules/framer-motion";

import useDimension from "@hook/useDimension";

import cog01 from "@public/assets/backgrounds/cog01.svg";
import cog02 from "@public/assets/backgrounds/cog02.svg";
import cog03 from "@public/assets/backgrounds/cog03.svg";
import cog04 from "@public/assets/backgrounds/cog04.svg";
import cog05 from "@public/assets/backgrounds/cog05.svg";
import cog06 from "@public/assets/backgrounds/cog06.svg";
import cog07 from "@public/assets/backgrounds/cog07.svg";
import cog08 from "@public/assets/backgrounds/cog08.svg";
import cog09 from "@public/assets/backgrounds/cog09.svg";
import cog10 from "@public/assets/backgrounds/cog10.svg";

const Title = ({myText}) => {

    const ref = useRef(null);

    const parent = {
        hidden: {
            opacity: 0,
            y: 1,
            transition: {
                when: 'afterChildren',
            },
        },
        visible: {
            opacity: 1,
            y: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.01,
                delay: .05,
                default: {ease: 'easeInOut'},
            },
        },
    };

    const BalanceEntryVariants = {
        hidden: {
            //rotate: 20,
            opacity: 0,
            //scale: 0.35
        },
        visible: {
            //rotate: 0,
            opacity: 1,
            //scale: 1,
            transition: {
                ease: 'easeInOut',
                duration: .35
            },
        },
    };

    const titleH2 = "lastProjects";

    const { height } = useDimension();
    const containerTitle = useRef(null);
    const { scrollY } = useScroll({
        target: containerTitle,
        //offset: ['start end', 'end end']
    });
    const r01 = useTransform(scrollY, [0,5000], [0, (height * .5)]);
    const r02 = useTransform(scrollY, [0,5000], [0, -(height * .5)]);

    const controls = useAnimation();
    const inView = useInView(ref);
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div ref={containerTitle}
             className="relative w-full lg:w-screen h-screen flex items-center justify-center overflow-hidden">

            <div className="absolute top-10 left-1/2 ml-[-200px] w-[400px] bg-red-[0]">
                <div className="rotate-[-30deg]">
                    <div className="absolute z-0 size-[500px] top-0 left-[50%] -translate-x-[50%]">
                        <motion.div style={{rotate: r01}}
                                    className="relative w-full h-full z-1 rounded-full overflow-hidden">
                            <Image
                                fill
                                className="opacity-[.03]"
                                style={{objectFit: "cover"}}
                                //style={{width: '100%', height: 'auto'}}
                                src={cog03}
                                alt="Resume"
                                priority
                            />
                        </motion.div>
                    </div>
                    <div className="absolute z-0 size-[500px] top-[475px] left-[50%] -translate-x-[50%]">
                        <motion.div style={{rotate: r02}}
                                    className="relative w-full h-full z-1 rounded-full overflow-hidden">
                            <Image
                                fill
                                className="opacity-[.03] rotate-[23deg]"
                                style={{objectFit: "cover"}}
                                //style={{width: '100%', height: 'auto'}}
                                src={cog08}
                                alt="Resume"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="absolute z-0 size-[500px] top-[665px] left-[50%] -translate-x-[50%] ml-[-20px]">
                    <motion.div style={{rotate: r01}}
                                className="relative w-full h-full z-1 rounded-full overflow-hidden">
                        <Image
                            fill
                            className="opacity-[.03] rotate-[0deg]"
                            style={{objectFit: "cover"}}
                            //style={{width: '100%', height: 'auto'}}
                            src={cog10}
                            alt="Resume"
                            priority
                        />
                    </motion.div>
                </div>
            </div>


            <motion.h2
                ref={ref}
                initial="hidden"
                whileInView="visible"
                variants={parent}
                className="flex font-grotesk font-bold uppercase"
            >
                {titleH2.split("").map((item, index) => {
                    return (
                        <motion.span className="block" variants={BalanceEntryVariants} key={index}>
                            {item}
                        </motion.span>
                    )
                })}
            </motion.h2>

        </div>

    )
}

export default Title;
