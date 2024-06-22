"use client"

import {motion, useAnimation, useInView, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";
import Image from "@node_modules/next/image";

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
            description: "In March 2017, MOB HOTEL opened its doors in the Puces district of Saint Ouen, then six month later in Lyon's Confluence district. In 2022, he will open MOB HOUSE, a 3-in-1 hotel project, combining bedroom, office and meeting room in a single space. At last, at Cannes, Carnot.",
            details: [
                "Frontend/Backend development of the institutional website via MAGENTO CMS.",
                "Several graphic redesigns",
                "Monitoring and various developments",
                "Development Newsletters",
            ],
            underContruction: false,
            link: "https://www.mobhotel.com/",
            logo: "/assets/images/logo_mht-min.jpg",
            imgs: [
                {
                    mediaquery: "(min-width: 1024px)",
                    src: "/assets/images/mockup_mobhotel_desktop-min.jpg"
                },
                {
                    mediaquery: "(max-width: 1023px)",
                    src: "/assets/images/mockup_mobhotel_mobile_02.jpg"
                }
            ]
        },
        {
            id: 2,
            title: "MOBHOUSE",
            description: "A unique ecological and social boutique hotel located in the Puces de Paris. MOB HOUSE distinguishes itself through its commitment to eco-designed rooms (materials and craftsmanship), a certified organic restaurant-bar, natural, organic and made-in-France cosmetics.",
            details: [
                "Frontend/Backend development of the institutional website via MAGENTO CMS.",
                "Monitoring and various developments",
                "Development Newsletters"
            ],
            underContruction: false,
            link: "https://www.mobhouse.com/",
            logo: "/assets/images/logo_mhs-min.jpg",
            imgs: [
                {
                    mediaquery: "(min-width: 1024px)",
                    src: "/assets/images/mockup_mobhouse_desktop-min.jpg"
                },
                {
                    mediaquery: "(max-width: 1023px)",
                    src: "/assets/images/mockup_mobhouse_mobile-min.jpg"
                }
            ]
        },
        {
            id: 3,
            title: "Arr",
            description: "A personal Website about sound and music production, with some sound libraries for sale, blog articles, video tutorials...",
            details: [
                "Next JS / React development",
                "WooCommerce / Wordpress as a Headless CMS",
                "Tailwind CSS / Framer Motion"
            ],
            underContruction: true,
            link: "#",
            logo: "/assets/images/logo_works_3-min.jpg",
            imgs: [
                {
                    mediaquery: "(min-width: 1024px)",
                    src: "/assets/images/mockup_arr_desktop-min.jpg"
                },
                {
                    mediaquery: "(max-width: 1023px)",
                    src: "/assets/images/mockup_arr_desktop-min.jpg"
                }
            ]
        },

    ];

    return (
        <section ref={containerProjects} id="_projects" className="relative overflow-visible h-auto lg:h-[700vh]">

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