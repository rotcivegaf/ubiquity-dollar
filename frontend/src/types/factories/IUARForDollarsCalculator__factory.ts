/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IUARForDollarsCalculator } from "../IUARForDollarsCalculator";

export class IUARForDollarsCalculator__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUARForDollarsCalculator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUARForDollarsCalculator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dollarsToBurn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockHeightDebt",
        type: "uint256",
      },
    ],
    name: "getUARAmount",
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
];