"use client"

import React, {useEffect, useRef} from 'react';
//import {useQuery} from "@node_modules/@tanstack/react-query";

var x = 20;
var y = 20;
var rayon = 20;
let grid = {
    cols: x,
    rows: y,
};

let gridArray = []


const Sound1 = () => {

    const renderRef = useRef();

    useEffect(() => {

        const p5 = require("p5");

        new p5(p => {
            p.setup = () => {
                p.createCanvas(window.innerWidth, window.innerHeight)
                    .style('display', 'block')
                    .class('_sound1')
                    .parent(renderRef.current);
                p.background(0);

                p.angleMode(p.DEGREES);
                /*for (let i=0; i<grid.cols; i++) {
                    for (let j=0; j<grid.rows; j++) {

                    }
                }*/
            }

            p.windowResized = () => {
                p.resizeCanvas(window.innerWidth, window.innerHeight);
            }

            p.draw = () => {
                p.background(0);
                p.rectMode(p.CENTER);
                //p.fill(255);
                p.stroke(255);
                for (let i=0; i<grid.cols; i++) {
                    for (let j=0; j<grid.rows; j++) {
                        /*p.circle(
                            p.map(i, 0, grid.cols, 0, p.width) + ((p.width/grid.cols)*.5),
                            p.map(j, 0, grid.rows, 0, p.height) + ((p.height/grid.rows)*.5),
                            rayon
                        );*/
                        p.rect(
                            p.map(i, 0, grid.cols, 0, p.width) + ((p.width/grid.cols)*.5),
                            p.map(j, 0, grid.rows, 0, p.height) + ((p.height/grid.rows)*.5),
                            rayon
                        );
                    }
                    p.translate(Math.floor(Math.floor(Math.random() * 201) -100, - Math.floor(Math.random() * 201) -100));
                }
                p.noLoop();
                //p.ellipse(x, 100, 100);
            }
        })
    }, [])

    return (
        <div ref={renderRef}></div>
    );
};

export default Sound1;