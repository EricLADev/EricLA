
import '@styles/globals.css';
import '@styles/weather-icons.css';
import '@styles/open-weather-icons.css';
import Script from 'next/script'

export const metadata = {
    title: "e-l.a",
    description: "About me, my works and projects.."
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