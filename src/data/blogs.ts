export type Blog = {
    title: string;
    description: string;
    image: string;
    url: string;
    date: string;
    // Featured posts lead the Transmissions grid (per the design).
    featured?: boolean;
};

export const mediumProfile = "https://medium.com/@jdharshankumar18";

export const blogs: Blog[] = [
    {
        title: "From Zero to Practical DevOps: My Real Learning Path with Terraform, Ansible, and Jenkins",
        description:
            "A beginner-friendly, mistake-aware journey through DevOps — no hype, no shortcuts. Discover how Terraform provisions infrastructure, Ansible handles configuration management, and Jenkins orchestrates the full CI/CD pipeline, with real mistakes and hard truths learned along the way.",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*8G0j-n5oR1DQ-HBsmgOqgQ.png",
        url: "https://medium.com/@jdharshankumar18/from-zero-to-practical-devops-my-real-learning-path-with-terraform-ansible-and-jenkins-df5492bfb08b",
        date: "Dec 30, 2025",
        featured: true,
    },
    {
        title: "Turning Sentences into Angles: A Beginner’s Guide to Cosine Similarity",
        description:
            "This blog turns text into vectors and explains how cosine similarity measures the angle between them—so you can quantify how similar sentences are regardless of their length. From dot products and magnitudes to practical NLP use cases, it’s a beginner friendly tour of a foundational text‑analysis technique",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ZXAd2f2kIC1RwqMMqcUVQw.png",
        url: "https://medium.com/@jdharshankumar18/turning-sentences-into-angles-a-beginners-guide-to-cosine-similarity-f55fb9fab04b",
        date: "July 23, 2025",
        featured: true,
    },
    {
        title: "Making the Right Choice: Monolith vs. Microservices",
        description:
            "A practical guide to choosing between monolithic and microservices architectures. Learn when each approach shines through real-world scenarios - from startups and internal tools to global platforms and hybrid approaches that scale with your business.",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*U9qbnlWrzXu_LlDkS9n2Aw.jpeg",
        url: "https://medium.com/@jdharshankumar18/making-the-right-choice-monolith-vs-microservices-51332548445d",
        date: "Feb 7, 2025",
        featured: true,
    },
    {
        title: "In-Hand Salary ≠ CTC: Don’t Get Fooled by Big Numbers",
        description:
            "This blog strips away the flashy headline CTC and breaks down what actually lands in your bank—basic salary, allowances, tax, PF and more so you can make informed choices, negotiate smarter, and avoid getting dazzled by big numbers.",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*36ra6xOj3I5jIc_OkY3eTw.png",
        url: "https://medium.com/@jdharshankumar18/in-hand-salary-ctc-dont-get-fooled-by-big-numbers-1b53eb444bb3",
        date: "Jul 7, 2025",
    },
    {
        title: "Authentication and Authorization Demystified: Real-Life Examples That Make Sense",
        description:
            "Ever wondered how apps know who you are and what you’re allowed to do? This guide breaks down authentication and authorization using real-life college examples. From login types to tech like OAuth, SAML, JWT, and OpenID Connect — understand how modern systems keep your data safe while making access seamless.",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*SUDtHYvBIzVgjLYcM5Vghg.png",
        url: "https://medium.com/@jdharshankumar18/authentication-and-authorization-what-they-are-and-how-they-work-8d72546d8037",
        date: "June 3, 2025",
    },
    {
        title: "DNS: The Internet’s Phone Book — Explained for Beginners",
        description:
            "Discover how the Domain Name System (DNS) powers every click on the internet — the invisible backbone connecting names to numbers",
        image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*lvRW3-tvGAGeSc4y7UcDYw.jpeg",
        url: "https://medium.com/@jdharshankumar18/dns-the-internets-phone-book-explained-for-beginners-582ba9945492",
        date: "May 27, 2025",
    },
    {
        title: "Vite vs CRA: The Ultimate Beginner’s Guide to Modern React",
        description:
            "Compare React's two popular starter tools in this comprehensive guide. Discover why Vite outperforms Create React App with blazing-fast development speeds, simpler configuration, and modern bundling. Learn when to use each tool and understand the bundling technologies that power modern web development.",
        image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*QHEq8xKYM6cvqUz1IlfLbw.jpeg",
        url: "https://medium.com/@jdharshankumar18/vite-vs-cra-the-ultimate-beginners-guide-to-modern-react-eaa5cbe53841",
        date: "May 3, 2025",
    },
    {
        title: "Thinking of Switching to Linux? Here’s Why Developers Already Have!",
        description:
            "Explore why Linux has become the preferred OS for developers - from its powerful command line and open-source flexibility to better security and performance. Learn the key benefits that make developers choose Linux over Windows..",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*gAJri_9OEknLQUr3f19F9w.jpeg",
        url: "https://medium.com/@jdharshankumar18/thinking-of-switching-to-linux-heres-why-developers-already-have-4625797a8820",
        date: "Jan 29, 2025",
    },
];
