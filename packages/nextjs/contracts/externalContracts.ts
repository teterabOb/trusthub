import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */

const externalContracts = {
  534351: {
    Verifier: {
      address: "0xA39e0B1Ac857596Ca04c06543AA8449504E3051a",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256[2]",
              name: "_pA",
              type: "uint256[2]",
            },
            {
              internalType: "uint256[2][2]",
              name: "_pB",
              type: "uint256[2][2]",
            },
            {
              internalType: "uint256[2]",
              name: "_pC",
              type: "uint256[2]",
            },
            {
              internalType: "uint256[1]",
              name: "_pubSignals",
              type: "uint256[1]",
            },
          ],
          name: "verifyProof",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    BeTrusty: {
      address: "0x48007bd1C17649F53D9D13ad57E8dDCd958135Dd",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_dataFeed",
              type: "address",
            },
            {
              internalType: "address",
              name: "_verifier",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "PRICE_PROOF_ONCHAIN",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "calculateRequiredETH",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newOwner",
              type: "address",
            },
          ],
          name: "changeOwner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getChainlinkDataFeedLatestAnswer",
          outputs: [
            {
              internalType: "int256",
              name: "",
              type: "int256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[1]",
              name: "pubSignals",
              type: "uint256[1]",
            },
          ],
          name: "isProofNullified",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "s_nullifierHash",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[1]",
              name: "pubSignals",
              type: "uint256[1]",
            },
          ],
          name: "undoNullified",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_verifier",
              type: "address",
            },
          ],
          name: "updateVerifier",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256[2]",
                  name: "a",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[2][2]",
                  name: "b",
                  type: "uint256[2][2]",
                },
                {
                  internalType: "uint256[2]",
                  name: "c",
                  type: "uint256[2]",
                },
              ],
              internalType: "struct BeTrusty.Proof",
              name: "proof",
              type: "tuple",
            },
            {
              internalType: "uint256[1]",
              name: "pubSignals",
              type: "uint256[1]",
            },
          ],
          name: "verifyAndRegisterBeTrusty",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256[2]",
                  name: "a",
                  type: "uint256[2]",
                },
                {
                  internalType: "uint256[2][2]",
                  name: "b",
                  type: "uint256[2][2]",
                },
                {
                  internalType: "uint256[2]",
                  name: "c",
                  type: "uint256[2]",
                },
              ],
              internalType: "struct BeTrusty.Proof",
              name: "proof",
              type: "tuple",
            },
            {
              internalType: "uint256[1]",
              name: "pubSignals",
              type: "uint256[1]",
            },
          ],
          name: "verifyBeTrusty",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_wei",
              type: "uint256",
            },
          ],
          name: "weiToUsd",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
