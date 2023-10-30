import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Linux Administrators",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Linux Administrator",
      company_name: "TexadaSoftware",
    //   icon: ,
      iconBg: "#383E56",
      date: "March 2021 - April 2023",
      points: [
        "Daily task goes here.",
        "Daily task goes here.",
        "Daily task goes here.",
        "Daily task goes here.",
      ],
    },
   
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "His hard work and determantion is beyond words, He always manages to come up with unique solutions, with limited time",
      name: "Ali Zaka",
      designation: "Manager",
      company: "TexadaSoftware",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "",
      name: "A",
      designation: "COO",
      company: "DEF Corp",
      image: "h",
    },
   
  ];
  

  const projects = [
    {
      name: "DataAnalytics",
      description:
        " ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    //   image: ,
      source_code_link: "https://github.com/",
    },
    {
      name: "FazeNcode",
      description:
        "Blog website containing all of notes / tutorials  ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
    //   image: ,
      source_code_link: "https://github.com/",
    },
    {
      name: "MiniMape",
      description:
        "Web-based card style memory game, inspired by MapleStory ",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
    //   image: ,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };