import {
  PrivacyIcon,
  TermsIcon,
  RegulatoryIcon,
  EnvironmentalIcon,
  LegalIcon,
  CookieIcon,
} from "../Icons";
import { IGenericDocument } from "./GenericDocument";

export const SIDE_BAR = [
  { icon: <TermsIcon />, label: "Terms of Service", href: "terms" },
  { icon: <PrivacyIcon />, label: "Privacy Policy", href: "privacy_policy" },
  { icon: <CookieIcon />, label: "Cookie Policy", href: "cookie_policy" },
  {
    icon: <RegulatoryIcon />,
    label: "Regulatory Compliance",
    href: "compliance",
  },
  {
    icon: <EnvironmentalIcon />,
    label: "Environmental Policy",
    href: "environmental_policy",
  },
  { icon: <LegalIcon />, label: "Legal Disclaimer", href: "legal_disclaimer" },
];

export const TERMS_OF_SERVICE: IGenericDocument = {
  header: "Terms of Service",
  date_updated: "January 12, 2023",
  current_date: "February 1, 2023",
  documentData: [
    {
      id: 1,
      title: "Introduction",
      description:
        "Welcome to Green Potentia Limited. By using our services, you agree to these Terms of Service. Please read them carefully.",
    },
    {
      id: 2,
      title: "Use of Service",
      description:
        "Our services are designed to provide clean energy solutions. You agree to use these services only for their intended purposes and in compliance with all applicable laws and regulations.",
    },
    {
      id: 3,
      title: "User Accounts",
      description:
        "To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.",
    },
    {
      id: 4,
      title: "Privacy",
      description:
        "Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information",
    },
    {
      id: 5,
      title: "Intellectual Property",
      description:
        "All content, features, and functionality on our services are owned by Green Potentia Limited and are protected by copyright, trademark, and other intellectual property laws.",
    },
    {
      id: 6,
      title: "Termination",
      description:
        " We may terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.",
    },
    {
      id: 7,
      title: "Disclaimer of Warranties",
      description: `Our services are provided "as is" without warranties of any kind, either express or implied.`,
    },
    {
      id: 8,
      title: "Limitation of Liability",
      description:
        "Green Potentia Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, our services.",
    },
    {
      id: 9,
      title: "Changes to Terms",
      description:
        "We may modify these Terms at any time. Your continued use of our services after any changes indicates your acceptance of the modified Terms.",
    },
    {
      id: 10,
      title: "Governing Law",
      description:
        "These Terms shall be governed by the laws of the jurisdiction in which Green Potentia Limited is established, without regard to its conflict of law provisions.",
    },
  ],
};

export const PRIVACY_POLICY: IGenericDocument = {
  header: "Privacy Policy",
  date_updated: "December 10, 2022",
  current_date: "January 1, 2023",
  documentData: [
    {
      id: 1,
      title: "Information We Collect",
      description:
        "We collect information you provide directly to us, information we collect when you use our services, and information from third parties.",
    },
    {
      id: 2,
      title: "How We Use Your Information",
      description:
        "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.",
    },
    {
      id: 3,
      title: "Information Sharing",
      description:
        "We may share your information with service providers, business partners, and as required by law.",
    },
    {
      id: 4,
      title: "Data Security",
      description:
        "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
    },
    {
      id: 5,
      title: "Your Rights",
      description:
        "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.",
    },
    {
      id: 6,
      title: "Data Retention",
      description:
        "We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.",
    },
    {
      id: 7,
      title: "International Data Transfers",
      description:
        "Your information may be transferred to, and processed in, countries other than your country of residence.",
    },
    {
      id: 8,
      title: "Children's Privacy",
      description:
        "Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children.",
    },
    {
      id: 9,
      title: "Changes to This Privacy Policy",
      description:
        "We may update this Privacy Policy from time to time and notify you of any changes by posting the new Privacy Policy on this page.",
    },
    {
      id: 10,
      title: "Contact Us",
      description:
        "If you have questions about this Privacy Policy, contact us at privacy@greenpotentia.com.",
    },
  ],
};

export const COOKIE_POLICY: IGenericDocument = {
  header: "Cookie Policy",
  date_updated: "November 5, 2022",
  current_date: "December 1, 2022",
  documentData: [
    {
      id: 1,
      title: "What Are Cookies",
      description:
        "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.",
    },
    {
      id: 2,
      title: "How We Use Cookies",
      description:
        "We use cookies for various purposes including to understand how our services are used, to improve your experience, and to personalize content and advertisements.",
    },
    {
      id: 3,
      title: "Types of Cookies We Use",
      description:
        "We use essential cookies, performance cookies, functionality cookies, and targeting cookies.",
    },
    {
      id: 4,
      title: "Managing Cookies",
      description:
        "Most web browsers allow you to control cookies through their settings. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.",
    },
    {
      id: 5,
      title: "Changes to This Cookie Policy",
      description:
        "We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices.",
    },
  ],
};

export const REGULATORY_COMPLIANCE: IGenericDocument = {
  header: "Regulatory Compliance",
  date_updated: "March 20, 2023",
  current_date: "April 1, 2023",
  documentData: [
    {
      id: 1,
      title: "Regulatory Framework",
      description:
        "Green Potentia Limited operates in compliance with all applicable energy sector regulations, environmental laws, and industry standards.",
    },
    {
      id: 2,
      title: "Environmental Compliance",
      description:
        "We adhere to strict environmental regulations and regularly monitor and report our environmental impact in accordance with local and international standards.",
    },
    {
      id: 3,
      title: "Energy Sector Compliance",
      description:
        "Our operations comply with energy sector regulations, including those related to renewable energy production, distribution, and consumption.",
    },
    {
      id: 4,
      title: "Data Protection Compliance",
      description:
        "We comply with data protection laws, including GDPR, CCPA, and other applicable privacy regulations.",
    },
    {
      id: 5,
      title: "Health and Safety Compliance",
      description:
        "Green Potentia Limited maintains rigorous health and safety standards in compliance with occupational health and safety regulations.",
    },
    {
      id: 6,
      title: "Reporting and Transparency",
      description:
        "We regularly report our compliance status to relevant regulatory bodies and maintain transparency with our stakeholders.",
    },
    {
      id: 7,
      title: "Compliance Updates",
      description:
        "This document is updated regularly to reflect changes in regulatory requirements and our compliance status.",
    },
  ],
};

export const ENVIRONMENTAL_POLICY: IGenericDocument = {
  header: "Environmental Policy",
  date_updated: "February 10, 2023",
  current_date: "March 1, 2023",
  documentData: [
    {
      id: 1,
      title: "Our Commitment",
      description:
        "Green Potentia Limited is committed to environmental stewardship and sustainable business practices in all aspects of our operations.",
    },
    {
      id: 2,
      title: "Environmental Objectives",
      description:
        "We aim to minimize our environmental footprint, promote renewable energy, conserve natural resources, and prevent pollution.",
    },
    {
      id: 3,
      title: "Sustainable Operations",
      description:
        "We implement sustainable practices in our operations, including energy efficiency, waste reduction, and responsible resource management.",
    },
    {
      id: 4,
      title: "Carbon Footprint Reduction",
      description:
        "We are committed to reducing our carbon footprint and supporting the transition to a low-carbon economy.",
    },
    {
      id: 5,
      title: "Environmental Management System",
      description:
        "We maintain an environmental management system that ensures continuous improvement in our environmental performance.",
    },
    {
      id: 6,
      title: "Stakeholder Engagement",
      description:
        "We engage with stakeholders to promote environmental awareness and collaborate on environmental initiatives.",
    },
    {
      id: 7,
      title: "Compliance with Environmental Laws",
      description:
        "We comply with all applicable environmental laws, regulations, and industry standards.",
    },
    {
      id: 8,
      title: "Environmental Reporting",
      description:
        "We regularly report on our environmental performance and progress toward our environmental objectives.",
    },
  ],
};

export const LEGAL_DISCLAIMER: IGenericDocument = {
  header: "Legal Disclaimer",
  date_updated: "April 5, 2023",
  current_date: "April 15, 2023",
  documentData: [
    {
      id: 1,
      title: "General Disclaimer",
      description:
        "The information provided on this website is for general informational purposes only. It is not intended as legal, financial, or professional advice.",
    },
    {
      id: 2,
      title: "Accuracy of Information",
      description:
        "While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.",
    },
    {
      id: 3,
      title: "Use at Your Own Risk",
      description:
        "Any reliance you place on such information is strictly at your own risk. We will not be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use of this website.",
    },
    {
      id: 4,
      title: "External Links",
      description:
        "This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.",
    },
    {
      id: 5,
      title: "Changes to Website",
      description:
        "We reserve the right to make changes to our website, policies, and terms of service at any time without notice.",
    },
    {
      id: 6,
      title: "Contact Information",
      description:
        "If you have any questions or concerns about this disclaimer, please contact us at legal@greenpotentia.com.",
    },
  ],
};
