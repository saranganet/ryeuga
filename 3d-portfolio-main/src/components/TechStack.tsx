import * as THREE from "three";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();

const imageUrls = [
  "/images/mexc.webp",
  "/images/tradingview.webp",
  "/images/binance.webp",
  "/images/cryptobubbles.webp",
  "/images/claude.webp",
  "/images/gemini.webp",
  "/images/grok.webp",
  "/images/bing.webp",
  "/images/canva.webp",
  "/images/whisk.webp",
  "/images/python.webp"
];

const textures = imageUrls.map((url) => textureLoader.load(url));
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(42)].map(() => ({
  scale: [0.7, 0.85, 1, 1.15][Math.floor(Math.random() * 4)],
}));

type SphereProps = {
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);
  const tempVec = useRef(new THREE.Vector3());

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;
    delta = Math.min(0.1, delta);
    const translation = api.current.translation();
    const mass = api.current.mass();

    // Spring force towards center (0, 0, 0): F = -k * x
    const k = 1.8;
    const impulse = tempVec.current
      .set(translation.x, translation.y, translation.z)
      .multiplyScalar(-k * delta * mass);

    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.8}
      angularDamping={0.5}
      friction={0.2}
      position={[r(12), r(12), r(10)]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

function Pointer({ isActive }: { isActive: boolean }) {
  const ref = useRef<RapierRigidBody>(null);
  const targetVec = useRef(new THREE.Vector3());

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    targetVec.current.set(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2,
      0
    );
    ref.current?.setNextKinematicTranslation(targetVec.current);
  });

  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const isActive = true; // Always active in its own Projects tab


  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.2,
          metalness: 0.4,
          roughness: 0.7,
          clearcoat: 0.2,
        })
    );
  }, []);

  return (
    <div className="techstack" id="techstack" style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        shadows
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 25], fov: 35 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.2)}
        className="tech-canvas"
      >
        <ambientLight intensity={1.5} />
        <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} castShadow />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[Math.floor(Math.random() * materials.length)]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment files="/models/char_enviorment.hdr" environmentIntensity={0.5} />
        
        {/* FIX APPLIED HERE: Removed disableNormalPass */}
        <EffectComposer>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
        
      </Canvas>
    </div>
  );
};

export default TechStack;