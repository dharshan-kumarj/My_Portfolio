export type Project = {
    title: string;
    description: string;
    tech: string[];
    image: string;
    github?: string;
    live?: string;
    // Builds without a screenshot render the HUD "contract graph" visual instead.
    visual?: "contract-graph";
};

// The first six are the featured bento grid; the rest open with "View all".
export const projects: Project[] = [
    {
        title: "Cratoss · Local RAG System",
        description:
            "End-to-end Retrieval-Augmented Generation: PDF ingestion → Sentence Transformer embeddings → ChromaDB → BM25 + semantic hybrid retrieval → Cross Encoder reranking → 3-stage confidence validation → Llama 3.2 via Ollama. Zero cloud APIs. Runs offline.",
        tech: ["Python", "ChromaDB", "Ollama", "LLM"],
        image: "/AI.png",
        github: "https://github.com/dharshan-kumarj/Cratoss--RAG",
    },
    {
        title: "Smart Contract Vulnerability Detection · IEEE",
        description:
            "Research-grade dataset from verified DeFi exploits + safe production contracts. Slither static analysis → feature extraction → Gradient Boosting → SHAP explainability. 98.49% accuracy. IEEE — publication in progress.",
        tech: ["Python", "Scikit-Learn", "Ethereum", "SHAP", "IEEE"],
        image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        github: "https://github.com/dharshan-kumarj",
        visual: "contract-graph",
    },
    {
        title: "MsgSift · SMS Spam Detection",
        description:
            "Production-grade ML classification system: ensemble pipeline achieving 98.2% accuracy, FastAPI REST layer, PostgreSQL persistence, Prometheus + Grafana observability, and full CI/CD. Not a notebook — a system.",
        tech: ["Python", "FastAPI", "PostgreSQL", "Prometheus", "Grafana", "GitHub Actions"],
        image: "/Msgsift.jpeg",
        github: "https://github.com/dharshan-kumarj",
    },
    {
        title: "Praxis",
        description:
            "My first DevOps project — a chatbot built for DevOps use cases, provisioned on Azure with Terraform, configured via Ansible, and deployed through a Jenkins CI/CD pipeline with Docker.",
        tech: ["Terraform", "Ansible", "Jenkins", "Docker", "Azure"],
        image: "/Praxis.jpeg",
        github: "https://github.com/dharshan-kumarj/Praxis-devops",
        live: "https://praxis.dharshankumar.com/",
    },
    {
        title: "PortOS",
        description:
            "Revolutionizing Development with Seamless Browser Workspace. Code, Host and Browse Securely.",
        tech: ["Golang", "MySQL", "Cloud"],
        image: "/PortOS.png",
        live: "https://portos.cloud",
    },
    {
        title: "PDFMatrix",
        description:
            "A privacy-first, client-side PDF editor that runs entirely in your browser without server uploads.",
        tech: ["PDF.js", "Client-side", "Privacy"],
        image: "/PDFMatrix.jpeg",
        github: "https://github.com/dharshan-kumarj/PDFMatrix",
        live: "https://pdfmatrix.dharshankumar.com/",
    },
    {
        title: "QRMatrix",
        description:
            "A simple QR code generator with custom logo integration features for branding.",
        tech: ["JavaScript", "QR Code", "Frontend"],
        image: "/QRmatrix.jpeg",
        github: "https://github.com/dharshan-kumarj/QRMatrix",
        live: "https://qrmatrix.dharshankumar.com",
    },
    {
        title: "R.U.L.E",
        description:
            "AI-Powered Resume Parsing and Analysis Platform developed in MSG Community.",
        tech: ["AI/ML", "Python", "NLP"],
        image: "/RULE.jpeg",
        github: "https://github.com/MSG-Mutual-Support-to-Grow/rule",
    },
    {
        title: "Calculator App",
        description:
            "Real-time Calculator and hidden gallery dashboard built with Flutter.",
        tech: ["Flutter", "Dart", "Mobile"],
        image: "/Calc.png",
        github: "https://github.com/dharshan-kumarj/Calculator_App",
        live: "https://github.com/dharshan-kumarj/Calculator_App/tree/main/build/app/outputs/flutter-apk",
    },
    {
        title: "HloMail",
        description:
            "A Mail server to forward mails built in Golang with a React JS dashboard.",
        tech: ["Golang", "React", "SMTP"],
        image: "/HloMail.png",
        github: "https://github.com/dharshan-kumarj/HloMail-Frontend",
    },
    {
        title: "MKM Group",
        description: "A standalone corporate website for the MKM Group of Companies.",
        tech: ["Web", "Corporate", "Design"],
        image: "/MKM.png",
    },
    {
        title: "Pingstream",
        description:
            "GUI tool in Streamlit to execute HTTP/HTTPS requests via curl command.",
        tech: ["Python", "Streamlit", "cURL"],
        image: "/Pingstream.jpeg",
        github: "https://github.com/dharshan-kumarj/API_tool",
    },
    {
        title: "SMTP Django",
        description: "An SMTP server implementation built with the Django Framework.",
        tech: ["Django", "Python", "SMTP"],
        image: "/SMTP.jpeg",
        github: "https://github.com/dharshan-kumarj/SMTP_Django",
    },
    {
        title: "Photogram",
        description: "Full-featured Instagram lite version built with PHP and MySQL.",
        tech: ["PHP", "MySQL", "Social"],
        image: "/Photogram.jpeg",
        github: "https://github.com/dharshan-kumarj/Photogram",
        live: "https://photogram.great-site.net/",
    },
    {
        title: "Live Web Broadcast",
        description:
            "Live Web Broadcast developed using WebRTC protocol with Django and React.",
        tech: ["WebRTC", "Django", "React"],
        image: "/Web_broadcast.jpeg",
        github: "https://github.com/dharshan-kumarj/WebCamBroadcast_Frontend",
    },
    {
        title: "Legal Sphere",
        description:
            "A Chat application frontend built in ReactJS for legal consultations.",
        tech: ["React", "Chat", "Frontend"],
        image: "/Legalsphere.png",
        github: "https://github.com/dharshan-kumarj/LegalSphere_Frontend",
    },
];
