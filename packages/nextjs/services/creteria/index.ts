import { CreditScoreDataSource } from "./CreditScoreDataSource";
import { LinkedinProfessionDataSource } from "./LinkedinProfessionDataSource";
import { PlatformScoreDataSource } from "./PlatformScoreDataSource";
import { ResidenceCountryDataSource } from "./ResidenceCountryDataSource";
import { WalletBalanceDataSource } from "./WalletBalanceDataSource";
import { Datasource } from "./interface";

enum Criteria {
  LinkedinProfession = "linkedin-profession",
  PlatformScore = "platform-score",
  ResidenceCountry = "residence-country",
  CreditScore = "credit-score",
  WaletBalance = "wallet-balance",
}

const criteriaDatasoruceMap: { [key in Criteria]: Datasource } = {
  [Criteria.LinkedinProfession]: new LinkedinProfessionDataSource(),
  [Criteria.PlatformScore]: new PlatformScoreDataSource(),
  [Criteria.ResidenceCountry]: new ResidenceCountryDataSource(),
  [Criteria.CreditScore]: new CreditScoreDataSource(),
  [Criteria.WaletBalance]: new WalletBalanceDataSource(),
};

function isValidCriteria(criteria: string): criteria is Criteria {
  return Object.values(Criteria).includes(criteria as Criteria);
}

export async function getMatchingUsers(criteriaList: string[]) {
  const res: { [keyu in Criteria]?: string } = {};

  criteriaList.forEach(async criteria => {
    if (isValidCriteria(criteria)) {
      res[criteria] = await criteriaDatasoruceMap[criteria].getValue("mocked");
    }
  });

  return res;
}
