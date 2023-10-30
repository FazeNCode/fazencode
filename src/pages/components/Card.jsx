import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { SectionWrapper } from "../hoc";
import {fadeIn, textVariant} from "../utils/motion"


const Card = ({index, title, icon}) => {
  return (
    // tilt component coming from react titlt 
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.1 * index, 0.75)}

      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed:450
        }} 
        className='bg-tertiary rounded-[2px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
   
  )
}


const About = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    >
     Experienced Linux administrator proficient in managing and maintaining Linux-based computer systems, ensuring stability, security, and efficiency. Skilled in installation, configuration, monitoring, and maintenance of Linux operating systems,
      such as Redhat | Centos | Ubuntu.
      Expertise in user and access management, network services administration, troubleshooting, and problem resolution. Strong knowledge of security measures, compliance standards, and documentation. Proficient in automation and scripting for streamlined system management. Adept at collaborating with teams and generating reports.

        <br></br>
        <br></br>
       Self-taught skilled and creative web developer Proficient in HTML, CSS, JavaScript, and various web development frameworks. such as React | Tailwindcss | Nodejs  Experienced in responsive design, cross-browser compatibility, and optimizing website performance.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
      <ServiceCard  key= {service.title} index= {index} {...service}/>
      ))}
   

    </div>
    </>
  )
}


// wrapping "About" component export with the Higher order component 
//
export default SectionWrapper(About, "about") 