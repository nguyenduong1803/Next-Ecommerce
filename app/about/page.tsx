import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About page",
  description: "Description off obout page",
};
type Props = {};

const About = (props: Props) => {
  return <div className="h-[100vh]">About</div>;
};

export default About;
