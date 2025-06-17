
        document.addEventListener('DOMContentLoaded', () => {
            // --- Theme Toggle Logic ---
            const htmlElement = document.documentElement;
            const themeToggleBtn = document.getElementById('color-switcher'); // New ID for the toggle button
            const sunIcon = themeToggleBtn.querySelector('.ph-sun');
            const moonIcon = themeToggleBtn.querySelector('.ph-moon');
            const toggleThumb = themeToggleBtn.querySelector('em'); // The moving thumb element

            // Load theme preference from localStorage or default to light
            const savedTheme = localStorage.getItem('theme') || 'Dark';
            if (savedTheme === 'dark') {
                htmlElement.classList.add('dark');
                themeToggleBtn.setAttribute('aria-checked', 'false'); // 'false' for dark mode
                // Position for dark mode
                if (toggleThumb) toggleThumb.style.transform = 'translateX(20px)';
                if (moonIcon) moonIcon.style.opacity = '1';
                if (sunIcon) sunIcon.style.opacity = '0';
            } else {
                htmlElement.classList.remove('dark');
                themeToggleBtn.setAttribute('aria-checked', 'true'); // 'true' for light mode
                // Position for light mode
                if (toggleThumb) toggleThumb.style.transform = 'translateX(0)';
                if (moonIcon) moonIcon.style.opacity = '0';
                if (sunIcon) sunIcon.style.opacity = '1';
            }

            themeToggleBtn.addEventListener('click', () => {
                if (htmlElement.classList.contains('dark')) {
                    // Switch to light mode
                    htmlElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                    themeToggleBtn.setAttribute('aria-checked', 'true');
                    if (toggleThumb) toggleThumb.style.transform = 'translateX(0)';
                    if (moonIcon) moonIcon.style.opacity = '0';
                    if (sunIcon) sunIcon.style.opacity = '1';
                } else {
                    // Switch to dark mode
                    htmlElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                    themeToggleBtn.setAttribute('aria-checked', 'false');
                    if (toggleThumb) toggleThumb.style.transform = 'translateX(20px)';
                    if (moonIcon) moonIcon.style.opacity = '1';
                    if (sunIcon) sunIcon.style.opacity = '0';
                }
            });


            // --- Data Definitions (same as React component) ---
            const aboutData = {
                name: "Anurag Tarachand Nimje",
                phone: "9130884608",
                email: "nimjeanurag9@gmail.com",
                location: "Nagpur, India",
                summary: "I am a motivated and detail-oriented Software Developer with expertise in Python and full-stack technologies. I have experience in developing scalable web applications, optimizing performance, and working collaboratively with cross-functional teams. My passion lies in creating innovative and user-friendly software solutions, and I am eager to take on challenging roles that allow me to further grow my skills in software development.",
                projectsCompleted: 4,
                yearsOfExperience: new Date().getFullYear() - 2023,
                internships: 3,
                startups: 1,
            };

            const stats = [
                { label: "Projects Completed", value: aboutData.projectsCompleted, icon: 'ph-lightbulb', color: 'purple-600', darkColor: 'cyan-400' },
                { label: "Years of Experience", value: aboutData.yearsOfExperience, icon: 'ph-briefcase', color: 'green-600', darkColor: 'green-400' },
                { label: "Internships", value: aboutData.internships, icon: 'ph-award', color: 'indigo-600', darkColor: 'purple-400' },
                { label: "Startups", value: aboutData.startups, icon: 'ph-sparkles', color: 'yellow-600', darkColor: 'yellow-400' },
            ];

            const projectsData = [
                {
                    title: "Infinity IT Services Website",
                    description: "Built a feature-rich, interactive IT services website, integrating chatbot, user authentication, and service inquiry forms.",
                    tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
                    image: "/static/images/project/infinity.png",
                    link: "https://infinityitservices.co/",
                },
                {
                    title: "Sun Sky Technologies Company Website",
                    description: "Designed and developed a professional company website, integrating dynamic features for enhanced user experience.",
                    tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
                    image: "/static/images/project/Sun Sky.png",
                    link: "#",
                },
                {
                    title: "Happening At (Demo)",
                    description: "A platform designed to manage events, offers, and social media effectively, implemented with features like upcoming events, offers, services and customer reviews.",
                    tech: ["HTML", "CSS", "JavaScript", "Python", "Django", "MySQL"],
                    image: "/static/images/project/happning.at.png",
                    link: "https://www.happeningat.com/#",
                },
                {
                    title: "Wildlife Tourism Management System (Demo College Project)",
                    description: "A platform designed to manage wildlife tourism effectively, implemented with features like tour package listings, secure payments, and customer reviews.",
                    tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "PostgreSQL"],
                    image: "https://placehold.co/600x400/e0e0e0/8e2de2?text=Tourism+System",
                    link: "#",
                },

                {
                    title: "NuroLogic a IT Company Website (Upcoming Project)",
                    description: "A platform designed to manage IT services effectively, implemented with features like service listings, secure payments, and customer reviews.",
                    tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "PostgreSQL"],
                    image: "/static/images/project/tech.png",
                    link: "#",
                },


                {
                    title: "Rudraksha Center UI/UX Design (Upcoming Project)",
                    description: "A platform designed to showcase my projects and skills effectively, implemented with features like project listings, contact forms, and user testimonials.",
                    tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "PostgreSQL"],
                    image: "/static/images/project/rudra.jpg",
                    link: "#",
                },
            ];

            const experiences = [
                {
                    title: "Software Developer Intern (Frontend Development) & HR",
                    company: "Sun Sky Technologies (Startup)",
                    duration: "Oct 2024 - Present",
                    location: "Nagpur, MH",
                    description: [
                        "Spearheading frontend development by implementing modern UI/UX principles, ensuring seamless user experience.",
                        "Collaborating with backend teams to develop and integrate robust APIs for data management.",
                        "Enhancing website responsiveness by optimizing performance across multiple devices and platforms.",
                        "Managing recruitment process, conducting interviews, and ensuring effective team coordination.",
                        "Leading internal documentation efforts and process improvements for better workflow management.",
                    ],
                },
                {
                    title: "Software Developer Intern",
                    company: "Nass Technologies",
                    duration: "Jan 2024 - Jun 2024",
                    location: "Nagpur, MH",
                    description: [
                        "Engineered and enhanced software solutions utilizing Python and JavaScript for optimized functionality.",
                        "Assisted in developing backend solutions using Django and Flask to support scalable applications.",
                        "Designed and implemented optimized database structures, improving API performance and data retrieval speed.",
                        "Diagnosed and resolved application performance issues, ensuring high scalability and efficiency.",
                        "Developed RESTful APIs for seamless integration between frontend and backend systems.",
                    ],
                },
                {
                    title: "Python Developer Intern (Online)",
                    company: "Main Flow Service and Technology",
                    duration: "Dec 2023 - Jan 2024",
                    location: "Nagpur, MH",
                    description: [
                        "Developed automation scripts to streamline internal operations, increasing efficiency.",
                        "Collaborated with senior developers to build and enhance Python-based applications.",
                        "Designed and implemented API endpoints to facilitate real-time data processing and integration.",
                        "Conducted software testing and debugging, ensuring quality assurance.",
                        "Worked with data processing libraries to optimize computational performance.",
                    ],
                },
            ];

            const programmingLanguages = [
    { name: "Python", icon: 'ph-python-logo', color: 'yellow-500', darkColor: 'yellow-400' },
    { name: "JavaScript", icon: 'ph-code', color: 'yellow-600', darkColor: 'yellow-500' },
    { name: "C", icon: 'ph-file-code', color: 'blue-600', darkColor: 'blue-500' },
    { name: "C++", icon: 'ph-file-code', color: 'blue-700', darkColor: 'blue-600' },
];

const webDevelopment = [
    { name: "HTML", icon: 'ph-code-simple', color: 'orange-600', darkColor: 'orange-500' },
    { name: "CSS", icon: 'ph-paint-brush-broad', color: 'blue-600', darkColor: 'blue-500' },
    { name: "React.js", icon: 'ph-react-logo', color: 'purple-500', darkColor: 'cyan-400' },
    { name: "Bootstrap", icon: 'ph-layout', color: 'indigo-600', darkColor: 'purple-500' },
];

const backendTechnologies = [
    { name: "Django", icon: 'ph-leaf', color: 'green-700', darkColor: 'green-600' },
    { name: "Flask", icon: 'ph-flask', color: 'gray-600', darkColor: 'gray-400' },
    { name: "Node.js", icon: 'ph-node-logo', color: 'green-600', darkColor: 'green-500' },
];

const databases = [
    { name: "MySQL", icon: 'ph-database', color: 'blue-500', darkColor: 'blue-400' },
    { name: "MongoDB", icon: 'ph-leaf', color: 'green-500', darkColor: 'green-400' },
    { name: "PostgreSQL", icon: 'ph-database', color: 'blue-700', darkColor: 'blue-600' },
];

const versionControlAndTools = [
    { name: "Git", icon: 'ph-git-branch', color: 'red-600', darkColor: 'red-500' },
    { name: "GitHub", icon: 'ph-github-logo', color: 'gray-700', darkColor: 'gray-500' },
    { name: "Docker", icon: 'ph-anchor', color: 'blue-500', darkColor: 'blue-400' },
    { name: "AWS Basics", icon: 'ph-cloud-check', color: 'orange-500', darkColor: 'orange-400' },
];

const otherSkills = [
    { name: "API Development", icon: 'ph-plug', color: 'indigo-500', darkColor: 'purple-400' },
    { name: "Software Testing", icon: 'ph-bug', color: 'red-500', darkColor: 'red-400' },
    { name: "Agile Methodologies", icon: 'ph-rocket-launch', color: 'teal-500', darkColor: 'teal-400' },
    { name: "UI/UX Design", icon: 'ph-devices', color: 'pink-500', darkColor: 'pink-400' },
    { name: "Photoshop", icon: 'ph-image-square', color: 'blue-500', darkColor: 'blue-400' },
    { name: "Cloud Computing", icon: 'ph-cloud', color: 'blue-600', darkColor: 'blue-500' },
    { name: "MS-Office", icon: 'ph-file-doc', color: 'green-600', darkColor: 'green-500' },
    { name: "Tally Canva", icon: 'ph-clipboard-text', color: 'purple-500', darkColor: 'purple-500' },
    { name: "Communication", icon: 'ph-chat-circle-text', color: 'blue-500', darkColor: 'indigo-400' },
    { name: "Team Collaboration", icon: 'ph-users-three', color: 'orange-500', darkColor: 'orange-400' },
    { name: "Technical Documentation", icon: 'ph-note', color: 'gray-500', darkColor: 'gray-400' },
];

const allSkills = [
    { title: "Programming Languages", skills: programmingLanguages, icon: 'ph-code-block' },
    { title: "Web Development", skills: webDevelopment, icon: 'ph-globe' },
    { title: "Backend Technologies", skills: backendTechnologies, icon: 'ph-server' },
    { title: "Databases", skills: databases, icon: 'ph-database' },
    { title: "Version Control & Tools", skills: versionControlAndTools, icon: 'ph-tools' },
    { title: "Other Skills", skills: otherSkills, icon: 'ph-lightbulb' },
];


            const faqs = [
                {
                    question: "What is Anurag's primary area of expertise?",
                    answer: "Anurag is a motivated and detail-oriented Software Developer with expertise in Python and full-stack technologies, particularly in web application development and UI/UX.",
                },
                {
                    question: "Which programming languages does Anurag specialize in?",
                    answer: "Anurag specializes in Python, JavaScript, C, and C++.",
                },
                {
                    question: "Can Anurag work with both frontend and backend technologies?",
                    answer: "Yes, Anurag has experience with both frontend (HTML, CSS, React.js, Bootstrap) and backend technologies (Django, Flask, Node.js).",
                },
                {
                    question: "What kind of databases can Anurag work with?",
                    answer: "Anurag is proficient with MySQL, MongoDB, and PostgreSQL.",
                },
                {
                    question: "Does Anurag have experience in a startup environment?",
                    answer: "Yes, Anurag has experience leading frontend development and managing HR responsibilities at Sun Sky Technologies, a startup.",
                },
                {
                    question: "Has Anurag published any research papers?",
                    answer: "Yes, Anurag published a research paper in JEITR on event listing platform analysis.",
                },
            ];

            const certificatesData = [
                {
                    name: "Google Analyst Certification",
                    issuer: "Google",
                    date: "March 2024",
                    icon: 'ph-graduation-cap', // Use Phosphor icon name
                    link: "#",
                },
                {
                    name: "Udemy Certification",
                    issuer: "Udemy",
                    date: "Ongoing/Varies",
                    icon: 'ph-graduation-cap',
                    link: "#",
                },
                {
                    name: "Diploma in Computer Software",
                    issuer: "Institution Name (if specified)",
                    date: "Completion Date (if specified)",
                    icon: 'ph-graduation-cap',
                    link: "#",
                },
            ];

            const achievementsData = [
                {
                    title: "Successfully Developed and Deployed Multiple Full-Stack Web Applications",
                    description: "Showcasing technical prowess and project management skills.",
                    icon: 'ph-sparkles',
                    lightColor: 'yellow-600',
                    darkColor: 'yellow-400'
                },
                {
                    title: "Led a Team of Developers in a Startup Environment",
                    description: "Optimized software solutions, demonstrating leadership and collaboration.",
                    icon: 'ph-award',
                    lightColor: 'green-600',
                    darkColor: 'green-400'
                },
                {
                    title: "Published a Research Paper in JEITR",
                    description: "On event listing platform analysis, contributing to academic research and visibility.",
                    icon: 'ph-book',
                    lightColor: 'blue-600',
                    darkColor: 'blue-400'
                },
                {
                    title: "Spearheaded UI/UX Enhancements",
                    description: "Improved user engagement by 40%, reflecting a strong focus on user satisfaction.",
                    icon: 'ph-zap',
                    lightColor: 'indigo-600',
                    darkColor: 'purple-400'
                },
                {
                    title: "Managed HR Responsibilities in Tech Startup",
                    description: "Including recruitment and onboarding, integrating HR and development roles effectively.",
                    icon: 'ph-briefcase',
                    lightColor: 'orange-600',
                    darkColor: 'orange-400'
                },
            ];

            const educationData = [
                {
                    degree: "MCA (Master of Computer Applications)",
                    university: "GH Raisoni University",
                    duration: "Aug 2022 - May 2024 (9.6 SGPA)",
                    location: "Nagpur"
                },
                {
                    degree: "B.Sc (Computer Science)",
                    university: "KR Pandav College",
                    duration: "Aug 2018 - Apr 2021 (64%)",
                    location: "Nagpur"
                },
                {
                    degree: "HSC (12th)",
                    university: "Prerna Junior College",
                    duration: "Jun 2017 - Mar 2018 (First Class)",
                    location: "Nagpur"
                },
                {
                    degree: "SSC (10th)",
                    university: "Adarsh Vidya Mandir",
                    duration: "Jun 2015 - Mar 2016 (First Class 75.50%)",
                    location: "Nagpur"
                }
            ];


            // --- Utility Functions ---
            const scrollToSection = (id) => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            };

            // Function to add in-view class for animation
            const animateElement = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        // For children elements, add delay
                        const children = entry.target.querySelectorAll('[data-delay]');
                        children.forEach(child => {
                            const delay = parseFloat(child.dataset.delay);
                            child.style.transitionDelay = `${delay}s`;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            };

            // Intersection Observer setup
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            const sectionObserver = new IntersectionObserver(animateElement, observerOptions);

            // --- Navbar Logic ---
            const navbarToggle = document.getElementById('navbar-toggle');
            const navbarLinks = document.getElementById('navbar-links');
            const menuLinks = document.querySelectorAll('.menu__link'); // Select all menu links

            navbarToggle.addEventListener('click', () => {
                navbarLinks.classList.toggle('hidden');
                // Toggle between hamburger and close icon
                const path = navbarToggle.querySelector('path');
                if (navbarLinks.classList.contains('hidden')) {
                    path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Hamburger icon
                } else {
                    path.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Close icon
                }
            });

            menuLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    // Prevent default anchor behavior to handle smooth scroll
                    e.preventDefault();
                    const sectionId = e.currentTarget.getAttribute('href').substring(1); // Get ID from href
                    scrollToSection(sectionId);
                    // Close mobile menu after clicking a link
                    if (!navbarLinks.classList.contains('hidden') && window.innerWidth < 769) {
                        navbarLinks.classList.add('hidden');
                        navbarToggle.querySelector('path').setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                    }
                });
            });

            // --- Hero Section Animations (manual, as it's typically always in view initially) ---
            // These elements will be observed by the sectionObserver
            // document.querySelector('[data-animate="hero-card-left"]').classList.add('in-view');
            // document.querySelector('[data-animate="hero-content-right"]').classList.add('in-view');


            // --- Populate About Me Section ---
            document.getElementById('about-summary').textContent = aboutData.summary;
            document.getElementById('about-name').textContent = aboutData.name;
            document.getElementById('about-phone').textContent = aboutData.phone;
            document.getElementById('about-email').textContent = aboutData.email;
            document.getElementById('about-location').textContent = aboutData.location;

            const aboutStatsContainer = document.getElementById('about-stats-container');
            stats.forEach((stat, index) => {
                const statDiv = document.createElement('div');
                statDiv.className = `bg-white p-8 rounded-2xl shadow-xl border border-gray-200 transform hover:scale-105 transition-transform duration-300 animate-on-scroll stat-item dark:bg-gray-800 dark:border-gray-700`;
                statDiv.style.setProperty('--delay', `${0.4 + index * 0.1}s`);
                statDiv.innerHTML = `
                    <div class="mb-4 p-4 rounded-full bg-gray-100 shadow-inner dark:bg-gray-700">
                        <i class="ph-bold ${stat.icon} w-8 h-8 text-${stat.color} dark:text-${stat.darkColor}"></i>
                    </div>
                    <h3 class="text-5xl font-extrabold text-gray-800 mb-2 dark:text-white">${stat.value}+</h3>
                    <p class="text-xl text-gray-600 dark:text-gray-300">${stat.label}</p>
                `;
                aboutStatsContainer.appendChild(statDiv);
            });

            // --- Populate Projects Section ---
            const projectsContainer = document.getElementById('projects-container');
            projectsData.forEach((project, index) => {
                const projectDiv = document.createElement('div');
                projectDiv.className = `bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-scale-in project-item dark:bg-gray-800 dark:border-gray-700`;
                projectDiv.style.setProperty('--delay', `${index * 0.15}s`);
                projectDiv.innerHTML = `
                    <img
                        src="${project.image}"
                        alt="${project.title}"
                        class="w-full h-56 object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        onerror="this.onerror=null; this.src='https://placehold.co/600x400/e0e0e0/8e2de2?text=${encodeURIComponent(project.title.replace(/\s/g, '+'))}';"
                    />
                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300 dark:text-white dark:group-hover:text-cyan-400">${project.title}</h3>
                        <p class="text-gray-600 text-base mb-4 flex-grow dark:text-gray-300">${project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${project.tech.map(tech => `<span class="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">${tech}</span>`).join('')}
                        </div>
                        <div class="mt-auto">
                            <a
                                href="${project.link}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center text-purple-600 hover:text-purple-500 font-medium group-hover:translate-x-1 transition-transform duration-300 dark:text-cyan-400 dark:hover:text-cyan-300"
                            >
                                View Project
                                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>
                `;
                projectsContainer.appendChild(projectDiv);
            });

            // --- Populate Work Experience Section ---
            const experienceContainer = document.getElementById('experience-container');
            experiences.forEach((exp, index) => {
                const expDiv = document.createElement('div');
                const animationClass = index % 2 === 0 ? 'animate-from-left' : 'animate-from-right';
                expDiv.className = `relative z-10 p-8 mb-12 rounded-2xl shadow-xl border border-gray-200 bg-white max-w-2xl mx-auto flex flex-col transform hover:scale-[1.02] transition-transform duration-300 ${animationClass} experience-item dark:bg-gray-800 dark:border-gray-700`;
                expDiv.style.setProperty('--delay', `${index * 0.2}s`);
                expDiv.innerHTML = `
                    <div class="absolute left-1/2 top-0 -translate-x-1/2 -mt-4 w-6 h-6 bg-purple-500 rounded-full border-4 border-[#f0f2f5] shadow-lg animate-ping-slow dark:bg-cyan-500 dark:border-gray-900"></div>
                    <h3 class="text-3xl font-semibold text-gray-800 mb-2 dark:text-white">${exp.title}</h3>
                    <p class="text-xl text-purple-600 mb-2 dark:text-cyan-400">${exp.company}</p>
                    <p class="text-md text-gray-600 mb-4 dark:text-gray-400">${exp.duration} | ${exp.location}</p>
                    <ul class="list-disc list-inside text-gray-600 space-y-2 dark:text-gray-300">
                        ${exp.description.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                `;
                experienceContainer.appendChild(expDiv);
            });


            // --- Populate Skills Section ---
            const skillsContainer = document.getElementById('skills-container');
            allSkills.forEach((category, catIndex) => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = `bg-white p-8 rounded-2xl shadow-xl border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300 animate-on-scroll dark:bg-gray-800 dark:border-gray-700`;
                categoryDiv.style.setProperty('--delay', `${catIndex * 0.15}s`);
                categoryDiv.innerHTML = `
                    <h3 class="text-3xl font-semibold text-gray-800 mb-8 border-b border-gray-300 pb-4 flex items-center dark:text-white dark:border-gray-700">
                        <i class="ph-bold ${category.icon} mr-3 text-purple-600 dark:text-cyan-400"></i> ${category.title}
                    </h3>
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" id="skills-category-${catIndex}">
                        <!-- Skills will be appended here by JS -->
                    </div>
                `;
                skillsContainer.appendChild(categoryDiv);

                const skillsCategoryInner = categoryDiv.querySelector(`#skills-category-${catIndex}`);
                category.skills.forEach((skill, skillIndex) => {
                    const skillDiv = document.createElement('div');
                    skillDiv.className = `flex flex-col items-center text-center p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300 transform hover:scale-110 cursor-pointer animate-on-scroll skill-item dark:bg-gray-700 dark:hover:bg-gray-600`;
                    skillDiv.style.setProperty('--delay', `${catIndex * 0.15 + skillIndex * 0.05}s`);
                    skillDiv.innerHTML = `
                        <div class="mb-2"><i class="ph-bold ${skill.icon} w-10 h-10 text-${skill.color} dark:text-${skill.darkColor}"></i></div>
                        <p class="text-gray-700 text-sm font-medium dark:text-gray-200">${skill.name}</p>
                    `;
                    skillsCategoryInner.appendChild(skillDiv);
                });
            });

            // --- Chatbot Logic ---
            const chatHistory = document.getElementById('chat-history');
            const chatInput = document.getElementById('chat-input');
            const sendChatBtn = document.getElementById('send-chat-btn');
            let initialChatMessage = document.getElementById('initial-chat-message'); // Make it mutable
            let isChatLoading = false;

            const addMessage = (text, sender) => {
                if (initialChatMessage) {
                    initialChatMessage.remove();
                    initialChatMessage = null; // Clear reference to prevent re-addition
                }
                const messageDiv = document.createElement('div');
                messageDiv.className = `flex mb-4 ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
                // Adjusted colors for chatbot messages for better dark mode visibility
                messageDiv.innerHTML = `
                    <div class="p-3 rounded-lg max-w-[70%] ${sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100'}" style="${sender === 'ai' ? 'border-bottom-left-radius: 0.5rem; border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;' : 'border-bottom-right-radius: 0.5rem; border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;'}">
                        ${text}
                    </div>
                `;
                chatHistory.appendChild(messageDiv);
                chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to bottom
            };

            const simulateAIResponse = async (userText) => {
                isChatLoading = true;
                sendChatBtn.disabled = true;
                sendChatBtn.innerHTML = `
                    <svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                `;

                // Placeholder AI response for demonstration
                await new Promise(resolve => setTimeout(resolve, 1500));
                const aiResponseText = `Hello! I'm a placeholder AI. You asked: "${userText}". Anurag is a talented full-stack developer with expertise in Python, JavaScript, React.js, Django, Flask, and databases like MySQL and MongoDB. He is passionate about creating innovative and user-friendly software solutions.`;
                addMessage(aiResponseText, 'ai');

                isChatLoading = false;
                sendChatBtn.disabled = false;
                sendChatBtn.innerHTML = `<span class="text-white">Send</span>`;
            };

            sendChatBtn.addEventListener('click', () => {
                const text = chatInput.value.trim();
                if (text && !isChatLoading) {
                    addMessage(text, 'user');
                    simulateAIResponse(text);
                    chatInput.value = '';
                }
            });

            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !isChatLoading) {
                    sendChatBtn.click();
                }
            });

            // --- Populate FAQ Section ---
            const faqContainer = document.getElementById('faq-container');
            let openFAQIndex = null;

            faqs.forEach((faq, index) => {
                const faqDiv = document.createElement('div');
                faqDiv.className = `bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-on-scroll faq-item dark:bg-gray-800 dark:border-gray-700`;
                faqDiv.style.setProperty('--delay', `${index * 0.1}s`);
                faqDiv.innerHTML = `
                    <button class="w-full text-left p-6 flex justify-between items-center text-xl font-semibold text-gray-800 hover:bg-gray-100 transition-colors duration-300 focus:outline-none dark:text-white dark:hover:bg-gray-700" data-faq-index="${index}">
                        ${faq.question}
                        <i class="ph-bold ph-chevron-down w-6 h-6 text-gray-500 chevron-icon dark:text-gray-400"></i>
                    </button>
                    <div class="px-6 pb-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 faq-answer dark:text-gray-300 dark:border-gray-700">
                        <p>${faq.answer}</p>
                    </div>
                `;
                faqContainer.appendChild(faqDiv);

                const toggleButton = faqDiv.querySelector('button');
                const answerDiv = faqDiv.querySelector('.faq-answer');
                const chevronIcon = faqDiv.querySelector('.chevron-icon');

                toggleButton.addEventListener('click', () => {
                    if (openFAQIndex !== null && openFAQIndex !== index) {
                        const prevOpenFaqDiv = faqContainer.querySelector(`[data-faq-index="${openFAQIndex}"]`).closest('.faq-item');
                        prevOpenFaqDiv.querySelector('.faq-answer').classList.remove('open');
                        prevOpenFaqDiv.querySelector('.chevron-icon').classList.remove('ph-chevron-up');
                        prevOpenFaqDiv.querySelector('.chevron-icon').classList.add('ph-chevron-down');
                    }

                    if (openFAQIndex === index) {
                        answerDiv.classList.remove('open');
                        chevronIcon.classList.remove('ph-chevron-up');
                        chevronIcon.classList.add('ph-chevron-down');
                        openFAQIndex = null;
                    } else {
                        answerDiv.classList.add('open');
                        chevronIcon.classList.remove('ph-chevron-down');
                        chevronIcon.classList.add('ph-chevron-up');
                        openFAQIndex = index;
                    }
                });
            });


            // --- Populate Certificates Section ---
            const certificatesContainer = document.getElementById('certificates-container');
            certificatesData.forEach((cert, index) => {
                const certDiv = document.createElement('div');
                certDiv.className = `bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 animate-on-scroll certificate-item dark:bg-gray-800 dark:border-gray-700`;
                certDiv.style.setProperty('--delay', `${index * 0.15}s`);
                certDiv.innerHTML = `
                    <div class="mb-6 p-4 rounded-full bg-gray-100 shadow-inner dark:bg-gray-700">
                        <i class="ph-bold ${cert.icon} w-12 h-12 text-purple-600 dark:text-purple-400"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-800 mb-2 dark:text-white">${cert.name}</h3>
                    <p class="text-lg text-gray-600 mb-1 dark:text-gray-300">${cert.issuer}</p>
                    <p class="text-md text-gray-500 mb-4 dark:text-gray-400">${cert.date}</p>
                    ${cert.link && cert.link !== '#' ? `
                    <a
                        href="${cert.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center text-purple-600 hover:text-purple-500 font-medium dark:text-cyan-400 dark:hover:text-cyan-300"
                    >
                        View Certificate
                        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                    ` : ''}
                `;
                certificatesContainer.appendChild(certDiv);
            });

            // Populate Education Section
            const educationContainer = document.getElementById('education-container');
            educationData.forEach((edu, index) => {
                const eduDiv = document.createElement('div');
                const animationClass = index % 2 === 0 ? 'animate-from-left' : 'animate-from-right';
                eduDiv.className = `relative z-10 p-8 mb-12 rounded-2xl shadow-xl border border-gray-200 bg-white max-w-2xl mx-auto flex flex-col transform hover:scale-[1.02] transition-transform duration-300 ${animationClass} education-item dark:bg-gray-800 dark:border-gray-700`;
                eduDiv.style.setProperty('--delay', `${0.9 + index * 0.2}s`);
                eduDiv.innerHTML = `
                    <div class="absolute left-1/2 top-0 -translate-x-1/2 -mt-4 w-6 h-6 bg-purple-500 rounded-full border-4 border-[#f0f2f5] shadow-lg animate-ping-slow dark:bg-cyan-500 dark:border-gray-900"></div>
                    <h3 class="text-2xl font-semibold text-gray-800 mb-2 dark:text-white">${edu.degree}</h3>
                    <p class="text-lg text-purple-600 mb-1 dark:text-cyan-400">${edu.university}</p>
                    <p class="text-md text-gray-600 mb-1 dark:text-gray-400">${edu.duration}</p>
                    <p class="text-md text-gray-600 dark:text-gray-400">${edu.location}</p>
                `;
                educationContainer.appendChild(eduDiv);
            });


            // --- Populate Achievements Section ---
            const achievementsContainer = document.getElementById('achievements-container');
            achievementsData.forEach((achievement, index) => {
                const achievementDiv = document.createElement('div');
                achievementDiv.className = `bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-scale-in achievement-item dark:bg-gray-800 dark:border-gray-700`;
                achievementDiv.style.setProperty('--delay', `${index * 0.15}s`);
                achievementDiv.innerHTML = `
                    <div class="mb-6 p-4 rounded-full bg-gray-100 shadow-inner dark:bg-gray-700">
                        <i class="ph-bold ${achievement.icon} w-12 h-12 text-${achievement.lightColor} dark:text-${achievement.darkColor}"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-800 mb-3 dark:text-white">${achievement.title}</h3>
                    <p class="text-lg text-gray-600 dark:text-gray-300">${achievement.description}</p>
                `;
                achievementsContainer.appendChild(achievementDiv);
            });

            // --- Contact Form Logic ---
            const contactForm = document.getElementById('contact-form');
            const submitContactBtn = document.getElementById('submit-contact-btn');
            const buttonTextSpan = document.getElementById('button-text');
            const formStatusParagraph = document.getElementById('form-status');

            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                let formStatus = 'sending';
                buttonTextSpan.innerHTML = `
                    <svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                `;
                submitContactBtn.disabled = true;

                // Simulate form submission
                await new Promise(resolve => setTimeout(resolve, 2000));
                const success = Math.random() > 0.3;

                if (success) {
                    formStatus = 'success';
                    formStatusParagraph.className = 'text-green-600 text-center mt-4';
                    formStatusParagraph.textContent = 'Message sent successfully!';
                    contactForm.reset();
                } else {
                    formStatus = 'error';
                    formStatusParagraph.className = 'text-red-600 text-center mt-4';
                    formStatusParagraph.textContent = 'Failed to send message. Please try again.';
                }

                setTimeout(() => {
                    formStatusParagraph.textContent = '';
                    buttonTextSpan.textContent = 'Send Message';
                    submitContactBtn.disabled = false;
                }, 3000);
            });

            // --- Footer Year ---
            document.getElementById('current-year').textContent = new Date().getFullYear();

            // --- Apply Intersection Observers to all animatable elements ---
            document.querySelectorAll('.animate-on-scroll').forEach(element => {
                sectionObserver.observe(element);
            });
            document.querySelectorAll('.animate-from-left').forEach(element => {
                sectionObserver.observe(element);
            });
            document.querySelectorAll('.animate-from-right').forEach(element => {
                sectionObserver.observe(element);
            });
            document.querySelectorAll('.animate-scale-in').forEach(element => {
                sectionObserver.observe(element);
            });
        });
