"use client"

import {motion, useDragControls} from "framer-motion";


const SplashScreen = () => {

    const variantA = {
        hidden: {
            x: 0,
        },
        visible: {
            x: '100%',
            transition: {
                //type: "spring",
                //bounce: 0,
                ease: [0.85, 0, 0.15, 1],
                duration: 1,
                //delayChildren: .25,
                //staggerDirection: -1,
                //staggerChildren: .2
                },
            transitionEnd: {
                zIndex:-10,
                display: "none"
            }
        },
    };

    const variantB = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 0,
            transition: {
                ease: [0.85, 0, 0.15, 1],
                duration: 1.15,
            },
            transitionEnd: {
                zIndex:-10,
                display: "none"
            }
        },
    };

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variantA}
                //className="bg-zinc-950 fixed top-0 -left-[50%] w-[200%] h-[125%] z-40 rounded-b-[50%]">
                className="bg-zinc-950 fixed top-0 left-0 w-full h-full z-[100]">

            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variantB}
                //className="bg-zinc-950 fixed top-0 -left-[50%] w-[200%] h-[125%] z-40 rounded-b-[50%]">
                className="bg-zinc-950 fixed top-0 left-0 w-full h-full z-[90]">

            </motion.div>
        </>
)
    ;
};

export default SplashScreen;