"use client"

import Image from "@node_modules/next/image";
import React, {useEffect, useRef, useState} from "react";
import {motion, useSpring, useMotionValueEvent, useScroll, useTransform} from 'framer-motion';
import mobhouseSlide09 from "@public/assets/images/mobhouse-slide-09-min.jpg";
import useDimension from "@hook/useDimension";

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
            max:120
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

    let styleImage = {
        style: {
            x:x, y:0
        }
    }
    if (width<1024) {
        styleImage = {
            style: {
                x:0, y:y
            }
        }
    }

    return (
        /*<div ref={containerProject} key={project.id} className="sticky top-0 z-2 w-screen h-screen flex flex-row items-center bg-zinc-50">*/
        <div id={id} ref={containerProject} className="w-full lg:w-screen h-auto lg:h-screen lg:flex lg:flex-row lg:items-center bg-zinc-50">
            <motion.div
                initial={{ opacity:0.25, /*backgroundColor:'#d#fafafa4d4d8'*/ }}
                whileInView={{ opacity:1, /*backgroundColor:''*/ }}
                transition={{ duration:1.15 }}
                className="w-full lg:w-4/6 h-screen flex items-center">
                <div className="mx-auto max-w-[75%] flex flex-col justify-between">
                    <h3 className="text-[3rem] leading-[normal] mb-[10%]">{project.title}</h3>
                    <div className="text-[1.1rem]">
                        <p>
                            {project.description}
                        </p>
                        <p className="mt-7">
                            <a
                                className="bg-zinc-950 text-zinc-100 py-2 px-3"
                                target="_blank"
                                href={project.link}>{project.link}</a>
                        </p>
                    </div>
                </div>
            </motion.div>
            <div ref={containerImage} className="relative w-full lg:w-2/6 h-screen overflow-hidden">


                        <motion.div
                            {...styleImage}
                            className="absolute top-0 left-0 w-full lg:w-[125%] h-[120%] lg:h-full mt-[-10%] lg:mt-[0] lg:ml-[-12%]">
                            <Image
                                fill
                                style={{objectFit: "cover"}}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                src={project.img}
                                alt="mobhouseSlide09"
                                priority
                            />
                        </motion.div>


            </div>
        </div>
    )
}

export default Project;
