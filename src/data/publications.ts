export interface PublicationMetric {
    value: string;
    label: string;
}

export interface PublicationContribution {
    title: string;
    description: string;
    icon: string;
}

export interface PipelineStage {
    step: string;
    title: string;
    description: string;
}

export interface ResultRow {
    model: string;
    accuracy: string;
    precision: string;
    recall: string;
    auc: string;
    highlight?: boolean;
}

export interface ShapFeature {
    feature: string;
    value: number;
    display: string;
    type: "Slither flag" | "Code metric";
}

export interface EvidenceImage {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
}

export interface Publication {
    slug: string;
    title: string;
    shortTitle: string;
    authors: string[];
    venue: string;
    venueShort: string;
    publisher: string;
    year: number;
    pages: string;
    location: string;
    conferenceDates: string;
    publishedDate: string;
    url: string;
    doi: string;
    tags: string[];
    summary: string;
    abstract: string;
    metrics: PublicationMetric[];
    cardMetrics: PublicationMetric[];
    contributions: PublicationContribution[];
    pipeline: PipelineStage[];
    results: ResultRow[];
    shap: ShapFeature[];
    findings: string[];
    evidence: EvidenceImage[];
    citation: string;
}

export const publications: Publication[] = [
    {
        slug: "bias-corrected-smart-contract-detection",
        title: "A Bias-Corrected Dataset Construction Framework for Machine Learning-Based Smart Contract Vulnerability Detection",
        shortTitle:
            "Bias-corrected smart contract vulnerability detection",
        authors: ["Dharshan Kumar J", "Srija J", "Shivanthana S"],
        venue: "2026 International Conference on Secure IoT and Cybersecurity (ICOSICS)",
        venueShort: "IEEE ICOSICS 2026",
        publisher: "IEEE",
        year: 2026,
        pages: "1436–1442",
        location: "Bengaluru, India",
        conferenceDates: "23–25 September 2026",
        publishedDate: "2026-09-23",
        url: "https://ieeexplore.ieee.org/document/11746875",
        doi: "10.1109/ICOSICS70095.2026.11746875",
        tags: [
            "Machine Learning",
            "Smart Contract Security",
            "Dataset Bias",
            "Solidity",
            "Vulnerability Detection",
            "Cybersecurity",
        ],
        summary:
            "Audited safe DeFi contracts are structurally much larger than exploited vulnerable contracts, creating a size-proxy bias that inflates benchmark accuracy. This work identifies and corrects that bias across 3,316 Ethereum contracts, then uses SHAP to confirm the model learned security patterns—not contract size.",
        abstract:
            "Smart contracts governing Decentralized Finance (DeFi) protocols on Ethereum handle billions of dollars in assets, making reliable vulnerability detection a practical necessity rather than an academic exercise. Existing machine learning studies achieve strong benchmark numbers, yet a fundamental problem in how training datasets are assembled has received little attention: audited safe contracts drawn from large DeFi protocols are structurally much larger than exploited vulnerable ones, creating a size-proxy bias that inflates reported accuracy without teaching the model anything about security. This paper identifies and corrects that bias through a nine-stage automated pipeline that produces a curated dataset of 3,316 real-world Ethereum contracts, extracts nine security-oriented features via Slither static analysis and source-code metrics, trains a Gradient Boosting classifier, and applies SHAP attribution to verify that predictions are driven by genuine security patterns rather than contract size. On the raw biased dataset the model reached 98.49% accuracy with function_count capturing 89.51% of feature importance; after correction, accuracy settles to a realistic 93.37%, with assembly_flag becoming the dominant predictor at a SHAP value of 2.02. Full evaluation on the held-out test set yields 90.51% precision, 83.14% recall, 86.67% F1-score, and 0.9710 ROC-AUC, outperforming Random Forest and Logistic Regression baselines trained on identical features and splits. The 4.88 percentage-point accuracy drop after bias correction is not a performance loss but a removal of a confounding factor, and the shift in feature importance from size proxies to security indicators confirms the model is learning what it is supposed to learn.",
        metrics: [
            { value: "3,316", label: "Ethereum contracts" },
            { value: "9", label: "Security features" },
            { value: "93.37%", label: "Test accuracy" },
            { value: "0.9710", label: "ROC-AUC" },
        ],
        cardMetrics: [
            { value: "3,316", label: "contracts" },
            { value: "93.37%", label: "accuracy" },
            { value: "0.9710", label: "ROC-AUC" },
        ],
        contributions: [
            {
                title: "Quantifies a hidden dataset bias",
                description:
                    "Safe audited DeFi contracts average 91.9 functions; exploited vulnerable contracts average 6.2—a 14.9× size gap that lets models learn size instead of security.",
                icon: "fa-scale-unbalanced",
            },
            {
                title: "Builds a reproducible corrected corpus",
                description:
                    "A nine-stage pipeline scrapes, resolves, verifies, flattens, and labels contracts, producing 3,316 Ethereum contracts with nine security-oriented features.",
                icon: "fa-diagram-project",
            },
            {
                title: "Replaces size proxies with security signals",
                description:
                    "After correction, function_count no longer dominates. assembly_flag becomes the top predictor at a SHAP value of 2.02, followed by external_calls (0.92) and function_count (0.71); unchecked calls and delegatecall follow at 0.64 each.",
                icon: "fa-magnifying-glass-chart",
            },
            {
                title: "Benchmarks with identical splits",
                description:
                    "On the same features and test split, Gradient Boosting leads both baselines on accuracy and ROC-AUC, reaching 90.51% precision and 83.14% recall.",
                icon: "fa-chart-line",
            },
        ],
        pipeline: [
            {
                step: "01",
                title: "Source scraping",
                description:
                    "Collect vulnerable-contract leads and incident metadata from rekt.news, DefiLlama, and SlowMist.",
            },
            {
                step: "02",
                title: "Address merge",
                description:
                    "Deduplicate addresses across sources so the same incident is not counted twice.",
            },
            {
                step: "03",
                title: "URL extraction",
                description:
                    "Use LLM-assisted extraction to resolve each incident to its Ethereum contract address.",
            },
            {
                step: "04",
                title: "Source download",
                description:
                    "Fetch verified Solidity source code through the Etherscan API.",
            },
            {
                step: "05",
                title: "Flattening",
                description:
                    "Merge multi-file contracts and imports into a single compilable Solidity unit.",
            },
            {
                step: "06",
                title: "Slither analysis",
                description:
                    "Run Slither with solc-select across compiler versions to extract security flags.",
            },
            {
                step: "07",
                title: "Feature extraction",
                description:
                    "Combine Slither JSON output with regex-based source-code metrics into nine features.",
            },
            {
                step: "08",
                title: "Safe collection",
                description:
                    "Gather Etherscan-verified safe contracts while excluding proxies and empty source code.",
            },
            {
                step: "09",
                title: "Assembly",
                description:
                    "Validate, label, and export the final CSV used for training, validation, and testing.",
            },
        ],
        results: [
            {
                model: "Gradient Boosting (ours)",
                accuracy: "93.37%",
                precision: "90.51%",
                recall: "83.14%",
                auc: "0.9710",
                highlight: true,
            },
            {
                model: "Random Forest",
                accuracy: "92.77%",
                precision: "86.47%",
                recall: "85.47%",
                auc: "0.9630",
            },
            {
                model: "Logistic Regression",
                accuracy: "90.51%",
                precision: "93.60%",
                recall: "68.02%",
                auc: "0.9289",
            },
        ],
        shap: [
            {
                feature: "assembly_flag",
                value: 2.0217,
                display: "2.02",
                type: "Slither flag",
            },
            {
                feature: "external_calls",
                value: 0.915,
                display: "0.92",
                type: "Code metric",
            },
            {
                feature: "function_count",
                value: 0.7059,
                display: "0.71",
                type: "Code metric",
            },
            {
                feature: "unchecked_call_flag",
                value: 0.6384,
                display: "0.64",
                type: "Slither flag",
            },
            {
                feature: "delegatecall_flag",
                value: 0.6372,
                display: "0.64",
                type: "Slither flag",
            },
            {
                feature: "modifier_count",
                value: 0.2487,
                display: "0.25",
                type: "Code metric",
            },
            {
                feature: "tx_origin_flag",
                value: 0.2019,
                display: "0.20",
                type: "Slither flag",
            },
            {
                feature: "reentrancy_flag",
                value: 0.1808,
                display: "0.18",
                type: "Slither flag",
            },
            {
                feature: "selfdestruct_flag",
                value: 0,
                display: "0.00",
                type: "Slither flag",
            },
        ],
        findings: [
            "On the raw biased dataset, Gradient Boosting reached 98.49% accuracy while function_count captured 89.51% of impurity importance.",
            "After correction, accuracy settled at 93.37% and assembly_flag became the dominant predictor at a SHAP value of 2.02.",
            "The held-out 664-contract test set produced 90.51% precision, 83.14% recall, 86.67% F1-score, and 0.9710 ROC-AUC.",
            "Removing assembly_flag reduced F1 by 6.04 percentage points; removing function_count reduced it by only 1.12 points.",
            "Security flags collectively contributed 3.648 mean |SHAP|, compared with 1.870 for structural code metrics.",
        ],
        evidence: [
            {
                src: "/research/ieee-proceedings.webp",
                alt: "IEEE Xplore ICOSICS 2026 proceedings listing showing the paper title, authors, publication year, and pages 1436 to 1442.",
                caption:
                    "IEEE Xplore proceedings listing — title, authors, publication year, and pages 1436–1442.",
                width: 2000,
                height: 1289,
            },
            {
                src: "/research/ieee-xplore.webp",
                alt: "Official IEEE Xplore page for the paper showing the title, authors, IEEE publisher information, and abstract.",
                caption:
                    "Official IEEE Xplore publication page — title, authors, publisher, and abstract.",
                width: 2000,
                height: 1250,
            },
            {
                src: "/research/bias-correction-framework.webp",
                alt: "Diagram of the bias-corrected explainable framework for Ethereum smart contract vulnerability detection.",
                caption:
                    "The bias-corrected explainable framework: dataset construction, structural bias analysis, correction, feature extraction, classification, and SHAP explainability.",
                width: 1000,
                height: 1193,
            },
            {
                src: "/research/paper-first-page.webp",
                alt: "First page of the published IEEE conference paper with the title, authors, abstract, and index terms.",
                caption:
                    "First page of the published conference paper, including the abstract and index terms.",
                width: 1105,
                height: 1430,
            },
        ],
        citation: `@inproceedings{Dharshan2026BiasCorrected,
  author    = {Dharshan Kumar J and Srija J and Shivanthana S},
  title     = {A Bias-Corrected Dataset Construction Framework for Machine Learning-Based Smart Contract Vulnerability Detection},
  booktitle = {2026 International Conference on Secure IoT and Cybersecurity (ICOSICS)},
  publisher = {IEEE},
  year      = {2026},
  pages     = {1436--1442},
  doi       = {10.1109/ICOSICS70095.2026.11746875},
  url       = {https://ieeexplore.ieee.org/document/11746875}
}`,
    },
];

export const featuredPublication = publications[0];
