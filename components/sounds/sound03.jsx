"use client"

import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

let x=0;
let y=0;
let mWidth=20;
let largeurTrait=3;
const Sound03 = () => {
    const renderRef = useRef();

    useEffect(() => {
        const p5 = require("p5");

        new p5(p => {

            let x= 0;
            let y= 0;
            let mWidth= 40;

            p.setup = () => {
                p.createCanvas(window.innerWidth/3, window.innerHeight/2)
                    .class('_sound03')
                    .parent(renderRef.current);
                p.background(255);

            }

            p.windowResized = () => {
                p.resizeCanvas(window.innerWidth/3, window.innerHeight/2);
            }

            p.draw = () => {

                //p.stroke(255);
                //p.strokeWeight(p.random(0,10));
                p.strokeWeight(1);
                if (p.random(1) < 0.5) {
                    p.line(x,y,x+mWidth,y+mWidth);
                } else {
                    p.line(x,y+mWidth,x+mWidth,y);
                }

                x=x+mWidth;
                if(x > p.width) {
                    x=0;
                    y=y+mWidth;
                }
            }

        })
    }, [])

    const sound03Variants = {
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
            className="_sound-container _sound-container-03"
            initial="offscreen"
            whileInView="onscreen"
            variants={sound03Variants}
            viewport={{ once: true, amount: 0.8 }}
        >
        </motion.div>
    )
}

export default Sound03;
