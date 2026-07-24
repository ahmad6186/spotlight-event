import { motion } from 'framer-motion'
import { team } from '../data/team'
import './Team.css'

export default function Team() {
  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="team__head">
          <span className="eyebrow">Our Team</span>
          <h2 className="team__heading">The people behind every unforgettable moment.</h2>
        </div>

        <motion.div
          className="team__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              className="team-card"
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div className="team-card__photo-wrap">
                <img src={member.photo} alt={member.name} className="team-card__photo" />
                <span className="team-card__years">{member.years}+ yrs</span>
              </div>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
              <p className="team-card__bio">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
