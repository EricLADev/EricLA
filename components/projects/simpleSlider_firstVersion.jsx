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
    const renderRef = useRef();

    useEffect(() => {

    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerPadding: "10px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <Slider className="w-full" {...settings}>
            <div className="_slick-slide _txt min-h-full p-[6%] !flex flex-col justify-between">
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
            <div className="_slick-slide _img min-h-full">
                <Image
                    fill
                    style={{objectFit: "cover"}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={mobhouseSlide09}
                    alt="mobhouseSlide09"
                    priority
                />
            </div>
            <div className="_slick-slide _img min-h-full">
                <Image
                    fill
                    style={{objectFit: "cover"}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={mobhouseSlide03}
                    alt="mobhouseSlide03"
                    priority
                />
            </div>
            <div className="_slick-slide _img min-h-full">
                <Image
                    fill
                    style={{objectFit: "cover"}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={mobhouseSlide08}
                    alt="mobhouseSlide08"
                    priority
                />
            </div>
        </Slider>
    )
}

export default SimpleSlider;
