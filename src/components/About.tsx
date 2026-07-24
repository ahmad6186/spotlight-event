import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from '../lib/gsap'
import Counter from './Counter'
import './About.css'

const STATS = [
  { to: 116, suffix: '+', label: 'Years combined team experience' },
  { to: 5, suffix: '', label: 'Dedicated event specialists' },
  { to: 3, suffix: '', label: 'Event categories: corporate, social & public' },
]

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.1,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        },
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div>
          <span className="eyebrow">Who We Are</span>
          <h2 className="about__heading" ref={headingRef}>
            An event is more than a gathering.
          </h2>
          <p className="about__text">
            At Spotlight Events, we believe an event is a powerful platform to showcase your brand, connect
            audiences, and celebrate milestones. Backed by an expert team of planners, designers, and technical
            production specialists, we handle every detail with absolute precision so you can focus entirely on
            your guests and core objectives.
          </p>
        </div>

        <motion.div
          className="about__stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              className="about__stat"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="about__stat-number">
                <Counter to={stat.to} suffix={stat.suffix} />
              </div>
              <p className="about__stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
