import React, { ElementType } from "react";
import Header from "../header";
import Footer from "../footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  return (
    <>
      <Header />
      <main className="h-[100vh]"> {props.children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
