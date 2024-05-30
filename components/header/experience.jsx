"use client";

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {Grid, Center, GizmoHelper, GizmoViewport, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF} from "@react-three/drei";
import {Avatar} from "@components/header/avatar";
import {useControls} from "@node_modules/leva";

export const Experience = () => {
    /*const { gridSize, ...gridConfig } = useControls({
        gridSize: [10.5, 10.5],
        cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
        cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
        cellColor: '#6f6f6f',
        sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
        sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
        sectionColor: '#9d4b4b',
        fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
        fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
        followCamera: false,
        infiniteGrid: true
    })*/
    return (
        <>
            <OrbitControls />
            <group position-y={-1} rotation-x={-Math.PI /2}>
                <Avatar />
            </group>
            {/*<Grid position={[0, -1, 0]} args={gridSize} {...gridConfig} />*/}
            <ambientLight intensity={1} />
        </>
    )
}