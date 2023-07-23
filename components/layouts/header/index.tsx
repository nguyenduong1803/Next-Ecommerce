"use client";
import { signIn, useSession, signOut, getProviders } from "next-auth/react";
import {} from "next-auth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  const [providers, setProviders] = useState<any>();
  const { data, status } = useSession();
  const currentUser = data?.user;
  const token = data?.token;
  console.log(token);
  const AUTHENTICATED = status === "authenticated";
  useEffect(() => {
    (async () => {
      const response = await getProviders();
      setProviders(response);
    })();
  }, []);
  
  // signIn
  return (
    <div className=" bg-blue-500 p-4 flex justify-between align-middle gap-4">
      <div className="flex-1 flex gap-3">
        <p className="text-white ">Header</p>
        <Link href="/">
          <button className="bg-black text-white rounded-sm p-2">Home</button>
        </Link>
        <Link href="/about">
          <button className="bg-black text-white rounded-sm p-2">About</button>
        </Link>
        <Link href="/dashboard/user-manager">
          <button className="bg-black text-white rounded-sm p-2">
            User Manager
          </button>
        </Link>
        <Link href="/dashboard/product-manager">
          <button className="bg-black text-white rounded-sm p-2">
            Product Manager
          </button>
        </Link>
        <Link href="/signin">
          <button className="bg-black text-white rounded-sm p-2">
            Login page
          </button>
        </Link>
      </div>

      {AUTHENTICATED && currentUser && (
        <div>
          <img src="" alt="avatar" />
          <p>{currentUser.email}</p>
          <p>{currentUser.fullname}</p>
          <button
            onClick={() => signOut()}
            className="bg-orange-500 text-white rounded-sm p-2"
          >
            Signout
          </button>
        </div>
      )}
      <div className="flex gap-3"></div>
    </div>
  );
};

export default Header;
