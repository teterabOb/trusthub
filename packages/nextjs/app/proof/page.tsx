"use client";
import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit'
import type { NextPage } from "next";
import axios from 'axios';

const Proof: NextPage = () => {
  const onSuccess = (result: ISuccessResult) => {
    // This is where you should perform frontend actions once a user has been verified
    console.log('Proof received:', result);
  }

  const verifyProof = async (proof: ISuccessResult) => {
    console.log('Verifying proof:', proof);

    // De la prueba vamos a guardar el Nullifier Hash
    // Este es un valor unico por cada action, por lo que
    // este sera nuestro identificador unico

    try {
      const response = await axios.post('/api/verify', { proof });
      console.log('Verification response:', response.data);
    } catch (error) {
      console.error('Failed to verify proof:', error);
      throw new Error('This is a mockup error');
    }
  };

  const proofResponse = {
    "verification_level": "orb",
    "proof": "0x2f87a182565d7f0abb1d1081f4cc973be1f925d85989fbdf5ce1ace2425093300d375b6cc334454cfe523a2fbb241b4398ab030dd45511ed6fad37479de74d652cee36009b77eed79bdf5a2fb4b1a1d8e967c05dbf50d36310088c1cbe3d9010055c799ef6e8677930b674034201355652a0e55e32e73835168b916847a8d93e2ef361a894c328b1090bc131408301a8d794eb0eb78ef682a75c500e3e7ef2e61b46107f365809c857c70afcf9e51225e0cdb5803074b2df2f0288166ee5b42d01f76ba6a75f7bf50969b1501cc8222b3718d2c75e6a2c9fa4481e271f18cf080fcddabef0e3202298911d897ab1367a3e55252679c8f8985f9b541e7f6bb344",
    "merkle_root": "0x29bfd71235061ae4317ac1fee537077fe96ee8fe8f4375ab434c18aa3a880ded",
    "nullifier_hash": "0x04a74bd57677629286c6e13289c00029dc776595eb368382ccc69d65b604a0ad",
    "credential_type": "orb"
  }

  return (
    <>
      <IDKitWidget
        app_id="app_b5bf70a63e4ecd0be5f1b754b6675728" // obtained from the Developer Portal
        action="verify-identity" // this is your action id from the Developer Portal
        onSuccess={onSuccess} // callback when the modal is closed
        handleVerify={verifyProof} // optional callback when the proof is received
        verification_level={VerificationLevel.Device}
        signal={"hola mundo"}
      >
        {({ open }) => <button className='btn btn-primary' onClick={open}>Verify with World ID</button>}
      </IDKitWidget>
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
