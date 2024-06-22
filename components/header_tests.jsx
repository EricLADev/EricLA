"use client";

import React, {useRef, useMemo, memo} from 'react';
import Image from 'next/image';
import HiThere from "@components/header/hithere";
import { Canvas } from '@react-three/fiber'
import {
    MeshNormalMaterial,
    IcosahedronGeometry,
    TorusKnotGeometry,
} from 'three'
import {Physics, usePlane, useBox, useSphere, useTrimesh, useConvexPolyhedron} from '@react-three/cannon'
import {
    Stats,
    OrbitControls,
    Grid,
    DragControls,
    GizmoHelper,
    GizmoViewport,
    PerspectiveCamera,
    Plane,
    Box, Sphere, AccumulativeShadows, RandomizedLight, Center
} from '@react-three/drei'
import {useControls} from "@node_modules/leva";
import {Environment, useGLTF} from "@node_modules/@react-three/drei";
import LetterO from "@components/header/LetterO";

const Header = () => {

    /*const { gridSize, ...gridConfig } = useControls({
        gridSize: [10.5, 10.5],
        cellSize: { value: 1.5, min: 0, max: 10, step: 0.1 },
        cellThickness: { value: .5, min: 0, max: 5, step: 0.1 },
        cellColor: '#888',
        sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
        sectionThickness: { value: 0, min: 0, max: 5, step: 0.1 },
        sectionColor: '#000',
        fadeDistance: { value: 15, min: 0, max: 100, step: 1 },
        fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
        followCamera: false,
        infiniteGrid: true
    })*/

    return (
        <section id="_header" className="_section w-full min-h-[100dvh] relative flex">
            {/*<HiThere />*/}
            <Canvas camera={{ position: [0, 0, 1], near: 0.1, far: 1000 }}>
                <Physics gravity={[0, -8, 0]}>
                    <PhyPlane
                        color="white"
                        position={[0, -1, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <Diamond position={[1, 5, 0]} rotation={[0.4, 0.1, 0.1]} />
                    <PhyPlane color="lightblue" position={[0, 0, -11]} />
                    <PhyBox position={[1.5, 8, -8]} />
                    <PhyBox position={[0, 8, -8]} />
                    <PhyBox position={[-1.5, 8, -8]} />
                </Physics>
                <ambientLight intensity={0.9} />
                {/*<pointLight intensity={0.8} position={[5, 0, 5]} />*/}
            </Canvas>
        </section>
    );
};

function PhyPlane({ color, ...props }) {
    const [ref] = usePlane(() => ({ ...props }));

    return (
        <Plane args={[1000, 1000]} ref={ref}>
            <meshStandardMaterial color={color} />
        </Plane>
    );
}

function PhyBox(props) {
    const [ref, api] = useBox(() => ({ rotation: [0.1, -0.2, 1], args: [1, 1, 1], mass: 1, ...props }));

    return (
        <Box
            args={[1, 1, 1]}
            ref={ref}
            onClick={() => api.applyImpulse([0, 0, -10], [0, 0, 0])}
        >
            <meshNormalMaterial />
        </Box>
    );
}

function Suzi(props) {
    const { ref, api, nodes } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/suzanne-high-poly/model.gltf')
    return (
        <mesh
            ref={ref}
            onClick={() => api.applyImpulse([0, 0, -10], [0, 0, 0])}
            castShadow receiveShadow geometry={nodes.Suzanne.geometry} {...props}>
            <meshStandardMaterial color="#9d4b4b" />
        </mesh>
    )
}

function toConvexProps(bufferGeometry) {
    const geo = new Geometry().fromBufferGeometry(bufferGeometry);
    // Merge duplicate vertices resulting from glTF export.
    // Cannon assumes contiguous, closed meshes to work
    geo.mergeVertices();
    return [geo.vertices.map((v) => [v.x, v.y, v.z]), geo.faces.map((f) => [f.a, f.b, f.c]), []]; // prettier-ignore
}

function Diamond(props) {
    const { nodes } = useGLTF("/assets/glb/diamond.glb");
    const geo = useMemo(() => toConvexProps(nodes.Cylinder.geometry), [nodes]);
    const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }));
    return (
        <mesh
            castShadow
            receiveShadow
            ref={ref}
            geometry={nodes.Cylinder.geometry}
            {...props}
        >
            <meshStandardMaterial wireframe color="white" />
        </mesh>
    );
}

export default Header;