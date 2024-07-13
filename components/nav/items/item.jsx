
import { motion } from "framer-motion";
import Underscore from "@components/nav/items/underscore/underscore";
import {useLenis} from "@studio-freight/react-lenis";
import useDimension from "@hook/useDimension";

const Item = ({ itemIcon, itemTitle, itemLink }) => {

    const lenis = useLenis();

    const goToAnchor = (e) => {
        e.preventDefault();
        lenis.scrollTo(e.currentTarget.getAttribute('data-anchor'));
        document.getElementById("_burger_container").click();
        /*window.scrollTo(
            { top: document.getElementById(e.currentTarget.getAttribute('data-anchor')).offsetTop }
        );*/
    }

    const { width } = useDimension();

    let linkVariants = {};
    const isMobile = width < 1024;
    if (!isMobile) {
        linkVariants = {
            hover: {
                paddingRight: 10,
                color: '#1c1917',
                backgroundColor: '#f5f5f4',
                transition: {delayChildren: 0.1, duration: .1}
            }
        };
    }

    return (
        <>
            <motion.a
                className="
                block font-light uppercase cursor-pointer
                text-[3rem] leading-[3rem] h-[45px]
                md:text-[2.5rem] md:leading-[2.4rem] md:h-[42px]
                2xl:text-[3rem] 2xl:leading-[2.9rem] 2xl:h-[51px]
                "
                data-anchor={itemLink}
                onClick={goToAnchor}
                whileHover="hover"
                variants={linkVariants}
            >
                <span>
                    {!isMobile && (
                        <Underscore itemIcon={itemIcon} />
                    )}
                    {itemTitle}
                </span>
            </motion.a>
        </>
    );
};

export default Item;