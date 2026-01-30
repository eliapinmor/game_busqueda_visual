import { OrbitControls, Stars, ContactShadows } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";

export default function Game() {
  return (
    <div>
      <h1>Game Page</h1>
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        {/* --- LUCES --- */}
        {/* Luz ambiental: Ilumina todo por igual, evita sombras negras puras */}
        <ambientLight intensity={0.5} /> 
        
        {/* Luz direccional: Simula el sol, genera sombras y profundidad */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow 
        />
        
        {/* Luz de punto: Como una bombilla cerca de los objetos */}
        <pointLight position={[-5, 5, -5]} intensity={0.8} color="lightblue" />

        {/* --- AYUDAS VISUALES (Opcional para desarrollo) --- */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls makeDefault /> {/* Permite rotar y hacer zoom con el ratón */}
        <gridHelper args={[20, 20]} /> {/* Suelo de referencia */}

        {/* Aquí irán tus objetos */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        
        {/* Sombra en el suelo para realismo */}
        <ContactShadows position={[0, 0, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      </Canvas>
    </div>
  )
}