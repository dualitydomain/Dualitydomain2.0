"use client"

import { useEffect, useRef } from "react"

interface Neuron {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

interface DistanceResult {
  index: number
  distance: number
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === "undefined") return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configuración inicial
    const neurons: Neuron[] = []
    const neuronCount = 100
    const connectionRadius = 150
    const neuronRadius = 2
    const maxConnections = 3

    // Ajustar el canvas al tamaño de la ventana
    const resizeCanvas = () => {
      if (typeof window === "undefined" || !canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Crear neuronas iniciales
    const initNeurons = () => {
      neurons.length = 0
      for (let i = 0; i < neuronCount; i++) {
        neurons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
        })
      }
    }

    // Actualizar posiciones
    const updateNeurons = () => {
      neurons.forEach((neuron) => {
        // Mover neurona
        neuron.x += neuron.vx
        neuron.y += neuron.vy

        // Rebotar en los bordes
        if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1
        if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1

        // Mantener dentro del canvas
        neuron.x = Math.max(0, Math.min(canvas.width, neuron.x))
        neuron.y = Math.max(0, Math.min(canvas.height, neuron.y))

        // Efecto del mouse
        const dx = mouseRef.current.x - neuron.x
        const dy = mouseRef.current.y - neuron.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          const force = (200 - dist) * 0.0005
          neuron.vx -= dx * force
          neuron.vy -= dy * force
        }
      })
    }

    // Actualizar conexiones
    const updateConnections = () => {
      neurons.forEach((neuron) => {
        neuron.connections = []
        const distances: DistanceResult[] = neurons
          .map((other, index) => {
            if (other === neuron) return { index, distance: Number.POSITIVE_INFINITY }
            const dx = other.x - neuron.x
            const dy = other.y - neuron.y
            return { index, distance: Math.sqrt(dx * dx + dy * dy) }
          })
          .filter((d) => d.distance < connectionRadius)
          .sort((a, b) => a.distance - b.distance)
          .slice(0, maxConnections)

        neuron.connections = distances.map((d) => d.index)
      })
    }

    // Dibujar frame
    const draw = () => {
      if (!ctx || !canvas) return

      // Limpiar canvas
      ctx.fillStyle = "rgba(0, 33, 51, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Dibujar conexiones
      ctx.beginPath()
      neurons.forEach((neuron, i) => {
        neuron.connections.forEach((connectionIndex) => {
          const other = neurons[connectionIndex]
          const dx = other.x - neuron.x
          const dy = other.y - neuron.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const opacity = 1 - distance / connectionRadius

          ctx.strokeStyle = `rgba(92, 225, 230, ${opacity * 0.5})`
          ctx.lineWidth = opacity

          ctx.moveTo(neuron.x, neuron.y)
          ctx.lineTo(other.x, other.y)
        })
      })
      ctx.stroke()

      // Dibujar neuronas
      neurons.forEach((neuron) => {
        ctx.beginPath()
        ctx.arc(neuron.x, neuron.y, neuronRadius, 0, Math.PI * 2)
        ctx.fillStyle = "#5CE1E6"
        ctx.fill()

        // Efecto de brillo
        ctx.beginPath()
        ctx.arc(neuron.x, neuron.y, neuronRadius * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(neuron.x, neuron.y, 0, neuron.x, neuron.y, neuronRadius * 2)
        gradient.addColorStop(0, "rgba(92, 225, 230, 0.3)")
        gradient.addColorStop(1, "rgba(92, 225, 230, 0)")
        ctx.fillStyle = gradient
        ctx.fill()
      })
    }

    // Loop de animación
    const animate = () => {
      updateNeurons()
      updateConnections()
      draw()
      requestAnimationFrame(animate)
    }

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window === "undefined" || !canvas) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleResize = () => {
      if (typeof window === "undefined" || !canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNeurons()
    }

    // Inicialización
    if (typeof window !== "undefined") {
      resizeCanvas()
      initNeurons()
      animate()

      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: "radial-gradient(circle at center, #002133 0%, #001219 100%)",
      }}
    />
  )
}

