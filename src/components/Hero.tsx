import { useEffect, useRef, type MouseEvent } from 'react'
import gsap from 'gsap'
import logo from '../assets/logo-white.png'
import tagline from '../assets/tagline.png'
import bg from '../assets/background.png'
import './Hero.css'

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const taglineRef = useRef<HTMLImageElement>(null)
  const introRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const scrollCueRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(bgRef.current, { scale: 1.15, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' })
        .fromTo(logoRef.current, { y: 40, opacity: 0, scale: 0.85 }, { y: 0, opacity: 1, scale: 1, duration: 1.1 }, 0.3)
        .fromTo(taglineRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.75)
        .fromTo(introRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.95)
        .fromTo(ctasRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1.1)
        .fromTo(scrollCueRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.4)

      gsap.to(scrollCueRef.current, {
        y: 10,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to(bgRef.current, { x: px * -30, y: py * -20, duration: 1.2, ease: 'power2.out' })
    gsap.to(logoRef.current, { x: px * 16, y: py * 10, duration: 1.2, ease: 'power2.out' })
  }

  return (
    <section id="top" className="hero" ref={sectionRef} onMouseMove={handleMouseMove}>
      <img src={bg} className="hero__bg" ref={bgRef} alt="" aria-hidden="true" />
      <div className="hero__overlay" />

      <div className="container hero__content">
        <h1 className="visually-hidden">
          Spotlight Events — Event Management, Lighting &amp; Production Design in Lahore, Pakistan
        </h1>
        <img src={logo} className="hero__logo" ref={logoRef} alt="Spotlight Events" />
        <img src={tagline} className="hero__tagline" ref={taglineRef} alt="Precision · Creativity · Excellence" />

        <p className="hero__intro" ref={introRef}>
          A premier, full-service event management company dedicated to transforming your vision into
          unforgettable, high-impact experiences — from corporate functions to large-scale public events.
        </p>

        <div className="hero__ctas" ref={ctasRef}>
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
          <a href="#services" className="btn btn-ghost">
            Explore Our Work
          </a>
        </div>
      </div>

      <div className="hero__scroll-cue" ref={scrollCueRef}>
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
