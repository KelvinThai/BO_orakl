import { TransactionResponse } from "@ethersproject/abstract-provider";
import { ethers } from "ethers";
import { ILatestRound } from "../types";
import { BaseInterface } from "./interfaces";
import { getAbiByAddress } from "./utils/getAbis";

export class UpDownContract extends BaseInterface {
  constructor(provider: ethers.providers.Web3Provider, smAddress: string) {
    super(provider, smAddress, getAbiByAddress(smAddress));
  }

  latestRoundDataAsync = async(): Promise<ILatestRound>=> {
    const rs = await this._contract.latestRoundData();
    return {
      answer: this._toNumber(rs.answer) / Math.pow(10, 8),
      answeredInRound: this._toNumber(rs.answer),
      roundId: this._toNumber(rs.roundId),
      startedAt: this._toNumber(rs.startedAt),
      updatedAt: this._toNumber(rs.updatedAt), 
    }
  }
}
