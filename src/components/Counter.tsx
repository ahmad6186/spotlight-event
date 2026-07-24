import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

interface CounterProps {
  to: number
  suffix?: string
  duration?: number
}

export default function Counter({ to, suffix = '', duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView || !ref.current) return
    const node = ref.current
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (value) => {
        node.textContent = Math.round(value).toString() + suffix
      },
    })
    return () => controls.stop()
  }, [isInView, to, suffix, duration])

  return <span ref={ref}>0{suffix}</span>
}
