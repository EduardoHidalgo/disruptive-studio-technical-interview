export type Invests = {
  ada: number;
  btc: number;
  eth: number;
};

export type MessariAssetMetric = { status: any; data: any };

export interface CoinData {
  type: "btc" | "ada" | "eth";
  price: number;
  change: {
    hour: number;
    day: number;
    week: number;
    month: number;
    year: number;
  };
  reportedMarketcap: number;
  realVolume: number;
}

export const dummyCoinDisplayData: Array<CoinData> = [
  {
    change: {
      day: -0.22,
      hour: -0.35,
      month: -0.62,
      week: 4.82,
      year: 35.1,
    },
    price: 46334.56,
    realVolume: 5.23,
    reportedMarketcap: 80,
    type: "btc",
  },
  {
    change: {
      day: 0,
      hour: 0,
      month: 0,
      week: 0,
      year: 0,
    },
    price: 0,
    realVolume: 0,
    reportedMarketcap: 0,
    type: "ada",
  },
  {
    change: {
      day: 0,
      hour: 0,
      month: 0,
      week: 0,
      year: 0,
    },
    price: 0,
    realVolume: 0,
    reportedMarketcap: 0,
    type: "eth",
  },
];
