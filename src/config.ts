export const config = {
    developer: {
        name: "Sanjay",
        fullName: "Sanjay Chetry",
        title: "Full-Stack Developer & ML Enthusiast",
        description: "Full-Stack Developer & ML Enthusiast building modern web applications and intelligent systems. Passionate about MERN stack, machine learning, NLP, and creating impactful software solutions."
    },
    social: {
        github: "SoloSorceror",
        email: "sanjaychetry1043@gmail.com",
        phone: "+91-7099549206",
        location: "Phagwara, Punjab, India"
    },
    about: {
        title: "About Me",
        description: "I'm Sanjay Chetry, a B.Tech CSE student at LPU focused on scalable web apps and machine learning. I work with the MERN stack, have real work experience, and have solved 400+ problems with a 1627 LeetCode rating. I enjoy hackathons and building full-stack products."
    },
    careerObjective: "Aspiring software engineer seeking opportunities to apply full-stack development and machine learning skills in a dynamic, innovation-driven environment. Eager to contribute to impactful projects while continuously growing as a developer.",
    experiences: [
        {
            position: "SDE Intern",
            company: "Vanillakart – IT Services and IT Consulting",
            period: "Sep 2025 - Nov 2025",
            location: "Remote",
            description: "Developed a full-stack MERN-based Learning Management System (LMS), translating business requirements into a scalable and user-friendly web application.",
            responsibilities: [
                "Developed a full-stack MERN-based Learning Management System (LMS)",
                "Implemented JWT-based authentication and Role-Based Access Control (RBAC) for enterprise-level data protection",
                "Collaborated with an agile team to design reusable components and optimize workflows, improving turnaround time and maintainability"
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "RBAC"],
            links: {
                certificate: "#"
            }
        }
    ],
    projects: [
        {
            id: 1,
            title: "Cliply – URL Shortener",
            category: "Full Stack",
            technologies: "React, Node.js, Express, MongoDB, Docker, JWT, OAuth 2.0",
            image: "/images/project-1.webp",
            description: "Built a full-stack URL shortening platform with secure authentication via JWT and Google OAuth 2.0, and email-based OTP verification. Implemented NanoID-based link generation supporting over 4 trillion unique URLs, with custom aliases, QR code generation, link expiration, and real-time click analytics with device and browser tracking. Containerized and deployed with Docker on Vercel (frontend) and Render (backend).",
            role: "Solo Developer",
            challenges: "Implementing NanoID-based link generation at scale with real-time analytics tracking across distributed cloud platforms.",
            outcomes: "Production-ready URL shortener with analytics dashboard, supporting 4T+ unique URLs.",
            github: "https://github.com/SoloSorceror/cliply",
            demo: "#",
            period: "Jan 2026 – Feb 2026"
        },
        {
            id: 2,
            title: "LexiMed: Medical NLP Symptom Classifier",
            category: "AI / NLP",
            technologies: "Python, BiLSTM, DistilBERT, FastAPI, NLP, Transfer Learning",
            image: "/images/project-2.webp",
            description: "Designed and evolved an NLP classification pipeline by upgrading the core model from BiLSTM to DistilBERT, leveraging transfer learning to improve interpretation of colloquial and noisy symptom descriptions. Built a production-ready FastAPI inference service with confidence threshold (<60%) and automated logging of ambiguous queries. Generated a synthetic dataset of 20,000+ samples by mapping standardized medical terminology to diverse user-like expressions with injected noise.",
            role: "Solo Developer",
            challenges: "Handling noisy, colloquial medical text and building a robust inference pipeline with confidence-based routing.",
            outcomes: "Production-ready NLP classifier with 20K+ synthetic training samples and automated ambiguity detection.",
            github: "https://github.com/SoloSorceror/NlpProjectSanjay",
            demo: "",
            period: "Nov 2025 – Dec 2025"
        },
        {
            id: 3,
            title: "Portfolio Website",
            category: "Frontend / 3D",
            technologies: "React, Three.js, GSAP, TypeScript, Lenis, Vite",
            image: "/images/project-3.webp",
            description: "A cinematic 3D portfolio website with smooth scroll-driven animations, interactive 3D character model, and premium dark-mode UI. Features GSAP-powered section transitions and a responsive design.",
            role: "Solo Developer",
            challenges: "Orchestrating complex GSAP ScrollTrigger timelines with Three.js 3D model interactions.",
            outcomes: "Stunning, high-performance portfolio with 3D interactivity and buttery-smooth animations.",
            github: "https://github.com/SoloSorceror/sanjayPortfolio",
            demo: "https://sanjaychetry.vercel.app/",
            period: "2025"
        },
        {
            id: 4,
            title: "Blockchain Clinical Trial App",
            category: "Blockchain / Mobile",
            technologies: "React Native, Ethereum, Solidity, Web3.js",
            image: "/images/project-4.webp",
            description: "Built a blockchain-based clinical trial application using React Native and Ethereum during the Smart India Hackathon 2024. The app ensures transparent, tamper-proof trial data management leveraging smart contracts.",
            role: "Team Developer",
            challenges: "Integrating blockchain with a mobile-first architecture for real-time clinical data tracking.",
            outcomes: "University finalist project at Smart India Hackathon 2024, selected among 8,000+ participants.",
            github: "https://github.com/SoloSorceror/react-native-expo-router-nativewind-boilerplate",
            demo: "",
            period: "Sep 2024"
        },
        {
            id: 5,
            title: "DSA Problem Tracker",
            category: "Full Stack",
            technologies: "React, Node.js, MongoDB, Express",
            image: "/images/project-5.webp",
            description: "A full-stack web application to track and organize Data Structures & Algorithms practice, with categorized problem lists, progress tracking, and performance analytics.",
            role: "Solo Developer",
            challenges: "Designing an intuitive UI for complex filtering and categorization of 1000+ problems.",
            outcomes: "Streamlined DSA practice workflow with visual progress analytics.",
            github: "https://github.com/SoloSorceror/DsaTutorialGit",
            demo: "",
            period: "2024"
        }
    ],
    education: [
        {
            institution: "Lovely Professional University",
            location: "Phagwara, Punjab",
            degree: "Bachelor of Technology",
            field: "Computer Science and Engineering",
            grade: "CGPA: 7.76/10",
            period: "Aug 2023 – May 2027",
            coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks", "Machine Learning", "Object-Oriented Programming", "Software Engineering", "Web Development"]
        },
        {
            institution: "Pearl Academy Junior College",
            location: "Biswanath, Assam",
            degree: "Intermediate (12th)",
            field: "Science",
            grade: "Percentage: 81%",
            period: "Apr 2020 – Mar 2022",
            coursework: []
        },
        {
            institution: "Stella Maris School",
            location: "Helem, Assam",
            degree: "Matriculation (10th)",
            field: "",
            grade: "Percentage: 84.2%",
            period: "Jul 2008 – May 2020",
            coursework: []
        }
    ],
    certificates: [
        {
            name: "OCI Certified Data Science Professional",
            issuer: "Oracle",
            category: "Data Science",
            date: "Sep 2025",
            link: "#"
        },
        {
            name: "Summer Training – Programming Pathshala",
            issuer: "Programming Pathshala",
            category: "Programming",
            date: "Jul 2025",
            link: "#"
        },
        {
            name: "Supervised Machine Learning",
            issuer: "DeepLearning.AI",
            category: "Machine Learning",
            date: "Feb 2025",
            link: "#"
        },
        {
            name: "Data Structures and Algorithms",
            issuer: "Iamneo",
            category: "DSA",
            date: "Dec 2024",
            link: "#"
        }
    ],
    achievements: [
        {
            title: "LeetCode Contest Rating: 1627",
            date: "Dec 2025",
            description: "Demonstrated strong problem-solving skills through consistent contest participation. Solved 300+ problems on LeetCode & GFG.",
            category: "Competitive Programming"
        },
        {
            title: "Smart India Hackathon 2024 - University Finalist",
            date: "Sep 2024",
            description: "Selected among 8,000+ participants to represent the university at the final stage. Built a blockchain-based clinical trial app using React Native and Ethereum.",
            category: "Hackathon"
        }
    ],
    competitiveProgramming: {
        platforms: [
            {
                name: "LeetCode",
                handle: "sanjaychetry",
                rating: "1627 (Contest Rating)",
                problemsSolved: "300+",
                url: "https://leetcode.com/sanjaychetry",
                icon: "leetcode"
            },
            {
                name: "GeeksforGeeks",
                handle: "sanjaychetry",
                rating: "",
                problemsSolved: "100+",
                url: "https://www.geeksforgeeks.org/user/sanjaychetry",
                icon: "gfg"
            },
            {
                name: "HackerRank",
                handle: "sanjaychetry",
                rating: "",
                problemsSolved: "50+",
                url: "https://www.hackerrank.com/sanjaychetry",
                icon: "hackerrank"
            }
        ],
        highlights: [
            "300+ problems solved across LeetCode and GFG",
            "LeetCode Contest Rating: 1627",
            "Consistent participation in weekly coding contests",
            "Strong focus on Data Structures, Algorithms & Problem Solving"
        ]
    },
    research: [
        {
            title: "NLP-based Medical Symptom Classification using Transfer Learning",
            abstract: "Explored the effectiveness of transfer learning approaches (BiLSTM → DistilBERT) for classifying noisy, colloquial medical symptom descriptions. Demonstrated improved accuracy through synthetic data augmentation and confidence-based routing.",
            coAuthors: "Sanjay Chetry",
            publication: "Under Preparation",
            link: ""
        }
    ],
    contact: {
        email: "sanjaychetry1043@gmail.com",
        github: "https://github.com/SoloSorceror",
        linkedin: "https://linkedin.com/in/sanjaychetry",
        portfolio: "https://sanjaychetry.vercel.app/"
    },
    skills: {
        develop: {
            title: "FULL-STACK DEVELOPER",
            description: "Building modern web applications & scalable backends",
            details: "Building full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Proficient in RESTful API development, JWT authentication, OAuth 2.0, Docker containerization, and cloud deployment on Vercel and Render.",
            tools: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "TypeScript", "Docker", "Git", "JWT", "REST APIs"]
        },
        design: {
            title: "ML & DATA SCIENCE",
            description: "Intelligent systems & data-driven solutions",
            details: "Exploring machine learning with Scikit-learn, NLP with transfer learning (BiLSTM, DistilBERT), and data analysis using Pandas, NumPy, and Matplotlib. Experience building production-ready ML pipelines with FastAPI.",
            tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "NLP", "FastAPI", "Jupyter", "TensorFlow", "Deep Learning"]
        }
    },
    programmingLanguages: ["C++", "Python", "JavaScript"],
    frameworks: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
    databases: ["MongoDB", "Mongoose", "MySQL"],
    toolsPlatforms: ["Docker", "Git", "GitHub", "Jupyter Notebooks"],
    machineLearning: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    softSkills: ["Problem Solving", "Communication", "Team Collaboration", "Adaptability", "Leadership"]
};
