import React, {useState} from 'react';
import { motion } from "framer-motion";

const Item = ({ itemIcon }) => {

    return (
        <span className="_underscore relative top-[-5px]">
            <motion.span
                className="opacity-0"
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: .2 }}
            >
                {itemIcon}
                _
            </motion.span>
        </span>
    );
};

export default Item;