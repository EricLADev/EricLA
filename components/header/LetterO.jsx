
import { canvas } from '@react-three/fiber';
import {Float, OrthographicCamera, useGLTF} from "@node_modules/@react-three/drei";
import {useTransform} from "framer-motion";
import {motion} from "framer-motion-3d";
import {useFrame, useThree} from "@node_modules/@react-three/fiber";
import {useRef, useState} from "react";

const LetterO = () => {
    const ref = useRef()
    const [hovered, setHover] = useState(false)
    const { nodes, materials } = useGLTF('/assets/glb/bulle04.glb')
    const viewport = useThree((state) => state.viewport)
    useFrame((state, delta) => (ref.current.rotation.z += delta / 2))
    return (
        <OrthographicCamera>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                material={nodes.Text.material}
                rotation={[Math.PI / 2, 0, 0]}

                ref={ref}
                position={[0, -1.9, 0]}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
                scale={Math.min(viewport.width, viewport.height) / 2.2}
            >
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
                {/*<meshStandardMaterial color="red"/>*/}
            </mesh>
        </OrthographicCamera>
    );
};

export default LetterO;

function Mesh({node, mouse, multiplier}) {
    const {castShadow, receiveShadow, geometry, material, position, rotation} = node;
    const rotationX = useTransform(mouse.x, [0, 2], [rotation.x - multiplier, rotation.x + multiplier])
    const rotationY = useTransform(mouse.y, [0, 2], [rotation.y - multiplier, rotation.y + multiplier])
    return (
        <motion.mesh
            castShadow={castShadow}
            receiveShadow={receiveShadow}
            geometry={geometry}
            material={material}
            position={position}
            rotation={rotation}
            rotation-x={rotationX}
            rotation-y={rotationY}
            />
    )
}

useGLTF.preload('/assets/glb/bulle04.glb');