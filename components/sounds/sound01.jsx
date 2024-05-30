"use client"

import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

var x = 50;
var speed = 5;
const Sound01 = () => {
    const renderRef = useRef();

    useEffect(() => {
        /*const p5 = require("p5");

        new p5(p => {
            p.setup = () => {
                p.createCanvas(window.innerWidth/3, window.innerHeight/2)
                    .class('_sound01')
                    .parent(renderRef.current);

            }

            p.draw = () => {
                //p.background(255);
                p.rectMode(p.CENTER);
                p.fill(0);
                p.stroke(0);
                for (let i=0;i<20;i++) {
                    p.rect(p.map(i, 0, 20, 0, p.width+10), p.random(50, 150), 10);
                }
                p.noLoop();
            }

            p.windowResized = () => {
                p.resizeCanvas(window.innerWidth/3, window.innerHeight/2);
            }
        })*/
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
            className="_sound-container _sound-container-01"
            initial="offscreen"
            whileInView="onscreen"
            variants={sound02Variants}
            viewport={{ once: true, amount: 0.8 }}
        >
        </motion.div>
    )
}

export default Sound01;
