
import { canvas } from '@react-three/fiber';
import {Float, OrthographicCamera, useGLTF} from "@node_modules/@react-three/drei";
import {useTransform} from "framer-motion";
import {motion} from "framer-motion-3d";
import {useFrame, useThree} from "@node_modules/@react-three/fiber";
import {useRef, useState} from "react";

const Hi = () => {
    const ref = useRef()
    const [hovered, setHover] = useState(false)
    const { nodes, materials } = useGLTF('/assets/glb/hi.glb')
    const viewport = useThree((state) => state.viewport)
    useFrame((state, delta) => (ref.current.rotation.z -= delta / 2))
    return (
        <OrthographicCamera>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                material={nodes.Text.material}
                rotation={[Math.PI / 2, 0, 0]}

                ref={ref}
                position={[0, 0, 0]}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
                scale={Math.min(viewport.width, viewport.height) / 4}
            >
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
                {/*<meshStandardMaterial color="red"/>*/}
            </mesh>
        </OrthographicCamera>
    );
};

export default Hi;

useGLTF.preload('/assets/glb/hi.glb');