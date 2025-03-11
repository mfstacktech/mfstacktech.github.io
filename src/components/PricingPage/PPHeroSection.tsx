"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";
import ZapIconSvg from "@site/src/icons/ZapIconSvg";
import TwoLayerIconSvg from "@site/src/icons/TwoLayerIconSvg";
import ThreeLayerIconSvg from "@site/src/icons/ThreeLayerIconSvg";
import PurpleCheckIconSvg from "@site/src/icons/PurpleCheckIconSvg";

interface SubscriptionCards {
  name: string;
  icon: React.ReactNode;
  id: string;
  href: string;
  price: Price;
  features: any;
  mostPopular: boolean;
}

interface Price {
  monthly: string;
  annually: string;
}

const tiers: SubscriptionCards[] = [
  {
    name: "Essential Plan",
    icon: <ZapIconSvg />,
    id: "tier-essential",

    href: "#",
    price: { monthly: "₹2,000", annually: "₹20,000" },
    // features: [
    //   {
    //     heading: "Distributor Web Portal",
    //     subheadings: [
    //       {
    //         title: "Distributor Assisted Onboarding",
    //         content: [
    //           "Onboarding of KYC Compliant Investors – RI, NRI, Non-individuals",
    //           "KYC (RI only)",
    //         ],
    //       },
    //       {
    //         title: "Distributor Initiated Transactions",
    //         content: ["One-time, Recurring, Redemption, Switch, STP, SWP"],
    //       },
    //       {
    //         title: "Mandates",
    //         content: [],
    //       },
    //       {
    //         title: "Reports",
    //         content: ["Capital Gains, Holdings, Transactions Reports"],
    //       },
    //     ],
    //   },
    //   {
    //     heading: "Investor Mobile App",
    //     subheadings: [
    //       {
    //         title: "Investor Access",
    //         content: ["Investors can view the Portfolio, Holdings details."],
    //       },
    //     ],
    //   },
    // ],
    features: [
      {
        heading: "Distributor Web Portal",
        content: [
          "Distributor Assisted Onboarding",
          "Onboarding of KYC Compliant Investors – RI, NRI, Non-individuals",
          "KYC (RI only)",
          "Distributor Initiated Transactions",
          "One-time, Recurring, Redemption, Switch, STP, SWP",
          "Mandates",
          "Reports",
          "Capital Gains, Holdings, Transactions Reports",
        ],
      },
      {
        heading: "Investor Mobile App",
        content: [
          "Investor Access",
          "Investors can view the Portfolio, Holdings details.",
        ],
      },
    ],
    mostPopular: false,
  },
  {
    name: "Growth Plan",
    id: "tier-growth",
    icon: <TwoLayerIconSvg />,

    href: "#",
    price: { monthly: "₹4,000", annually: "₹40,000" },
    // features: [
    //   {
    //     heading: "Distributor Web Portal",
    //     subheadings: [
    //       {
    //         title: "Distributor Assisted Onboarding",
    //         content: [
    //           "Onboarding of KYC Compliant Investors – RI, NRI, Non-individuals",
    //           "KYC (RI only)",
    //         ],
    //       },
    //       {
    //         title: "Distributor Initiated Transactions",
    //         content: ["One-time, Recurring, Redemption, Switch, STP, SWP"],
    //       },
    //       {
    //         title: "Mandates",
    //         content: [],
    //       },
    //       {
    //         title: "Reports",
    //         content: ["Capital Gains, Holdings, Transactions Reports"],
    //       },
    //       {
    //         title: "Investment Mobile App",
    //         content: ["Portfolio details in view"],
    //       },
    //       {
    //         title: "Investor Risk Profile",
    //         content: [],
    //       },
    //       {
    //         title: "Create & Track Goals",
    //         content: [],
    //       },
    //       {
    //         title: "Baskets",
    //         content: [],
    //       },
    //     ],
    //   },
    //   {
    //     heading: "Investor Mobile App",
    //     subheadings: [
    //       {
    //         title: "Investor Onboarding/KYC",
    //         content: [],
    //       },
    //       {
    //         title: "Transactions",
    //         content: [],
    //       },
    //       {
    //         title: "Reports",
    //         content: ["Capital Gains, Holdings, Transactions Reports"],
    //       },
    //     ],
    //   },
    // ],
    features: [
      {
        heading: "Distributor Web Portal",
        content: [
          "Distributor Assisted Onboarding",
          "Onboarding of KYC Compliant Investors – RI, NRI, Non-individuals",
          "KYC (RI only)",
          "Distributor Initiated Transactions",
          "One-time, Recurring, Redemption, Switch, STP, SWP",
          "Mandates",
          "Reports",
          "Capital Gains, Holdings, Transactions Reports",
          "Investment Mobile App",
          "Portfolio details in view",
          "Investor Risk Profile",
          "Create & Track Goals",
          "Baskets",
        ],
      },
      {
        heading: "Investor Mobile App",
        content: [
          "Investor Onboarding/KYC",
          "Transactions",
          "Reports",
          "Capital Gains, Holdings, Transactions Reports",
        ],
      },
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise Plan",
    id: "tier-enterprise",
    icon: <ThreeLayerIconSvg />,
    href: "#",
    price: { monthly: "₹10,000", annually: "₹1,00,000" },
    // features: [
    //   {
    //     heading: "Distributor Web Portal",
    //     subheadings: [
    //       {
    //         title: "Distributor Assisted Onboarding",
    //         content: [
    //           "Onboarding of KYC Compliant Investors – RI, NRI, Non-individuals",
    //           "KYC (RI only)",
    //         ],
    //       },
    //       {
    //         title: "Distributor Initiated Transactions",
    //         content: ["One-time, Recurring, Redemption, Switch, STP, SWP"],
    //       },
    //       {
    //         title: "Reports",
    //         content: ["Capital Gains, Holdings, Transactions Reports"],
    //       },
    //       {
    //         title: "Investor Risk Profile",
    //         content: [],
    //       },
    //       {
    //         title: "Create & Track Goals",
    //         content: [],
    //       },
    //       {
    //         title: "Baskets",
    //         content: [],
    //       },
    //       {
    //         title: "Distributor Performance Reports",
    //         content: [],
    //       },
    //       {
    //         title: "Multi - Investor Transactions",
    //         content: [],
    //       },
    //       {
    //         title: "RMs Login/ Roles & Access",
    //         content: [],
    //       },
    //     ],
    //   },
    //   {
    //     heading: "Investor Mobile App",
    //     subheadings: [
    //       {
    //         title: "Investor Onboarding/KYC",
    //         content: [],
    //       },
    //       {
    //         title: "Transactions",
    //         content: [],
    //       },
    //       {
    //         title: "Reports",
    //         content: ["Capital Gains, Holdings, Transactions Reports"],
    //       },
    //     ],
    //   },
    // ],
    features: [
      {
        heading: "Distributor Web Portal",
        content: [
          "Distributor Assisted Onboarding",
          "Onboarding of KYC Compliant Investors – RI, NRI, Non-individuals",
          "KYC (RI only)",
          "Distributor Initiated Transactions",
          "One-time, Recurring, Redemption, Switch, STP, SWP",
          "Reports",
          "Capital Gains, Holdings, Transactions Reports",
          "Investor Risk Profile",
          "Create & Track Goals",
          "Baskets",
          "Distributor Performance Reports",
          "Multi - Investor Transactions",
          "RMs Login/ Roles & Access",
        ],
      },
      {
        heading: "Investor Mobile App",
        content: [
          "Investor Onboarding/KYC",
          "Transactions",
          "Reports",
          "Capital Gains, Holdings, Transactions Reports",
        ],
      },
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PPHeroSection() {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [enabled, setEnabled] = useState(false);

  const SubscriptionCardComponent = ({
    tier,
    index,
  }: {
    tier: SubscriptionCards;
    index: number;
  }) => {
    return (
      <div
        key={tier.id}
        onClick={() => {
          setSelectedPackage(index);
        }}
        className={classNames(
          index === selectedPackage
            ? "ring-2 ring-indigo-600"
            : "ring-1 ring-gray-200",
          "rounded-3xl  hover:cursor-pointer relative flex flex-col justify-between"
        )}
      >
        <div className="bg-white w-full h-full p-8 xl:p-10 rounded-3xl rounded-b-none flex-1">
          {tier.mostPopular ? (
            <p className="rounded-full absolute bg-indigo-600/10 py-1 text-xs/5 mb-0 right-5 px-2 top-5 max-w-24 text-center  font-semibold text-indigo-600">
              Most popular
            </p>
          ) : null}
          <div className="flex flex-col gap-y-4 items-center justify-between">
            <div className="flex gap-x-4 items-center  font-semibold text-gray-900">
              <div className="p-2.5 border border-solid border-gray-200 rounded-md flex items-center">
                {tier?.icon}
              </div>
            </div>
            <p
              id={tier.id}
              className={classNames(
                index === selectedPackage ? "text-indigo-600" : "text-gray-900",
                "text-lg/8 font-semibold mb-0"
              )}
            >
              {tier.name}
            </p>
            <p className="mt-6 mb-0 flex items-baseline gap-x-1">
              <span className="text-4xl font-semibold tracking-tight text-gray-900">
                {enabled ? tier.price?.annually : tier.price?.monthly}
              </span>
              <span className="text-base font-semibold text-gray-600">
                {enabled ? "/year" : "/month"}
              </span>
            </p>
            <p className="mt-0 -translate-y-2">{`Billed ${
              enabled ? "Annually" : "Monthly"
            }`}</p>
            <div className="space-y-6">
              {tier?.features?.map((section, index) => (
                <div className="flex flex-col justify-between" key={index}>
                  <p className="font-sans font-semibold mb-6  text-lg leading-7 text-mf-stack-brand-button text-center  dark:text-white">
                    {section.heading}
                  </p>
                  <ul className="my-0 space-y-4 list-none px-0 ">
                    {section.content.map((item, itemIndex) => (
                      <li
                        className="flex items-start space-x-2"
                        key={itemIndex}
                      >
                        <PurpleCheckIconSvg className="mt-0.5 h-6 w-5 flex-none" />
                        <p className="font-sans font-normal text-base my-0 leading-6 text-mf-stack-gray-light">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-mf-stack-gray-primary p-8 xl:p-10 rounded-3xl rounded-t-none border border-solid border-gray-300 border-b-0 border-x-0">
          <a
            href={tier.href}
            aria-describedby={tier.id}
            className="bg-mf-stack-blue-dark text-white shadow-sm hover:bg-mf-stack-blue hover:text-white block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get Started
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className=" py-20 sm:pt-[98px] bg-pricing-page-bg bg-no-repeat bg-center mx-auto max-w-7xl px-6 lg:px-8">
      <div className=" ">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base/7 mx-auto  font-semibold ring-1 max-w-32 px-2 ring-inset bg-mf-stack-purple-ultra-light mb-0 text-mf-stack-purple-primary ring-mf-stack-purple-very-light rounded-3xl">
            Pricing plans
          </p>
          <p className="mt-4 mb-0 lg:mt-2 text-balance text-5xl font-semibold tracking-tight text-mf-stack-purple-dark sm:text-6xl">
            Plans for all sizes
          </p>
        </div>
        <p className="mx-auto mb-0 mt-4 lg:mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-mf-stack-purple-primary sm:text-xl/8">
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </p>
        <div className="mt-8 lg:mt-16 flex justify-center space-x-3">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 data-[checked]:bg-mf-stack-blue-dark border-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
          >
            <span className="size-4 -translate-x-0.5 rounded-full bg-white transition group-data-[checked]:translate-x-4" />
          </Switch>
          <p className="mb-0">
            Annual pricing{" "}
            <span className="text-mf-stack-purple-primary font-semibold">
              (save 20%)
            </span>
          </p>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <SubscriptionCardComponent
              tier={tier}
              index={index}
              key={tier.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
