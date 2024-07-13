
import useSWR from "swr";
import Moment from 'react-moment';
import 'moment-timezone';
import eiffel from "@public/assets/icons/eiffel.svg";
import Image from "next/image";
import dotted_05 from "@public/assets/icons/dotted_05.svg";

const Weather = () => {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const {
        data,
        error,
        isLoading
    } = useSWR("https://api.openweathermap.org/data/2.5/weather?id=2968815&units=metric&appid=31d8854931598eb79e9828791b21ff27", fetcher);

    if (error) return <div className="text-[.85rem]">error</div>
    if (isLoading) return <div className="text-[.85rem]">weather<br/>loading...</div>

    //console.log(data);

    return (
        <div
            className="relative w-auto h-[4.75rem] flex justify-start items-center bg-white text-zinc-950 rounded-full font-medium">
            <div
                className="absolute -top-18 left-14 size-48 rounded-full overflow-hidden flex justify-center items-center -z-[1]">
                <Image
                    style={{width: '100%', height: '100%'}}
                    src={dotted_05}
                    alt="Weather"
                    priority
                />
            </div>
            <div
                className="relative -left-1 size-[5rem] flex justify-center items-center bg-sky-300 border-2 border-white text-white rounded-full">
                <i className={`!text-[2.5rem] owi owi-${data.weather[0].icon.replace(/\s+/g, '-').toLowerCase()}`}></i>
            </div>
            <div className="flex flex-col text-left leading-[1] ml-1 mr-1">
                <span className="text-[1.75rem]">{Math.round(data.main.temp)}°</span>
            </div>
            <div className="text-[.95rem] leading-[1] uppercase w-[80px]">
                <p className="font-bold">PARIS</p>
                <p className="text-[.85rem]"><Moment locale="fr" format="MMMM Do YYYY" interval={1000}></Moment></p>
                <p className="text-[.85rem] uppercase"><Moment locale="fr" format="h:mm:ss a" interval={1000}></Moment>
                </p>
            </div>
            <div
                className="size-24 -rotate-[5deg] rounded-full overflow-hidden">
                <Image
                    fill
                    style={{objectFit: "cover"}}
                    src={eiffel}
                    alt="eiffel"
                    priority
                />
            </div>
        </div>
    )
}

export default Weather;
