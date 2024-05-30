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

            class circle2 {
                constructor(x,y) {
                    this.x = x;
                    this.y = y;
                }

                display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

                    if (dia>=tileSize) {
                        dia = tileSize;
                    }

                    p.push();
                    p.fill(r,g,b)
                    p.translate(this.x, this.y);

                    p.fill(r,g,b);
                    p.ellipse(0, 0, dia, dia);
                    p.pop();
                }
            }

            class strokeCircle {
                constructor(x,y) {
                    this.x = x;
                    this.y = y;
                }

                display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

                    if (dia>=tileSize) {
                        dia = tileSize;
                    }

                    let strokeSize = p.floor(dia/2);
                    if (strokeSize%2 === 0) strokeSize = strokeSize+1;

                    p.push();
                    p.translate(this.x, this.y);
                    p.stroke(r, g, b);
                    p.strokeWeight(strokeSize);
                    p.fill(bgTextureR, bgTextureG, bgTextureB);
                    p.ellipse(0, 0, tileSize - strokeSize);
                    p.pop();
                }
            }

            class strokeSquare {
                constructor(x,y) {
                    this.x = x;
                    this.y = y;
                }

                display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

                    if (dia>=tileSize) {
                        dia = tileSize;
                    }

                    let strokeSize = p.floor(dia/2);
                    if (strokeSize%2 === 0) strokeSize = strokeSize+1;

                    p.push();
                    p.translate(this.x, this.y);
                    p.stroke(r, g, b);
                    p.strokeWeight(strokeSize);
                    p.fill(bgTextureR, bgTextureG, bgTextureB);
                    p.rect(0, 0, tileSize - strokeSize);
                    p.pop();
                }
            }

            class plusSign {
                constructor(x,y) {
                    this.x = x;
                    this.y = y;
                }

                display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

                    p.push();
                    p.translate(this.x, this.y);
                    p.fill(r,g,b);

                    if (dia>=tileSize) {
                        dia = tileSize-2;
                    }

                    p.rect(0, 0, dia, 1);
                    p.rect(0, 0, 1, dia);
                    p.pop();
                }
            }

            class crossRectangle {
                constructor(x,y) {
                    this.x = x;
                    this.y = y;
                }

                display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

                    p.push();
                    p.translate(this.x, this.y);
                    p.fill(r,g,b);

                    if (dia>=tileSize) {
                        dia = tileSize;
                    }

                    p.rect(0, 0, tileSize, dia*.3);
                    p.rect(0, 0, dia*.3, tileSize);
                    p.pop();
                }
            }

            class crossDiagRectangle {
                constructor(x,y) {
                    this.x = x;
                    this.y = y;
                }

                display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

                    p.push();
                    p.translate(this.x, this.y);
                    p.fill(r,g,b);

                    if (dia>=tileSize) {
                        dia = tileSize;
                    }
                    p.rotate(45);
                    p.rect(0, 0, tileSize, dia*.3);
                    p.rotate(180);
                    p.rect(0, 0, dia*.3, tileSize);
                    p.pop();
                }
            }

            class verticalLineRandom {
                constructor(x,y) {
                    this.x = x;
                    this.y = y;
                }

                display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

                    dia = p.floor(p.map(dia, 1, tileSize, 1, tileSize-5));
                    p.push();
                    p.translate(this.x, this.y);
                    p.fill(r,g,b);
                    for(let k=1;k<dia;k++) {
                        p.rect(p.random(1,tileSize)- tileSize/2, 0, 1, tileSize);
                    }
                    p.pop();
                }
            }

            class verticalLine {
                constructor(x,y) {
                    this.x = x;
                    this.y = y;
                }

                display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

                    let nbLine = p.floor(p.map(dia, 1, tileSize, 1, 8));

                    p.push();
                    p.translate(this.x, this.y);
                    p.fill(r,g,b);
                    //rotate(millis() / 100);

                    switch (nbLine) {
                        case 1:
                            break;
                        case 2:
                            p.rect(0, 0, 1, tileSize);
                            break;
                        case 3:
                            p.rect(-2, 0, 1, tileSize);
                            p.rect(2, 0, 1, tileSize);
                            break;
                        case 4:
                            p.rect(-4, 0, 1, tileSize);
                            p.rect(0, 0, 1, tileSize);
                            p.rect(4, 0, 1, tileSize);
                            break;
                        case 5:
                            p.rect(-4, 0, 1, tileSize);
                            p.rect(-2, 0, 1, tileSize);
                            p.rect(0, 0, 1, tileSize);
                            p.rect(2, 0, 1, tileSize);
                            p.rect(4, 0, 1, tileSize);
                            break;
                        case 6:
                            p.rect(-6, 0, 1, tileSize);
                            p.rect(-4, 0, 1, tileSize);
                            p.rect(-2, 0, 1, tileSize);
                            p.rect(0, 0, 1, tileSize);
                            p.rect(2, 0, 1, tileSize);
                            p.rect(4, 0, 1, tileSize);
                            p.rect(6, 0, 1, tileSize);
                            break;
                        case 7:
                            p.rect(0, 0, tileSize, tileSize);
                            p.fill(bgTextureR, bgTextureG, bgTextureB);
                            p.rect(-7, 0, 1, tileSize);
                            p.rect(-3, 0, 1, tileSize);
                            p.rect(0, 0, 1, tileSize);
                            p.rect(3, 0, 1, tileSize);
                            p.rect(7, 0, 1, tileSize);
                            break;
                        case 8:
                            p.rect(0, 0, tileSize, tileSize);
                            p.fill(bgTextureR, bgTextureG, bgTextureB);
                            p.rect(-7, 0, 1, tileSize);
                            p.rect(-3, 0, 1, tileSize);
                            p.rect(3, 0, 1, tileSize);
                            p.rect(7, 0, 1, tileSize);
                            break;
                        case 9:
                            p.rect(0, 0, tileSize, tileSize);
                            p.fill(bgTextureR, bgTextureG, bgTextureB);
                            p.rect(0, 0, 1, tileSize);
                            break;
                        case 10:
                            p.rect(0, 0, tileSize, tileSize);
                            break;
                    }
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
                textureBox = p.loadImage('assets/backgrounds/texture_sounds.png');
                //face = p.loadImage('assets/backgrounds/face02_120x75.jpg');
                face = p.loadImage('assets/backgrounds/uneSalmah.jpg');
                //face = p.createCapture(p.VIDEO);
            }

            p.setup = () => {
                p.createCanvas(2000, 1300)
                    .class('_sound05')
                    .parent(renderRef.current);
                p.background(245,245,244);

                // Image Resize
                face.resize(p.width, p.height);

                //face.size(p.width, p.height);
                //face.hide();
                //face.loop();
            }

            /*p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            }*/

            p.draw = () => {

                p.background(245,245,244);

                p.ellipseMode(p.CENTER);
                p.rectMode(p.CENTER);
                p.angleMode(p.DEGREES);

                let tileSize = 15;
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

                        let dia = p.floor(p.map(avg, 0 , 255, tileSize, 0));
                        if (black) {
                            dia = p.floor(p.map(avg, 0 , 255, 0, tileSize));
                        }

                        p.noStroke();
                        //noSmooth();
                        r = 0;g = 0;b = 0;

                        if (avg < 180)
                            new plusSign(i+tileSize/2 , j+tileSize/2).display(dia, tileSize-2, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB);

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
    }, [])

    return(
        <div className="_sound-container _sound-container-05" ref={renderRef}></div>
    )
}

export default Sound05;
