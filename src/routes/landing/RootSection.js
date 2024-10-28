import React, { useEffect } from "react";
import Header from "./Hero";
import ScrollButton from "../../helpers/ScrollBtn";
import ContactUsLanding from "./ContactUsLanding";
import WelcomeSection from "./WelcomeSection";
import OurServices from "./OurServices";
import ResetLocation from "../../helpers/ResetLocation";
import ContactLanding from "./ContactLanding";

const RootSection = () => {
  useEffect(() => {
    document.title = "MarketConnect";
    ResetLocation();
  }, []);
  return (
    <React.Fragment>
      
      <WelcomeSection />
      <ContactUsLanding />
      
      <ContactLanding />
      <ScrollButton />
    </React.Fragment>
  );
}

export default RootSection;
