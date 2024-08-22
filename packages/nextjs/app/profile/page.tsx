"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { NextPage } from "next";

function Search() {
  const searchParams = useSearchParams();

  const accessToken = searchParams.get("access_token");
  const email = searchParams.get("email");

  console.log("accessToken : ", accessToken);
  console.log("email : ", email);

  return email ? (
    <input
      type="text"
      placeholder="User Email"
      className="input input-bordered input-info w-full max-w-xs"
      defaultValue={email}
      disabled={true}
    />
  ) : (
    <input
      type="text"
      placeholder="User Email"
      className="input input-bordered input-info w-full max-w-xs"
      defaultValue={"No data"}
      disabled={true}
    />
  );
}

const Profile: NextPage = () => {
  const urlLoginGithub: string = `https://api-betrusty.vercel.app/github/login`;
  const urlLoginMl: string = `https://api-betrusty.vercel.app/ml/login`;

  return (
    <div className="bg-base-100 flex p-10 m-20 w-1/2 border border-gray-500 rounded-xl">
      <div className="flex flex-col flex-grow pt-10">
        <div className="flex justify-start w-full">
          <h2 className="">Conenect Platforms</h2>
        </div>
        <div className="card card-side bg-base-100 shadow-xl flex flex-row gap-4 py-4">
          <Link href={urlLoginGithub}>
            <button className="btn btn-primary">Connect Github</button>
          </Link>
          <Link href={urlLoginMl}>
            <button className="btn btn-primary">Connect Mercado Libre</button>
          </Link>
        </div>
        <div className="card card-side bg-base-100 shadow-xl px-6 flex flex-row gap-4 p-4 items-center">
          <h1 className="text-gray-500">User Identifier</h1>
          <h1>
            <Suspense>
              <Search />
            </Suspense>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
