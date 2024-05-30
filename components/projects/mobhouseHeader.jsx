"use client"

import React, {useEffect, useState} from 'react';

import Image from 'next/image';
import logoSquareMHS from "@public/assets/images/logo_square_mhs-min.jpg";
import logoSquareMHT from "@public/assets/images/logo_square_mht-min.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {motion, Variants, cubicBezier} from "framer-motion";
import mobhouseSlide01 from "@public/assets/images/mobhouse-slide-01-min.jpg";
import mobhouseSlide09 from "@public/assets/images/mobhouse-slide-09-min.jpg";
import mobhouseSlide03 from "@public/assets/images/mobhouse-slide-03-min.jpg";
import mobhouseSlide08 from "@public/assets/images/mobhouse-slide-08-min.jpg";

const MobhouseHeader = () => {

    //const bkgBezier = [.08,.8,.22,.97]
    const bkgBezier = [.98, .21, .42, .98]
    const contentBezier = [.08, .8, .22, .97]

    {/* --------------------------------------------------------------------------------------------------------------------------------------- */
    }

    const levelVariants = {
        offScreen: {
        },
        onScreen: {
            transition: {
                //type: "spring",
                //ease: bkgBezier,
                duration: .01,
                delayChildren: .5,
                //staggerChildren: .25
            }
        }
    };

    {/* --------------------------------------------------------------------------------------------------------------------------------------- */
    }

    const containerLeftVariants = {
        offScreen: {
            opacity: 1,
        },
        onScreen: {
            opacity: 1,
            transition: {
                duration: .01,
                //delayChildren: .85,
                staggerChildren: .2,
                delayChildren: .6
            }
        }
    };

    const containerRightVariants = {
        offScreen: {
            opacity: 1,
        },
        onScreen: {
            opacity: 1,
            transition: {
                duration: .01,
                delayChildren: .95,
            }
        }
    };

    {/* --------------------------------------------------------------------------------------------------------------------------------------- */
    }

    const titleVariants = {
        offScreen: {
            y: 75,
            opacity: 0,
        },
        onScreen: {
            y: 0,
            opacity: 1,
            transition: {
                ease: contentBezier,
                duration: .4
            }
        }
    };

    const textVariants = {
        offScreen: {
            y: 75,
            opacity: 0,
        },
        onScreen: {
            y: 0,
            opacity: 1,
            transition: {
                ease: contentBezier,
                duration: .4
            }
        }
    };

    const imgVariants = {
        offScreen: {
            y: 75,
            opacity: 0
        },
        onScreen: {
            y: 0,
            opacity: 1,
            transition: {
                ease: contentBezier,
                duration: .4
            }
        }
    };

    {/* --------------------------------------------------------------------------------------------------------------------------------------- */
    }

    const bkgLeftVariants = {
        offScreen: {
            width: 0
        },
        onScreen: {
            width: '50vw',
            transition: {
                duration: .4,
                //ease: bkgBezier
                //ease: 'easeInOut'
                ease: bkgBezier
            }
        }
    };

    const bkgRightVariants = {
        offScreen: {
            width: 0
        },
        onScreen: {
            width: '500px',
            transition: {
                delay: .8,
                duration: .4,
                //ease: bkgBezier
                //ease: 'easeInOut'
                ease: bkgBezier
            }
        }
    };

    return (
        <motion.div
            id="_level-01"
            className="w-full flex min-h-[500px]"
            initial={"offScreen"}
            whileInView={"onScreen"}
            viewport={{ once: true, amount: 0.8 }}
            variants={levelVariants}
        >
            <div className="relative w-1/2">

                {/* BKG Left */}
                <motion.div className="absolute top-0 right-0 z-0 bg-zinc-200 h-full border-l-[.75rem] border-r-[.25rem] border-zinc-100"
                            variants={bkgLeftVariants}></motion.div>

                <motion.div className="relative z-10 h-full py-20 pr-20 flex flex-col justify-between overflow-hidden"
                            variants={containerLeftVariants}>
                    <motion.h2 className="text-[4rem] leading-[normal]" variants={titleVariants}>
                        <span>MOBHOUSE</span></motion.h2>
                    <motion.p className="text-[1.25rem] leading-[normal]" variants={textVariants}>Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
                        tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
                        diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
                        nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
                    </motion.p>
                </motion.div>

            </div>
            <div className="relative w-[500px] h-[500px] flex justify-start">

                {/* BKG Right */}
                <motion.div className="absolute top-0 left-0 z-0 bg-zinc-950 h-full"
                            variants={bkgRightVariants}></motion.div>

                <motion.div className="relative w-full h-full overflow-hidden" variants={containerRightVariants}>
                    <motion.div className="relative w-full h-full" variants={imgVariants}>
                        <Image
                            src={logoSquareMHS}
                            alt="e_l.A logo black"
                            id="_logo_black"
                            className=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{width: 'auto', height: '100%'}}
                            priority
                        />
                    </motion.div>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default MobhouseHeader;