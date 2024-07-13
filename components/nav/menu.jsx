
import { motion } from "framer-motion";
import Items from "@components/nav/items";
//import useDimension from "@hook/useDimension";
import Image from "@node_modules/next/image";
import subway_arrow from "@public/assets/icons/arrow-subway_01.svg";

const Menu = ({ isOpen }) => {

    /*const { width } = useDimension();
    let xnav = 'var(--x-nav-motionValue)';
    if (width>=640 && width<1024)
        xnav = 'var(--x-nav-motionValue-sm)';
    else if (width>=1024 && width<1536)
        xnav = 'var(--x-nav-motionValue-lg)';
    else if (width>=1536)
        xnav = 'var(--x-nav-motionValue-2xl)';*/

    const bgMenuVariants = {
        closed: {
            opacity: 0.5,
            x: 900,
            //y: 450,
            marginRight: '-20%'
        },
        open: {
            //x: xnav,
            x: 0,
            //y: 0,
            opacity: 1,
            marginRight: '0%',
            transition: {
                type: "spring",
                bounce: 0,
                ease: [0,.65,.25,.95],
                duration: .6,
                delayChildren: 0.25,
                //staggerDirection: -1,
                staggerChildren: 0.05 }
        }
    };

    return (
        <motion.ul
            id="_bg_menu"
            className="fixed z-40 right-0 flex flex-col justify-center items-end bg-zinc-950 border-l-[.75rem] border-r-[1rem] border-zinc-950 overflow-hidden rounded-tl-[175%] rounded-bl-[175%]
            -top-[20svh]
            h-[140svh]
            w-[85%] md:w-[300px] 2xl:w-[400px]"
            initial={"closed"}
            animate={isOpen ? "open" : "closed"}
            variants={bgMenuVariants}
        >
            {/*<div className="relative -top-[1rem] -right-[2.5rem] size-44 overflow-hidden -rotate-90">  arrow-subway_02.svg";   */}
            {/*<div className="relative -top-[.5rem] -right-[0rem] size-28 rotate-45 overflow-hidden">    arrow-subway_04.svg */}
            <div className="relative -top-[0.6rem] right-[0.25rem] size-16 2xl:size-24 rotate-135 overflow-hidden">
                <Image
                    fill
                    style={{objectFit: "cover"}}
                    src={subway_arrow}
                    alt="subway_arrow"
                    priority
                />
            </div>
            <Items/>
        </motion.ul>
    );
};

export default Menu;