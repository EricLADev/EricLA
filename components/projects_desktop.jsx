"use client"

import SimpleSlider from "@components/projects/simpleSlider";
import {motion, useAnimation, useInView, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import React, {useEffect, useRef} from "react";
import Image from "@node_modules/next/image";
import cog01 from "@public/assets/backgrounds/cog01.svg";
import cog02 from "@public/assets/backgrounds/cog02.svg";
import cog03 from "@public/assets/backgrounds/cog03.svg";
import cog04 from "@public/assets/backgrounds/cog04.svg";
import cog05 from "@public/assets/backgrounds/cog05.svg";
import cog06 from "@public/assets/backgrounds/cog06.svg";
import useDimension from "@hook/useDimension";
import Project from "@components/projects/project";


const Projects = () => {

    const { width,height} = useDimension();
    const containerProjects = useRef(null);
    const { scrollYProgress } = useScroll({
        //layoutEffect: false,
        target: containerProjects,
        //offset: ['start start', 'end end']
    });
    //const y01 = useTransform(scrollYProgress, [0,1], [0, (height * .2)]);
    //const r01 = useTransform(scrollYProgress, [0,1], [0, (height * .65)]);
    //const r02 = useTransform(scrollYProgress, [0,1], [0, -(height * .65)]);
    const x= useTransform(scrollYProgress, [0,1], ['0%', '-75%']);

    /*useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Value:", latest)
    })*/

    const titleH2 = "<lastProjects/>";

    return (
        <section ref={containerProjects} id="_projects" className="relative h-[700vh] overflow-visible">
            {/*<SimpleSlider/>*/}
            {/*<article className="max-w-[1420px] m-auto px-10 py-[10rem]">
                <MobhouseHeader />
                <MobhouseContent />
            </article>*/}

            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="relative flex gap-0">
                    {/*<div className="_projects ml-[100vw] flex gap-0">*/}
                    {/*<div className="_projects relative flex gap-0 overflow-hidden">*/}

                        <div className="w-screen h-screen flex items-center justify-center">
                            <TitleLetters myText={titleH2}/>
                        </div>

                        {ItemsProjects.map((project, index) =>
                            <Project project={project}/>
                        )}

                    {/*</div>*/}
                </motion.div>
            </div>
        </section>
);
};

const TitleLetters = ({
    myText
}) => {

    const ref = useRef(null);

    const variants = {
        hidden: {
            opacity: 0.5,
        },
        visible: {
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0,
                ease: [0, .65, .25, .95],
                duration: 1,
                delayChildren: .2,
                //staggerDirection: -1,
                staggerChildren: 0.25 }
        },
    };

    const itemsVariants = {
        hidden: {
            opacity:1,
            x: 200
        },
        visible: {
            opacity:0.2,
            x:0,
            transition: {
                type: 'spring',
                bounce: 0,
                ease: 'easeOut',
                duration: 2
            }
        }
    };

    const controls = useAnimation();
    const inView = useInView(ref);
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.h2
            ref={ref}
            initial="hidden"
            whileInView="visible"
            //variants={variants}
        >
            {myText.split("").map((item, index) => {
                return <motion.span variants={itemsVariants} key={index}>{item}</motion.span>
            })}
        </motion.h2>
    )
}

const ItemsProjects = [
    {
        id: 1,
        title: "MOBHOTEL",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        underContruction: false,
        link: "https://www.mobhotel.com/",
        img: "/assets/images/logo_square_mht-min.jpg"
    },
    {
        id: 2,
        title: "MOBHOUSE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        underContruction: false,
        link: "https://www.mobhouse.com/",
        img: "/assets/images/logo_square_mhs-min.jpg"
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

export default Projects;