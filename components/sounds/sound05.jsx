"use client"

import React, {useEffect, useRef, useState} from 'react';
import { motion } from "framer-motion";
//import "assets/p5/p5.sound";
//import "p5/lib/addons/p5.sound";

var x = 50;
var speed = 5;

const Sound05 = () => {

    const renderRef = useRef();
    var wW;
    var wH;

    useEffect(() => {
        const p5 = require("p5");
        //require("p5/lib/addons/p5.sound");

        wW = innerWidth;
        wH = innerHeight;
        window.addEventListener("resize", function() {
            wW = innerWidth;
            wH = innerHeight;
        });

        new p5(p => {

            class plusSign {
                constructor(x,y) {
                    this.x = x;
                    this.y = y;
                }

                display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

                    p.push();
                    p.translate(this.x, this.y);
                    p.fill(r,g,b);
                    //p.fill(avg);

                    if (dia>=tileSize) {
                        dia = tileSize;
                    }

                    p.rect(0, 0, dia, 1);
                    p.rect(0, 0, 1, dia);
                    p.pop();
                }
            }

            let angleInt = 0;
            let textureBox;
            let face;

            let bgTextureR = 245;
            let bgTextureG = 245;
            let bgTextureB = 244;

            let black = false;

            p.preload = () => {
                //p.song = loadSound('assets/sounds/03_37_Years_Later.flac');
                //face = p.loadImage('assets/backgrounds/texture_sounds.png');
                //face = p.loadImage('assets/backgrounds/face02_120x75.jpg');
                //face = p.loadImage('assets/backgrounds/uneSalmah.jpg');
                face = p.loadImage('assets/header/me01_test_04.jpg');
                //face = p.createCapture(p.VIDEO);
            }

            p.setup = () => {

                p.createCanvas(wH, wH)
                    .class('_sound05')
                    .parent(renderRef.current);
                //p.background(244,244,245);

                // Image Resize
                face.resize(wH, wH);

                /*face.size(p.width, p.height);
                face.hide();
                face.loop();*/
            }

            p.windowResized = () => {
                p.resizeCanvas(wH, wH);
                face.resize(wH, wH);
            }

            p.draw = () => {
                p.clear();
                //p.background(244,244,245);

                p.imageMode(p.CENTER);
                p.ellipseMode(p.CENTER);
                p.rectMode(p.CENTER);
                p.angleMode(p.DEGREES);

                let tileSize = 13;
                //image(face, 0, 0, width, height);
                //p.image(face, p.width/2, p.height/2);

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

                        let dia = p.floor(p.map(avg, 0 , 255, tileSize, 0));
                        if (black) {
                            dia = p.floor(p.map(avg, 0 , 250, 0, tileSize));
                        }

                        p.noStroke();
                        //noSmooth();
                        r = 0;g = 0;b = 0;

                        if (avg < 170)
                            new plusSign(i+tileSize/2 , j+tileSize/2).display(dia, tileSize-1, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB);

                        /*if (avg < 170) {

                            if (avg < 26) {
                                new plusSign(i+tileSize/2 , j+tileSize/2).display(7, tileSize-2, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB);
                            }
                            else if (avg > 25 && avg < 51) {
                                new circle2(i+tileSize/2 , j+tileSize/2).display(7, tileSize-2, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB);
                            }
                            else if (avg > 50 && avg < 76) {
                                new circle2(i+tileSize/2 , j+tileSize/2).display(7, tileSize-2, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB);
                            }
                            else if (avg > 75 && avg < 101) {
                                new circle2(i+tileSize/2 , j+tileSize/2).display(7, tileSize-2, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB);
                            }
                            else if (avg > 100 && avg < 126) {
                                new plusSign(i + tileSize / 2, j + tileSize / 2).display(7, tileSize-2, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB);
                            }
                            else if (avg > 125 && avg < 151) {
                                new verticalLine(i + tileSize / 2, j + tileSize / 2).display(7, tileSize-2, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB);
                            }
                            else if (avg > 150 && avg < 176) {
                                new circle2(i + tileSize / 2, j + tileSize / 2).display(7, tileSize-2, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB);
                            }
                            else if (avg > 175 && avg < 201) {
                                new plusSign(i + tileSize / 2, j + tileSize / 2).display(7, tileSize-2, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB);
                            }
                            else if (avg > 200 && avg < 226) {
                                new plusSign(i + tileSize / 2, j + tileSize / 2).display(7, tileSize-2, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB);
                            }
                            else if (avg > 225 && avg <= 255) {
                                new plusSign(i + tileSize / 2, j + tileSize / 2).display(7, tileSize-2, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB);
                            }

                        }*/

                    }
                }
                p.noLoop();
            }
        })

        //return () => {window.removeEventListener("resize", updateDim};
    }, [])

    return(
        <div className={`_sound-container _sound-container-05 w-full`} ref={renderRef}></div>
    )
}

export default Sound05;
