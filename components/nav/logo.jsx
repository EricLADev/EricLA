
import LogoSvg from "@components/nav/svg/logoSvg";

const Logo = () => {
    return (
        <div id="_logo" className="absolute z-20 top-5 left-5 w-[186px] h-[80px] p-[20px] flex justify-center items-center">
            <LogoSvg />
        </div>
    );
};

export default Logo;