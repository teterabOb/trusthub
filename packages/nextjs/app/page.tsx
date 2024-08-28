"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const endpointApi = `https://id.worldcoin.org/authorize?response_type=code&redirect_uri=https://api-betrusty.vercel.app/worldid/callback&scope=openid+profile+email&client_id=app_b5bf70a63e4ecd0be5f1b754b6675728`;

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="card card-side bg-base-100 shadow-xl px-6">
          <figure className="py-4 ">
            <Image width={100} height={100} src="/images/ok.png" alt="trust" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Welcome!</h2>
            <p>Click the button to join</p>
            <div className="card-actions justify-end">
              <Link href={endpointApi}>
                <button className="btn btn-primary">Validar WorldID</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
