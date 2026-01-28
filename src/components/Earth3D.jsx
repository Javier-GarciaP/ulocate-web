
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei';

function EarthModel(props) {
    // Usar import.meta.env.BASE_URL hace que funcione en dev y en producción
    // (por ejemplo cuando `base` está configurado a '/unet-gps/').
    const { scene } = useGLTF(`${import.meta.env.BASE_URL}earth/scene.gltf`);
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            // Rotación suave constante
            ref.current.rotation.y += 0.005;
            // Pequeña oscilación para darle "vida"
            ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
        }
    });

    return (
        <primitive
            object={scene}
            ref={ref}
            scale={2.5}
            {...props}
        />
    );
}

export default function Earth3D() {
    return (
        <div className="w-full h-full relative">
            <Canvas
                camera={{ position: [0, 0, 70], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

                <Suspense fallback={null}>
                    <EarthModel />
                    <Environment preset="city" />
                    <ContactShadows resolution={512} scale={10} blur={2} opacity={0.25} far={10} color="#000000" />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    autoRotate={false}
                    enablePan={false}
                />
            </Canvas>
        </div>
    );
}
