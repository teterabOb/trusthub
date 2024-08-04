import { User } from "../user";
import { LinkedinProfessionDataSource } from "./LinkedinProfessionDataSource";
import { PlatformScoreDataSource } from "./PlatformScoreDataSource";
import { ResidenceCountryDataSource } from "./ResidenceCountryDataSource";
import { WalletBalanceDataSource } from "./WalletBalanceDataSource";

enum Criteria {
  LinkedinProfession = "linkedin-profession",
  AirbnbScore = "airbnb-score",
  ResidenceCountry = "residence-country",
  WaletBalance = "wallet-balance",
}

export async function getCriteriaForUser(user: User) {
  return {
    [Criteria.LinkedinProfession]: await new LinkedinProfessionDataSource().getValue(user.linkedinId),
    [Criteria.AirbnbScore]: await new PlatformScoreDataSource().getValue(user.airbnbId),
    [Criteria.ResidenceCountry]: await new ResidenceCountryDataSource().getValue(user.residencyId),
    [Criteria.WaletBalance]: await new WalletBalanceDataSource().getValue(user.walletAddress),
  };
}

export function getLevel(nCriteriaReached: number) {
  if (nCriteriaReached > 1) {
    return "bronze";
  } else if (nCriteriaReached === 2) {
    return "silver";
  } else {
    return "gold";
  }
}
