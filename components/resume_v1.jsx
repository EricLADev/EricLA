"use client"

import ResumeHeader from "@components/resume/resumeHeader";
import ResumeBlock from "@components/resume/resumeBlock";
import Hirondelles from "@components/resume/hirondelles";
import { useTransform, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {useAnimation, useInView, useMotionValueEvent} from "@node_modules/framer-motion";
import resumeBkg from "@public/assets/backgrounds/timeline03.svg";
import arrow01 from "@public/assets/backgrounds/arrow01.svg";
import arrow02 from "@public/assets/backgrounds/arrow02.svg";
import arrow03 from "@public/assets/backgrounds/arrow03.svg";
import arrow04 from "@public/assets/backgrounds/arrow04.svg";
import arrow05 from "@public/assets/backgrounds/arrow05.svg";
import arrow06 from "@public/assets/backgrounds/arrow06.svg";
/*import arrow07 from "@public/assets/backgrounds/arrow07.svg";*/
import arrow08 from "@public/assets/backgrounds/arrow08.svg";
import arrow09 from "@public/assets/backgrounds/arrow09.svg";
import Image from "@node_modules/next/image";
import {motion, Variants, cubicBezier} from "framer-motion";

const Resume = () => {

    const personalStatement = {
        'title': "Personal Statement",
        'content' : "" +
            "<p>\n" +
            "Fullstack Developer in E-Commerce, after a few years in an agency, then as a Freelancer.</p>" +
            "<p>I am now looking to join a company again and face the challenges of the next decade, as a Front End Developer.</p>"
    }

    const workExperience = {
        'title': "Work Experience",
        'content' : ''
            + '<div class="exp">'
            + '<div class="year"><span>7</span></div><div class="details">'
            + '<h4>From 2016 to 2023</h4>'
            + '<p><i>Fullstack Developer - Freelance - Paris</i></p>'
            + "<p>Frontend and Backend Developer, working on projects mainly on CMS MAGENTO or Wordpress.</p>"
            + "<p>\"Pain de Sucre\", \"Optic 2000\", \"MOBHOTEL\" ...</p>"
            + "</div></div>"
            + '<div class="exp">'
            + '<div class="year"><span>6</span></div><div class="details">'
            + "<h4>From 2010 to 2016</h4>"
            + "<p><i>FullStack Developer - Onibi - Paris</i></p>"
            + "<p>Frontend and Backend Development, working in a team on E&#8209;Commerce websites, development of Themes and modules on CMS MAGENTO.</p>"
            + "</div></div>"
    }

    const skills = {
        'title': "Skills",
        'content' : "" +
            "<div class='lists'>" +
            "<div>" +
            "<h4>I worked a lot on:</h4>" +
            "<ul>" +
            "<li>HTML</li>" +
            "<li>CSS / SCSS</li>" +
            "<li>Javascript</li>" +
            "<li>jQuery</li>" +
            "<li>Magento</li>" +
            "<li>PHP / MySQL</li>" +
            "<li>GIT</li>" +
            "</ul>" +
            "</div>" +
            "<div>" +
            "<h4>I am new to:</h4>" +
            "<ul>" +
            "<li>React / Next.js</li>" +
            "<li>Tailwind CSS</li>" +
            "<li>Frame Motion</li>" +
            "<li>P5 JS</li>" +
            "<li>Three JS</li>" +
            "</ul>" +
            "</div>" +
            "<div>" +
            "<h4>Sometimes I use:</h4>" +
            "<ul>" +
            "<li>Photoshop</li>" +
            "<li>Figma</li>" +
            "<li>Blender</li>" +
            "</ul>" +
            "</div>" +
            "<div>" +
            "<h4>I like making sound and music with:</h4>" +
            "<ul>" +
            "<li>Reason Studio</li>" +
            "<li>Ableton Live</li>" +
            "<li>SoundForge</li>" +
            "</ul>" +
            "</div>" +
            "</div>"
    }

    const education = {
        'title': "Education",
        'content' : ""
            + '<div class="exp">'
            + '<div class="year"><span>1</span></div><div class="details">'
            + '<h4>IUT of Metz</h4>'
            + "<p>Three-year University Degree in Technology,<br/>In Computer Science, Web & E-Commerce Specialty.</p>"
            + "</div></div>"
            + '<div class="exp">'
            + '<div class="year"><span>2</span></div><div class="details">'
            + '<h4>IUT of Metz</h4>'
            + "<p>Two-year University Degree in Technology,<br/>In Computer Science.</p>"
            + "</div></div>"
    }

    const languages = {
        'title': "Languages",
        'content' : "" +

            "<div class='langs'>" +
            "<div class='lang fr'>" +
            "<div class='svg'>" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\"><path fill=\"#d4d4d8\" d=\"M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12s12-5.373 12-12S22.627 4 16 4M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16\"/></svg>" +
            "</div>" +
            "<div class='desc'><span>FRENCH</span>Native</div>" +
            "</div>" +

            "<div class='lang en'>" +
            "<div class='svg'>" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\"><path fill=\"#d4d4d8\" d=\"M11.781 3.253a8.75 8.75 0 1 0 1.928 17.33a.75.75 0 0 1 .29 1.472a10.3 10.3 0 0 1-2.255.192a10.2 10.2 0 0 1-7.338-3.363A10.2 10.2 0 0 1 1.75 12C1.75 6.34 6.34 1.75 12 1.75q1.027.001 2 .195a.75.75 0 0 1-.291 1.472a8.8 8.8 0 0 0-1.928-.164m5.915.224a.75.75 0 0 0-.835 1.246a8.8 8.8 0 0 1 2.416 2.416a.75.75 0 0 0 1.246-.835a10.3 10.3 0 0 0-2.827-2.827M22.055 10a.75.75 0 1 0-1.472.291a8.8 8.8 0 0 1 0 3.418a.75.75 0 0 0 1.472.29a10.3 10.3 0 0 0 0-3.999m-1.532 7.696a.75.75 0 0 0-1.246-.835a8.8 8.8 0 0 1-2.416 2.416a.75.75 0 0 0 .835 1.246a10.3 10.3 0 0 0 2.827-2.827\"/></svg>" +
            "</div>" +
            "<div class='desc'><span>ENGLISH</span>Technical<br/>Intermediate</div>" +
            "</div>" +
            "</div>"
    }

    const hobbies = {
        'title': "Hobbies & Interests",
        'content' : "" +
            '<div class="all-icons">' +

            '<div class="icons-container">' +
            '<div class="icons">' +
            '<span><span><svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3em" viewBox="0 0 256 256"><path fill="#71717a" d="M208 112a47.81 47.81 0 0 0-16.93 3.09L165.93 72H192a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24h-40a8 8 0 0 0-6.91 12l11.65 20H99.26L82.91 60A8 8 0 0 0 76 56H48a8 8 0 0 0 0 16h23.41l13.71 23.51l-15.71 21.55a48.13 48.13 0 1 0 12.92 9.44l11.59-15.9l31.17 53.4a8 8 0 1 0 13.82-8l-30.32-52h57.48l11.19 19.17A48 48 0 1 0 208 112M80 160a32 32 0 1 1-20.21-29.74l-18.25 25a8 8 0 1 0 12.92 9.42l18.25-25A31.88 31.88 0 0 1 80 160m128 32a32 32 0 0 1-22.51-54.72l15.6 26.72a8 8 0 1 0 13.82-8l-15.61-26.79A32 32 0 1 1 208 192"/></svg></span></span>' +
            '</div>' +
            '<div class="subtitle">Bikepacking</div>' +
            '</div>' +

            '<div class="icons-container">' +
            '<div class="icons">' +
            '<span><span><svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3em" viewBox="0 0 24 24"><path fill="#71717a" d="M21.25 4.004a.75.75 0 0 1 .743.648l.007.102V19.25a.75.75 0 0 1-.648.743L21.25 20H2.75a.75.75 0 0 1-.743-.649L2 19.25V4.754a.75.75 0 0 1 .648-.743l.102-.007zm-15.25 8H3.5V18.5h17v-6.496H18v4.246a.75.75 0 0 1-1.493.101l-.007-.101v-4.246h-2v4.246a.75.75 0 0 1-1.493.101L13 16.25v-4.246h-2v4.246a.75.75 0 0 1-1.493.101L9.5 16.25v-4.246h-2v4.246a.75.75 0 0 1-1.493.101L6 16.25zM17.25 7.5h-2.5l-.102.007a.75.75 0 0 0 0 1.487L14.75 9h2.5l.102-.006A.75.75 0 0 0 17.25 7.5m-11 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m3 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"/></svg></span></span>' +
            '</div>' +
            '<div class="subtitle">MAO / Music</div>' +
            '</div>' +

            '<div class="icons-container">' +
            '<div class="icons">' +
            '<span><span><svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3em" viewBox="0 0 24 24"><path fill="#71717a" d="M4 15h2a2 2 0 0 1 2 2v2h1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h1v3H1v-3h1v-2a2 2 0 0 1 2-2m7-8l4 3l-4 3zM4 2h16a2 2 0 0 1 2 2v9.54a3.9 3.9 0 0 0-2-.54V4H4v9c-.73 0-1.41.19-2 .54V4a2 2 0 0 1 2-2"/></svg></span></span>' +
            '</div>' +
            '<div class="subtitle">Movies / Series</div>' +
            '</div>' +

            '</div>'
    }

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        //layoutEffect: false,
        target: container,
        offset: ['start end', 'end start']
    });
    /*const y = useTransform(scrollYProgress, [0,1], [0,1000]);
    const y01 = useTransform(scrollYProgress, [0,1], [0,160]);
    const y02 = useTransform(scrollYProgress, [0,1], [0,-120]);
    const y03 = useTransform(scrollYProgress, [0,1], [0,80]);
    const y04 = useTransform(scrollYProgress, [0,1], [0,-120]);
    const y05 = useTransform(scrollYProgress, [0,1], [0,50]);
    const y06 = useTransform(scrollYProgress, [0,1], [0,-200]);*/

    const y01 = useTransform(scrollYProgress, [0,1], [0,360]);
    const y02 = useTransform(scrollYProgress, [0,1], [0,-10]);
    const y03 = useTransform(scrollYProgress, [0,1], [0,180]);
    const y04 = useTransform(scrollYProgress, [0,1], [0,-220]);
    const y05 = useTransform(scrollYProgress, [0,1], [0,-50]);
    const y06 = useTransform(scrollYProgress, [0,1], [0,-300]);

    const r01 = useTransform(scrollYProgress, [0,1], [0,60]);
    const r02 = useTransform(scrollYProgress, [0,1], [0,-40]);
    const r03 = useTransform(scrollYProgress, [0,1], [0,20]);
    const r04 = useTransform(scrollYProgress, [0,1], [0,-50]);
    const r05 = useTransform(scrollYProgress, [0,1], [0,10]);
    const r06 = useTransform(scrollYProgress, [0,1], [0,-60]);

    /*useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Value:", latest)
    })*/

    return (
        /*<section className="_section w-full h-full flex justify-center items-center bg-red-500 py-52">*/
        <section ref={container} id="_resume" className="w-full min-h-[100dvh] h-auto py-52" >

            {/*<motion.div style={{y}} className="absolute z-0 top-[-10%] left-[-15%] w-[125%] h-[100%]">
                <Image
                    fill
                    style={{objectFit: "cover"}}
                    //style={{width: '100%', height: 'auto'}}
                    src={resumeBkg}
                    alt="Resume"
                    className="rotate-[170deg]"
                    priority
                />
            </motion.div>*/}

            <motion.div
                className="absolute z-0 top-[-25%] left-[-10%] w-[120%] min-h-[150%] flex content-center justify-center items-center">

                <motion.div style={{y: y01, rotateZ: r01}}
                            className="relative w-[20vw] h-[20vw] z-100 rounded-full bg-[#33313c] overflow-hidden">
                    <Image
                        fill
                        className="opacity-80"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={arrow05}
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y02, rotateZ: r02}}
                            className="relative w-[20vw] h-[20vw] z-100 rounded-full bg-amber-500">
                    <Image
                        fill
                        className="opacity-50"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src="/assets/backgrounds/arrow07.svg"
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y03, rotateZ: r03}}
                            className="relative w-[20vw] h-[20vw] z-100 rounded-full bg-stone-600 overflow-hidden">
                    <Image
                        fill
                        className="opacity-50"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={arrow08}
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y04, rotateZ: r04}}
                            className="relative w-[20vw] h-[20vw] z-100 rounded-full bg-amber-500">
                    <Image
                        fill
                        className="opacity-50"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={arrow05}
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y05, rotateZ: r05}}
                            className="relative w-[20vw] h-[20vw] z-100 rounded-full bg-orange-500">
                    <Image
                        fill
                        className="opacity-80"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src={arrow08}
                        alt="Resume"
                        priority
                    />
                </motion.div>

                <motion.div style={{y: y06, rotateZ: r06}}
                            className="relative w-[20vw] h-[20vw] z-100 rounded-full bg-[#33313c]">
                    <Image
                        fill
                        className="opacity-50"
                        style={{objectFit: "cover"}}
                        //style={{width: '100%', height: 'auto'}}
                        src="/assets/backgrounds/arrow07.svg"
                        alt="Resume"
                        priority
                    />
                </motion.div>

                {/*FF5733*/}

            </motion.div>

            <Hirondelles/>
            <div
                className="_resume relative z-10 bg-[#fff] bg-opacity-95 lg:bg-opacity-[.98] max-w-[980px] p-5 text-[.8rem] leading-[1.25rem] mx-3 -mt-[10px] -mb-[10px] sm:p-14 lg:m-auto">
                <ResumeHeader/>
                <div className="_body flex flex-wrap">
                    <div className="w-full flex flex-col justify-between lg:flex-row lg:pb-7">
                        <ResumeBlock identifier={"_personalStatement"} details={personalStatement} className="_about _left"/>
                        <ResumeBlock identifier={"_workExperience"} details={workExperience} className="_right"/>
                    </div>
                    <div className="w-full flex flex-col justify-between lg:flex-row lg:pb-7">
                        <ResumeBlock identifier={"_skills"} details={skills} className="_left"/>
                        <ResumeBlock identifier={"_education"} details={education} className="_right"/>
                    </div>
                    <div className="w-full flex flex-col justify-between lg:flex-row lg:pb-7">
                        <ResumeBlock identifier={"_languages"} details={languages} className="_left"/>
                        <ResumeBlock identifier={"_hobbies"} details={hobbies} className="_right"/>
                    </div>
                </div>
            </div>
            <Hirondelles/>

        </section>
    );
};

const Experience = () => {

    return (
        <div className="educ">
            <div className="exp">
                <div className="year"><span>7</span></div>
                <div className="details">
                    <h4>From 2016 to 2023</h4>
                    <p><i>Fullstack Developer - Freelance - Paris</i></p>
                    <p>Frontend and Backend Developer, working on projects mainly on CMS MAGENTO or Wordpress.</p>
                    <p>"Pain de Sucre", "Optic 2000", "MOBHOTEL" ...</p>

                </div>
            </div>
            <div className="exp">
                <div className="year"><span>6</span></div>
                <div className="details">
                    <h4>From 2010 to 2016</h4>
                    <p><i>FullStack Developer - Onibi - Paris</i></p>
                    <p>Frontend and Backend Development, working in a team on E&#8209;Commerce websites, development of Themes and modules on CMS MAGENTO.</p>
                </div>
            </div>
        </div>
    )
}

const Education = () => {

    return (
        <div className="educ">
            <div className="exp">
                <div className="year"><span>1</span></div>
                <div className="details">
                    <h4>IUT of Metz</h4>
                    <p>Three-year University Degree in Technology,<br/>In Computer Science, Web & E-Commerce Specialty.
                    </p>
                </div>
            </div>
            <div class="exp">
                <div class="year"><span>2</span></div>
                <div class="details">
                    <h4>IUT of Metz</h4>
                    <p>Two-year University Degree in Technology,<br/>In Computer Science.</p>
                </div>
            </div>
        </div>
    )
}

const Languages = () => {

    return (
        <div className="langs">
        <div className="lang fr">
                <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32">
                        <path fill="#d4d4d8" d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12s12-5.373 12-12S22.627 4 16 4M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16"/>
                    </svg>
                </div>
                <div className="desc"><span>FRENCH</span>Native</div>
            </div>
            <div className="lang en">
                <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                        <path fill="#d4d4d8" d="M11.781 3.253a8.75 8.75 0 1 0 1.928 17.33a.75.75 0 0 1 .29 1.472a10.3 10.3 0 0 1-2.255.192a10.2 10.2 0 0 1-7.338-3.363A10.2 10.2 0 0 1 1.75 12C1.75 6.34 6.34 1.75 12 1.75q1.027.001 2 .195a.75.75 0 0 1-.291 1.472a8.8 8.8 0 0 0-1.928-.164m5.915.224a.75.75 0 0 0-.835 1.246a8.8 8.8 0 0 1 2.416 2.416a.75.75 0 0 0 1.246-.835a10.3 10.3 0 0 0-2.827-2.827M22.055 10a.75.75 0 1 0-1.472.291a8.8 8.8 0 0 1 0 3.418a.75.75 0 0 0 1.472.29a10.3 10.3 0 0 0 0-3.999m-1.532 7.696a.75.75 0 0 0-1.246-.835a8.8 8.8 0 0 1-2.416 2.416a.75.75 0 0 0 .835 1.246a10.3 10.3 0 0 0 2.827-2.827"/>
                    </svg>
                </div>
                <div className="desc"><span>ENGLISH</span>Technical<br/>Intermediate</div>
            </div>
        </div>
    )
}

const Hobbies = () => {

    return (
        <div class="all-icons">
            <div class="icons-container">
                <div class="icons">
                    <span><span><svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3em"
                                     viewBox="0 0 256 256"><path fill="#71717a"
                                                                 d="M208 112a47.81 47.81 0 0 0-16.93 3.09L165.93 72H192a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24h-40a8 8 0 0 0-6.91 12l11.65 20H99.26L82.91 60A8 8 0 0 0 76 56H48a8 8 0 0 0 0 16h23.41l13.71 23.51l-15.71 21.55a48.13 48.13 0 1 0 12.92 9.44l11.59-15.9l31.17 53.4a8 8 0 1 0 13.82-8l-30.32-52h57.48l11.19 19.17A48 48 0 1 0 208 112M80 160a32 32 0 1 1-20.21-29.74l-18.25 25a8 8 0 1 0 12.92 9.42l18.25-25A31.88 31.88 0 0 1 80 160m128 32a32 32 0 0 1-22.51-54.72l15.6 26.72a8 8 0 1 0 13.82-8l-15.61-26.79A32 32 0 1 1 208 192"/></svg></span></span>
                </div>
                <div class="subtitle">Bikepacking</div>
            </div>
            <div class="icons-container">
                <div class="icons">
                    <span><span><svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3em" viewBox="0 0 24 24"><path
                        fill="#71717a"
                        d="M21.25 4.004a.75.75 0 0 1 .743.648l.007.102V19.25a.75.75 0 0 1-.648.743L21.25 20H2.75a.75.75 0 0 1-.743-.649L2 19.25V4.754a.75.75 0 0 1 .648-.743l.102-.007zm-15.25 8H3.5V18.5h17v-6.496H18v4.246a.75.75 0 0 1-1.493.101l-.007-.101v-4.246h-2v4.246a.75.75 0 0 1-1.493.101L13 16.25v-4.246h-2v4.246a.75.75 0 0 1-1.493.101L9.5 16.25v-4.246h-2v4.246a.75.75 0 0 1-1.493.101L6 16.25zM17.25 7.5h-2.5l-.102.007a.75.75 0 0 0 0 1.487L14.75 9h2.5l.102-.006A.75.75 0 0 0 17.25 7.5m-11 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m3 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"/></svg></span></span>
                </div>
                <div class="subtitle">MAO / Music</div>
            </div>
            <div class="icons-container">
                <div class="icons">
                    <span><span><svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3em" viewBox="0 0 24 24"><path fill="#71717a" d="M4 15h2a2 2 0 0 1 2 2v2h1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h1v3H1v-3h1v-2a2 2 0 0 1 2-2m7-8l4 3l-4 3zM4 2h16a2 2 0 0 1 2 2v9.54a3.9 3.9 0 0 0-2-.54V4H4v9c-.73 0-1.41.19-2 .54V4a2 2 0 0 1 2-2"/></svg></span></span>
                </div>
                <div class="subtitle">Movies / Series</div>
            </div>
        </div>
    )
}

export default Resume;