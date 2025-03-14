'use client'

import { useEffect, useRef } from 'react'

const CloudyTrailCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // let particles: { x: number; y: number; size: number; color: string; }[] = []
    const particles: { x: number; y: number; size: number; color: string; }[] = []

    const addParticle = (x: number, y: number) => {
      particles.push({
        x,
        y,
        size: Math.random() * 15 + 5,
        color: `hsla(${Math.random() * 60 + 200}, 100%, 70%, ${Math.random() * 0.5 + 0.5})`,
      })
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.size -= 0.3
        if (particle.size <= 0) {
          particles.splice(index, 1)
        } else {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = particle.color
          ctx.fill()
        }
      })

      requestAnimationFrame(animateParticles)
    }

    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        addParticle(e.clientX, e.clientY)
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    animateParticles()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-50 pointer-events-none" />
}

export default CloudyTrailCursor