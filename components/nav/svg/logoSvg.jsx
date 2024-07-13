import Image from 'next/image';
import logo_eric from "@public/assets/logos/eric.l.a_03.svg";

const logoSvg = () => (
    <span className="relative flex justify-center items-center w-full h-full">
        {/*<Image
            src={logoW}
            alt="e_l.A logo white"
            id="_logo_white"
            className="absolute bottom left opacity-1"
            width={0}
            height={0}
            sizes="100vw"
            style={{width: 'auto', height: '100%'}}
            priority
        />*/}
        <Image
            src={logo_eric}
            alt="e_l.A logo black"
            id="_logo_black"
            className="absolute bottom left opacity-1"
            width={0}
            height={0}
            sizes="100vw"
            style={{width: 'auto', height: '100%'}}
            priority
        />
    </span>
)
export default logoSvg;