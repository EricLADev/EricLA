import React from "react";

const Languages = () => {

    return (
        <div className="langs _left">
            <div className="lang fr">
                <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32">
                        <path fill="#d4d4d8" d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12s12-5.373 12-12S22.627 4 16 4M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16"/>
                    </svg>
                </div>
                <div className="desc"><span>FRENCH</span>Native</div>
            </div>
            <div className="lang en">
                <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                        <path fill="#d4d4d8" d="M11.781 3.253a8.75 8.75 0 1 0 1.928 17.33a.75.75 0 0 1 .29 1.472a10.3 10.3 0 0 1-2.255.192a10.2 10.2 0 0 1-7.338-3.363A10.2 10.2 0 0 1 1.75 12C1.75 6.34 6.34 1.75 12 1.75q1.027.001 2 .195a.75.75 0 0 1-.291 1.472a8.8 8.8 0 0 0-1.928-.164m5.915.224a.75.75 0 0 0-.835 1.246a8.8 8.8 0 0 1 2.416 2.416a.75.75 0 0 0 1.246-.835a10.3 10.3 0 0 0-2.827-2.827M22.055 10a.75.75 0 1 0-1.472.291a8.8 8.8 0 0 1 0 3.418a.75.75 0 0 0 1.472.29a10.3 10.3 0 0 0 0-3.999m-1.532 7.696a.75.75 0 0 0-1.246-.835a8.8 8.8 0 0 1-2.416 2.416a.75.75 0 0 0 .835 1.246a10.3 10.3 0 0 0 2.827-2.827"/>
                    </svg>
                </div>
                <div className="desc"><span>ENGLISH</span>Intermediate<br/>Technical</div>
            </div>
        </div>
    );
};

export default Languages;