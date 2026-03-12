document.addEventListener('DOMContentLoaded', () => {

    // --- 1. RENDER PORTFOLIO DATA ---
    renderPortfolio();

    // --- 2. SETUP EVENT LISTENERS (Scroll, Navbar, Observers) ---
    setupInteractions();
});

// Helper function to build tech tags
function buildTags(tagsArray) {
    return tagsArray.map(tag => `<span class="tag tag-${tag.color}">${tag.name}</span>`).join('');
}

// Main rendering function that reads from portfolioData (defined in data.js)
function renderPortfolio() {

    // Navbar Brand
    if (document.getElementById('nav-brand') && portfolioData.header) {
        document.getElementById('nav-brand').textContent = portfolioData.header.brand;
    }

    // Intro Section
    const introContainer = document.getElementById('intro');
    if (introContainer && portfolioData.intro) {
        const { intro } = portfolioData;
        introContainer.innerHTML = `
            <div class="hero-left reveal">
                <div class="project-indicator">
                    <span class="line"></span>
                    <span class="text">${intro.indicator}</span>
                </div>
                
                <div class="title-container">
                    <h1 class="main-title">${intro.title}</h1>
                </div>

                <p class="description">${intro.description}</p>

                <div class="tech-tags">
                    ${buildTags(intro.tags)}
                </div>

                <div class="concrete-idea">
                    <p>${intro.concreteIdea}</p>
                </div>
            </div>

            <div class="hero-right reveal delay-1">
                <div class="interview-card glass">
                    <h3 class="card-title">${intro.statsTitle}</h3>
                    <ul class="reasons-list">
                        ${intro.stats.map(stat => `
                            <li>
                                <div class="reason-header">
                                    <span class="arrow">→</span>
                                    <span class="reason-title">${stat.title}</span>
                                </div>
                                <p class="reason-desc">${stat.desc}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // Skills Section
    const skillsContainer = document.getElementById('skills');
    if (skillsContainer && portfolioData.skills) {
        const { skills } = portfolioData;
        skillsContainer.innerHTML = `
            <div class="full-width reveal">
                <h2 class="section-title">${skills.title}</h2>
                <div class="skills-grid">
                    ${skills.categories.map(category => `
                        <div class="skill-category glass">
                            <h4 class="category-name">${category.name}</h4>
                            <div class="tech-tags full-wrap">
                                ${buildTags(category.tags)}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Projects Section
    const projectsWrapper = document.getElementById('projects-wrapper');
    if (projectsWrapper && portfolioData.projects) {
        const pad = (num) => num < 10 ? '0' + num : num;
        const total = pad(portfolioData.projects.length);

        projectsWrapper.innerHTML = portfolioData.projects.map((project, index) => {
            const currentNum = pad(index + 1);
            return `
            <section id="projects-${index}" class="section-container min-h-screen">
                <div class="hero-left reveal">
                    <div class="project-indicator">
                        <span class="line"></span>
                        <span class="text">FEATURED PROJECT ${currentNum} / ${total}</span>
                    </div>
                    
                    <div class="title-container">
                        <div class="badge-wrapper">
                            <div class="badge-outline">
                                <span class="badge-number">${currentNum}</span>
                                <div class="badge-pill">${project.badgeText}</div>
                            </div>
                        </div>
                        <h1 class="main-title">${project.title}</h1>
                    </div>

                    <p class="description" style="margin-bottom: 20px;">
                        ${project.description}
                    </p>

                    <div class="tech-tags">
                        ${buildTags(project.tags)}
                    </div>

                    <div class="concrete-idea" style="margin-top: 20px;">
                        <p>${project.concreteIdea}</p>
                    </div>
                </div>

                <div class="hero-right reveal delay-1">
                    <div class="interview-card glass">
                        <h3 class="card-title">${project.metricsTitle}</h3>
                        <ul class="reasons-list">
                            ${project.metrics.map(metric => `
                                <li>
                                    <div class="reason-header">
                                        <span class="arrow">→</span>
                                        <span class="reason-title">${metric.title}</span>
                                    </div>
                                    <p class="reason-desc">${metric.desc}</p>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </section>
        `}).join('');

        // Re-assign the primary #projects ID to the first project for anchor links to work
        if (document.getElementById('projects-0')) {
            document.getElementById('projects-0').id = 'projects';
        }
    }

    // Experience Section
    const experienceContainer = document.getElementById('experience');
    if (experienceContainer && portfolioData.experience) {
        const { experience } = portfolioData;
        experienceContainer.innerHTML = `
            <div class="full-width reveal">
                <h2 class="section-title">${experience.title}</h2>
                <div class="experience-timeline">
                    ${experience.jobs.map(job => `
                        <div class="exp-card glass">
                            <div class="exp-header">
                                <h3 class="exp-role">${job.role}</h3>
                                <span class="exp-date tag tag-${job.color}">${job.date}</span>
                            </div>
                            <h4 class="exp-company">${job.company}</h4>
                            <p class="exp-desc">${job.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Footer
    const footerContainer = document.getElementById('footer-content');
    if (footerContainer && portfolioData.footer) {
        footerContainer.innerHTML = `<p>${portfolioData.footer}</p>`;
    }
}

function setupInteractions() {
    // 1. Navbar Scroll Effect & Global Progress Ring
    const navbar = document.querySelector('.navbar');

    // We only have one progress circle per project but let's select all just in case
    const progressCircles = document.querySelectorAll('.progress-circle');
    // The dasharray is set to 125 in CSS (2 * Math.PI * 20)
    const circleCircumference = 125;

    window.addEventListener('scroll', () => {
        // Navbar styling
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Calculate scroll progress (0 to 1)
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = scrollTop / scrollHeight;

        // Update all progress rings
        progressCircles.forEach(circle => {
            // Offset goes from 125 (empty) to 0 (full)
            const offset = circleCircumference - (scrollPercent * circleCircumference);
            circle.style.strokeDashoffset = offset;
        });
    });

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // 3. Smooth scrolling for anchor links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Adjust for sticky header height
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}
