import React from 'react';
import { motion } from "framer-motion";
import Items from "@components/nav/items";
import useDimension from "@hook/useDimension";

const Menu = ({ isOpen }) => {

    const { width } = useDimension();
    let xnav = 'var(--x-nav-motionValue)';
    if (width>=640 && width<1024)
        xnav = 'var(--x-nav-motionValue-sm)';
    else if (width>=1024 && width<1536)
        xnav = 'var(--x-nav-motionValue-lg)';
    else if (width>=1536)
        xnav = 'var(--x-nav-motionValue-2xl)';

    const bgMenuVariants = {
        closed: {
            opacity: 0.5,
            x: 900,
            marginRight: '-20%'
        },
        open: {
            x: xnav,
            opacity: 1,
            marginRight: '0%',
            transition: {
                type: "spring",
                bounce: 0,
                ease: [0,.65,.25,.95],
                duration: .55,
                delayChildren: 0.25,
                //staggerDirection: -1,
                staggerChildren: 0.05 }
        }
    };

    return (
        <motion.ul
            id="_bg_menu"
            className="fixed z-40 right-0 flex flex-col justify-center items-end p-5 bg-zinc-950 overflow-hidden
            top-[var(--main-padding)] sm:top-[var(--main-padding-sm)] lg:top-[var(--main-padding-lg)] 2xl:top-[var(--main-padding-2xl)]
            h-[calc(100vh-(var(--main-padding)*2))] sm:h-[calc(100vh-(var(--main-padding-sm)*2))] lg:h-[calc(100vh-(var(--main-padding-lg)*2))] 2xl:h-[calc(100vh-(var(--main-padding-2xl)*2))]
            w-[calc(100%-(var(--main-padding)*2))] sm:w-[calc(100%-(var(--main-padding-sm)*2))] md:w-1/5 md:min-w-[450px]"
            initial={"closed"}
            animate={isOpen ? "open" : "closed"}
            variants={bgMenuVariants}
        >
            <Items />
        </motion.ul>
    );
};

export default Menu;