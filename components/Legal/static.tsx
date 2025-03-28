import {
  PrivacyIcon,
  TermsIcon,
  RegulatoryIcon,
  EnvironmentalIcon,
  LegalIcon,
  CookieIcon,
} from "../Icons";

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

export const TERMS_OF_SERVICE = {
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
