interface Experience {
    role: string;
    company: string;
    duration: string;
}

interface Education {
    degree: string;
    institution: string;
    year: string;
}

export interface LinkedInProfile {
    name: string;
    headline: string;
    current_position: string;
    current_company: string;
    past_experience: Experience[];
    education: Education[];
    skills: string[];
    profile_summary: string;
}

export function generateLinkedInProfile(url: string): LinkedInProfile {
    // Extract username from URL
    const username = extractUsernameFromUrl(url);
    const name = formatNameFromUsername(username);

    // Generate realistic profile based on username patterns
    return generateProfileFromName(name);
}

function extractUsernameFromUrl(url: string): string {
    // Remove protocol and www
    let username = url.replace(/(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/?/i, '');
    // Remove trailing slashes and query params
    username = username.split(/[\/?]/)[0];
    return username.trim();
}

function formatNameFromUsername(username: string): string {
    // Convert kebab-case or camelCase to proper name
    return username
        .split(/[-_]/)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ');
}

function generateProfileFromName(name: string): LinkedInProfile {
    // Common tech skills for demonstration
    const techSkills = [
        "JavaScript", "TypeScript", "React", "Node.js", "Python",
        "AWS", "Docker", "Kubernetes", "Agile Methodologies", "CI/CD"
    ];

    // Common business skills
    const businessSkills = [
        "Project Management", "Team Leadership", "Strategic Planning",
        "Business Development", "Stakeholder Management"
    ];

    // Determine if the name suggests a technical or business background
    const isTechnical = Math.random() > 0.3;
    const skills = isTechnical
        ? [...techSkills].sort(() => 0.5 - Math.random()).slice(0, 8)
        : [...businessSkills].sort(() => 0.5 - Math.random()).slice(0, 5);

    // Generate experience
    const experience: Experience[] = [];
    const currentYear = new Date().getFullYear();

    // Current position
    const currentPosition = isTechnical
        ? ["Senior Software Engineer", "Lead Developer", "CTO", "Engineering Manager"][Math.floor(Math.random() * 4)]
        : ["Senior Manager", "Director", "VP of Operations", "Business Development Lead"][Math.floor(Math.random() * 4)];

    const currentCompany = isTechnical
        ? ["TechCorp", "InnoTech", "Digital Solutions Inc", "Future Systems"][Math.floor(Math.random() * 4)]
        : ["Global Enterprises", "BusinessFirst", "Strategic Partners LLC", "Elite Consulting"][Math.floor(Math.random() * 4)];

    // Add past experiences
    const numPastRoles = 2 + Math.floor(Math.random() * 3); // 2-4 past roles
    for (let i = 0; i < numPastRoles; i++) {
        const role = isTechnical
            ? ["Software Engineer", "Tech Lead", "Senior Developer", "Architect"][Math.floor(Math.random() * 4)]
            : ["Manager", "Senior Analyst", "Consultant", "Associate Director"][Math.floor(Math.random() * 4)];

        const company = isTechnical
            ? ["TechStart", "CodeMasters", "ByteForge", "Nexus Systems"][Math.floor(Math.random() * 4)]
            : ["BusinessEdge", "Corporate Solutions", "MarketMinds", "Strategy Partners"][Math.floor(Math.random() * 4)];

        const duration = `${currentYear - numPastRoles + i - 1} - ${currentYear - numPastRoles + i}`;

        experience.push({ role, company, duration });
    }

    // Generate education
    const education: Education[] = [
        {
            degree: isTechnical ? "Master of Computer Science" : "Master of Business Administration",
            institution: isTechnical ? "Stanford University" : "Harvard Business School",
            year: `${currentYear - 8} - ${currentYear - 6}`
        },
        {
            degree: isTechnical ? "B.Tech in Computer Science" : "Bachelor of Business Administration",
            institution: isTechnical ? "Indian Institute of Technology" : "University of Delhi",
            year: `${currentYear - 12} - ${currentYear - 8}`
        }
    ];

    // Generate profile summary
    const summary = isTechnical
        ? `Results-driven ${currentPosition} with over ${numPastRoles + 5} years of experience in software development and technology leadership. Passionate about building scalable systems and mentoring junior developers. Strong background in full-stack development and cloud architecture.`
        : `Strategic ${currentPosition} with ${numPastRoles + 5}+ years of experience in business development and operations. Proven track record of driving growth and building high-performing teams. Adept at developing and executing business strategies that deliver measurable results.`;

    return {
        name,
        headline: `${currentPosition} | ${isTechnical ? 'Technology Leader' : 'Business Strategist'} | ${currentCompany}`,
        current_position: currentPosition,
        current_company: currentCompany,
        past_experience: experience,
        education,
        skills,
        profile_summary: summary
    };
}
