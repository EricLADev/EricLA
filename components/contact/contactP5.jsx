"use client"

import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

const ContactP5 = () => {
    const renderRef = useRef();

    useEffect(() => {
        const p5 = require("p5");

        new p5(p => {

            let face;
            let fontpers;

            p.preload = () => {
                face = p.createVideo("assets/videos/phone02_black.mp4");
                //fontpers = p.loadFont('assets/_fonts/_IBM/OpenType/IBM-Plex-Mono/IBMPlexMono-Regular.otf');
            }

            p.setup = () => {
                p.createCanvas(800, 800)
                    .class('_sound05')
                    .parent(renderRef.current);
                face.size(p.width, p.height);
                face.loop();
                face.hide();
            }

            p.draw = () => {
                p.frameRate(30);

                p.background(0);
                p.noStroke();

                p.ellipseMode(p.CENTER);
                p.rectMode(p.CENTER);
                p.angleMode(p.DEGREES);

                let tileSize = 23;
                //image(face, 0, 0, width, height);

                let w = p.width / face.width;
                let h = p.height / face.height;

                let r = 0;
                let g = 0;
                let b = 0;

                face.loadPixels();

                for (let i = 0; i < face.width; i+=tileSize) {
                    for (let j = 0; j < face.height; j+=tileSize) {

                        const pixelIndex = (i + j * face.width) * 4

                        r = face.pixels[pixelIndex];
                        g = face.pixels[pixelIndex + 1];
                        b = face.pixels[pixelIndex + 2];
                        const avg = (r + g + b) / 3;

                        /*let dia = floor(map(avg, 0 , 255, tileSize, 0));
                        if (black) {
                            dia = floor(map(avg, 0 , 255, 0, tileSize));
                        }

                        const lenSVG = densitySVG.length;
                        const charIndexSVG = floor(map(avg, 0, 255, lenSVG,0));

                        const lenChar = densityChar.length;
                        const charIndexChar = floor(map(avg, 0, 255, lenChar, 0));*/

                        //r = 0;g = 0;b = 0;
                        //r = 255;g = 90;b = 90;
                        p.fill(r,g,b);

                        p.textSize(12);
                        p.textAlign(p.TOP, p.LEFT);
                        //p.textFont(fontpers);

                        let randomTileNb = p.floor(p.random(0,2));
                        p.text(randomTileNb, i * w + w * 0.5, j * h + h * 0.5);
                    }
                }
            }
        })
    }, [])

    return(
        <motion.div className="_contactP5-container5" ref={renderRef}></motion.div>
    )
}

export default ContactP5;
