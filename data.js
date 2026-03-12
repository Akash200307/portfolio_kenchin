const portfolioData = {
    header: {
        brand: "AKASH S"
    },
    intro: {
        indicator: "WHO AM I",
        title: "Software <br><span class=\"highlight\">Developer</span> &amp; <br>Architect",
        description: "Building robust, scalable applications and orchestrating complex systems. I specialise in translating intricate requirements into elegant, high-performance software solutions.",
        tags: [
            { name: "Backend", color: "green" },
            { name: "Frontend", color: "blue" },
            { name: "Systems", color: "purple" },
            { name: "AI Agents", color: "red" }
        ],
        concreteIdea: "<strong>Core Focus:</strong> Engineering intelligent systems that solve real-world problems and designing scalable architectures from first principles.",
        statsTitle: "CURRENT STATS",
        stats: [
            { title: "Experience", desc: "— 2+ years across full-stack engineering, system architecture, and AI integration." },
            { title: "Focus", desc: "— Distributed systems, AI-agent orchestration, and modern web interfaces." },
            { title: "Approach", desc: "— Pragmatic and detail-oriented, with a strong bias for resilient, edge-case-aware design." }
        ],
        socials: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/akash200307/", icon: "linkedin", color: "blue" },
            { name: "GitHub", url: "https://github.com/Akash200307", icon: "github", color: "white" },
            { name: "LeetCode", url: "https://leetcode.com/Akash200307/", icon: "leetcode", color: "orange" }
        ]
    },
    skills: {
        title: "Technical <span class=\"highlight\">Arsenal</span>",
        categories: [
            {
                name: "Backend",
                tags: [
                    { name: "Java", color: "purple" },
                    { name: "Spring Boot", color: "green" },
                    { name: "Python", color: "blue" },
                    { name: "Postgresql", color: "red" }
                ]
            },
            {
                name: "AI & LLM Frameworks",
                tags: [
                    { name: "LangGraph", color: "blue" },
                    { name: "FastAPI", color: "green" },
                    { name: "LangChain", color: "red" },
                    { name: "LlamaIndex", color: "purple" },
                    { name: "LiteLLM", color: "blue" },
                    { name: "Ollama", color: "green" },
                    { name: "Whisper", color: "purple" }
                ]
            },
            {
                name: "DevOps & Cloud",
                tags: [
                    { name: "Docker", color: "purple" },
                    { name: "Hetzner", color: "red" },
                    { name: "Coolify", color: "blue" },
                    { name: "RESTful APIs", color: "green" },
                    { name: "Microservices", color: "blue" },
                    { name: "Agile / CI/CD", color: "purple" }
                ]
            }
        ]
    },
    projects: [

        {
            badgeText: "PRODUCTION",
            title: "Learning Management <br><span class=\"highlight\">System</span> <br>Backend",
            description: "A full-featured LMS backend built with Spring Boot — handling course delivery, assessments, and a self-hosted code execution engine across multiple languages.",
            tags: [
                { name: "Spring Boot", color: "green" },
                { name: "PostgreSQL", color: "blue" },
                { name: "Redis", color: "red" },
                { name: "Docker", color: "purple" }
            ],
            concreteIdea: "<strong>Concrete idea:</strong> A production LMS powering courses, quizzes, and live code evaluation — fully self-hosted on Hetzner with automated CI/CD via Coolify.",
            metricsTitle: "IMPACT & METRICS",
            metrics: [
                { title: "Performance", desc: "— 50% faster data loading via Redis caching for large, frequently accessed payloads." },
                { title: "Cost", desc: "— 70% reduction in compute costs using a self-hosted code compiler vs. third-party execution APIs; migrated from AWS RDS to self-hosted PostgreSQL, cutting database costs to one-third." },
                { title: "Delivery", desc: "— 60% faster deployment cycles with Dockerised services and a managed CI/CD pipeline." }
            ]
        },
        {
            badgeText: "FREELANCE",
            title: "LSRW Communication <br><span class=\"highlight\">Evaluation</span> <br>System",
            description: "A Spring AI-powered platform that evaluates all four English communication skills — Listening, Speaking, Reading, and Writing — using self-hosted speech recognition and a fine-tuned Gemini 2.0 Flash pipeline.",
            tags: [
                { name: "Spring AI", color: "green" },
                { name: "Gemini 2.0 Flash", color: "blue" },
                { name: "Whisper v3 Large", color: "purple" },
                { name: "Cloudflare R2", color: "red" }
            ],
            concreteIdea: "<strong>Concrete idea:</strong> A candidate submits audio/text responses; the system transcribes speech via self-hosted Whisper, evaluates each LSRW dimension with specialised AI prompts, and returns scored feedback on fluency, comprehension, creativity, and thinking depth.",
            metricsTitle: "IMPACT & METRICS",
            metrics: [
                { title: "Cost Efficiency", desc: "— 50% reduction in transcription costs by replacing the OpenAI Whisper API with a self-hosted Whisper v3 Large instance; 30% further savings by hosting on Hetzner over cloud alternatives." },
                { title: "AI Quality", desc: "— Leveraged Gemini 2.0 Flash with best-practice prompt engineering, delivering high-accuracy evaluation at a fraction of GPT-4 pricing." },
                { title: "Architecture", desc: "— S3-backed MP3 storage decoupled audio from the database, significantly reducing DB load across all four LSRW evaluation pipelines." }
            ]
        }
    ],
    experience: {
        title: "Professional <span class=\"highlight\">Journey</span>",
        jobs: [
            {
                role: "Programmer Analyst Trainee",
                date: "Aug 2025 – Present",
                color: "green",
                company: "COGNIZANT (Chennai, TN & Bengaluru, KA | India)",
                description: "• Developed 15+ RESTful APIs using Spring Boot and Spring MVC, reducing average response time by 35% through query optimisation and caching strategies.<br>• Resolved 25+ production bugs across Agile sprints, improving system stability from 94% to 99.1% uptime across 3 microservices.<br>• Collaborated within a 6-member cross-functional team leveraging Git for code reviews and CI/CD integration.<br>• Implemented authentication mechanisms aligned with OWASP standards, reducing security vulnerabilities by 40%."
            },
            {
                role: "Software Engineer Intern",
                date: "Mar 2025 – Jul 2025",
                color: "blue",
                company: "COGNIZANT (Chennai, TN & Bengaluru, KA | India)",
                description: "• Built backend service modules handling 1,000+ daily transactions using Spring Boot, MySQL, and Hibernate ORM.<br>• Participated in Agile ceremonies, contributing to 95% on-time delivery of sprint user stories.<br>• Achieved 75% unit-test coverage using JUnit and Mockito, reducing regression bugs by 30%."
            },
            {
                role: "Java Developer",
                date: "Jun 2023 – Jul 2023",
                color: "purple",
                company: "IIT ROORKEE – DIGINIQUE",
                description: "• Developed a web-based integrated datastore that automated 75% of manual operations for library management.<br>• Applied security best practices — including input sanitisation and user authentication — eliminating over 60% of common web vulnerabilities.<br>• <strong>Tech Stack:</strong> Java, JSP, Servlet &nbsp;|&nbsp; <strong>Database:</strong> H2 Console"
            },
            {
                role: "Web Designer Intern",
                date: "May 2023 – Aug 2023",
                color: "red",
                company: "FARM DIRECT (Chennai, India)",
                description: "• Designed and developed responsive web interfaces in collaboration with a cross-functional team, reducing page load times by 50%.<br>• Strengthened front-end engineering skills and cultivated the ability to deliver results in fast-paced, iterative environments.<br>• <strong>Tech Stack:</strong> React.js, JavaScript, HTML, CSS"
            }
        ]
    },
    footer: "&copy; 2026 Akash S. Designed &amp; Developed with passion."
};
