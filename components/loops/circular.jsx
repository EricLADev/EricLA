"use client"

import {motion, useAnimationFrame, useScroll, useSpring, useTransform, useVelocity, useMotionValue} from 'framer-motion';
import { wrap } from "@motionone/utils";
import {useRef} from "react";

const Circular = ({ children, clssnm, baseVelocity = 100 }) => {

    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const rotateZ = useTransform(baseX, (v) => `${wrap(0, 360, v)}deg`);
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {

        let moveBy = directionFactor.current * baseVelocity * (delta / 100);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -.85;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = .85;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <motion.div className={clssnm} style={{rotateZ}}>
            {children}
        </motion.div>
    );
};

export default Circular;