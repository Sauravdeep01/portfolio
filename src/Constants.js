// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Project Section Logo's
import aiResumeScannerLogo from './assets/work_logo/AI_Scanner.png';
import doctorLogo from './assets/work_logo/Doctor.png';
import E_CommerceLogo from './assets/work_logo/E_Commerce.png';
import ConfessHubLogo from './assets/work_logo/ConfessHub.png';
import CollabWhiteboardLogo from './assets/work_logo/Collab_Whiteboard.png';

// Certificate Logo's
import cloudComputingCert from './assets/certificates_img/cloud_computing.png';
import dsaCert from './assets/certificates_img/DSA.png';
import oopsCert from './assets/certificates_img/oops.png';
import softwareEngCert from './assets/certificates_img/software_eng.png';
import laravelCert from './assets/certificates_img/Laravel.png';
import javascriptCert from './assets/certificates_img/js.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo }
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


export const education = [
  {
    id: 0,
    school: "Lovely Professional University",
    date: "Aug 23 - Present",
    grade: "6.79 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - BTECH",
  },
  {
    id: 1,
    school: "Patna Collegiate School",
    date: "Apr 2022 - Feb 2023",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "BSEB(XII) - PCM",
  },
  {
    id: 2,
    school: "Bradford International School",
    date: "Apr 2020 - Feb 2021",
    desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(X)",
  },
];


export const projects = [
  {
    id: 0,
    title: "Lavana E-commerece Website",
    description: "A full-stack e-commerce platform for seamless product browsing and secure purchases.",
    features: [
      "Responsive mobile-first interface for intuitive browsing.",
      "Advanced product filtering to enhance search experience.",
      "Secure checkout system with complete payment workflows.",
      "Robust RESTful APIs for product and order management."
    ],
    image: E_CommerceLogo,
    tags: ["React JS", "Node JS", "Tailwind CSS", "Express JS", "MongoDB", "REST API's"],
    date: "Oct' 25 - Nov' 25",
    github: "https://github.com/Sauravdeep01/Lavana-E-Commerce",
    webapp: "https://easymartshop.vercel.app/",
  },
  {
    id: 1,
    title: "Doctor Appointment Booking System",
    description: "A comprehensive platform for patients to find doctors and securely book online appointments.",
    features: [
      "Patient-centric platform to search doctors and view profiles.",
      "Online appointment scheduling system for seamless booking.",
      "Secure user authentication for protecting patient data.",
      "Efficient RESTful backend services for data management."
    ],
    image: doctorLogo,
    tags: ["React JS", "Node JS", "Tailwind CSS", "Express JS", "MongoDB", "REST API's"],
    date: "Aug' 25 - Sep' 25",
    github: "https://github.com/Sauravdeep01/carepoint",
    webapp: "https://careappointment.vercel.app/",
  },
  {
    id: 2,
    title: "AI Resume Scanner",
    description: "An AI-powered application that evaluates resumes and provides instant ATS-based feedback.",
    features: [
      "Instant ATS-based feedback for uploaded resumes.",
      "Gemini API integration for intelligent resume scoring.",
      "Actionable improvement suggestions to enhance profiles.",
      "Real-time processing with secure authentication."
    ],
    image: aiResumeScannerLogo,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "bcrypt.js", "pdf-parse", "Vercel"],
    date: "Sep' 25 - Oct 25",
    github: "https://github.com/Sauravdeep01/ResumeAnalyser",
    webapp: "https://resume-analyserr.vercel.app/",
  },

  {
    id: 3,
    title: "Confess Hub",
    description: "A privacy-focused web platform for sharing thoughts and confessions completely anonymously.",
    features: [
      "Fully anonymous platform to share thoughts and confessions.",
      "Secure secret codes allowing users to edit or delete posts.",
      "Interactive anonymous reactions and comment system.",
      "Privacy-focused infrastructure promoting honest expression."
    ],
    image: ConfessHubLogo,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "JWT Authentication"],
    date: "Jan' 26 - Feb'26",
    github: "https://github.com/Sauravdeep01/ConfessionHub",
    webapp: "https://confessionhub-1.onrender.com/",
  },

  {
    id: 4,
    title: "Collaborative Whiteboard",
    description: "A real-time collaborative workspace for drawing, brainstorming, and sharing ideas seamlessly.",
    features: [
      "Real-time drawing and brainstorming for multiple users.",
      "Interactive digital canvas built for remote collaboration.",
      "Live updates enabling seamless and instant teamwork.",
      "Tools for sharing ideas and creative expressions securely."
    ],
    image: CollabWhiteboardLogo,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "JWT Authentication"],
    date: "Feb' 26 - Mar' 26",
    github: "https://github.com/Sauravdeep01/CollaborativeWhiteBoard",
    webapp: "https://collaborative-whiteboard-t954.onrender.com/",
  },
];


export const certificates = [
  {
    id: 0,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Jun 2025",
    image: cloudComputingCert,
  },
  {
    id: 1,
    title: "Object Oriented Programming",
    issuer: "NeoColab",
    date: "Dec 2024",
    image: oopsCert,
  },
  {
    id: 2,
    title: "Data Structure and Algorithm",
    issuer: "Lovely Professional University",
    date: "Jul 2025",
    image: dsaCert,
  },
  {
    id: 3,
    title: "Software Engineering",
    issuer: "Coursera",
    date: "May 2024",
    image: softwareEngCert,
  },
  {
    id: 4,
    title: "Laravel",
    issuer: "Udemy",
    date: "Jan 2024",
    image: laravelCert,
  },
  {
    id: 5,
    title: "Javascript",
    issuer: "HackerRank",
    date: "Feb 2025",
    image: javascriptCert,
  },
];


export const achievements = [
  {
    id: 0,
    title: "150+ DSA Problems Solved",
    description: "Successfully solved 150+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks.",
    date: "2024-2025",
    icon: "💻",
    link: "https://leetcode.com/u/Sauravdeep01/"
  },
  {
    id: 1,
    title: "1704 LeetCode Rating",
    description: "Attained a contest rating of 1704, reflecting proficiency in competitive programming and advanced problem-solving.",
    date: "2024",
    icon: "🚀",
    link: "https://leetcode.com/u/Sauravdeep01/"
  },
  {
    id: 2,
    title: "1445 CodeChef Rating",
    description: "Earned a 1445 contest rating through regular and disciplined participation in global coding competitions.",
    date: "2024",
    icon: "🏆",
    link: "https://www.codechef.com/users/sauravdeep01"
  },
];