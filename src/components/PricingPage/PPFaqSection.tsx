import FileIconSvg from "@site/src/icons/FileIconSvg";
import HeartIconSvg from "@site/src/icons/HeartIconSvg";
import HorizontalArrowsSvg from "@site/src/icons/HorizontalArrowsSvg";
import SlashCircleSvg from "@site/src/icons/SlashCircleSvg";

const features = [
  {
    name: "Is there a free trial available?",
    description:
      "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    icon: <HeartIconSvg />,
  },
  {
    name: "Can I change my plan later?",
    description:
      "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
    icon: <HorizontalArrowsSvg />,
  },
  {
    name: "What is your cancellation policy?",
    description:
      "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
    icon: <SlashCircleSvg />,
  },
  {
    name: "Can other info be added to an invoice?",
    description:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.",
    icon: <FileIconSvg />,
  },
];

export default function PPFaqSection() {
  return (
    <div className="overflow-hidden  py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="font-sans font-semibold text-base/7 my-0 leading-6 text-mf-stack-purple-utility-500 dark:text-mf-stack-purple-utility-300">
            Support
          </p>
          <p className="mt-3 mb-0 font-sans font-semibold text-4.5xl tracking-tight text-pretty text-gray-900 dark:text-white">
            Frequently asked questions
          </p>
          <p className="mt-5 mb-0 max-w-3xl text-lg/8 text-gray-600 dark:text-gray-400">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please chat to our friendly
            team.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 h-full">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg h-full">
              <dl className="max-w-xl h-full mt-12 lg:mt-0 my-0 flex flex-col justify-evenly text-base/7 text-gray-600 dark:text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <div className="flex gap-x-4 items-center font-semibold text-gray-900 dark:text-white">
                      <div className="p-2.5 border border-solid border-gray-200 dark:border-gray-700 rounded-md flex items-center">
                        {feature?.icon}
                      </div>
                      {feature.name}
                    </div>
                    <p className="mb-0 pl-14">{feature.description}</p>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="relative isolate sm:mx-auto sm:max-w-2xl sm:rounded-3xl lg:mx-0 lg:max-w-none">
            <img
              alt="Product screenshot"
              src="img/faq-random.png"
              className="max-w-full w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
