"use client"

import {motion, Variants, cubicBezier} from "framer-motion";

const Hirondelles = () => {
    return (
        <div className="_hirondelle-container hidden max-w-[1060px] m-auto justify-between xl:flex">
            <div className="_hirondelle relative w-[52px] h-[52px]">
            {/*<motion.div className="_hirondelle relative w-[52px] h-[52px]" whileInView={{ x: 0, opacity: 1, rotate:0, scale: 1 }} initial={{ x: -200, opacity: .4, rotate: 300, scale: 0.25 }} transition={{
                type: "spring",
                duration: 1,
                bounce: 0,
                delay: 0.25
            }} viewport={{ once: true }}>*/}
                <span className="absolute z-[1] top-[26px] left-0 block h-[1px] w-[52px] bg-zinc-900"></span>
                <span
                    className="absolute z-[1] top-[26px] left-0 block h-[1px] w-[52px] bg-zinc-900 rotate-90"></span>
                <span className="absolute z-[2] top-[18px] left-[18px] block h-[16px] w-[16px] bg-zinc-100"></span>
            {/*</motion.div>*/}
            </div>
            <div className="_hirondelle relative w-[52px] h-[52px]">
            {/*<motion.div className="_hirondelle relative w-[52px] h-[52px]" whileInView={{ x: 0, opacity: 1, rotate:0, scale: 1 }} initial={{ x: 200, opacity: .4, rotate: -300, scale: 0.25 }} transition={{
                type: "spring",
                bounce: 0,
                duration: 1,
                delay: 0.25
            }} viewport={{ once: true }}>*/}
                <span className="absolute z-[1] top-[26px] left-0 block h-[1px] w-[52px] bg-zinc-900"></span>
                <span
                    className="absolute z-[1] top-[26px] left-0 block h-[1px] w-[52px] bg-zinc-900 rotate-90"></span>
                <span className="absolute z-[2] top-[18px] left-[18px] block h-[16px] w-[16px] bg-zinc-100"></span>
            </div>
        </div>
    );
};

export default Hirondelles;