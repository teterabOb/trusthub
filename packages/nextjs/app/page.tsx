"use client";

import { DebugContracts } from "./debug/_components/DebugContracts";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Verificar mediante el protocolo</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-normal">Billetera conectada:</p>
            <Address address={connectedAddress} />
          </div>
          <DebugContracts />
        </div>
      </div>
    </>
  );
};

export default Home;
