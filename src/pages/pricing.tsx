import Layout from "@theme/Layout";
import React from "react";
import PPHeader from "../components/PricingPage/PPHeader";
import PPHeroSection from "../components/PricingPage/PPHeroSection";
import PPCTASection from "../components/PricingPage/PPCTASection";
import { PPScrollerSection } from "../components/PricingPage/PPScrollerSection";
import PPFaqSection from "../components/PricingPage/PPFaqSection";
import PPFeaturesSection from "../components/PricingPage/PPFeaturesSection";
import LogosSection from "../components/Common/LogosSection";
import { Footer } from "../components/Common/Footer";

export const PricingPage = () => {
  return (
    <div>
      <PPHeader />
      <PPHeroSection />
      <PPCTASection />
      <PPFeaturesSection />
      <LogosSection outerContainerClass="px-6 lg:px-8" />
      <PPScrollerSection />
      <PPFaqSection />
      <Footer />
    </div>
  );
};

export default PricingPage;
