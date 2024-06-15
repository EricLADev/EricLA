"use client"

import React, {useEffect, useState} from 'react';
import Logo from "@components/nav/logo";
import Menu from "@components/nav/menu";
import Burger from "@components/nav/burger";
import Arrow from "@components/nav/arrow";

const Nav = () => {

    const [open, setOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const handleToggleNavOpen = (e) => {
        //e.preventDefault();
        setOpen(!open);
        document.body.classList.toggle("navOpen");
    };

    const checkIsScrolling = (e) => {
        if (window.scrollY > 500 ) {
            setIsScrolling(!isScrolling);
            document.body.classList.add("isScrolling");
        } else {
            setIsScrolling(isScrolling);
            document.body.classList.remove("isScrolling");
        }
    };

    const overlayClick = () => {
        handleToggleNavOpen();
    }

    useEffect(() => {
        checkIsScrolling();
        window.addEventListener("scroll", checkIsScrolling);
        return () => {window.removeEventListener("scroll", checkIsScrolling)};
    }, []);

    return (
        <>
            <div id="_nav">
                {/*<Logo />*/}
                <Burger onToggleClick={handleToggleNavOpen} isOpen={open}/>
                <Menu isOpen={open}/>
                <Arrow isScrolling={isScrolling} />
            </div>
            <div
                id="_overlay" className="z-30"
                onClick={overlayClick}>
            </div>
        </>
    );
};

export default Nav;