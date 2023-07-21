import React, { ElementType } from "react";
import Header from "../header";
import Footer from "../footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
