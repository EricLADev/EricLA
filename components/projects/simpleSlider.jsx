"use client"

import React, { useEffect, useRef } from 'react';
import Slider from "react-slick";
import Image from "next/image";
/*import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";*/
import contactImg from "@public/assets/images/mail01_center.gif";
import contactImg2 from "@public/assets/images/mail01_center.gif";
import {motion} from "@node_modules/framer-motion";
import logoSquareMHS from "@public/assets/images/logo_square_mhs-min.jpg";
import mobhouseSlide09 from "@public/assets/images/mobhouse-slide-09-min.jpg";
import mobhouseSlide03 from "@public/assets/images/mobhouse-slide-03-min.jpg";
import mobhouseSlide08 from "@public/assets/images/mobhouse-slide-08-min.jpg";

const SimpleSlider = () => {

    /*const renderRef = useRef();
    useEffect(() => {

    }, [])*/

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

    return (
        <div>
            <div className="bg-red-400">
                <h2 className="text-[3.5vw] leading-[normal]">
                    <span>MOBHOUSE</span>
                </h2>
                <p className="text-[1.5vw] leading-[2vw]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
                    tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
                    Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor,
                    orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
                </p>
            </div>
            <Slider className="w-[400px] h-[400px]" {...settings}>
                <div className="_slick-slide _img w-[400px] h-[400px]">
                    <h3>toto</h3>
                    {/*<Image
                        fill
                        style={{objectFit: "cover"}}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={mobhouseSlide09}
                        alt="mobhouseSlide09"
                        priority
                    />*/}
                </div>
                <div className="_slick-slide _img w-[400px] h-[400px]">
                    <h3>titi</h3>
                </div>
                <div className="_slick-slide _img w-[400px] h-[400px]">
                    <h3>tata</h3>
                </div>
            </Slider>
        </div>
    )
}

export default SimpleSlider;
