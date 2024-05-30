import React from 'react';
import {motion} from "framer-motion";
import Item from "@components/nav/items/item";

const Items = () => {

    const Items = [
        {id: 1, title: 'Welcome', link: '#_header'},
        {id: 2, title: 'Projects', link: '#_projects'},
        {id: 3, title: 'Resume', link: '#_resume'},
        {id: 4, title: 'Sounds', link: '#_sounds'},
        {id: 5, title: 'Contact', link: '#_contact'},
    ];

    const itemsVariants = {
        closed: {
            opacity:0,
            x: 800,
        },
        open: {
            opacity:1,
            x: 0,
            transition: {
                type: 'spring',
                bounce: 0,
                ease: 'easeOut',
                duration: .4
            }
        }
    };

    const menuItems = Items.map((item, i) =>
        <motion.li
            className="w-full block text-right overflow-hidden"
            key={item.id}
            variants={itemsVariants}
        >
            <Item itemTitle={item.title} itemLink={item.link}/>
        </motion.li>
    );

    return (
        <>
            {menuItems}
        </>
    );
};

export default Items;