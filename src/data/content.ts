// Typed content data — single source of truth for all portfolio copy.
// Always edit content.md first, then sync changes here.

import type {
  PersonalInfo,
  Job,
  Project,
  SkillGroup,
  Award,
  Education,
  Certificate,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Anuj Mittal",
  title: "Senior Consultant - Analytics",
  tagline: "8+ years in analytics · Targeting Analytics Manager roles · Building with Agentic AI",
  email: "anujmittal0702@gmail.com",
  phone: "+91 8800858905",
  linkedin: "https://www.linkedin.com/in/anujmittal07/",
  github: "https://github.com/anujgit0702",
  location: "Delhi/NCR, India (open to relocation within India)",
  summary:
    "Analytical professional with 8+ years of experience in data analysis, experimentation, and business intelligence. Skilled in designing and analyzing A/B tests, performing funnel and cohort analysis, and evaluating marketing campaign performance to optimize customer acquisition and engagement. Experienced in defining success metrics, interpreting complex datasets, and translating analytical insights into actionable recommendations that improve overall business performance. Currently upskilling in Agentic AI — building autonomous agents and AI-powered tools — targeting Analytics Manager roles where data leadership meets modern AI capability.",
};

export const coreCompetencies: string[] = [
  "Growth Strategy",
  "Stakeholder Management",
  "Customer Acquisition & Retention",
  "Cross-Functional Collaboration",
  "Conversion Rate Optimization",
  "Dashboarding & Visualization",
  "A/B Testing & Experimentation",
  "Data Analytics",
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Querying",
    items: ["SQL", "Python", "R", "PySpark"],
  },
  {
    category: "Visualisation & BI",
    items: ["Power BI", "Tableau", "MS Excel"],
  },
  {
    category: "Tools & Platforms",
    items: ["WebEngage", "GitHub", "Airflow"],
  },
  {
    category: "Methods",
    items: [
      "A/B Testing",
      "Probability & Statistics",
      "Machine Learning (applied)",
      "Funnel & Cohort Analysis",
      "Marketing Analytics",
    ],
  },
];

export const jobs: Job[] = [
  {
    company: "EXL",
    client: "American Express",
    title: "Senior Consultant, Analytics",
    duration: "April 2026 – Present",
    location: "India",
    team: "Commercial MDM (Master Data Management)",
    highlights: [
      "Part of the Commercial MDM team managing different business IDs associated with various accounts",
      "Identify and report over-linkages and under-linkages within different accounts",
      "Ensure data integrity across commercial account structures at American Express",
    ],
  },
  {
    company: "Zupee",
    title: "Lead Data Analyst",
    duration: "July 2025 – October 2025",
    location: "Gurgaon",
    team: "Product, Marketing & Strategy (Ludo vertical)",
    highlights: [
      "Optimized data pipeline by introducing daily incremental logic, cutting runtime by 80% and significantly enhancing scalability of marketing analytics",
    ],
  },
  {
    company: "Refyne India",
    title: "Manager",
    duration: "March 2022 – June 2025",
    location: "Bengaluru",
    team: "Worked closely with CTO and business heads",
    domain:
      "B2B2C lending for Indian State Govt employees (Rajasthan & Goa), Private Corporations (200+ clients including EY, Deloitte, ICICI, HDFC), and Gig Workers (Swiggy, Flipkart)",
    highlights: [
      "Analyzed funnel drop-offs from transaction initiation to success; hypothesized higher disbursal limits could improve conversion — tested across user cohorts → 16.6% increase in average disbursements",
      "Investigated low CTR in a key user segment through campaign performance analysis; tested multiple campaign narratives and scaled the most effective variant to improve engagement and CTR",
      "Grew monthly lending disbursals from ₹45 Cr to ₹76 Cr (68% surge) by identifying inefficiencies in client consumption strategies, risk profiling, and B2B processes",
      "Accelerated repayment cycles from 60 days to 45 days through automated reminders, enhancing working capital",
      "Achieved 12.5% revenue growth by optimizing marketing strategies and resolving configuration inefficiencies",
      "Improved customer retention through targeted engagement → 25% increase in repeat users and sustained loan disbursals",
      "Reimagined SMS campaigns → doubled conversion rates from 14% to 30% while cutting customer acquisition costs by over 50%",
      "Enhanced loan approval rates with machine learning → expanded Salary Advance user base by 7,000 users and increased disbursals by 14%",
    ],
  },
  {
    company: "Paytm",
    title: "Team Lead",
    duration: "October 2021 – February 2022",
    location: "Noida",
    team: "Credit Risk & Collections (Paytm Postpaid)",
    highlights: [
      "Segmented customer cohorts to optimize NPA (Non-Performing Assets) and categorize them into risk buckets for data-driven loan decisions",
      "Cut NPAs in the highest-risk segment by 35% while maintaining 88% of business volume",
      "Used PySpark and SQL to reduce code runtime by 75% (from 4 hours to 1 hour)",
    ],
  },
  {
    company: "XPO Logistics",
    title: "Data Analyst",
    duration: "July 2020 – October 2021",
    location: "Mumbai",
    team: "Planning team for Young Living (US-based client)",
    highlights: [
      "Reduced human picking cost by 20% by assigning high-demand SKUs to easily accessible picking zones",
      "Optimized minimum/maximum stock levels and reorder quantities for optimal warehouse operations",
    ],
  },
  {
    company: "Think Analytics",
    title: "Associate Data Analyst",
    duration: "November 2018 – April 2020",
    location: "Mumbai",
    team: "Business Intelligence Unit at ICICI HFC",
    highlights: [
      "Led development of Power BI dashboard for executive leadership team → improved performance monitoring",
      "Saved 200 man-hours per week by automating critical weekly performance reports",
    ],
  },
  {
    company: "Newgen Software Technologies",
    title: "Software Engineer",
    duration: "August 2017 – November 2018",
    location: "Noida",
    domain: "Front-end development, Loan Origination System for Bank of Baroda",
    team: "Engineering",
    highlights: [
      "Spearheaded front-end development of Bank of Baroda's MSME loan origination system",
      "Implemented robust form validation and quality control measures",
      "Collaborated with stakeholders during user acceptance testing in Mumbai",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Digital Twin — AI Portfolio Website",
    description:
      "AI-powered personal portfolio with an embedded chat agent that responds as Anuj Mittal, allowing visitors to have a professional conversation about his experience, skills, and projects. Built to attract recruiters and employers discovering him via LinkedIn.",
    tools: ["Next.js", "Tailwind CSS", "DeepSeek API", "Vercel"],
    status: "In Progress",
    link: "https://github.com/anujgit0702",
  },
  {
    title: "Career Conversation — Custom AI Professional Twin",
    description:
      "A custom GPT-powered agent that acts as Anuj's professional version — answering questions about his career, experience, and skills in a conversational format. Precursor to the Digital Twin chat feature. Hosted on Hugging Face Spaces.",
    tools: ["LLM APIs", "Hugging Face Spaces", "Prompt Engineering"],
    status: "Live",
    link: "https://huggingface.co/spaces/am431/career_conversation",
  },
  {
    title: "Deep Research Agent",
    description:
      "An autonomous deep research agent that takes a topic and produces comprehensive, multi-source research reports. Built to explore agentic AI workflows and multi-step reasoning pipelines.",
    tools: ["Agentic AI frameworks", "LLM APIs", "Hugging Face Spaces"],
    status: "Live",
    link: "https://huggingface.co/spaces/am431/deep_research",
  },
];

export const awards: Award[] = [
  { title: "Value Champion Award Q1", period: "Jan–Mar 2023", company: "Refyne" },
  { title: "Rising Star Award Q2", period: "Apr–Jun 2022", company: "Refyne" },
  { title: "Impact Award Q1", period: "Jan–Mar 2021", company: "XPO Logistics" },
  { title: "Pat On The Back Award Q4", period: "Oct–Dec 2017", company: "Newgen" },
];

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Shiv Nadar University",
    year: "2017",
  },
  {
    degree: "XII (CBSE)",
    institution: "Ram Kishan Institute",
    year: "2013",
  },
];

export const certificates: Certificate[] = [
  { course: "Microsoft Power BI Desktop", platform: "Udemy" },
  { course: "Microsoft Power BI Services", platform: "Udemy" },
  { course: "Statistics for Data Science", platform: "Udemy" },
  { course: "Data Analysis with Pandas", platform: "Udemy" },
  { course: "SQL for Data Analysis", platform: "Udacity" },
  { course: "Recursive Queries in SQL Server", platform: "DataCamp" },
];

export const interests: string[] = [
  "Stock Market & Options Trading",
  "Cricket",
  "Table Tennis",
  "Thriller Movies",
];
