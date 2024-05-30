"use client";

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {AsciiRenderer, Backdrop, ContactShadows, PresentationControls} from '@react-three/drei'
import LetterO from "@components/header/LetterO";
import Hi from "@components/header/hi";
import Infos from "@components/header/infos";
import Bulle3d from "@components/header/bulle3d";

const Header = () => {

    return (
        <section id="_header" className="_section w-full relative flex bg-zinc-300">
            <Canvas className="canvas">
                <color attach="background" args={['black']}/>
                <spotLight position={[10, 10, 10]} angle={0.35} penumbra={1} decay={0} intensity={Math.PI}/>
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>
                {/*<spotLight position={[0, 0, ]} angle={0.15} penumbra={1} />
                <pointLight position={[0, 0, 0]} />*/}
                <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000" />
                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0.3, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                    <Bulle3d />
                    {/*<LetterO />*/}
                    {/*<Hi />*/}
                    {/*<Torusknot />*/}
                </PresentationControls>
                {/*<AsciiRenderer characters=" ..--~~++==##@@" fgColor="#0c0a09" bgColor="#f5f5f4"/>*/}
                <AsciiRenderer characters=" ..--~~++==##" fgColor="#0c0a09" bgColor="#f4f4f5"/>
            </Canvas>
            <Infos />
        </section>
    );

};

function Torusknot(props) {
    const ref = useRef()
    const viewport = useThree((state) => state.viewport)
    useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
    return (
        <mesh scale={Math.min(viewport.width, viewport.height) / 5} {...props} ref={ref}>
            <torusKnotGeometry args={[1, 0.2, 18, 3]} />
            <meshStandardMaterial color="red" />
        </mesh>
    )
}

export default Header;