import React from "react";
import HowCanI from "../components/organism/help/HowCanI";
import Partner from "../components/organism/partner/Partner";
import ThatsUs from "../components/organism/about/ThatsUs";
import EyeCatcher from "../components/organism/home/EyeCatcher";

export default function Home() {
  return (
    <>
      <EyeCatcher />
      <ThatsUs />
      <HowCanI />
      <Partner />
    </>
  );
}
