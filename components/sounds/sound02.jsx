"use client"

import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

var x = 50;
var speed = 5;
let buns = 128;

const Sound02 = () => {
    const renderRef = useRef();

    useEffect(() => {
        const p5 = require("p5");

        new p5(p => {

            p.preload = () => {
                //p.soundFormats('mp3', 'ogg');
                //let track = p.loadSound("test.mp3");
            }

            p.setup = () => {
                //let track = p.loadSound("test.mp3");
                p.createCanvas(window.innerWidth/3, window.innerHeight/2)
                    .class('_sound02')
                    .parent(renderRef.current);
                //p.fft = new p5.FFT(0.8, buns);
                p.background(0);
            }

            p.windowResized = () => {
                p.resizeCanvas(window.innerWidth/3, window.innerHeight/2);
                p.background(0);
            }

            p.draw = () => {

            }

        })
    }, [])

    const sound02Variants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return(
        <motion.div
            ref={renderRef}
            className="_sound-container _sound-container-02"
            initial="offscreen"
            whileInView="onscreen"
            variants={sound02Variants}
            viewport={{ once: true, amount: 0.8 }}
        >
        </motion.div>
    )
}

export default Sound02;
