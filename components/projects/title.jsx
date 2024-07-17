"use client"

import Image from "@node_modules/next/image";
import React, {useEffect, useRef} from "react";
import {motion, useAnimationFrame, useScroll, useSpring, useTransform, useVelocity, useMotionValue} from 'framer-motion';
import { wrap } from "@motionone/utils";

const Title = ({myText}) => {

    const containerTitle = useRef(null);

    return (
        <div ref={containerTitle}
             className="relative w-full lg:w-screen h-screen flex flex-col overflow-hidden bg-slate-300 opacity-80">
            <div className="
                relative -top-[25%] -left-[20%] -rotate-12 w-[140%]
                uppercase font-urbanist text-blue-100 text-[10vh] lg:text-[15vh] font-[900]
                ">
                <div className=""><ParallaxText baseVelocity={.40}>DerniersProjets#</ParallaxText></div>
                <div className="text-[6vh] lg:text-[10vh] font-[500]"><ParallaxText baseVelocity={-.45}>LastProjects#</ParallaxText></div>
                <div className="text-[6vh] lg:text-[10vh]"><ParallaxText baseVelocity={.35}>DerniersProjets#</ParallaxText></div>
                <div className="font-[500]"><ParallaxText baseVelocity={.20}>LastProjects#</ParallaxText></div>
                <div><ParallaxText baseVelocity={.45}>DerniersProjets#</ParallaxText></div>
                <div className="font-[500]"><ParallaxText baseVelocity={-.40}>LastProjects#</ParallaxText></div>
                <div className=""><ParallaxText baseVelocity={.60}>DerniersProjets#</ParallaxText></div>
                <div className="font-[500]"><ParallaxText baseVelocity={-.95}>LastProjects#</ParallaxText></div>
                <div className="text-[18vh] lg:text-[22vh] font-[300]"><ParallaxText baseVelocity={.40}>DerniersProjets#</ParallaxText></div>
                <div className="text-[21vh] lg:text-[27vh]"><ParallaxText baseVelocity={.65}>LastProjects#</ParallaxText></div>
                <div className=""><ParallaxText baseVelocity={.40}>DerniersProjets#</ParallaxText></div>
                <div className="font-[300]"><ParallaxText baseVelocity={-.45}>LastProjects#</ParallaxText></div>
                <div className="font-[500]"><ParallaxText baseVelocity={.55}>DerniersProjets#</ParallaxText></div>
                <div className=""><ParallaxText baseVelocity={.20}>LastProjects#</ParallaxText></div>
            </div>
        </div>

    )
}

function ParallaxText({children, baseVelocity = 100}) {
    const baseX = useMotionValue(0);
    const {scrollY} = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -.75;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = .75;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="flex flex-nowrap m-0 leading-[.8] whitespace-nowrap overflow-hidden">
            <motion.div className="flex" style={{x}}>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>
    );
}

export default Title;
