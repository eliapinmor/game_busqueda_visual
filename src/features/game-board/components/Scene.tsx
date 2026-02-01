// src/features/game-board/components/Scene.tsx
import { Canvas } from '@react-three/fiber';
import { VisualItem } from './VisualItem';

export const Scene = ({ objects, onItemClick }: { objects: any[], onItemClick: (id: string) => void }) => {
  if (!objects) return null;

  return (
<div className="flex-1 w-full">
  <Canvas 
    style={{ width: '100%', height: '100%' }}
    camera={{ position: [0, 0, 15], fov: 50 }}
  >
        <ambientLight intensity={0.8} />
        {objects.map((obj) => (
          <VisualItem 
            key={obj.id}
            url={obj.url}
            position={obj.position}
            onClick={() => onItemClick(obj.id)}
          />
        ))}
      </Canvas>
    </div>
  );
};