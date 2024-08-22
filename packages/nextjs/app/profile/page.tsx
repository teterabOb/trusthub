"use client";

import { Suspense, use, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { NextPage } from "next";
import { useSearchParamsContext } from "~~/components/trusthub/SearchParamsProvider";

interface SearchParams {
  worldid_email: string | null;
}

function Search() {
  const { email, setSearchParams } = useSearchParamsContext();

  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("access_token");
    const emailUrl = searchParams.get("email");
    setSearchParams({ accessToken, email: emailUrl });
  }, [setSearchParams]);

  return "";
}

const Profile: NextPage = () => {
  const urlLoginGithub: string = `https://api-betrusty.vercel.app/github/login`;
  const urlLoginMl: string = `https://api-betrusty.vercel.app/ml/login`;
  const { email } = useSearchParamsContext();

  //useEffect(() => { }, [email]);
  /*****************************
   * Este componente se debe revisar para no mostar nada si el email es nulo
   * También se debe validar que ese email exista en el sistema
   * en caso contrario se debe redireccionar a otro sitio
   ******************************/
  /*
  const fetchLoginGithub = () => {
    fetch(`${urlLoginGithub}?worldid_email=${email}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.location.href;
      });
  };
  */

  const getUrlGithub = () => {
    return `${urlLoginGithub}?worldid_email=${email}`;
  };

  useEffect(() => {
    if (!email) return;
    console.log("Email profile", email);
  }, [email]);

  return (
    <div className="bg-base-100 flex p-10 m-20 w-1/2 border border-gray-500 rounded-xl">
      <div className="flex flex-col flex-grow pt-10">
        <div className="flex justify-start w-full">
          <h2 className="">Conenect Platforms - EMAIL CONTEXT {email}</h2>
        </div>
        <div className="card card-side bg-base-100 shadow-xl flex flex-row gap-4 py-4">
          <label>Github</label>
          <Link href={getUrlGithub()}>
            <button className="btn btn-primary">Connect Github</button>
          </Link>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Linked</span>
              <input type="checkbox" defaultChecked className="checkbox checkbox-accent" />
            </label>
          </div>
          <label>Mercado Libre</label>
          <Link href={urlLoginMl}>
            <button className="btn btn-primary">Connect Mercado Libre</button>
          </Link>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Linked</span>
              <input type="checkbox" defaultChecked className="checkbox checkbox-accent" />
            </label>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl px-6 flex flex-row gap-4 p-4 items-center">
          <h1 className="text-gray-500">User Email</h1>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
            defaultValue={email || "No Data"}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <Search />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Profile;
