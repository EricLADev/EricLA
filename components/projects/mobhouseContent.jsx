"use client"

import React, {useEffect, useState} from 'react';

import Image from 'next/image';
import logoSquareMHS from "@public/assets/images/logo_square_mhs-min.jpg";
import logoSquareMHT from "@public/assets/images/logo_square_mht-min.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {motion, Variants, cubicBezier, AnimatePresence} from "framer-motion";
import mobhouseSlide01 from "@public/assets/images/mobhouse-slide-01-min.jpg";
import mobhouseSlide09 from "@public/assets/images/mobhouse-slide-09-min.jpg";
import mobhouseSlide03 from "@public/assets/images/mobhouse-slide-03-min.jpg";
import mobhouseSlide08 from "@public/assets/images/mobhouse-slide-08-min.jpg";

const MobhouseContent = () => {

    //const bkgBezier = [.08,.8,.22,.97]
    const bkgBezier = [.98, .21, .42, .98]
    const contentBezier = [.08, .8, .22, .97]

    const gridVariants = {
        offScreen: {
        },
        onScreen: {
            transition: {
                duration: .01,
                delayChildren: .5,
                staggerChildren: .1,
            }
        }
    };

    const lineVariants = {
        offScreen: {
            y: 0
        },
        onScreen: {
            y: 0,
            transition: {
                duration: .01,
                //delayChildren: .5,
                staggerChildren: .1,
            }
        }
    };

    const ovgVariants1 = {
        offScreen: {
            left: -2000
        },
        onScreen: {
            left: '100%',
            transition: {
                duration: .4,
                ease: bkgBezier
            }
        },
    };

    const ovgVariants2 = {
        offScreen: {
            left: -2000
        },
        onScreen: {
            left: '100%',
            transition: {
                duration: .4,
                ease: contentBezier
            }
        },
    };

    const ovgLineVariants = {
        offScreen: {
            x: 10,
            width: '1px'
        },
        onScreen: {
            x: -500,
            width: '50px',
            transition: {
                duration: .4,
                ease: bkgBezier
            }
        },
    };

    const imgVariants = {
        offScreen: {
            left: -750,
            //opacity: 0
        },
        onScreen: {
            left: 0,
            //opacity: 1,
            transition: {
                ease: contentBezier,
                duration: .4
            }
        }
    };

    return (
        <div id="_level-02" className="w-full flex mt-1">

            <motion.div
                id="_mhs-line-01"
                className="w-full grid grid-cols-3 gap-1"
                initial={"offScreen"}
                whileInView={"onScreen"}
                viewport={{once: true, amount: 0.8}}
                variants={gridVariants}
            >

                <motion.div className="relative min-h-[500px] overflow-hidden" variants={lineVariants}>
                    <div>
                        <motion.div
                            className="absolute z-[5] top-0 right-0 w-[1px] h-full bg-zinc-950"
                            variants={ovgLineVariants}
                        >
                        </motion.div>
                        <motion.div
                            className="absolute z-[5] top-0 left-full w-[2000px] h-full bg-zinc-950"
                            variants={ovgVariants1}
                        >
                        </motion.div>
                        <motion.div
                            className="absolute z-[5] top-0 left-full w-[2000px] h-full bg-zinc-950"
                            variants={ovgVariants1}
                        >
                        </motion.div>
                    </div>
                    <div>
                        <motion.div className="absolute z-[1] w-full h-full" variants={imgVariants}>
                            <Image
                                src={mobhouseSlide09}
                                alt="e_l.A logo black"
                                placeholder="blur"
                                quality={100}
                                fill
                                sizes="(min-width: 808px) 50vw, 100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </motion.div>
                        <motion.div
                            className="absolute z-[5] top-0 left-full w-[2000px] h-full bg-zinc-950 opacity-30"
                            variants={ovgVariants2}
                        >
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div className="relative min-h-[500px] overflow-hidden" variants={lineVariants}>
                    <div>
                        <motion.div
                            className="absolute z-[5] top-0 right-0 w-[1px] h-full bg-zinc-950"
                            variants={ovgLineVariants}
                        >
                        </motion.div>
                        <motion.div
                            className="absolute z-[5] top-0 left-full w-[2000px] h-full bg-zinc-950"
                            variants={ovgVariants1}
                        >
                        </motion.div>
                        <motion.div
                            className="absolute z-[5] top-0 left-full w-[2000px] h-full bg-zinc-950"
                            variants={ovgVariants1}
                        >
                        </motion.div>
                    </div>
                    <div>
                        <motion.div className="absolute z-[1] w-full h-full" variants={imgVariants}>
                            <Image
                                src={mobhouseSlide03}
                                alt="e_l.A logo black"
                                placeholder="blur"
                                quality={100}
                                fill
                                sizes="(min-width: 808px) 50vw, 100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </motion.div>
                        <motion.div
                            className="absolute z-[5] top-0 left-full w-[2000px] h-full bg-zinc-950 opacity-30"
                            variants={ovgVariants2}
                        >
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div className="relative min-h-[500px] overflow-hidden" variants={lineVariants}>
                    <div>
                        <motion.div
                            className="absolute z-[5] top-0 right-0 w-[1px] h-full bg-zinc-950"
                            variants={ovgLineVariants}
                        >
                        </motion.div>
                        <motion.div
                            className="absolute z-[5] top-0 left-full w-[2000px] h-full bg-zinc-950"
                            variants={ovgVariants1}
                        >
                        </motion.div>
                        <motion.div
                            className="absolute z-[5] top-0 left-full w-[2000px] h-full bg-zinc-950"
                            variants={ovgVariants1}
                        >
                        </motion.div>
                    </div>
                    <div>
                        <motion.div className="absolute z-[1] w-full h-full" variants={imgVariants}>
                            <Image
                                src={mobhouseSlide08}
                                alt="e_l.A logo black"
                                placeholder="blur"
                                quality={100}
                                fill
                                sizes="(min-width: 808px) 50vw, 100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </motion.div>
                        <motion.div
                            className="absolute z-[5] top-0 left-full w-[2000px] h-full bg-zinc-950 opacity-30"
                            variants={ovgVariants2}
                        >
                        </motion.div>
                    </div>
                </motion.div>

            </motion.div>
            {/*<div id="_mhs-line-02" className="w-2/3 grid grid-cols-2 gap-2">
                <div className="bg-blue-200 relative min-h-[500px]">
                    <Image
                        src={mobhouseSlide08}
                        alt="e_l.A logo black"
                        placeholder="blur"
                        quality={100}
                        fill
                        sizes="(min-width: 808px) 50vw, 100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <div className="bg-blue-700 relative min-h-[500px]">
                    <Image
                        src={mobhouseSlide01}
                        alt="e_l.A logo black"
                        placeholder="blur"
                        quality={100}
                        fill
                        sizes="(min-width: 808px) 50vw, 100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <div className="bg-blue-400 relative min-h-[500px]">
                    <Image
                        src={mobhouseSlide09}
                        alt="e_l.A logo black"
                        placeholder="blur"
                        quality={100}
                        fill
                        sizes="(min-width: 808px) 50vw, 100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </div>*/}
            {/*<div>
                <p>Magento</p>
                <p>Module</p>
                <p>Développement Front & Back</p>
                <p>PHP / Mysql / JS / SCSS</p>
            </div>*/}

        </div>
    );
};

export default MobhouseContent;