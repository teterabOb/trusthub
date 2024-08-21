"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { IDKitWidget, ISuccessResult, VerificationLevel } from "@worldcoin/idkit";
import type { NextPage } from "next";

const Proof: NextPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  console.log("Search:", search);

  const onSuccess = (result: ISuccessResult) => {
    console.log("User verified:", result);
    // This is where you should perform frontend actions once a user has been verified
  };

  const endpointApi = `https://id.worldcoin.org/authorize?response_type=code&redirect_uri=https://api-betrusty.vercel.app/worldid/callback&scope=openid+profile+email&client_id=app_b5bf70a63e4ecd0be5f1b754b6675728`;

  return (
    <>
      <Link href={endpointApi}>
        <button className="btn btn-primary">Validar WorldID</button>
      </Link>
      <button className="btn btn-primary" onClick={() => (window.location.href = "/proof")}>
        Conectar Github
      </button>
    </>
  );
};

export default Proof;
