
import { TypeAnimation } from 'react-type-animation';

const Infos = () => {

    return (
        <div className="absolute bottom-5 left-5 z-50 w-[500px] h-[200px] text-zinc-950 text-[1.15rem] leading-[1.5rem] font-normal">
            {/*<TypeAnimation
                style={{ fontSize: '2rem', lineHeight: '2.2rem', whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                sequence={[
                    `I am a front end developer\nFor a few years now\nI'm looking for new challenges\nFor the next decade
    
                    Thx.
                    Eric L.A.`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                    1500,
                    '',
                ]}
                speed={50}
                repeat={0}
            />*/}
            I am a front end developer<br/>
            For a few years now<br/>
            I'm looking for new challenges<br/>
            For the next decade<br/>
            <br/>
            Thx.<br/>
            Eric
        </div>
    );
};

export default Infos;
