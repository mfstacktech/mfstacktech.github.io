import Layout from "@theme/Layout";
import { Container } from "../components/studio/components/Container";
import HowWeSolveIcons from "../components/mfstack/HowWeSolveIcons";
import FeaturesSectionIcons from "../components/mfstack/FeaturesSectionIcons";
import WhyChooseUsSectionIcons from "../components/mfstack/WhyChooseUsSectionIcons";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import GalleryWithTags from "../components/mfstack/GalleryWithTags";
import GetQuoteCTA from "../components/mfstack/GetQuoteCTA";
import SectionHeader from "../components/mfstack/SectionHeader";
import ConvertKitForm from "../components/mfstack/ConvertKitForm";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import Link from "@docusaurus/Link";

type SocialLink = {
  name: string;
  href: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
};

const navigation: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/mf-stack",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-linkedin"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width={4} height={12} x={2} y={9} />
        <circle cx={4} cy={4} r={2} />
      </svg>
    ),
  },
  // {
  //   name: "Instagram",
  //   href: "#",
  //   icon: (props) => (
  //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //       <path
  //         fillRule="evenodd"
  //         d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
  //         clipRule="evenodd"
  //       />
  //     </svg>
  //   ),
  // },
  {
    name: "X",
    href: "https://x.com/mfstacktech",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  // {
  //   name: "GitHub",
  //   href: "#",
  //   icon: (props) => (
  //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //       <path
  //         fillRule="evenodd"
  //         d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
  //         clipRule="evenodd"
  //       />
  //     </svg>
  //   ),
  // },
  // {
  //   name: "YouTube",
  //   href: "#",
  //   icon: (props) => (
  //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //       <path
  //         fillRule="evenodd"
  //         d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
  //         clipRule="evenodd"
  //       />
  //     </svg>
  //   ),
  // },
  {
    name: "WhatsApp",
    href: "https://chat.whatsapp.com/IpcCMMZoOk27hfnW6ybZTD",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    name: "Betalectic",
    href: "https://betalectic.com",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-building-2"
      >
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              target="_blank"
              key={item.name}
              href={item.href}
              className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-500 dark:text-gray-400 md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} MF Stack. A Betalectic Product. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

function MfStack() {
  const howWeSolveCards = [
    {
      name: "Embeddable Solutions - Domain Kit",
      description:
        "White-label investment solutions for your domain. Custom branding and seamless integration for your platform.",
      icon: HowWeSolveIcons.domainKit,
    },
    {
      name: "Embeddable Solutions - Hosted Workflows",
      description:
        "Ready-to-deploy investment workflows. Fast, secure, and compliant solutions for your fintech needs.",
      icon: HowWeSolveIcons.hostedWorkflows,
    },
    {
      name: "Embeddable Solutions - SDKs",
      description:
        "Robust investment APIs at your fingertips. Tested components and comprehensive documentation for quick integration.",
      icon: HowWeSolveIcons.sdks,
    },
    {
      name: "Investor Web App",
      description:
        "A modern platform for complete portfolio management - track investments, execute transactions, and monitor performance through a secure interface.",
      icon: HowWeSolveIcons.webApp,
    },
    {
      name: "Investor Mobile App",
      description:
        "Your investments on the go. Manage portfolios, execute transactions, and track updates instantly with bank-grade security, with our Mobile Apps solutions.",
      icon: HowWeSolveIcons.mobileApp,
    },
    {
      name: "Distributor Web App",
      description:
        "Power your distribution business with our comprehensive platform. Manage clients, track performance, and grow efficiently.",
      icon: HowWeSolveIcons.webApp,
    },
    {
      name: "Distributor Mobile App",
      description:
        "Run your distribution business from anywhere. Monitor performance, execute transactions, and stay connected with clients on the move.",
      icon: HowWeSolveIcons.mobileApp,
    },
    {
      name: "Distributor assisted journeys for investors",
      description:
        "Empower your investors with a personalized assisted platform. Guide them through onboarding, investments, and reporting with ease.",
      icon: HowWeSolveIcons.distributors,
    },
    {
      name: "WhatsApp Integration for Investor Journeys",
      description:
        "Connect with investments via WhatsApp. Access updates, transactions, and support instantly through India's favorite messaging app.",
      icon: HowWeSolveIcons.whatsApp,
    },

    {
      name: "Tailored solutions for your needs",
      description:
        "Custom fintech solutions built for you. From development to deployment, we create technology that matches your business needs.",
      icon: HowWeSolveIcons.tailoredSolutions,
    },
  ];

  const featuresCards = [
    {
      title: "Seamless Digital Onboarding in Minutes",
      icon: FeaturesSectionIcons.seamlessOnboarding,
      description:
        "Transform your customer onboarding with our digital-first KYC solution built on Fintech Primitive APIs",
      points: [
        "Built for Resident Individuals, NRIs, & Non-Individuals investors",
        "Digital KYC for Resident Individuals",
        "PAN-based verification",
        "Digital processing for NRI investors",
        "Digilocker Integration to fetch Documents for the Investor",
        "SEBI Compliant",
        "Bank-Grade Security",
      ],
      srcLight: require("../images/mfstack/onboarding.png").default,
      srcDark: require("../images/mfstack/onboarding-dark.png").default,
    },
    {
      title: "Plug in to the powerful Mutual Fund Transaction Engine",
      icon: FeaturesSectionIcons.transactionEngine,
      description:
        "Process mutual fund transactions at scale with Fintech Primitives robust transaction engine. Built on modern APIs, designed for reliability, and engineered for performance.",
      points: [
        "Real-time order processing",
        "Multi-AMC transactions",
        "Instant status tracking",
        "Supports Lumpsum & SIP orders",
        "Support Switch & STP transactions",
        "Supports Redemption & SWP transactions",
        "Supports Step-up, Step-down, Pause, Resume, and Stop recurring transactions",
        "Multi-payment gateway support",
        "Instant order validation",
      ],
      srcLight: require("../images/mfstack/transaction-engine.png").default,
      srcDark: require("../images/mfstack/transaction-engine-dark.png").default,
    },
    {
      title: "Comprehensive Mutual Fund Reports & Analytics",
      icon: FeaturesSectionIcons.reportsAndAnalytics,
      description:
        "Unlock investment insights with our comprehensive reporting suite. Powered by reliable Fintech Primitives, delivering accurate, real-time mutual fund analytics and reports.",
      points: [
        "Real-time portfolio valuation",
        "Customizable dashboards",
        "Customizable templates",
        "Scheduled generation",
        "Supports Investor Reports such as (Holdings, Capital Gains, Investment Account wise Returns, Scheme Wise Returns)",
        "Supports Distributor Reports such as (AUM Summary, Transactions Report, Purchase and Redemption Reports)",
        "Supports custom comprehensive reports",
      ],
      srcLight: require("../images/mfstack/reports-analytics.png").default,
      srcDark: require("../images/mfstack/reports-analytics-dark.png").default,
    },
  ];

  const whyChooseUsCards = [
    {
      icon: WhyChooseUsSectionIcons.solutionsForYou,
      title: "Solutions for YOU",
      description:
        "Whether you are an Independent Distributor, Large Distribution House, or the Next Fintech looking to disrupt the MF space, we have right offering for you.",
    },
    {
      icon: WhyChooseUsSectionIcons.beyondImplementation,
      title: "Beyond Implementation",
      description:
        "Whether you are an Independent Distributor, Large Distribution House, or the Next Fintech looking to disrupt the MF space, we have right offering for you.",
    },
    {
      icon: WhyChooseUsSectionIcons.fintechApis,
      title: "Build on Fintech Primitives APIs",
      description:
        "With over 8 years of experience providing solutions in the Banking, Financial Services, and Insurance sector, we deliver expertise tailored to meet industry-specific needs.",
    },
    {
      icon: WhyChooseUsSectionIcons.bfsiExpertise,
      title: "BFSI expertise",
      description:
        "Whether you are an Independent Distributor, Large Distribution House, or the Next Fintech looking to disrupt the MF space, we have right offering for you.",
    },
  ];

  const faqQuestions = [
    {
      question: "What Mutual fund Transaction Providers do you Support?",
      answer:
        "Our Transaction production is powered by Fintech Primitive APIs.",
    },
    {
      question: "How can I go live in minutes to start MF distribution?",
      answer:
        "Become a digital Mutual Fund distributor in minutes not months, just in 3 steps: Get ARN; Get APIs from Fntech Primitives for Free; Signup with MF Stack and start using for free.",
    },
    {
      question: "What kind of transactions do you support?",
      answer:
        "We support the following kinds of transactions: One time purchase, SIP, Switch, SWP, STP and Redemption",
    },
    {
      question: "What features do you support for SIP investments?",
      answer:
        "We support Pause, Cancel and Resume of SIP. Other than this we also support Step up and Step down SIPs",
    },
    {
      question: "Do you build solutions for customized MF Product?",
      answer:
        "Yes, we can build a custom solution for your needs. You can setup a call with our team which will understand your requirements, and layout a plan for your custom application. We take care of the look and feel of your app and build you an enterprise grade application which can help you scale your business.",
    },
    // {
    //   question: "How to migrate my current investors to FP?",
    //   answer: "",
    // },
    // {
    //   question:
    //     "If I migrate to FP, do I have to create new mandates for my investors?",
    //   answer: "",
    // },
    // {
    //   question: "How to migrate the existing folios to FP?",
    //   answer: "",
    // },
  ];

  const logoImages = [
    {
      src: require("../images/mfstack/fp.png").default,
      alt: "Fintech Primitives",
    },
    {
      src: require("../images/mfstack/kfintech.png").default,
      alt: "KFintech",
    },
    // {
    //   src: require("../images/mfstack/cybrilla.png").default,
    //   alt: "Cybrilla",
    // },
    {
      src: require("../images/mfstack/cams.png").default,
      alt: "Cams",
    },
  ];

  return (
    <Layout
      title="Scale your MF Distribution online"
      description="Effortlessly build Mutual Fund Web & Mobile Applications for your investors in just weeks, not months!"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <Container>
        <div className="relative isolate">
          {/* <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div> */}

          <div className="bg-[#292399] rounded-3xl px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16 mt-4 lg:mt-4">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl pt-16 sm:pt-24 lg:pt-32 text-center">
                <h1 className="text-balance text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-gray-50">
                  The New Age of
                  <span className="text-[#CCC9FF]"> Mutual Funds Distribution</span>
                </h1>
                <p className="mt-4 px-4 py-2 text-center shadow-custom-inset max-w-fit mx-auto text-pretty text-base sm:text-lg lg:text-xl font-medium text-gray-50 bg-[#1B1677] rounded-lg">
                  Powered by Fintech Primitives
                </p>
                <p className="mt-6 sm:mt-8 px-4 sm:px-12 text-pretty text-base sm:text-lg lg:text-xl font-medium text-[#CCC9FF]">
                  Take your Mutual Funds Distribution digital in minutes
                </p>
                {/* <GetQuoteCTA buttonText={"Get Quote"} buttonLink={"#"} /> */}
              </div>

              <div className="mt-12 sm:mt-16 lg:mt-24 pb-16 sm:pb-24 lg:pb-32">
                <div className="relative mx-auto max-w-5xl">
                  <img
                    loading="lazy"
                    alt="App screenshot"
                    src={require("../images/mfstack/hero-image.png").default}
                    className="w-full rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl dark:hidden ring-2 ring-gray-900/10"
                  />
                  <img
                    loading="lazy"
                    alt="App screenshot"
                    src={
                      require("../images/mfstack/hero-image-dark.png").default
                    }
                    className="w-full rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl hidden dark:block ring-2 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>

          {/* Logos section */}

          <div className="mx-auto max-w-7xl">
            <div className="bg-[#F9FAFB] dark:bg-gray-300 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-center text-sm sm:text-base font-semibold text-[#475467]">
                Our Integration Partners
              </h2>

              {/* Mobile scrolling logos */}
              <div className="relative block md:hidden overflow-hidden w-full mt-6">
                <div className="flex gap-8 sm:gap-12 animate-infinite-scroll">
                  {logoImages.map((logo, index) => (
                    <img
                      key={index}
                      loading="lazy"
                      alt={logo.alt}
                      src={logo.src}
                      width={128}
                      height={40}
                      className="h-8 sm:h-12 object-contain"
                    />
                  ))}
                </div>
              </div>

              {/* Desktop static logos */}
              <div className="hidden md:flex flex-wrap justify-around items-center mt-6 gap-6 lg:gap-12">
                {logoImages.map((image, index) => (
                  <img
                    key={index}
                    alt={image.alt}
                    src={image.src}
                    width={148}
                    height={40}
                    className="h-10 lg:h-12 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-tr from-indigo-50 to-indigo-100 dark:from-indigo-800 dark:to-indigo-700 my-12 p-4 lg:p-12 flex flex-row justify-center shadow-sm rounded-lg">
          <ConvertKitForm />
        </div>

        <div className="flex flex-col gap-y-24 my-24 relative">
          {/* For whom and how section */}
          <div className="mx-auto lg:px-8 flex flex-col gap-y-12">
            <SectionHeader
              sectionTag={"For whom and how?"}
              sectionTitle={"Tailor made solutions for your business goals"}
              sectionDescription={
                "Flexible mutual fund solutions that grow with your business, regardless of size or scale."
              }
            />

            <GalleryWithTags />
          </div>
          {/* How we solve section */}
          <div className="mx-auto lg:px-8">
            <SectionHeader
              sectionTag={"How we solve?"}
              sectionTitle={"Products"}
              sectionDescription={
                "From SDKs to full-stack solutions, choose the right building blocks for your platform."
              }
            />
            <div className="mt-8">
              <dl className="grid max-w-2xl grid-cols-1 md:grid-cols-2 mx-auto gap-x-6 gap-y-8 lg:max-w-none lg:grid-cols-3">
                {howWeSolveCards.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex flex-col bg-white dark:bg-gray-900 shadow-md hover:shadow-lg p-8 rounded-xl ring-1 ring-neutral-200 dark:ring-neutral-700"
                  >
                    <feature.icon aria-hidden="true" />
                    <h2 className="mt-4 font-bold text-gray-900 text-xl dark:text-gray-50">
                      {feature.name}
                    </h2>
                    <dd className="flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-300">
                      <p className="">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* <GetQuoteCTA buttonText={"Get Quote"} buttonLink={"#"} /> */}
          </div>

          {/* Features section */}
          <div className="relative">
            <div className="mx-auto lg:px-8 flex flex-col gap-y-12">
              <SectionHeader
                sectionTag={"Features"}
                sectionTitle={"Core Mutual Fund Solutions"}
                sectionDescription={
                  "Power your Distribution platform with proven APIs for Onboarding, Transactions, and Reporting from Fintech Primitives."
                }
              />
              <div className="mx-auto flex flex-col gap-y-12 relative">
                {featuresCards.map((section, index) => (
                  <div
                    key={index}
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
                  >
                    <div
                      className={`lg:pr-8 ${
                        index % 2 !== 0 ? "lg:order-last" : ""
                      }`}
                    >
                      <div className="lg:max-w-lg space-y-6">
                        <section.icon aria-hidden="true" />

                        <h2 className="text-2xl mt-2 font-semibold text-gray-900 dark:text-indigo-400">
                          {section.title}
                        </h2>

                        <p className="text-md text-gray-600 dark:text-gray-300">
                          {section.description}
                        </p>

                        <dl className="mt-8 max-w-xl text-base/7 text-gray-600 dark:text-gray-300 lg:max-w-none space-y-2">
                          {section.points.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <svg
                                className="flex-shrink-0 w-6 h-6 mt-0.5"
                                width="26"
                                height="25"
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.41716 14.2687L12.9172 17.7687L19.9172 10.7687M26.3338 14.2687C26.3338 20.712 21.1105 25.9354 14.6672 25.9354C8.22383 25.9354 3.00049 20.712 3.00049 14.2687C3.00049 7.8254 8.22383 2.60205 14.6672 2.60205C21.1105 2.60205 26.3338 7.8254 26.3338 14.2687Z"
                                  stroke="#4E45DD"
                                  strokeWidth="2.33333"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>

                              <p className="text-base">{point}</p>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                    <div className="my-auto">
                      <img
                        alt={`${section.title} - Light`}
                        src={section.srcLight}
                        className={`shadow-2xl rounded-2xl dark:hidden ${
                          index === 0 && "ring-2 ring-neutral-200"
                        }`}
                      />
                      <img
                        alt={`${section.title} - Dark`}
                        src={section.srcDark}
                        className={`shadow-2xl rounded-2xl hidden dark:block`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <GetQuoteCTA buttonText={"Get Quote"} buttonLink={"#"} /> */}
          </div>

          {/* Why choose us section */}

          <div className="mx-auto">
            <SectionHeader
              sectionTag={"Why choose us?"}
              sectionTitle={"Why work with us?"}
              sectionDescription={
                " With over 8 years of experience in IT products and services across continents, we understand that every need is unique, and quality is paramount. We place the end user at the heart of every solution."
              }
            />
            <div className="mt-16 lg:max-w-none">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {whyChooseUsCards.map((component, index) => (
                  <div
                    key={index}
                    className="flex flex-col px-6 py-4 space-y-4 bg-gray-100 rounded-xl dark:bg-gray-800"
                  >
                    <div className="flex-shrink-0 flex">
                      <component.icon aria-hidden="true" />
                    </div>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white min-h-[48px]">
                      {component.title}
                    </h1>

                    <p className="text-gray-500 dark:text-gray-300 min-h-[64px]">
                      {component.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* <GetQuoteCTA buttonText={"Get Quote"} buttonLink={"#"} /> */}
          </div>

          {/* FAQ Section */}
          <div className="">
            <h2 className="text-4xl font-semibold tracking-tight text-center text-gray-900 dark:text-gray-50 sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-6 mb-10 text-md text-gray-600 dark:text-gray-300 text-center">
              Everything you need to know about the product and billing.
            </p>
            <div className="mx-auto max-w-4xl">
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100">
                {faqQuestions.map((faq) => (
                  <Disclosure key={faq.question} as="div" className="pt-6">
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 dark:text-gray-50">
                        <span className="text-base/7 font-semibold">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-6 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-6 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base/7 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
          {/* Have questions section */}
          <div className="relative bg-indigo-100 px-4 py-20 sm:px-6 md:mx-0 rounded-3xl md:px-16">
            <div>
              <p className="font-display text-center text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Still have questions ?
              </p>
              <p className="mt-4 text-center text-lg tracking-tight text-blue-900">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="https://cal.com/manasa-madapu">
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-2xl">
                      Setup a 30 min free call
                    </span>
                  </ShimmerButton>
                </Link>
              </div>

              {/* <GetQuoteCTA
                buttonText={"Setup a 30 min free call"}
                buttonLink={"https://cal.com/manasa-madapu"}
              /> */}
            </div>
          </div>
        </div>
      </Container>

      <div className="twp">
        <Footer />
      </div>

      <div
        aria-hidden="true"
        className="absolute left-1/2 right-0 bottom-0 -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </Layout>
  );
}

export default MfStack;
