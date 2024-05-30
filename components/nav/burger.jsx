import React from 'react';

const Burger = ({ onToggleClick }) => {
    return (
        <div
            onClick={onToggleClick}
            id="_burger_container"
            className="
            fixed z-50 bg-zinc-950 bg-opacity-100 cursor-pointer rounded-full mr-2 mt-2

            top-[var(--main-padding)] right-[var(--main-padding)]
            sm:top-[var(--main-padding-sm)] sm:right-[var(--main-padding-sm)]
            lg:top-[var(--main-padding-lg)] lg:right-[var(--main-padding-lg)]
            2xl:top-[var(--main-padding-2xl)] 2xl:right-[var(--main-padding-2xl)]"
        >
            <div
                id="_burger"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Burger;