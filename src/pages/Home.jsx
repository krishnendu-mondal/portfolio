import React, { useState } from 'react'
import './HomeStyles.css'

import { LiaGithub, LiaLinkedinIn, LiaFacebookF, LiaInstagram, LiaDownloadSolid } from "react-icons/lia"
import { GrPrevious, GrNext } from "react-icons/gr"

import km_img from '../assets/image.png'
import cIcon from '../assets/cProgramming.png'
import pythonIcon from '../assets/pythonProgramming.png'
import javaIcon from '../assets/javaProgramming.png'
import html5Icon from '../assets/html5.png'
import css3Icon from '../assets/css3.png'
import jsIcon from '../assets/jsLogo.png'
import phpIcon from '../assets/phpLogo.png'
import sqlIcon from '../assets/sqlLogo.png' 
import reactJsIcon from '../assets/react.svg'
import nodeJsIcon from '../assets/nodeJsLogo.svg'
import arduinoIcon from '../assets/arduinoLogo.png'
import pcbdesignIcon from '../assets/pcbdesignLogo.png'
import certificate1 from '../assets/data structure coursera.jpg'
import certificate2 from '../assets/microchipAVR.jpg'

import Skill from '../components/Skill/Skill'
import Learning from '../components/Learning/Learning'
import Project from '../components/Project/Project'
import Achievement from '../components/Achievement/Achievement'
import Certificate from '../components/Certificate/Certificate'
import Contact from '../components/Contact/Contact'


const socialsLogoSize = 25
const logoHeight = 28
const skills = [
  {
    id:1,
    skill:"C",
    skillLogo:cIcon,
    progress:"80",
    alt:"C_Programming",
  },
  {
    id:2,
    skill:"Python",
    skillLogo:pythonIcon,
    progress:"70",
    alt:"python_Programming",
  },
  {
    id:3,
    skill:"Java",
    skillLogo:javaIcon,
    progress:"50",
    alt:"java_Programming",
  },
  {
    id:4,
    skill:"HTML",
    skillLogo:html5Icon,
    progress:"85",
    alt:"html",
  },
  {
    id:5,
    skill:"CSS",
    skillLogo:css3Icon,
    progress:"65",
    alt:"css",
  },
  {
    id:6,
    skill:"JavaScript",
    skillLogo:jsIcon,
    progress:"55",
    alt:"javascript",
  },
  {
    id:7,
    skill:"PHP",
    skillLogo:phpIcon,
    progress:"45",
    alt:"php",
  },
  {
    id:8,
    skill:"SQL",
    skillLogo:sqlIcon,
    progress:"65",
    alt:"sql",
  },
  {
    id:9,
    skill:"Arduino",
    skillLogo:arduinoIcon,
    progress:"60",
    alt:"arduino",
  },
  {
    id:10,
    skill:"PCB design",
    skillLogo:pcbdesignIcon,
    progress:"60",
    alt:"pcbdesign",
  }

];

const learning = [
  {
    id:1,
    skill:"React JS",
    skillLogo:reactJsIcon,
    alt:"react js"
  },

  {
    id:2,
    skill:"Node JS",
    skillLogo:nodeJsIcon,
    alt:"node js"
  }
];

const projects = [
  {
    id:1,
    title:"Lmsshiksha",
    about:"Learning management system",
    desc:"Lmsshiksha provides students and faculties an easy environment of online learning by it's user friendly interface. It contains several dashboards for respective users to manage their works.",
    url:"https://lmsshiksha.freewebhostmost.com"
  },
  {
    id:2,
    title:"Votes",
    about:"Voting management system",
    desc:"This project is developed to address the problem with traditional voting system. All the process of voting remains exactly the same but now voters can cast their vote from anywhere.",
    url:"https://votes.freewebhostmost.com"
  },
  {
    id:3,
    title:"Khaanakhajana",
    about:"Food website design",
    desc:"This is a landing page design of a food website, design contains hero section with carousel and greeting according to time. Registration and login page, contact form and cards for food items.",
    url:"https://krishnendu-mondal.github.io/khaanakhajana/"
  },
  {
    id:4,
    title:"Radio control system",
    about:"Arduino based proportional radio control system",
    desc:"It's a complete product development, of a cost effective radio transmitter and receiver utilizing Arduino and NRF24 tranceiver modules.",
    url:"https://github.com/krishnendu-mondal/arduino-and-NRF24-based-radio-control-system"
  },
]
const achievements = [
  {
    id:1,
    title:"IHMMC-2k24",
    about:"Winner of International Hardware Model Making Competition 2k24 at Asansol Engineering College. Project - Autonomous and multipurpose drone."
  },
  {
    id:2,
    title:"JISTech2k23",
    about:"Secured 1st position in project competition (Autonomous and multipurpose drone). 1st position in water robotics and 2nd position in sand rover racing in college Techfest."
  },
  {
    id:3,
    title:"JISTech2k22",
    about:"Secured 2nd position in project competition (Face recognition door lock). 1st position in water robotics in college Techfest."
  }
]

const certificates = [
  {
    id:1,
    src:certificate1,
    alt:"data_structure"
  },
  {
    id:2,
    src:certificate2,
    alt:"microchip_avr"
  },
]

function Home() {

  const [slide, setSlide] = useState(0);

  const prevSlide = ()=>{
    setSlide(slide === 0 ? certificates.length - 1:slide-1)
  }

  const nextSlide = ()=>{
    setSlide(slide === certificates.length - 1 ? 0 : slide+1)
  }

  const openGithub = ()=>{
    window.open("https://www.github.com/krishnendu-mondal/").focus()
  }
  const openLinkedin = ()=>{
    window.open("https://www.linkedin.com/in/krishnendu-mondal-627238211/").focus()
  }
  const openFacebook = ()=>{
    window.open("https://www.facebook.com/krishnendu.mondol.716").focus()
  }
  const openInsta = ()=>{
    window.open("https://www.instagram.com/kristin306_m").focus()
  }
  const downloadResume = ()=>{
    window.open('../../krishnendu mondal new CS resume.pdf').focus()
  }
  
  return (
    <>
        <div className='intro'>
            <div className="heading">
                <h1>Hello, I am <span style={{fontSize:"38px", color:"#ac5"}}>Krishnendu Mondal</span></h1>
                <p>Tech enthusiast, passionate for Web Development. Pursuing B.Tech in Electronics and Communication Engineering. Interested in learning and acquiring knowledge of new technology.</p>
                <div className="socials">
                  <a onClick={openGithub}><LiaGithub className='logo'/></a>
                  <a onClick={openLinkedin}><LiaLinkedinIn className='logo'/></a>
                  <a onClick={openFacebook}><LiaFacebookF className='logo'/></a>
                  <a onClick={openInsta}><LiaInstagram className='logo'/></a>
                </div>
                <div className="buttons">
                 <button onClick={downloadResume}><LiaDownloadSolid className='logo'/>Resume</button>
                </div>
            </div>
            <img className="km_img" src={km_img} alt="krishnendu_image" />
        </div>
        <div className="skills">
          <div className="heading">
            <h2>Skills</h2>
          </div>
            
            {skills.map((item, idx)=>(
              <Skill key={idx} icon={item.skillLogo} alt={item.alt} height={logoHeight} skill={item.skill} progress={item.progress}/>
            ))}
        </div>
        <div className="learnings">
          <div className="heading">
            <h2>Learning</h2>
          </div>
            
            {learning.map((item, idx)=>
              <Learning key={idx} icon={item.skillLogo} alt={item.alt} skill={item.skill} height={logoHeight}/>
            )}
        </div>
        <div className='projects-container' id='projects-container'>
          <div className="heading">
            <h2>Projects</h2>
          </div>
          <div className="projects">
            {projects.map((item, idx)=>(
              <Project key={idx} projectTitle={item.title} projectAbout={item.about} projectDescription={item.desc} url={item.url}/>
            ))}
          </div>
        </div>
        <div className="certificates-container">
          <div className="heading">
            <h2>Certifications</h2>
          </div>
          <div className="certificates">
            <div className="prev" onClick={prevSlide}><GrPrevious /></div>
            <div className="next" onClick={nextSlide}><GrNext /></div>
              {certificates.map((item, idx)=>(
                <img key={idx} src={item.src} alt={item.alt} className={slide === idx ? "certificate":" certificate certificate-hidden"}/>
              ))}
            <div className="points">
              {certificates.map((item, idx)=>(
                <button key={idx} className={slide === idx ? "point":" point point-inactive"} onClick={()=>setSlide(idx)}></button>
              ))}
            </div>
          </div>
        </div>
        <div className='achievements-container' id='achievements-container'>
          <div className="heading">
            <h2>Achievements</h2>
          </div>
          <div className="achievements">
            {achievements.map((item, idx)=>(
              <Achievement key={idx} title={item.title} about={item.about}/>
            ))}
          </div>
        </div>
        <div className='contact-container' id='contact-container'>
          <div className="heading">
            <h2>Contact</h2>
          </div>
          <Contact/>
        </div>
        
    </>
  )
}

export default Home