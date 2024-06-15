
import { motion } from "framer-motion";
import Underscore from "@components/nav/items/underscore/underscore";
import {useLenis} from "@studio-freight/react-lenis";

const Item = ({ itemTitle, itemLink }) => {

    /*const [isHover, setIsHover] = useState(false);
    const handleHover = (e) => {
        e.preventDefault();
        setIsHover(!isHover);
    };*/


    /*const linkVariants = {
        out: {
            x: 0,
        },
        enter: {
            x: 10,
            transition: { type: "spring", delayChildren: 0.2, duration: .15 }
        }
    };*/

    const lenis = useLenis();

    const goToAnchor = (e) => {
        e.preventDefault();
        lenis.scrollTo(e.currentTarget.getAttribute('data-anchor'));
        document.getElementById("_burger_container").click();
        /*window.scrollTo(
            { top: document.getElementById(e.currentTarget.getAttribute('data-anchor')).offsetTop }
        );*/
    }

    return (
        <>
            <motion.a
                className="block font-light uppercase cursor-pointer text-[3rem] leading-[3rem] h-[54px] md:text-[3.5rem] md:leading-[3.3rem] md:h-[58px]"
                //href={itemLink}
                data-anchor={itemLink}
                onClick={goToAnchor}
                //className={isHover ? "hover" : ""}
                //onMouseEnter={handleHover}
                //onMouseOut={handleHover}
                //initial={false}
                //animate={isHover ? "enter" : "out"}
                whileHover={{
                    //x: -5,
                    //scale: .97,
                    paddingRight: 10,
                    color: '#1c1917',
                    backgroundColor: '#f5f5f4',
                    transition: {delayChildren: 0.1, duration: .1}
                }}
            >
                <span><Underscore/>{itemTitle}</span>
            </motion.a>
        </>
    );
};

export default Item;