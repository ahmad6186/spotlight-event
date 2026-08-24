import khurram from '../assets/team/team_khurram.png'
// import basharat from '../assets/team/team_basharat.png'
import bilal from '../assets/team/team_bilal.png'
// import muhammad from '../assets/team/team_muhammad.png'
// import arif from '../assets/team/team_arif.png'

export interface TeamMember {
  name: string
  role: string
  years: number
  photo: string
  bio: string
}

export const team: TeamMember[] = [
  {
    name: 'Khurram Pervaiz',
    role: 'Creative Graphic & Event Designer',
    years: 30,
    photo: khurram,
    bio: 'A Creative Graphic Designer and Event Designer specializing in event branding, stage design, and visual communication. Expert in creating compelling designs for festivals, cultural events, exhibitions, corporate functions, and live entertainment, delivering creative solutions that leave a lasting impression.',
  },
  // {
  //   name: 'Basharat Hussain',
  //   role: 'Professional Event Manager',
  //   years: 19,
  //   photo: basharat,
  //   bio: 'A professional event manager directing high-profile corporate and social gatherings. Expert in logistics, budget optimization, and vendor relations, bringing creative brand visions to life flawlessly.',
  // },
  {
    name: 'Bilal Usmani',
    role: 'Event Producer',
    years: 16,
    photo: bilal,
    bio: 'A seasoned event professional creating unforgettable experiences, specializing in turning complex logistics into seamless, high-impact corporate events, luxury weddings, and large-scale galas — with a reputation for flawless execution and sharp budget management.',
  },
  // {
  //   name: 'Muhammad Latif',
  //   role: 'Entertainment Executive',
  //   years: 26,
  //   photo: muhammad,
  //   bio: 'A multidisciplinary artist and entertainment executive spanning puppetry performance, theatrical production, and large-scale event management — bridging the gap between creative vision and flawless technical execution.',
  // },
  // {
  //   name: 'Arif Ali',
  //   role: 'Production & Lighting Designer',
  //   years: 25,
  //   photo: arif,
  //   bio: 'A technically driven production and lighting designer specializing in live concerts, corporate events, and immersive environments — balancing artistic vision with cutting-edge technology to deliver a lasting impression.',
  // },
]
