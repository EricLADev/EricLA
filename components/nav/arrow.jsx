
import { motion } from "framer-motion";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EastIcon from '@mui/icons-material/East';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import NavigationIcon from '@mui/icons-material/Navigation';

import {useLenis} from "@node_modules/@studio-freight/react-lenis";

const Arrow = ({ isScrolling }) => {

    const lenis = useLenis();

    const scrollTop = (e) => {
        (isScrolling) ? lenis.scrollTo(0) : lenis.scrollTo("#_projects");
        if (document.body.classList.contains("navOpen"))
            document.getElementById("_burger_container").click();
        //(isScrolling) ? lenis.scrollTo(0) : e.preventDefault();
        //document.body.scrollTop = 0;
        //document.documentElement.scrollTop = 0;
    };

    const arrowVariants = {
        backToTop: {
            rotate: 0
        },
        isScrolling: {
            rotate: 180
        },
    };

    return (
        <motion.div id="_arrow"
            onClick={scrollTop}
            className="
                fixed z-50 flex justify-center items-center bg-zinc-950 rounded-full
                bottom-[var(--main-padding)] right-[var(--main-padding)]
                mr-2 mb-2 lg:mr-0 lg:mb-0

                sm:bottom-[var(--main-padding-sm)] sm:right-[var(--main-padding-sm)]
                lg:bottom-[var(--main-padding-lg)] lg:right-[var(--main-padding-lg)]
                2xl:bottom-[var(--main-padding-2xl)] 2xl:right-[var(--main-padding-2xl)]

                w-[var(--nav-burger-container-width)] h-[var(--nav-burger-container-height)]
                sm:w-[var(--nav-burger-container-width-sm)] sm:h-[var(--nav-burger-container-height-sm)]
                2xl:w-[var(--nav-burger-container-width-2xl)] 2xl:h-[var(--nav-burger-container-height-2xl)]
                "
            initial={"backToTop"}
            animate={isScrolling ? "isScrolling" : "backToTop"}
            variants={arrowVariants}
            /*whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}*/
        >
            {/*<i className="
                relative top-[-5px]
                block w-[24px] h-[24px]
                border-solid border-zinc-100 border-r-[2px] border-b-[2px]
                rotate-45"/>*/}
            {/*<EastIcon className="rotate-90 text-[1.5rem] text-zind-100" sx={{ color: '#f5f5f4', fontSize: '1.5rem', fontWeight: '100' }} />*/}
            <NavigationIcon className="text-[1.5rem] sm:text-[1.75rem] text-zinc-100 font-light rotate-180" />
        </motion.div>
    );
};

export default Arrow;