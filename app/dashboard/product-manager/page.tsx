import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const ProductManager = async ({}: Props) => {
  return <div>ProductManager</div>;
};

export default ProductManager;
