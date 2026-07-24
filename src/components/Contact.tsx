import { motion } from 'framer-motion'
import bg from '../assets/background.png'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <img src={bg} className="contact__bg" alt="" aria-hidden="true" />
      <div className="contact__overlay" />

      <div className="container contact__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">Get In Touch</span>
          <h2 className="contact__heading">Let's create something unforgettable.</h2>
          <p className="contact__text">
            Tell us about your event and we'll bring precision, creativity, and excellence to every detail.
          </p>

          <div className="contact__ctas">
            <a href="mailto:hello@spotlightevents.com" className="btn btn-primary">
              hello@spotlightevents.com
            </a>
            <a href="tel:+920000000000" className="btn btn-ghost">
              +92 000 0000000
            </a>
          </div>
          <p className="contact__note">Placeholder contact details — update with your real email &amp; phone.</p>
        </motion.div>
      </div>
    </section>
  )
}
