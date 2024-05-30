"use client"

import MobhouseHeader from "@components/projects/mobhouseHeader";
import MobhouseContent from "@components/projects/mobhouseContent";
import SimpleSlider from "@components/projects/simpleSlider";
import {motion, useAnimation, useInView, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";
import Image from "@node_modules/next/image";
import logoSquareMHS from "@public/assets/images/logo_square_mhs-min.jpg";
import logoSquareMHT from "@public/assets/images/logo_square_mht-min.jpg";

import useDimension from "@hook/useDimension";
import useCursorPosition from "@hook/useCursorPosition";
import Project from "@components/projects/project";
import useMouse from "@node_modules/@react-hook/mouse-position";
import Title from "@components/projects/title";


const Projects = () => {

    const { width, height } = useDimension();
    const { xPos, yPos } = useCursorPosition;

    const containerProjects = useRef(null);
    const mouse = useMouse(containerProjects, {
        enterDelay: 0,
        leaveDelay: 0
    });
    const { scrollYProgress } = useScroll({
        //layoutEffect: false,
        target: containerProjects,
        offset: ['start start', 'end end']
    });
    //const y01 = useTransform(scrollYProgress, [0,1], [0, (height * .2)]);
    //const r01 = useTransform(scrollYProgress, [0,1], [0, (height * .65)]);
    //const r02 = useTransform(scrollYProgress, [0,1], [0, -(height * .65)]);
    //const x = useMotionValue(0);
    const x= useTransform(scrollYProgress, [0,1], ['0%', '-75%']);
    const xImageProject= useTransform(scrollYProgress, [0,1], [0, 90]);

    /*useMotionValueEvent(r01, "change", (latest) => {
        console.log("Value:", latest)
    })*/

    let isMobile = (width < 1024);
    let horizontalScroll = (isMobile) ? {} : {x};

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }

    const Items = [
        {
            id: 1,
            title: "MOBHOTEL",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            underContruction: false,
            link: "https://www.mobhotel.com/",
            img: "/assets/images/Mockup_mhs_02-min.jpg"
        },
        {
            id: 2,
            title: "MOBHOUSE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            underContruction: false,
            link: "https://www.mobhouse.com/",
            img: "/assets/images/Mockup_mhs_01-min.jpg"
        },
        {
            id: 3,
            title: "Arr",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            underContruction: true,
            link: "https://www.mobhouse.com/",
            img: "/assets/images/logo_square_mhs-min.jpg"
        },

    ];

    return (
        <section ref={containerProjects} id="_projects" className="relative overflow-visible lg:h-[700vh]">

            {/*<motion.div
                animate={{
                    display: "inline",
                    opacity: 1,
                    height: 30,
                    width: 30,
                    fontSize: "16px",
                    backgroundColor: "#1e91d6",
                    x: mouseXPosition,
                    y: mouseYPosition,
                    transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 28
                    }
                }}
                className="cursor fixed hidden top-0 left-0 z-[50] w-10 h-10 rounded-full bg-zinc-950" />*/}

                <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center lg:overflow-hidden">
                    <motion.div style={horizontalScroll} className="relative lg:flex lg:gap-0">

                        <Title />

                        {Items.map((project, index) =>
                            <Project key={`k_${index}`} index={index} id={`project_${index}`}
                                     scrollXValue={xImageProject} project={project} />
                        )}

                    </motion.div>
                </div>


        </section>
    );
};

export default Projects;