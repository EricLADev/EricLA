"use client"

import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import useDimension from "@hook/useDimension";
import Project from "@components/projects/project";
import Title from "@components/projects/title";
//import Sounds from "@components/sounds";

const Projects = () => {

    const { width } = useDimension();
    const containerProjects = useRef(null);
    const { scrollYProgress } = useScroll({
        //layoutEffect: false,
        target: containerProjects,
        offset: ['start start', 'end end']
    });

    //const y01 = useTransform(scrollYProgress, [0,1], [0, (height * .2)]);
    //const r01 = useTransform(scrollYProgress, [0,1], [0, (height * .65)]);
    //const r02 = useTransform(scrollYProgress, [0,1], [0, -(height * .65)]);
    //const x = useMotionValue(0);
    //const x= useTransform(scrollYProgress, [0,1], ['0%', '-75%']);

    const x= useTransform(scrollYProgress, [0,1], ['0%', '-75%']);
    const xImageProject= useTransform(scrollYProgress, [0,1], [0, 90]);

    /*useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Value:", latest)
    })*/

    let isMobile = (width < 1024);
    let horizontalScroll = (isMobile) ? {} : {x};

    const Items = [
        {
            id: 1,
            title: "MOBHOTEL",
            description: "In March 2017, MOB HOTEL opened its doors in the Puces district of Saint Ouen, then six month later in Lyon's Confluence district. In 2022, he will open MOB HOUSE, a 3-in-1 hotel project, combining bedroom, office and meeting room in a single space. At last, at Cannes, Carnot.",
            details: [
                "Frontend/Backend development of the institutional website via MAGENTO CMS.",
                "Several graphic redesigns",
                "Monitoring and various developments",
                "Development Newsletters",
            ],
            underContruction: false,
            link: "https://www.mobhotel.com/",
            logo: "/assets/images/logo_mht-min.jpg",
            imgs: [
                {
                    mediaquery: "(min-width: 1024px)",
                    src: "/assets/images/mockup_mobhotel_desktop-min.jpg"
                },
                {
                    mediaquery: "(max-width: 1023px)",
                    src: "/assets/images/mockup_mobhotel_mobile_02.jpg"
                }
            ]
        },
        {
            id: 2,
            title: "MOBHOUSE",
            description: "A unique ecological and social boutique hotel located in the Puces de Paris. MOB HOUSE distinguishes itself through its commitment to eco-designed rooms (materials and craftsmanship), a certified organic restaurant-bar, natural, organic and made-in-France cosmetics.",
            details: [
                "Frontend/Backend development of the institutional website via MAGENTO CMS.",
                "Monitoring and various developments",
                "Development Newsletters"
            ],
            underContruction: false,
            link: "https://www.mobhouse.com/",
            logo: "/assets/images/logo_mhs-min.jpg",
            imgs: [
                {
                    mediaquery: "(min-width: 1024px)",
                    src: "/assets/images/mockup_mobhouse_desktop_05.jpg"
                },
                {
                    mediaquery: "(max-width: 1023px)",
                    src: "/assets/images/mockup_mobhouse_desktop_05.jpg"
                }
            ]
        },
        {
            id: 3,
            title: "Arr",
            description: "A personal Website about sound and music production, with some sound libraries for sale, blog articles, video tutorials...",
            details: [
                "Next JS / React development",
                "WooCommerce / Wordpress as a Headless CMS",
                "Tailwind CSS / Framer Motion"
            ],
            underContruction: true,
            link: "#",
            logo: "/assets/images/logo_works_3-min.jpg",
            imgs: [
                {
                    mediaquery: "(min-width: 1024px)",
                    src: "/assets/images/mockup_arr_desktop-min.jpg"
                },
                {
                    mediaquery: "(max-width: 1023px)",
                    src: "/assets/images/mockup_arr_desktop-min.jpg"
                }
            ]
        }

    ];

    return (
        <section ref={containerProjects} id="_projects" className="relative lg:overflow-visible h-auto lg:h-[700vh]">
            <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center lg:overflow-hidden">
                <motion.div style={horizontalScroll} className="relative lg:flex lg:gap-0">
                    <Title />
                    {Items.map((project, index) =>
                        <Project key={`k_${index}`} index={index} id={`project_${index}`}
                                 scrollXValue={xImageProject} project={project} />
                    )}
                    {/*<Sounds />*/}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;