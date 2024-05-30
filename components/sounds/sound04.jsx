"use client"

import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

const Sound04 = () => {
    const renderRef = useRef();

    useEffect(() => {
        const p5 = require("p5");

        let str = 'comingsoon!';
        let font;
        let radius;
        let startAngle =    0;     // angle where text should start
        let distanceAngle = 360;
        let angle = 0;
        let angle2 = 0;

        new p5(p => {

            p.preload = () => {
                font = p.loadFont('assets/fonts/IBMPlexMono-Regular.otf');
            }

            p.setup = () => {
                p.createCanvas(window.innerWidth, window.innerHeight)
                    .class('_sound04')
                    .parent(renderRef.current);
                p.background(244,244,245);

                radius = p.width/2;

                // font size is also dynamic!
                p.textSize(32);
                p.textFont(font);
                p.textAlign(p.CENTER, p.BASELINE);
            }

            p.draw = () => {
                p.background(244,244,245);
                p.stroke(212, 212, 216);
                p.strokeWeight(1);

                let angleBetweenLetters = p.radians(distanceAngle) / str.length;

                let fillValue;
                let textColor;

                let rotationValue;
                let cpt= 0;

                for(let l= 240; l>40; l-= 40) {

                    //if (cpt%2 === 0) {
                        //rotationValue = p.radians(startAngle) + angle + p.sin(p.frameCount * 0.025 * l/1000);
                        fillValue = p.color(244,244,245);
                        textColor = p.color(212, 212, 216);
                    //} else {
                        //rotationValue = -(p.radians(startAngle) + angle + p.sin(p.frameCount * 0.025 * l/1000));
                        //fillValue = p.color(212, 212, 212);
                        //textColor = p.color(212, 212, 212);
                    //}

                    rotationValue = p.sin(p.frameCount * 0.5 * l/10000) + angle2;

                    p.fill(fillValue);
                    p.circle(p.width/2,p.height/2, (l)*2);

                    p.push();
                    p.translate(p.width/2, p.height/2); // move to circle's center

                    // rotate to where text starts
                    p.rotate(rotationValue);

                    for (let i=0; i < str.length; i++) { // go through each letter in the text
                        p.push();
                        p.rotate(i * angleBetweenLetters); // rotate to angle
                        p.translate(0,-l-10);              // and translate to edge of circle
                        p.fill(textColor);
                        p.noStroke();
                        p.text(str[i], 0, 0);              // draw character at location
                        p.pop();
                    }
                    p.pop();
                    cpt++;
                }

                angle += .005;
                angle2 = angle + .0005;
            }

            p.windowResized = () => {
                p.resizeCanvas(window.innerWidth, window.innerHeight);
                p.background(244,244,245);
            }
        })
    }, [])

    return(
        <motion.div className="_sound-container _sound-container-04" ref={renderRef}></motion.div>
    )
}

export default Sound04;
