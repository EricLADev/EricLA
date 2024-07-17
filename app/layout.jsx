
import '@styles/globals.css';
import '@styles/weather-icons.css';
import '@styles/open-weather-icons.css';
import Script from 'next/script'
import Loading from "@app/loading";
import {Suspense} from "react";

export const metadata = {
    title: "e-l.a",
    description: "About my works and projects.."
}

const RootLayout = ( {children} ) => {

    return (
        /*<html lang="en" className='dark'>*/
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
};

export default RootLayout;