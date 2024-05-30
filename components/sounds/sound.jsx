"use client"

import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
//import "assets/p5/p5.sound";
//import "p5/lib/addons/p5.sound";

var x = 50;
var speed = 5;
const Sound05 = () => {
    const renderRef = useRef();

    useEffect(() => {
        const p5 = require("p5");
        //require("p5/lib/addons/p5.sound");

        new p5(p => {

            let angleInt = 0;
            let textureBox;

            p.preload = () => {
                //p.song = loadSound('assets/sounds/03_37_Years_Later.flac');
                textureBox = p.loadImage('assets/backgrounds/texture_sounds.png');
            }

            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
                    .class('_sound05')
                    .parent(renderRef.current);
                p.background(90, 125, 200);
            }

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            }

            p.draw = () => {
                p.frameRate(30);
                // If we're travelling towards the right or left

                // Box Background
                p.push();
                p.rotateX(angleInt);
                p.rotateY(angleInt);
                p.rotateZ(angleInt);
                p.noStroke();
                p.texture(textureBox);
                p.box(2250);
                p.pop();

                /*if (speed > 0) {
                    // If the ball has reached the end of the container or not
                    if (x + 50 < p.width) {
                        x += speed
                    } else {
                        speed = -speed;
                    }
                } else {
                    if (x - 50 > 0) {
                        x += speed;
                    } else {
                        speed = -speed;
                    }
                }

                p.background(90, 125, 200);
                p.ellipse(x, 100, 100);*/
                angleInt += 0.0002;
            }
        })
    }, [])

    return(
        <motion.div className="_sound-container _sound-container-05" ref={renderRef}></motion.div>
    )
}

export default Sound05;
