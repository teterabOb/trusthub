import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import * as snarkjs from "snarkjs";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const input = {
    linkedinProfession: "1",
    platformScore: "1",
    residenceCountry: "1",
    creditScore: "1",
    waletBalance: "0",
    userId: "111",
    nonce: "0",
    clientRequeriments: "2",
  };

  const wasmPath = path.join(process.cwd(), "public", "zk", "betrusty.wasm");
  const zkeyPath = path.join(process.cwd(), "public", "zk", "multiplier2_0001");

  try {
    await fs.promises.access(wasmPath);
    await fs.promises.access(zkeyPath);
  } catch (err) {
    console.error("One or both of the files do not exist:", err);
    res.status(500).json({ error: "Files not found" });
    return;
  }

  try {
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(input, wasmPath, zkeyPath);
    res.status(200).json({ proof, publicSignals });
  } catch (err) {
    console.error("Error generating proof:", err);
    res.status(500).json({ error: "Error generating proof" });
  }
}
