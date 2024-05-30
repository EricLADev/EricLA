
import '@styles/globals.css';
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
        <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        </body>
        </html>
    );
};

export default RootLayout;