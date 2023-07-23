"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import LoadingPage from "../Loading";

type Props = {
  children: ReactNode;
};

function PrivateRouter({ children }: Props) {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <LoadingPage />;
  }
  if (!session) {
    redirect("/signin");
  }
  return children;
}

export default PrivateRouter;
// https://github.dev/nextauthjs/next-auth-example
