"use client";
import { Metadata } from "next";
import { getProviders, useSession, signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";

type Props = {};
export const metadata: Metadata = {
  title: "Login page",
  description: "This page is login page",
};
const Signin = (props: Props) => {
  const [providers, setProviders] = useState<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, status } = useSession();
  const currentUser = data?.user;
  useEffect(() => {
    (async () => {
      const response = await getProviders();
      setProviders(response);
      console.log(response);
    })();
  }, []);

  const handleSetValue =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    };
  return (
    <div className="flex items-center justify-center p-8">
      <form className="w-[400px]">
        <div className=" mb-3">
          <input
            onChange={handleSetValue(setEmail)}
            type="text"
            placeholder="Email"
            className="p-2 w-full"
          />
        </div>
        <div className=" mb-3">
          <input
            type="password"
            placeholder="Password"
            onChange={handleSetValue(setPassword)}
            className="p-2 w-full"
          />
        </div>
        {!currentUser &&
          providers &&
          Object.values(providers).map((provider: any) => {
            return (
              <button
                key={provider?.name}
                type="button"
                onClick={() =>
                  signIn(provider.id, {
                    email,
                    password,
                  })
                }
                className="bg-black text-white rounded-sm p-2"
              >
                Login {provider.name}
              </button>
            );
          })}
      </form>
    </div>
  );
};

export default Signin;
