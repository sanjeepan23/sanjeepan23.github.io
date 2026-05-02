import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Sanjeepan Sivapiran",
  initials: "SS",
  url: "https://sanjeepan23.github.io",
  location: "Toronto, Canada",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Machine Learning Engineer at H2O.ai. Building enterprise LLMs and AI systems with a research background in code generation and alignment.",
  summary:
    "I'm a Machine Learning Engineer specializing in enterprise AI systems and Large Language Models. Currently at [H2O.ai](https://h2o.ai) as MLE II, I build and deploy production-scale LLM solutions. I recently completed my [Master of Applied Science (MASc) in Computer Engineering at York University](https://lassonde.yorku.ca/eecs/), where I researched alignment techniques (RLHF, DPO, RLAIF) for improving code generation in LLMs, with publications at A* conferences like FSE.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "Python", icon: Python },
    { name: "PyTorch", icon: undefined },
    { name: "TensorFlow", icon: undefined },
    { name: "LLMs", icon: undefined },
    { name: "RLHF / DPO", icon: undefined },
    { name: "Hugging Face", icon: undefined },
    { name: "Scikit-Learn", icon: undefined },
    { name: "Java", icon: Java },
    { name: "TypeScript", icon: Typescript },
    { name: "Docker", icon: Docker },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "AWS", icon: undefined },
    { name: "GCP", icon: undefined },
    { name: "FastAPI", icon: undefined },
    { name: "Git", icon: undefined },
    { name: "Linux", icon: undefined },
    { name: "Redis", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "sanjeepan23@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sanjeepan23",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sanjeepan",
        icon: Icons.linkedin,
        navbar: true,
      },
      "Google Scholar": {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=hp1BtHEAAAAJ&hl=en",
        icon: Icons.scholar,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sanjeepan23@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "H2O.ai",
      href: "https://h2o.ai",
      badges: ["Returning"],
      location: "Remote",
      title: "Machine Learning Engineer II",
      logoUrl: "/h2o.svg",
      start: "May 2026",
      end: "Present",
      description:
        "Returning to H2O.ai as MLE II after completing MASc. Working on enterprise LLM development and deployment.",
    },
    {
      company: "H2O.ai",
      href: "https://h2o.ai",
      badges: [],
      location: "Remote",
      title: "Machine Learning Engineer",
      logoUrl: "/h2o.svg",
      start: "Jul 2023",
      end: "Apr 2026",
      description:
        "Core engineer developing enterprise Large Language Models (LLMs). Created a signature detection and verification system using PyTorch, currently used by Australia's largest bank processing 2 million documents daily. Built a scalable, distributed inference pipeline with in-house MOJO model.",
    },
    {
      company: "H2O.ai",
      href: "https://h2o.ai",
      badges: [],
      location: "Remote",
      title: "Machine Learning Engineer — Intern",
      logoUrl: "/h2o.svg",
      start: "Dec 2021",
      end: "Jun 2023",
      description:
        "Implemented a machine learning model to predict credit scores using non-conventional data, achieving 15% better accuracy than the existing model.",
    },
    {
      company: "ExentAI",
      href: "",
      badges: [],
      location: "Remote",
      title: "Machine Learning Engineer — Intern",
      logoUrl: "/exentai.png",
      start: "Sep 2021",
      end: "Nov 2021",
      description:
        "Created a Sentiment and Emotion Analysis system from data collection to model deployment.",
    },
    {
      company: "Lassonde School of Engineering, York University",
      href: "https://lassonde.yorku.ca/eecs/",
      badges: [],
      location: "Toronto, Canada",
      title: "Graduate Research & Teaching Assistant",
      logoUrl: "/LASS_yu_DIGITAL_vert_RGB.svg",
      start: "Sep 2024",
      end: "Apr 2026",
      description:
        "Conducted research on LLM alignment for code generation (RLHF, DPO, RLAIF) under MASc in Computer Engineering. Served as teaching assistant for graduate-level courses at Lassonde School of Engineering.",
    },
    {
      company: "Dept. of CSE, University of Moratuwa",
      href: "https://www.cse.mrt.ac.lk/",
      badges: [],
      location: "Moratuwa, Sri Lanka",
      title: "Teaching Assistant",
      logoUrl: "/cse.png",
      start: "Aug 2022",
      end: "Jul 2023",
      description:
        "Teaching assistant for CS 3121 (Introduction to Data Science) and CS 3630 (Deep Neural Networks). Prepared and graded assessments for 85 students and facilitated lab sessions.",
    },
  ],
  education: [
    {
      school: "York University",
      href: "https://lassonde.yorku.ca/eecs/",
      degree: "Master of Applied Science (MASc), Computer Engineering",
      logoUrl: "/york.png",
      start: "2024",
      end: "2026",
    },
    {
      school: "University of Moratuwa",
      href: "https://uom.lk",
      degree: "BSc Engineering (Hons), CSE — First Class",
      logoUrl: "/moratuwa.png",
      start: "2018",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "H2O LLM DataStudio",
      href: "https://h2o.ai/blog/streamlining-data-preparation-for-fine-tuning-of-large-language-models/",
      dates: "2023",
      active: false,
      description:
        "A no-code application and toolkit to streamline data preparation tasks for fine-tuning Large Language Models.",
      technologies: [
        "Python",
        "H2O Wave",
        "LLMs",
        "Data Curation",
        "Fine-tuning",
      ],
      links: [
        {
          type: "Article",
          href: "https://h2o.ai/blog/streamlining-data-preparation-for-fine-tuning-of-large-language-models/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ReCo — Semantic Segmentation",
      href: "https://github.com/sanjeepan23/ReCo",
      dates: "2023",
      active: false,
      description:
        "Contrastive learning framework for semantic segmentation achieving strong results with minimal labeled data (5 examples per class). Supports CityScapes and Pascal VOC.",
      technologies: [
        "PyTorch",
        "DeepLabV3+",
        "ResNet-101",
        "Semi-supervised Learning",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sanjeepan23/ReCo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Reward-Free Code Alignment from Pretrained or Fine-Tuned LLM: Unpacking the Trade-offs for Code Generation",
      dates: "Jul 2026",
      location: "FSE 2026 · Research Paper · Montreal, Canada",
      description:
        "Investigated how preference alignment techniques (DPO, BoNBoN) benefit LLMs for code generation across five models, showing that alignment reduces the performance gap between pretrained and fine-tuned variants.",
      image: "/LASS_yu_DIGITAL_vert_RGB.svg",
      links: [
        {
          title: "Paper",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://conf.researchr.org/details/fse-2026/fse-2026-research-papers/42/Reward-Free-Code-Alignment-from-Pretrained-or-Fine-Tuned-LLM-Unpacking-the-Trade-off",
        },
      ],
    },
    {
      title: "Party Extraction from Legal Contracts Using Contextualized Span Representations",
      dates: "Sep 2023",
      location: "RANLP 2023 · Long Paper",
      description:
        "Developed a QA-based approach using RoBERTa to identify parties in legal contracts. Created an open-source legal party dataset with 1000 documents.",
      image: "/ranlp-paper.png",
      links: [
        {
          title: "Paper",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://aclanthology.org/2023.ranlp-1.116/",
        },
      ],
    },
    {
      title: "Sentiment Analysis in Dravidian Code-Mixed YouTube Comments and Posts",
      dates: "2022",
      location: "FIRE 2021 · CEUR Workshop Proceedings",
      description:
        "Message-level polarity classification for code-mixed Dravidian language content on social media.",
      image: "/fire-paper.jpeg",
      links: [
        {
          title: "Paper",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ceur-ws.org/Vol-3159/T6-23.pdf",
        },
      ],
    },
    {
      title: "Guest Speaker @ IEEE Summer School on Computational Intelligence",
      dates: "Jul 2023",
      location: "University of Jaffna, Sri Lanka",
      description:
        "Speaker at the H2O.ai LLM Space and Tools session during an IEEE event, sharing insights on machine learning, AI, and H2O.ai's technologies.",
      image: "/ieee-talk.jpeg",
      links: [
        {
          title: "Event",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://society.jfn.ac.lk/cis/ssci/index.html",
        },
      ],
    },
    {
      title: "Presentation at H2O.ai Sri Lanka Community Event",
      dates: "Oct 2022",
      location: "Colombo, Sri Lanka",
      description:
        "Presented latest work in signature detection, engaging with the ML community in Sri Lanka.",
      image: "/h2o-talk.jpg",
      links: [
        {
          title: "H2O Events",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://h2o.ai/events/",
        },
      ],
    },
  ],
} as const;
