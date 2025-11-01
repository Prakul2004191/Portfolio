// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/newgithub.jpeg";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/newvercel.png";

import nextlogo from "./assets/tech_logo/next.png";
import clerklogo from "./assets/tech_logo/clerk.png";
import npmlogo from "./assets/tech_logo/npm.png";
import websocketlogo from "./assets/tech_logo/websocket.png";
import restLogo from "./assets/tech_logo/restapi.png";
import shadcnlogo1 from "./assets/tech_logo/shadcn1.png";
import shadcnlogo2 from "./assets/tech_logo/shadcn2.png";

import vitelogo from "./assets/tech_logo/vite.jpeg";

// Education Section Logo's
import dav from "./assets/education_logo/dav.png";
import cu_logo from "./assets/education_logo/cu_logo.png";
import university from "./assets/education_logo/CU-LOGO-new.jpg";
import kv from "./assets/education_logo/kv_logo.webp";

// project
import cryptoplaceLogo from "./assets/work_logo/cryptoplace.png";

import ecommercelogo from "./assets/work_logo/ecommerce.png";
import geminelogo from "./assets/work_logo/gemine.png";
import memelogo from "./assets/work_logo/meme.png";
import movielogo from "./assets/work_logo/movie.png";
import Quickchatlogo from "./assets/work_logo/Quickchat.png";
import todologo from "./assets/work_logo/todo.png";
import weatherapplogo from "./assets/work_logo/weatherapp.png";
import portfoliologo from "./assets/work_logo/portfolio.png";
import detective from "./assets/work_logo/github-profile.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      

      { name: "Redux", logo: reduxLogo },
     
      { name: "Tailwind CSS", logo: tailwindcssLogo },

     
      { name: "Bootstrap", logo: bootstrapLogo },
    
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      
      { name: "REST API", logo: restLogo },
      { name: "NPM", logo: npmlogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
   

      { name: "JavaScript", logo: javascriptLogo },
   
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
     
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
    
      

      { name: "Vite", logo: vitelogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: cu_logo,
    school: "Chandigarh University, Mohali",
    date: "August 2022 - June 2026",
    grade: "7.3 CGPA",
    desc: "I have done my Bachelor's degree (B.E) in Computer Science from Chandigarh University, Mohali.  I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. ",
    degree: "Bachelor of Engineering in Computer Science - B.E",
  },

  {
    id: 1,
    img: kv,
    school: "Kendriya Vidyalaya, Kishtwar, J&K",
    date: "Apr 2021 - March 2022",
    grade: "88%",
    desc: "I completed my class 12 education from Kendriya Vidyalaya, Kishtwar under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },

  {
    id: 2,
    img: kv,
    school: "Kendriya Vidyalaya, Kishtwar, J&K",
    date: "Apr 2019 - March 2020",
    grade: "84%",
    desc: "I completed my class 10 education from Kendriya Vidyalaya, Kishtwar,  under the CBSE board, where I studied Science with Computer science.",
    degree: "CBSE(X), Science with Computer science",
  },
];

export const projects = [
  {
    id: 0,
    title: "MealBox",
    description:
      "MealBox is more than just a food delivery app—it's your ultimate companion for satisfying every craving with speed, variety, and convenience. Built to serve the dynamic pace of modern Indian life, MealBox ensures that the best flavors of your city are delivered directly to your doorstep.",

    image: cryptoplaceLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://github.com/Prakul2004191/Meal-box",
    webapp: "https://meal-box-mu.vercel.app/",
  },
  {
    id: 1,
    title: "MultiMart",
    description:
      "MultiMart is a modern and responsive E-Commerce web application built with Next.js, MongoDB, and Clerk Authentication. It provides a seamless shopping experience with user authentication, product browsing, and cart management features.",
    image: ecommercelogo,
    tags: [
      "React JS",
      "Redux",
      "Bootstrap",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Prakul2004191/Multimart-ecommerce",
    webapp: "https://multimart-ecommerce-eight.vercel.app/",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A simple React.js application that provides weather information using the OpenWeather API. Enter any city to get the current temperature, humidity, wind speed, visibility, and pressure",
    image: weatherapplogo,
    tags: [
      "React JS",
      "OpenWeather API",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Prakul2004191/Weather-app",
    webapp: "https://weather-app-mauve-zeta-30.vercel.app/",
  },
  
 
  
 
  
  {
    id: 3,
    title: "Portfolio website",
    description:
      "I built a responsive personal portfolio website using React.js to showcase my projects, skills, and experience. The site features smooth navigation, modern UI components, and dynamic sections like About, Projects, and Contact. It’s optimized for all devices and highlights my work in a clean, professional layout.",

    image: portfoliologo,
    tags: ["React JS", "TailwindCSS", "EmailJs", "HTML", "CSS", "Javascript"],
    github: "https://github.com/Prakul2004191/Portfolio",
    webapp: "https://portfoliowebsite-six-flame.vercel.app/",
  },
];
