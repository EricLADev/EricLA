"use client"

import ResumeHeader from "@components/resume/resumeHeader";
import Hirondelles from "@components/resume/hirondelles";
import { useTransform, useScroll } from "framer-motion";
import {useRef} from "react";

import resume_arrow01 from "@public/assets/icons/resume_arrow01.svg";
import resume_arrow02 from "@public/assets/icons/resume_arrow02.svg";
import resume_arrow03 from "@public/assets/icons/resume_arrow03.svg";
import resume_arrow04 from "@public/assets/icons/resume_arrow04.svg";
import resume_arrow05 from "@public/assets/icons/resume_arrow05.svg";
import resume_arrow07 from "@public/assets/icons/resume_arrow07.svg";
import resume_arrow08 from "@public/assets/icons/resume_arrow08.svg";

import Image from "next/image";
import {motion} from "framer-motion";
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
    const y02 = useTransform(scrollYProgress, [0,1], [0,300]);
    const y03 = useTransform(scrollYProgress, [0,1], [0,180]);
    const y04 = useTransform(scrollYProgress, [0,1], [0,-20]);
    const y05 = useTransform(scrollYProgress, [0,1], [0,-50]);
    const y06 = useTransform(scrollYProgress, [0,1], [0,-300]);

    const r01 = useTransform(scrollYProgress, [0,1], [0,60]);
    const r02 = useTransform(scrollYProgress, [0,1], [0,-40]);
    const r03 = useTransform(scrollYProgress, [0,1], [0,20]);
    const r04 = useTransform(scrollYProgress, [0,1], [0,-50]);
    const r05 = useTransform(scrollYProgress, [0,1], [30,-50]);
    const r06 = useTransform(scrollYProgress, [0,1], [0,-60]);

    /*useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Value:", latest)
    })*/

    return (
        <section ref={container} id="_resume" className="relative z-20 w-full h-auto lg:py-52">

            {/*<motion.div className="absolute z-0 top-[-25%] left-[-10%] w-[120%] min-h-[150%] flex content-center justify-center items-center">*/}
            <motion.div className="absolute z-0 top-[-25%] left-[-5%] w-[110%] min-h-[150%] flex content-center justify-center items-center">

                {/*<motion.div style={{y: y01, rotateZ: r01}}
                            className="relative w-[22vw] h-[22vw] z-100 rounded-full bg-zinc-900 overflow-hidden">
                    <Image
                        fill
                        className="opacity-80"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={resume_arrow03}
                        alt="Resume"
                        priority
                    />
                </motion.div>*/}

                <motion.div style={{y: y02, rotateZ: r02}}
                            className="relative w-[22vw] h-[22vw] z-100 rounded-full bg-orange-500">
                    <Image
                        fill
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={resume_arrow05}
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y03, rotateZ: r03}}
                            className="relative w-[22vw] h-[22vw] z-100 rounded-full bg-zinc-800 flex justify-center items-center">
                    <Image
                        style={{width: '65%', height: '65%'}}
                        src={resume_arrow04}
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y04, rotateZ: r04}}
                            className="relative w-[22vw] h-[22vw] z-100 rounded-full bg-amber-200 flex justify-center items-center">
                    <Image
                        style={{width: '65%', height: '65%'}}
                        src={resume_arrow04}
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y05, rotateZ: r05}}
                            className="relative w-[22vw] h-[22vw] z-100 rounded-full bg-amber-300 flex justify-center items-center overflow-hidden">
                    <Image
                        style={{width: '75%', height: '75%', marginRight: '-5rem'}}
                        src={resume_arrow02}
                        alt="Resume"
                        priority
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-10 size-[3.5vw] bg-amber-200 rounded-full"></div>
                </motion.div>

                <motion.div style={{y: y06, rotateZ: r06}}
                            className="relative w-[22vw] h-[22vw] z-100 rounded-full flex justify-center items-center bg-sky-300">
                    <Image
                        style={{width: '75%', height: '75%'}}
                        src={resume_arrow08}
                        alt="Resume"
                        priority
                    />
                </motion.div>

            </motion.div>

            <Hirondelles/>
            <div className="_resume relative z-10 bg-[#fff] bg-opacity-95 lg:bg-opacity-[.95] max-w-[980px] p-5 text-[.8rem] leading-[1.25rem] m-[var(--main-padding)] sm:p-14 lg:-mt-[10px] lg:-mb-[10px] lg:m-auto">
                <ResumeHeader/>
                <div className="w-full flex flex-wrap justify-between lg:flex-row lg:pb-7">
                    {Items.map((item, index) =>
                        <div key={`key_${index}`} id={item.id} className="pb-8 w-full lg:w-[48%]">
                            <h3 className="text-[1.2rem] font-medium border-b-[1px] border-b-zinc-900 border-dashed pb-1 mb-5 overflow-hidden">
                                <span>{item.title}</span>
                            </h3>
                            {item.content}
                        </div>
                    )}
                </div>
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