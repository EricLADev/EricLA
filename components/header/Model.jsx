
import { canvas } from '@react-three/fiber';
import {Float, useGLTF} from "@node_modules/@react-three/drei";
import {useTransform} from "framer-motion";
import {motion} from "framer-motion-3d";

const Model = ({mouse}) => {

    const { nodes, materials } = useGLTF('/assets/glb/hiThere.glb')

    return (
        <Float>
            <group>
                <Mesh node={nodes.Text} mouse={mouse} multiplier={1.1} />
                <Mesh node={nodes.Text001} mouse={mouse} multiplier={1.2} />
                <Mesh node={nodes.Text002} mouse={mouse} multiplier={.4} />
                <Mesh node={nodes.Text003} mouse={mouse} multiplier={.9} />
                <Mesh node={nodes.Text004} mouse={mouse} multiplier={.7} />
                <Mesh node={nodes.Text005} mouse={mouse} multiplier={.9} />
                <Mesh node={nodes.Text006} mouse={mouse} multiplier={.6} />
                <Mesh node={nodes.Text007} mouse={mouse} multiplier={1} />
            </group>
        </Float>
    );
};

export default Model;

function Mesh({node, mouse, multiplier}) {
    const { castShadow, receiveShadow, geometry, material, position, rotation } = node;
    const rotationX = useTransform(mouse.x, [0,2],[rotation.x-multiplier, rotation.x+multiplier])
    const rotationY = useTransform(mouse.y, [0,2],[rotation.y-multiplier, rotation.y+multiplier])
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

useGLTF.preload('/assets/glb/hiThere.glb');