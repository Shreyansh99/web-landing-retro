'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'

// Generate random points in a 3D space
function generateRandomPoints(count: number, radius: number) {
  const points = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = Math.cbrt(Math.random()) * radius
    
    points[i3] = r * Math.sin(phi) * Math.cos(theta)
    points[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    points[i3 + 2] = r * Math.cos(phi)
  }
  return points
}

// Animated stars component
function Stars({ count = 5000, depth = 50 }) {
  const pointsRef = useRef<THREE.Points>(null!)
  const [sphere] = useState(() => generateRandomPoints(count, depth))
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })
  
  return (
    <group>
      <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#004d99"
          size={0.2}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

// Animated gradient sphere
function GradientSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { viewport } = useThree()
  
  const [hovered, setHovered] = useState(false)
  
  const { scale, color } = useSpring({
    scale: hovered ? [1.2, 1.2, 1.2] : [1, 1, 1],
    color: hovered ? '#0066cc' : '#003366',
    config: { mass: 1, tension: 170, friction: 26 }
  })
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 2
      meshRef.current.position.y = Math.cos(state.clock.getElapsedTime() * 0.3) * 1
    }
  })
  
  return (
    <animated.mesh
      ref={meshRef}
      scale={scale as any}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[2, 32, 32]} />
      <animated.meshPhongMaterial 
        color={color as any} 
        transparent 
        opacity={0.6} 
        shininess={100}
      />
    </animated.mesh>
  )
}

// Animated floating particles
function FloatingParticles({ count = 100 }) {
  const particlesRef = useRef<THREE.Group>(null!)
  const [particles] = useState(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      ],
      size: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.2 + 0.05,
      offset: Math.random() * Math.PI * 2,
      color: Math.random() > 0.6 ? '#0066cc' : '#003366'
    }))
  })
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle: any, i) => {
        const { speed, offset } = particles[i]
        particle.position.y += Math.sin(t * speed + offset) * 0.01
        particle.position.x += Math.cos(t * speed + offset) * 0.01
      })
    }
  })
  
  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position as any}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color={particle.color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

// Scene component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars />
      <GradientSphere />
      <FloatingParticles />
    </>
  )
}

// Main component
export default function ThreeBackground({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])
  
  if (!mounted) return null
  
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        dpr={[1, 2]}
        style={{ background: 'linear-gradient(to bottom, #000510, #001529)' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
