"use client"

import { useEffect } from "react"

import { useRef } from "react"

import * as THREE from "three"
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js"
import { RenderPass } from "three/addons/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js"
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js"

// Custom shader for the glitch effect
const GlitchShader = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0 },
    distortion: { value: 0.1 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float distortion;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Random glitch effect
      float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
      
      // Distortion based on time
      float glitchIntensity = sin(time) * distortion;
      uv.x += noise * glitchIntensity;
      
      vec4 color = texture2D(tDiffuse, uv);
      
      // Add scanlines
      float scanline = sin(uv.y * 400.0 + time * 10.0) * 0.1;
      color.rgb += scanline;
      
      gl_FragColor = color;
    }
  `,
}

export default function CanvasBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const time = useRef(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })

    // Initial setup
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current?.appendChild(renderer.domElement)

    // Post processing
    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.5, // strength
      0.4, // radius
      0.85, // threshold
    )
    composer.addPass(bloomPass)

    const glitchPass = new ShaderPass(GlitchShader)
    composer.addPass(glitchPass)

    // Particles system
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1920
      const windowHeight = typeof window !== "undefined" ? window.innerHeight : 1080

      posArray[i] = Math.random() * windowWidth
      posArray[i + 1] = Math.random() * windowHeight
      posArray[i + 2] = (Math.random() - 0.5) * 5
    }
    const velocityArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Velocity
      velocityArray[i] = (Math.random() - 0.5) * 0.01
      velocityArray[i + 1] = (Math.random() - 0.5) * 0.01
      velocityArray[i + 2] = (Math.random() - 0.5) * 0.01
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("velocity", new THREE.BufferAttribute(velocityArray, 3))

    // Custom shader material for particles
    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute vec3 velocity;
        uniform float time;
        
        void main() {
          vec3 pos = position + velocity * time;
          
          // Keep particles within bounds
          pos = mod(pos + 2.5, 5.0) - 2.5;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Size attenuation
          gl_PointSize = 2.0 * (1.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          gl_FragColor = vec4(0.364, 0.882, 0.902, 1.0 - dist * 2.0);
        }
      `,
      transparent: true,
      uniforms: {
        time: { value: 0 },
      },
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Lines for connections
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x5ce1e6,
      transparent: true,
      opacity: 0.2,
    })
    const linesGeometry = new THREE.BufferGeometry()
    const lines = new THREE.LineSegments(linesGeometry, linesMaterial)
    scene.add(lines)

    // Camera position
    camera.position.z = 3

    // Mouse movement
    const onMouseMove = (event: MouseEvent) => {
      if (typeof window === "undefined") return
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      }
    }

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      composer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("resize", handleResize)
    }

    // Animation
    function animate() {
      if (typeof window === "undefined") return
      requestAnimationFrame(animate)
      time.current += 0.01

      // Update particles
      const positions = particlesGeometry.attributes.position.array as Float32Array
      const velocities = particlesGeometry.attributes.velocity.array as Float32Array

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i]
        positions[i + 1] += velocities[i + 1]
        positions[i + 2] += velocities[i + 2]

        // Keep particles within bounds
        positions[i] = ((positions[i] + 2.5) % 5) - 2.5
        positions[i + 1] = ((positions[i + 1] + 2.5) % 5) - 2.5
        positions[i + 2] = ((positions[i + 2] + 2.5) % 5) - 2.5
      }

      particlesGeometry.attributes.position.needsUpdate = true

      // Update connections
      const linePositions: number[] = []
      for (let i = 0; i < positions.length; i += 3) {
        const x1 = positions[i]
        const y1 = positions[i + 1]
        const z1 = positions[i + 2]

        for (let j = i + 3; j < positions.length; j += 3) {
          const x2 = positions[j]
          const y2 = positions[j + 1]
          const z2 = positions[j + 2]

          const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2))

          if (distance < 0.5) {
            linePositions.push(x1, y1, z1)
            linePositions.push(x2, y2, z2)
          }
        }
      }

      linesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3))

      // Update uniforms
      particlesMaterial.uniforms.time.value = time.current
      glitchPass.uniforms.time.value = time.current
      glitchPass.uniforms.distortion.value = Math.sin(time.current) * 0.05

      // Rotate based on mouse position
      particlesMesh.rotation.x += (mousePosition.current.y * 0.2 - particlesMesh.rotation.x) * 0.05
      particlesMesh.rotation.y += (mousePosition.current.x * 0.2 - particlesMesh.rotation.y) * 0.05

      lines.rotation.x = particlesMesh.rotation.x
      lines.rotation.y = particlesMesh.rotation.y

      composer.render()
    }

    animate()
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10"
      style={{ background: "radial-gradient(circle at center, #002133 0%, #001219 100%)" }}
    />
  )
}

