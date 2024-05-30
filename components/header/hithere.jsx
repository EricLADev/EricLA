"use client";

import {Canvas, canvas} from '@react-three/fiber';
import {Environment} from "@node_modules/@react-three/drei";
import Model from "@components/header/Model";
import {useEffect} from "react";
import {useMotionValue} from "@node_modules/framer-motion";
import {useSpring} from "framer-motion";

const HiThere = () => {

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothMouse = {
        x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),
        y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})
    }

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window;
        const x = clientX / innerWidth;
        const y = clientY / innerHeight;
        mouse.x.set(x);
        mouse.y.set(y);
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)
        return () => { window.removeEventListener("mousemove", manageMouseMove) }
    }, []);

    return (
        <Canvas orthographic camera={{ position:[0,0,200], zoom:200 }}>
            <Model mouse={smoothMouse} />
            <Environment preset="sunset" />
        </Canvas>
    );
};

export default HiThere;