export type Mission = {
    date: string;
    kind: "Honor" | "Workshop";
    title: string;
    // Trusted static HTML (allows the inline teammate link).
    description: string;
    gallery: { src: string; alt: string }[];
};

// Honors & Awards and Workshops merged into one chronological field record.
export const missions: Mission[] = [
    {
        date: "Oct 2026",
        kind: "Honor",
        title: "1st Prize · Quantum Hackathon | National Quantum Summit 2026",
        description:
            'Secured 1st Prize with my teammate <a class="text-arc underline-offset-4 hover:underline" href="https://thirupathi.tech/" target="_blank" rel="noopener noreferrer">Thirupathi S.</a> at the Quantum Hackathon, organised in collaboration with Bloq Quantum as part of the National Quantum Summit 2026 at Karunya Institute of Technology and Sciences, Coimbatore. We tackled a healthcare challenge: using a 4-qubit Quantum Machine Learning model to predict mortality risk among heart failure patients.',
        gallery: [
            { src: "/quantum-hackathon/quantum-1.jpeg", alt: "Quantum Hackathon 1st Prize" },
            { src: "/quantum-hackathon/quantum-2.jpeg", alt: "National Quantum Summit 2026" },
            { src: "/quantum-hackathon/quantum-3.jpeg", alt: "Team at Quantum Hackathon" },
            { src: "/quantum-hackathon/quantum-4.jpeg", alt: "Quantum Hackathon Certificate" },
        ],
    },
    {
        date: "Aug 2026",
        kind: "Workshop",
        title: "IEEE Bootcamp · Mentor",
        description:
            "Along with my friends, monitored and guided third-year students of our department as they conducted sessions across a 10-day IEEE Bootcamp — reviewing their work and helping them identify and fix their mistakes.",
        gallery: [
            { src: "/IEEE_bootcamp/IEEE-1.jpeg", alt: "IEEE Bootcamp" },
            { src: "/IEEE_bootcamp/IEEE-2.jpeg", alt: "IEEE Bootcamp Session" },
            { src: "/IEEE_bootcamp/IEEE-3.jpeg", alt: "Guiding Students" },
            { src: "/IEEE_bootcamp/IEEE-4.jpeg", alt: "IEEE Bootcamp Mentoring" },
            { src: "/IEEE_bootcamp/IEEE-5.jpeg", alt: "IEEE Bootcamp Team" },
            { src: "/IEEE_bootcamp/IEEE-6.jpeg", alt: "IEEE Bootcamp Team" },
        ],
    },
    {
        date: "2026",
        kind: "Workshop",
        title: "Student Induction Program 2026",
        description:
            "Welcomed the 2026 first-year batch of our department through informal conversations and interactive activities, and introduced them to the department's clubs, academics, and campus life to help them settle in.",
        gallery: [
            { src: "/SIP_2026/SIP_1.jpeg", alt: "Student Induction Program" },
            { src: "/SIP_2026/SIP_2.jpeg", alt: "First-year Activities" },
            { src: "/SIP_2026/SIP_3.jpeg", alt: "Interacting with First Years" },
            { src: "/SIP_2026/SIP_4.jpeg", alt: "Clubs and Academics Briefing" },
            { src: "/SIP_2026/SIP_5.jpeg", alt: "Clubs and Academics Briefing" },
        ],
    },
    {
        date: "Mar 2026",
        kind: "Honor",
        title: "Led 7 Teams at MindKraft 26 · National Level Expo",
        description:
            "Coordinated alongside tutors and coordinators to lead 7 teams in demonstrating 7 complete projects at MindKraft 26 — a national-level technology expo. Managed end-to-end preparation, team readiness, and live demonstrations across all booths.",
        gallery: [
            { src: "/mk-26/mk_26-1.jpeg", alt: "MindKraft 26 Expo" },
            { src: "/mk-26/mk_26-2.jpeg", alt: "MindKraft 26 Teams" },
            { src: "/mk-26/mk_26-3.jpeg", alt: "MindKraft 26 Demo" },
            { src: "/mk-26/mk_26-4.jpeg", alt: "MindKraft 26 Coordination" },
        ],
    },
    {
        date: "Mar 2026",
        kind: "Honor",
        title: "Makers Day · Event Lead",
        description:
            "Led Makers Day from the front — organized and ran a student showcase event that gave developers a stage to present real, working projects to peers, faculty, and guests. Handled everything from platform setup to event flow.",
        gallery: [
            { src: "/makers-day/makers-day-1.jpeg", alt: "Makers Day Event" },
            { src: "/makers-day/makers-day-2.jpeg", alt: "Student Showcases" },
            { src: "/makers-day/makers-day-3.jpeg", alt: "Makers Day Stage" },
        ],
    },
    {
        date: "Oct 2025",
        kind: "Workshop",
        title: "Git & GitHub Seminar",
        description:
            "As DotDev Club Coordinator, conducted an introductory seminar on Git and GitHub for first-year students of our department, covering version control fundamentals, repository management, and collaborative workflows.",
        gallery: [1, 2, 3, 4, 5].map((n) => ({
            src: `/achievements/GIT-${n}.jpeg`,
            alt: "Git Seminar",
        })),
    },
    {
        date: "Sept 2025",
        kind: "Honor",
        title: "Evaluator · Innovatex Hackathon",
        description:
            "Served as an evaluator and judge at the Innovatex Hackathon in my role as DotDev Club Coordinator — assessing teams on technical depth, innovation, and presentation quality.",
        gallery: [
            { src: "/innovatex/innovtex-1.jpeg", alt: "Innovatex Hackathon" },
            { src: "/innovatex/innovtex-2.jpeg", alt: "Evaluating Teams" },
            { src: "/innovatex/innovtex-3.jpeg", alt: "Hackathon Session" },
        ],
    },
    {
        date: "Aug 2025",
        kind: "Honor",
        title: "DotDev Club Coordinator",
        description:
            "Received the coordinator badge at the inauguration ceremony, recognizing leadership in fostering developer communities.",
        gallery: [
            { src: "/achievements/Dot-dev_badge.jpg", alt: "Coordinator Badge" },
            { src: "/achievements/Dot-dev_badge-1.JPG", alt: "Inauguration" },
            { src: "/achievements/Dot-dev_badge-2.JPG", alt: "Ceremony" },
        ],
    },
    {
        date: "Aug 2025",
        kind: "Workshop",
        title: "Full-Stack Bootcamp Workshop",
        description:
            "Conducted a hands-on bootcamp before the Innovate-X Hackathon, covering APIs, databases, Docker deployment, and cloud hosting. Over 100+ attendees participated in this backend-focused session.",
        gallery: [
            { src: "/achievements/Backend-1.jpeg", alt: "Workshop session" },
            { src: "/achievements/Backend-2.jpeg", alt: "Participants" },
            { src: "/achievements/Backend-3.jpeg", alt: "Participants" },
            { src: "/achievements/Backend-4.jpeg", alt: "Participants" },
        ],
    },
    {
        date: "Mar 2025",
        kind: "Honor",
        title: "Appreciation For Deploying The Mindkraft 2025 Website",
        description:
            "Received appreciation for successfully deploying and managing the official Mindkraft 2025(A National Level Event) website.",
        gallery: [
            { src: "/achievements/mindkraft-cermony.jpeg", alt: "Award ceremony" },
            { src: "/achievements/mindkraft-certfictae.jpeg", alt: "Certificate" },
        ],
    },
    {
        date: "Feb 2025",
        kind: "Workshop",
        title: "LabAgent Project Demonstration",
        description:
            "Demonstrated our LabAgent project at the Mindkraft Expo, showcasing innovative AI-powered solutions and engaging with attendees to explain the technology and its applications.",
        gallery: [
            { src: "/achievements/Mindkraft-1.jpeg", alt: "LabAgent Demo" },
            { src: "/achievements/Mindkraft-2.jpeg", alt: "LabAgent Demo" },
        ],
    },
    {
        date: "Mar 2024",
        kind: "Honor",
        title: "Finalist at Nexus Innovate-a-thon",
        description:
            "Reached the finals as team lead, showcasing innovative problem-solving skills and technical expertise in a competitive hackathon.",
        gallery: [
            { src: "/achievements/nexus-ceremony.jpeg", alt: "Nexus Innovate-a-thon ceremony" },
            { src: "/achievements/nexus-certifcate.jpeg", alt: "Nexus Innovate-a-thon certificate" },
        ],
    },
];
