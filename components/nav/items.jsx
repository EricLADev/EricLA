import React from 'react';
import {motion} from "framer-motion";
import Item from "@components/nav/items/item";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TuneIcon from '@mui/icons-material/Tune';
import EmailIcon from '@mui/icons-material/Email';

const Items = () => {

    const Items = [
        {id: 1, title: 'Welcome', link: '#_header', icon : <WavingHandIcon className="text-[1.8rem] 2xl:text-[2.25rem]" />},
        {id: 2, title: 'Projects', link: '#_projects', icon : <HomeRepairServiceIcon className="text-[2rem] 2xl:text-[2.4rem]" />},
        {id: 3, title: 'Resume', link: '#_resume', icon : <ReceiptLongIcon className="text-[2rem] 2xl:text-[2.4rem]" />},
        {id: 4, title: 'Sounds', link: '#_sounds', icon : <TuneIcon className="text-[2rem] 2xl:text-[2.4rem]" />},
        {id: 5, title: 'Contact', link: '#_contact', icon : <EmailIcon className="text-[2rem] 2xl:text-[2.4rem]" />},
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
            <Item itemIcon={item.icon} itemTitle={item.title} itemLink={item.link}/>
        </motion.li>
    );

    return (
        <>
            {menuItems}
        </>
    );
};

export default Items;