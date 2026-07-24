import type { MouseEvent, ReactNode } from 'react'
import { motion } from 'framer-motion'
import './Services.css'

interface Service {
  title: string
  desc: string
  icon: ReactNode
}

const icon = (d: string) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

const SERVICES: Service[] = [
  {
    title: 'Corporate Events',
    desc: 'End-to-end planning and flawless execution for corporate functions, conferences, and milestone celebrations.',
    icon: icon('M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 11h.01M15 11h.01M9 7h.01M15 7h.01'),
  },
  {
    title: 'Weddings & Socials',
    desc: 'Luxury weddings and social galas designed with creative brand visions brought flawlessly to life.',
    icon: icon('M12 21s-7-4.35-9.5-8.5C.9 9.3 2.2 6 5.3 5.3 7.4 4.8 9.6 5.8 12 8.5c2.4-2.7 4.6-3.7 6.7-3.2 3.1.7 4.4 4 2.8 7.2C19 16.65 12 21 12 21z'),
  },
  {
    title: 'Stage & Production Design',
    desc: 'Striking stage, lighting, and production design that turns any venue into an immersive experience.',
    icon: icon('M9 18V5l12-2v13M9 9l12-2M6 21a3 3 0 100-6 3 3 0 000 6zM18 19a3 3 0 100-6 3 3 0 000 6z'),
  },
  {
    title: 'Brand Activations & Exhibitions',
    desc: 'Event branding and visual communication that showcases your brand and connects with audiences.',
    icon: icon('M4 4h16v12H7l-3 3V4zM8 9h8M8 12h5'),
  },
  {
    title: 'Entertainment & Live Performance',
    desc: 'From puppetry to theatrical production, entertainment programming that leaves a lasting impression.',
    icon: icon('M9 18V5l12-2v13M9 13a3 3 0 100 6 3 3 0 000-6zM21 11a3 3 0 100 6 3 3 0 000-6z'),
  },
  {
    title: 'Logistics & Vendor Management',
    desc: 'Complex logistics, budget optimization, and vendor relations handled with absolute precision.',
    icon: icon('M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-5 9l2 2 4-4'),
  },
]

function handleCardMove(e: MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  card.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services__head">
          <span className="eyebrow">What We Do</span>
          <h2 className="services__heading">Full-service event management, precision executed.</h2>
        </div>

        <motion.div
          className="services__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              className="service-card"
              onMouseMove={handleCardMove}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
            >
              <div className="service-card__glow" />
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
