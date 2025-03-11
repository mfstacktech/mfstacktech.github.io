import ChartBreakoutSvg from "@site/src/icons/ChartBreakoutSvg";
import CommandIconSvg from "@site/src/icons/CommandIconSvg";
import MessageChatSvg from "@site/src/icons/MessageChatSvg";
import MessageHeartSvg from "@site/src/icons/MessageHeartSvg";
import MessageSmileSvg from "@site/src/icons/MessageSmileSvg";
import ZapIconSvg from "@site/src/icons/ZapIconSvg";

const features = [
  {
    name: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    href: "#",
    icon: <MessageChatSvg />,
  },
  {
    name: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    href: "#",
    icon: <ZapIconSvg />,
  },
  {
    name: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    href: "#",
    icon: <ChartBreakoutSvg />,
  },
  {
    name: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    href: "#",
    icon: <MessageSmileSvg />,
  },
  {
    name: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    href: "#",
    icon: <CommandIconSvg />,
  },
  {
    name: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    href: "#",
    icon: <MessageHeartSvg />,
  },
];

export default function PPFeaturesSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <p className="font-sans font-semibold text-base/7 my-0 leading-6 text-mf-stack-purple-utility-500 dark:text-mf-stack-purple-utility-300">
          Features
        </p>
        <h2 className="text-4xl mt-3 mb-0 font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
          Beautiful analytics to grow smarter
        </h2>
        <p className="mt-5 mb-0 text-lg/8 leading-7 text-gray-600 dark:text-gray-400">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <div className="flex gap-x-4 items-center font-semibold text-gray-900 dark:text-white">
                <div className="p-2.5 border border-solid border-gray-200 dark:border-gray-700 rounded-md flex items-center">
                  {feature?.icon}
                </div>
              </div>
              <div className="mt-5 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400">
                <p className="font-sans text-xl font-semibold text-black dark:text-white my-0">
                  {feature.name}
                </p>
                <p className="flex-auto mt-2 mb-0 font-sans font-normal text-base leading-6">
                  {feature.description}
                </p>
                <p className="mt-5 mb-0">
                  <a
                    href={feature.href}
                    className="text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
