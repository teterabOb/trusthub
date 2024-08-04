"use client";

import type { NextPage } from "next";

const Proof: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 gap-4">
        <h2 className="text-xl">Parámetros enviados al circom</h2>
        <div className="mockup-code bg-primary">
          <pre>
            <code>{`{
    "linkedinProfession": "1",
    "platformScore": "1",
    "residenceCountry": "1",
    "creditScore": "1", 
    "waletBalance": "0",
    "userId": "111",
    "nonce": "0",
    "clientRequeriments": "2"    
  }`}</code>
          </pre>
        </div>
        <h2 className="text-xl">Primer parámetro</h2>
        <div className="mockup-code bg-primary">
          <pre>
            <code>{`
    [
        "0x00fd234502957dbe25c045c8e84e8519c5ebd2912d309274267f717bb4dd48e7",
        "0x0bf1bbe09bd6f94771113b1a0dac276fd4113ea323cc5eca44f541a0e61b0373"
    ]`}</code>
          </pre>
        </div>
        <h2 className="text-xl">Segundo parámetro</h2>
        <div className="mockup-code bg-primary">
          <pre>
            <code>{`                    
[
    [
        "0x27c7dee60c80188d0113798b0eefae10d03d98011df3c1778534dbf2b924e289",
        "0x016c94d7bb85f98b6f9d23b9ca32864eed87bf1028a8c4658efe8eb4d9f1b127"
    ],
    [
        "0x1387828f0faba866eb91ac3c6eed3029183405874bc3d5c2400a78853ff7c85d",
        "0x17794163a89d00c869c1234f85984dc8b1b07fd0ab90cd8ab41224296d066ce3"
    ]
]`}</code>
          </pre>
        </div>
        <h2 className="text-xl">Tercer parámetro</h2>
        <div className="mockup-code bg-primary">
          <pre>
            <code>{`                
[
    "0x0b75195a84e3cc03eb20026857cb50f5e3c41046ee3bdad9438ddeca41b5e54d",
    "0x073a76e22aaca8788f79d00dff7f5a847734c9528802eadb4652dbaf138bea61"
],
`}</code>
          </pre>
        </div>
        <h2 className="text-xl">Cuarto parámetro</h2>
        <div className="mockup-code bg-primary">
          <pre>
            <code>{`                  
[
    "0x082c9c370a0d24f4416fbc414a37681f78442d27d86385991c17d6fc0c4b7d71"
]`}</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default Proof;
