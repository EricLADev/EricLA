"use client"

import Image from "next/image";
import {useRef} from "react";
import {motion, useScroll, useTransform} from 'framer-motion';
import useDimension from "@hook/useDimension";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {styled, Tooltip, tooltipClasses} from "@mui/material";

const Project = ({id, index, scrollXValue, project}) => {

    const { width} = useDimension();
    const containerProject = useRef(null);
    const containerImage = useRef(null);
    const parallaxValues = [
        {
            min:20,
            max:60
        },
        {
            min:50,
            max:90
        },
        {
            min:80,
            max:100
        }
    ];
    const x = useTransform(scrollXValue, [parallaxValues[index].min, parallaxValues[index].max], [-150, 150]);

    /*useMotionValueEvent(scrollXValue, "change", (latest) => {
        console.log("Value:", latest)
    })*/

    const { scrollYProgress } = useScroll({
        target: containerImage,
        offset: ['start end', 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    let initial= {scale: 1, rotate: '45deg'};
    let whileHover= {scale: 1.05, rotate: '-45deg'};

    let styleImage = {
        style: {
            x:x, y:1
        }
    }
    if (width<1024) {
        styleImage = {
            style: {
                x:0, y:y
            }
        }

        initial = {}
        whileHover = {}
    }

    const handleLinkClick = (e, uc) => {
        if (uc) {
            e.preventDefault();
            return false;
        }
    }

    const tooltipVariant = {
        isntHovered: {
            opacity: 0,
            zIndex:-2
        },
        isHovered: {
            opacity: .75,
            zIndex:10,
            transition: {
                //type: "spring",
                //bounce: 0,
                //ease: [0,.65,.25,.95],
                duration: .55}
        },
    };

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} slotProps={{
            popper: {
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 14],
                        },
                    },
                ],
            },
        }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: 'transparent',
            border: '0 none',
            fontSize: '13px',
            fontWeight: '400',
            marginTop: '50px'
        },
    }));

    return (
        /*<div ref={containerProject} key={project.id} className="sticky top-0 z-2 w-screen h-screen flex flex-row items-center bg-zinc-50">*/
        <div id={id} ref={containerProject}
             className="w-full lg:w-screen h-auto lg:h-screen lg:flex lg:flex-row lg:items-center bg-zinc-50">

            {/*
                Project details
            */}
            <div className="w-full lg:w-4/6 h-screen flex items-center">
                <div
                    className="mx-auto max-w-[90%] 4xl:max-w-[75%] flex flex-col justify-between"
                >
                    <div className="relative flex flex-col lg:flex-row justify-between lg:items-center">

                        {/*
                            Logo
                        */}
                        <motion.div
                            initial={{opacity: 0.25}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 1}}
                            className="size-20 mb-3 lg:m-0 lg:size-[200px] 2xl:size-[300px]">
                            <div
                                className="w-full h-full relative p-10 rounded-full overflow-hidden">
                                <Image
                                    fill
                                    style={{objectFit: "cover"}}
                                    src={project.logo}
                                    alt={project.title}
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/*
                            Description
                        */}
                        <motion.div
                            initial={{opacity: 0.25}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 1}}
                            className="w-auto lg:w-[calc(100%-300px)] 2xl:w-[calc(100%-430px)] px-5 4xl:px-10">
                            <h3
                                className="absolute top-[22px] left-[98px] lg:relative lg:top-auto lg:left-auto text-[2.25rem] 2xl:text-[3rem] font-medium leading-[normal] -ml-[3px]"
                            >
                                {project.title}
                            </h3>
                            {/*<div>
                                <p>Move the mouse around in this box to watch its coordinates change.</p>
                                <p><code>pageX</code>: <span className="xx">n/a</span></p>
                                <p><code>pageY</code>: <span className="yy">n/a</span></p>
                            </div>*/}
                            <div className="relative text-[.9rem] 2xl:text-[1rem]">
                                <p className="pb-2">
                                    {project.description}
                                </p>
                                <ul className="pb-4 ml-6 list-outside list-image-right">
                                    {project.details.map((detail, index) =>
                                        <li key={`k_${index}`} index={index}><span
                                            className="relative top-[-5px] left-[0px]">{detail}</span></li>
                                    )}
                                </ul>
                            </div>
                        </motion.div>

                        {/*
                            Link
                        */}
                        <motion.div
                            initial={{opacity: 0.25}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 1}}
                            className="tooltipBox flex items-center">

                            <HtmlTooltip
                                title={
                                    <span
                                        className="bg-zinc-950 bg-opacity-90 text-zinc-100 pl-[12px] pr-[16px] py-[8px] rounded-[7px] flex justify-center items-center">
                                        <motion.span
                                            animate={{opacity: 1}}
                                            transition={{repeat: Infinity, duration: .2}}
                                            className="opacity-0 text-[1rem] flex items-center">
                                            <span className="flex"><OpenInNewIcon sx={{ fontSize: '14px' }} /><span className="block w-[1px]"></span></span>_
                                        </motion.span>

                                        {project.underContruction && (
                                            <>&nbsp;coming&nbsp;soon</>
                                        )
                                        }
                                        {!project.underContruction && (
                                            <>&nbsp;{project.link}</>
                                        )
                                        }
                                    </span>
                                } followCursor
                            >
                                <motion.a
                                    /*onMouseMove={handleTooltipMove}
                                    onMouseEnter={(e) => {
                                        handleTooltipIn(e);
                                    }}
                                    onMouseLeave={handleTooltipOut}*/
                                    className="tooltipBox size-16 lg:size-24 2xl:size-32 border-[1px] border-zinc-800 rounded-full flex justify-center items-center overflow-hidden -rotate-45 lg:rotate-45
                                    bg-[url('/assets/icons/arrow-thin.svg')] bg-no-repeat bg-cover"
                                    target="_blank"
                                    href={project.link}
                                    onClick={(e) => {
                                        handleLinkClick(e, project.underContruction);
                                    }}
                                    initial={initial}
                                    whileHover={whileHover}
                                    /*transition={{ type: "spring", stiffness: 200, damping: 20 }}*/
                                >
                                    {/*<span
                                        className="size-12 relative rounded-full flex justify-center items-center">
                                        <LaunchIcon className="text-[2rem] text-zinc-950 font-light rotate-45"/>
                                    </span>*/}
                                </motion.a>
                            </HtmlTooltip>

                        </motion.div>
                    </div>
                </div>
            </div>

            {/*
                Parallax Image
            */}
            <div
                ref={containerImage} className="relative w-full lg:w-2/6 h-screen overflow-hidden">
                <motion.div
                    {...styleImage}
                    className="absolute top-0 left-0 w-full lg:w-[125%] h-[120%] lg:h-full mt-[-10%] lg:mt-[0] lg:ml-[-12%]">
                    <picture>
                        {project.imgs.map((img, index) =>
                            <source
                                key={`src_${index}`}
                                index={index}
                                media={img.mediaquery}
                                srcSet={img.src}
                            />
                        )}
                        <Image
                            fill
                            style={{objectFit: "cover"}}
                            src={project.imgs[0].src} // Default image
                            alt="Descriptive text for the image"
                            priority
                        />
                    </picture>
                </motion.div>
            </div>
        </div>
    )
}

export default Project;
