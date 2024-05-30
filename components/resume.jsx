"use client"

import ResumeHeader from "@components/resume/resumeHeader";
import ResumeBlock from "@components/resume/resumeBlock";
import Hirondelles from "@components/resume/hirondelles";
import { useTransform, useScroll } from "framer-motion";
import React, {createElement, useEffect, useRef} from "react";
import {useAnimation, useInView, useMotionValueEvent} from "@node_modules/framer-motion";
import resumeBkg from "@public/assets/backgrounds/timeline03.svg";
import arrow01 from "@public/assets/backgrounds/arrow01.svg";
import arrow02 from "@public/assets/backgrounds/arrow02.svg";
import arrow03 from "@public/assets/backgrounds/arrow03.svg";
import arrow04 from "@public/assets/backgrounds/arrow04.svg";
import arrow05 from "@public/assets/backgrounds/arrow05.svg";
import arrow06 from "@public/assets/backgrounds/arrow06.svg";
/*import arrow07 from "@public/assets/backgrounds/arrow07.svg";*/
import arrow08 from "@public/assets/backgrounds/arrow08.svg";
import arrow09 from "@public/assets/backgrounds/arrow09.svg";
import Image from "@node_modules/next/image";
import {motion, Variants, cubicBezier} from "framer-motion";
import Personal from "@components/resume/personal";
import Experience from "@components/resume/experience";
import Skills from "@components/resume/skills";
import Education from "@components/resume/education";
import Languages from "@components/resume/languages";
import Hobbies from "@components/resume/hobbies";

const Resume = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        //layoutEffect: false,
        target: container,
        offset: ['start end', 'end start']
    });

    const y01 = useTransform(scrollYProgress, [0,1], [0,360]);
    const y02 = useTransform(scrollYProgress, [0,1], [0,-10]);
    const y03 = useTransform(scrollYProgress, [0,1], [0,180]);
    const y04 = useTransform(scrollYProgress, [0,1], [0,-220]);
    const y05 = useTransform(scrollYProgress, [0,1], [0,-50]);
    const y06 = useTransform(scrollYProgress, [0,1], [0,-300]);

    const r01 = useTransform(scrollYProgress, [0,1], [0,60]);
    const r02 = useTransform(scrollYProgress, [0,1], [0,-40]);
    const r03 = useTransform(scrollYProgress, [0,1], [0,20]);
    const r04 = useTransform(scrollYProgress, [0,1], [0,-50]);
    const r05 = useTransform(scrollYProgress, [0,1], [0,10]);
    const r06 = useTransform(scrollYProgress, [0,1], [0,-60]);

    /*useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Value:", latest)
    })*/

    return (
        <section ref={container} id="_resume" className="relative z-20 w-full min-h-[100dvh] h-auto lg:py-52">

            <motion.div
                className="absolute z-0 top-[-25%] left-[-10%] w-[120%] min-h-[150%] flex content-center justify-center items-center">

                <motion.div style={{y: y01, rotateZ: r01}}
                            className="relative w-[20vw] h-[20vw] z-100 rounded-full bg-zinc-900 overflow-hidden">
                    <Image
                        fill
                        className="opacity-80"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={arrow05}
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y02, rotateZ: r02}}
                            className="relative w-[20vw] h-[20vw] z-100 rounded-full bg-amber-600">
                    <Image
                        fill
                        className="opacity-50"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src="/assets/backgrounds/arrow07.svg"
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y03, rotateZ: r03}}
                            className="relative w-[20vw] h-[20vw] z-100 rounded-full bg-[#31363F] overflow-hidden">
                    <Image
                        fill
                        className="opacity-50"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={arrow08}
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y04, rotateZ: r04}}
                            className="relative w-[20vw] h-[20vw] z-100 rounded-full bg-[#76ABAE]">
                    <Image
                        fill
                        className="opacity-50"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={arrow05}
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y05, rotateZ: r05}}
                            className="relative w-[20vw] h-[20vw] z-100 rounded-full bg-amber-500">
                    <Image
                        fill
                        className="opacity-80"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={arrow08}
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y06, rotateZ: r06}}
                            className="relative w-[20vw] h-[20vw] z-100 rounded-full bg-zinc-900">
                    <Image
                        fill
                        className="opacity-50"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src="/assets/backgrounds/arrow07.svg"
                        alt="Resume"
                        priority
                    />
                </motion.div>

            </motion.div>

            <Hirondelles/>
            <div className="_resume relative z-10 bg-[#fff] bg-opacity-95 lg:bg-opacity-[.98] max-w-[980px] p-5 text-[.8rem] leading-[1.25rem] m-[var(--main-padding)] sm:p-14 lg:-mt-[10px] lg:-mb-[10px] lg:m-auto">
                <ResumeHeader/>
                <div className="w-full flex flex-wrap justify-between lg:flex-row lg:pb-7">
                    {Items.map((item, index) =>
                        <div key={`key_${index}`} id={item.id} className="pb-8 w-full lg:w-[48%]">
                            <h3 className="text-[1.2rem] border-b-[1px] border-b-zinc-900 border-dashed pb-3 mb-5 overflow-hidden">
                                <span>{item.title}</span>
                            </h3>
                            {item.content}
                        </div>
                    )}
                </div>

                    {/*<div className="w-full flex flex-col justify-between lg:flex-row lg:pb-7">
                    <div id="_personalStatement" className="pb-8 w-full lg:w-[48%]">
                        <h3 className="text-[1.2rem] border-b-[1px] border-b-zinc-900 border-dashed pb-3 mb-5 overflow-hidden">
                            <span>Personal Statement</span>
                        </h3>
                        <Personal/>
                    </div>
                    <div id="_workExperience" className="pb-8 w-full lg:w-[48%]">
                        <h3 className="text-[1.2rem] border-b-[1px] border-b-zinc-900 border-dashed pb-3 mb-5 overflow-hidden">
                            <span>Work Experience</span>
                        </h3>
                        <Experience/>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-between lg:flex-row lg:pb-7">
                    <div id="_skills" className="pb-8 w-full lg:w-[48%]">
                        <h3 className="text-[1.2rem] border-b-[1px] border-b-zinc-900 border-dashed pb-3 mb-5 overflow-hidden">
                            <span>Skills</span>
                        </h3>
                        <Skills/>
                    </div>
                    <div id="_education" className="pb-8 w-full lg:w-[48%]">
                        <h3 className="text-[1.2rem] border-b-[1px] border-b-zinc-900 border-dashed pb-3 mb-5 overflow-hidden">
                            <span>Education</span>
                        </h3>
                        <Education/>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-between lg:flex-row lg:pb-7">
                    <div id="_languages" className="pb-8 w-full lg:w-[48%]">
                        <h3 className="text-[1.2rem] border-b-[1px] border-b-zinc-900 border-dashed pb-3 mb-5 overflow-hidden">
                            <span>Languages</span>
                        </h3>
                        <Languages/>
                    </div>
                    <div id="_hobbies" className="pb-8 w-full lg:w-[48%]">
                        <h3 className="text-[1.2rem] border-b-[1px] border-b-zinc-900 border-dashed pb-3 mb-5 overflow-hidden">
                            <span>Hobbies & Interests</span>
                        </h3>
                        <Hobbies/>
                    </div>
                </div>*/}
            </div>
            <Hirondelles/>

        </section>
    );
};

const Items = [
    {
        id: "_personalStatement",
        title: "Personal Statement",
        content: <Personal />
    },
    {
        id: "_workExperience",
        title: "Work Experience",
        content: <Experience />
    },
    {
        id: "_skills",
        title: "Skills",
        content: <Skills />
    },
    {
        id: "_education",
        title: "Education",
        content: <Education />
    },
    {
        id: "_languages",
        title: "Languages",
        content: <Languages />
    },
    {
        id: "_hobbies",
        title: "Hobbies & Interests",
        content: <Hobbies />
    },

]

export default Resume;