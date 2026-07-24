import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (isTouch || !ref.current) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let raf = 0

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const tick = () => {
      x += (tx - x) * 0.14
      y += (ty - y) * 0.14
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div className="spotlight-cursor" ref={ref} aria-hidden="true" />
}
