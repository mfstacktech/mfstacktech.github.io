import React from "react";

interface props {
  outerContainerClass?: string;
}
export const LogosSection = ({ outerContainerClass }: props) => {
  const logoImages = [
    {
      src: require("../../images/mfstack/fp.png").default,
      alt: "Fintech Primitives",
    },
    {
      src: require("../../images/mfstack/kfintech.png").default,
      alt: "KFintech",
    },
    // {
    //   src: require("../images/mfstack/cybrilla.png").default,
    //   alt: "Cybrilla",
    // },
    {
      src: require("../../images/mfstack/cams.png").default,
      alt: "Cams",
    },
  ];
  return (
    <div className={`mx-auto w-full max-w-7xl ${outerContainerClass}`}>
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
  );
};

export default LogosSection;
