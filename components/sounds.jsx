"use client"

import Sound from "@components/sounds/sound";
import Sound01 from "@components/sounds/sound01";
import Sound02 from "@components/sounds/sound02";
import Sound03 from "@components/sounds/sound03";
import Sound04 from "@components/sounds/sound04";
import Sound05 from "@components/sounds/sound05";
import {OrbitControls} from "@node_modules/@react-three/drei";
import {Canvas, useFrame, useLoader, useThree} from "@node_modules/@react-three/fiber";
import React, {Suspense, useEffect, useRef, useState} from "react";
import * as THREE from "three";
import {Box} from "@react-three/drei";
import { suspend } from 'suspend-react';

const Sounds = () => {

    const [ready, set] = useState(false)

    const [audioUrl, setAudioUrl] = useState(null);
    const audioElmRef = useRef(null);

    const onFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setAudioUrl(URL.createObjectURL(file));
    };


    return (
        <section id="_sounds" className="w-full min-h-[100dvh] h-full relative">

            <div className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${ready && 'clicked'}`}>
                <div className="stack">
                    <button onClick={() => set(true)}>▶️</button>
                </div>
            </div>

            {ready &&

                <div
                    className="absolute w-4/5 h-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-50">

                    <Canvas shadows dpr={[1, 2]} camera={{position: [-1, 1.5, 2], fov: 25}}>
                        <spotLight position={[-4, 4, -4]} angle={0.06} penumbra={1} castShadow
                                   shadow-mapSize={[2048, 2048]}/>
                        <Suspense fallback={null}>
                            <Track position-z={-0.25} url="assets/synth.mp3"/>
                            <Track position-z={0} url="assets/snare.mp3"/>
                            <Track position-z={0.25} url="assets/drums.mp3"/>
                            <Zoom url="assets/drums.mp3"/>
                        </Suspense>
                        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.025, 0]}>
                            <planeGeometry/>
                            <shadowMaterial transparent opacity={0.15}/>
                        </mesh>
                    </Canvas>

                </div>
            }

        </section>
    );
};

function Track({url, y = 2500, space = 1.8, width = 0.01, height = 0.05, obj = new THREE.Object3D(), ...props}) {
    const ref = useRef()
    // suspend-react is the library that r3f uses internally for useLoader. It caches promises and
    // integrates them with React suspense. You can use it as-is with or without r3f.
    const { gain, context, update, data } = suspend(() => createAudio(url), [url])
    useEffect(() => {
        // Connect the gain node, which plays the audio
        gain.connect(context.destination)
        // Disconnect it on unmount
        return () => gain.disconnect()
    }, [gain, context])

    useFrame((state) => {
        let avg = update()
        // Distribute the instanced planes according to the frequency daza
        for (let i = 0; i < data.length; i++) {
            obj.position.set(i * width * space - (data.length * width * space) / 2, data[i] / y, 0)
            obj.updateMatrix()
            ref.current.setMatrixAt(i, obj.matrix)
        }
        // Set the hue according to the frequency average
        ref.current.material.color.setHSL(avg / 500, 0.75, 0.75)
        ref.current.instanceMatrix.needsUpdate = true
    })
    return (
        <instancedMesh castShadow ref={ref} args={[null, null, data.length]} {...props}>
            <planeGeometry args={[width, height]} />
            <meshBasicMaterial toneMapped={false} />
        </instancedMesh>
    )
}

function Zoom({ url }) {
    // This will *not* re-create a new audio source, suspense is always cached,
    // so this will just access (or create and then cache) the source according to the url
    const { data } = suspend(() => createAudio(url), [url])
    return useFrame((state) => {
        // Set the cameras field of view according to the frequency average
        state.camera.fov = 25 - data.avg / 15
        state.camera.updateProjectionMatrix()
    })
}

async function createAudio(url) {
    // Fetch audio data and create a buffer source
    const res = await fetch(url)
    const buffer = await res.arrayBuffer()
    const context = new (window.AudioContext || window.webkitAudioContext)()
    const source = context.createBufferSource()
    source.buffer = await new Promise((res) => context.decodeAudioData(buffer, res))
    source.loop = true
    // This is why it doesn't run in Safari 🍏🐛. Start has to be called in an onClick event
    // which makes it too awkward for a little demo since you need to load the async data first
    source.start(0)
    // Create gain node and an analyser
    const gain = context.createGain()
    const analyser = context.createAnalyser()
    analyser.fftSize = 64
    source.connect(analyser)
    analyser.connect(gain)
    // The data array receive the audio frequencies
    const data = new Uint8Array(analyser.frequencyBinCount)
    return {
        context,
        source,
        gain,
        data,
        // This function gets called every frame per audio source
        update: () => {
            analyser.getByteFrequencyData(data)
            // Calculate a frequency average
            return (data.avg = data.reduce((prev, cur) => prev + cur / data.length, 0))
        },
    }
}

function Cyl2(props) {

    const ref2 = useRef();
    const texture = useLoader(THREE.TextureLoader, "assets/texture/getintouch_texture_02.svg");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    const viewport = useThree((state) => state.viewport)
    useFrame((state, delta) => (ref2.current.rotation.y -= delta / 3))

    return (
        <mesh position={[0, 0, 0]} scale={Math.min(viewport.width, viewport.height) / 10} ref={ref2}>
            <cylinderGeometry {...props} />
            <meshStandardMaterial
                map={texture}
                transparent={true}
                side={THREE.DoubleSide}
                depthTest={false}
                toneMapped={true}
                map-repeat={[5, 1]}
            />
        </mesh>
    )
}

export default Sounds;