import React from 'react';
import {motion} from "framer-motion";
import Item from "@components/nav/items/item";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ConstructionIcon from '@mui/icons-material/Construction';
//import VolumeUpIcon from '@mui/icons-material/VolumeUp';
//import TuneIcon from '@mui/icons-material/Tune';
import EmailIcon from '@mui/icons-material/Email';

const Items = () => {

    const Items = [
        {id: 1, title: 'Welcome', link: '#_header', icon : <WavingHandIcon sx={{fontSize: { sm: 16, md: 25, xl: 30 } }} />},
        {id: 2, title: 'Projects', link: '#_projects', icon : <HomeRepairServiceIcon sx={{fontSize: { sm: 16, md: 25, xl: 30 } }} />},
        {id: 3, title: 'Sounds', link: '#_sounds', icon : <ConstructionIcon sx={{fontSize: { sm: 16, md: 25, xl: 30 } }} />},
        {id: 4, title: 'Resume', link: '#_resume', icon : <ReceiptLongIcon sx={{fontSize: { sm: 16, md: 25, xl: 30 } }} />},
        {id: 5, title: 'Contact', link: '#_contact', icon : <EmailIcon sx={{fontSize: { sm: 16, md: 25, xl: 30 } }} />},
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