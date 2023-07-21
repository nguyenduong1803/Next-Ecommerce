"use client";
import { BuiltInProviderType } from "next-auth/providers/index";
import { signIn, useSession, signOut, getProviders } from "next-auth/react";
import {} from "next-auth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  const [providers, setProviders] = useState<any>();
  const { data } = useSession();
  const USER_LOGGED = data?.user;
  useEffect(() => {
    (async () => {
      const response = await getProviders();
      setProviders(response);
      console.log(response);
    })();
  }, []);
  // signIn
  return (
    <div className=" bg-blue-500 p-4 flex justify-between align-middle">
      <p className="text-white flex-1">Header</p>
      {USER_LOGGED && (
        <div>
          <img src={USER_LOGGED.image || ""} alt="avatar" />
          <p>{USER_LOGGED.email}</p>
          <p>{USER_LOGGED.name}</p>
          <button
            onClick={() => signOut()}
            className="bg-black text-white rounded-sm p-2"
          >
            Signout
          </button>
        </div>
      )}
      <div className="flex gap-3">
        {!USER_LOGGED &&
          providers &&
          Object.values(providers).map((provider: any) => {
            return (
              <button
                key={provider?.name}
                onClick={() => signIn(provider.id)}
                className="bg-black text-white rounded-sm p-2"
              >
                Login {provider.name}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Header;
