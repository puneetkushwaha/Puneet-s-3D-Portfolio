import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextJs,
  tailwind,
  nodejs,
  tensorflow,
  mongodb,
  java,
  mysql,
  python,
  express,
  git,
  gdg,
  aarambh,
  vervenova,
  hydra,
  jarvis,
  quiz,
  brandly,
  verve,
  interiohubb,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Java Backend Developer",
    icon: backend,
  },
  {
    title: "AI & Data Science Enthusiast",
    icon: creator,
  },
  {
    title: "React & Next.js Developer",
    icon: mobile, 
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
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Founder & Full Stack Developer",
    company_name: "Verve Nova",
    company_website: "https://www.linkedin.com/company/verve-niva/?viewAsMember=true",
    icon: vervenova, // replace with your actual logo import
    iconBg: "#000000",
    date: "Nov 2024 – Apr 2025",
    points: [
      "Founded a tech service agency focused on delivering web solutions for startups and individuals.",
      "Developed 15+ client projects using React, Next.js, Node.js, and Firebase with pixel-perfect UI.",
      "Created project content and shared weekly posts on LinkedIn, increasing business visibility.",
      "Managed team collaboration, client communication, and tech stack decisions end-to-end.",
    ],
  },
  {
    title: "Social Media Manager",
    company_name: "Google Developer Groups (GDG) - Campus",
    company_website: "https://www.linkedin.com/company/gdgbncet/?viewAsMember=true",
    icon: gdg,
    iconBg: "#ffffff",
    date: "Sep 2024 – Jun 2025",
    points: [
      "Handled design and content for GDG social platforms including Instagram and LinkedIn.",
      "Boosted engagement by creating appealing reels, event posters, and project highlights.",
      "Collaborated with team members to ensure timely promotion of tech events and bootcamps.",
    ],
  },
  {
    title: "Co-Lead",
    company_name: "Aarambh Community",
    company_website: "https://www.linkedin.com/company/aarambhcommunity/?viewAsMember=true", 
    icon: aarambh,
    iconBg: "#1e1e1e",
    date: "Apr 2024 – Present",
    points: [
      "Planned and executed tech events, workshops, and mentorship drives within the college.",
      "Guided community members in project building, Git, and team collaboration workflows.",
      "Promoted developer culture through regular learning sessions and peer-based mentoring.",
    ],
  },
  {
    title: "Web Development Lead",
    company_name: "Aarambh Community",
    company_website: "https://www.linkedin.com/company/aarambhcommunity/?viewAsMember=true",
    icon: aarambh,
    iconBg: "#1e1e1e",
    date: "Apr 2024 – Present",
    points: [
      "Led frontend development for community web projects and helped design the official website.",
      "Maintained responsive UI/UX, optimized performance, and ensured cross-device compatibility.",
      "Mentored juniors on HTML, CSS, JavaScript, React and GitHub workflows.",
    ],
  },
];


const projects = [
  {
    name: "Brandly AI",
    description:
      "Brandly AI is a smart brand name and tagline generator built using Next.js and OpenAI API. It helps startups and creators instantly generate catchy brand names, taglines, and ideas based on input keywords and niche.",
  tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "openai-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: brandly,
    hosted_link: "https://brandlyai.vercel.app/",
  },
  {
    name: "Verve Nova",
    description:
      "A stylish brand portfolio site for a modern fashion and lifestyle company, built under Verve Nova agency. Features sleek UI and responsive layout built with React.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "branding",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: verve,
    hosted_link: "https://vervenova.netlify.app/",
  },
  {
    name: "InterioHubb",
    description:
      "A platform for interior and exterior design solutions, built using core frontend tech. Focused on aesthetic, functional, and personalized spaces.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: interiohubb,
    hosted_link: "https://interiohubb.netlify.app/",
  },
  {
    name: "Jarvis AI Assistant",
    description:
      "An offline intelligent desktop assistant built using Python that performs voice-activated tasks like opening apps, replying via speech, automating system tasks, and running offline LLMs. Integrated OCR, WhatsApp automation, and GUI using Tkinter.",
  tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "llama.cpp",
        color: "green-text-gradient",
      },
      {
        name: "speech-recognition",
        color: "pink-text-gradient",
      },
    ],
    image: jarvis,
    hosted_link:
      "https://github.com/puneetkushwaha/Jarvis-AI",
  },
  {
    name: "Quiz Trek",
    description:
      "Smart news and current affairs platform offering daily and monthly updates. Built using Next.js and Firebase for real-time content and auth.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "authentication",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    hosted_link: "https://quiz-trek--five.vercel.app/",
  },
  {
    name: "Hydra AI",
    description:
      "Hydra AI is a local LLM-powered chatbot built using Python and `text-generation-webui`. It uses models like LLaMA, Mistral, and Phi-2 via GGUF format, allowing completely offline intelligent conversations with custom personality and Desi Hinglish tone.",
  tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "text-generation-webui",
        color: "green-text-gradient",
      },
      {
        name: "llama-gguf",
        color: "pink-text-gradient",
      },
    ],
    image: hydra,
    hosted_link:
      "https://github.com/puneetkushwaha/Hydra-AI-2.0",
  },
];

const personalInfo = {
  name: "Puneet",
  fullName: "Puneet Kushwaha",
  email: "puneetkushwaha9452@gmail.com",
  role: "AI & Data Science Explorer",
  about: `I'm a passionate full stack developer and tech community contributor with experience in building modern, scalable web apps using JavaScript, React.js, Next.js, Node.js, and Firebase. I'm also exploring AI and data science, and actively working on LLM-powered assistants and real-world solutions.

I’ve founded Verve Nova, a tech service agency helping startups build their online presence. I also contribute to my college tech community as a co-lead at Aarambh and manage social content at GDG Campus. Whether it's solving real-world problems with code or mentoring juniors, I love bringing impactful ideas to life.`,
  
  projectsIntro: `Here are some of the projects I've worked on — from client-based web solutions under Verve Nova to AI-powered tools like Jarvis and Hydra. These projects showcase my skills across full stack development, system automation, and machine learning. Each project includes a description and link, reflecting my focus on clean code, problem-solving, and technical versatility.`,
};


const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1S70B3l-a-FX5suwUj03E5On2iTTLIYf3/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/puneettkushwaha/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/puneetkushwaha",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
