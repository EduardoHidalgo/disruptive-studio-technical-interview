import { CoinData } from "../types/common";

export function mapCoin(data: any): CoinData {
  return {
    type: String(data.symbol).toLowerCase() as CoinData["type"],
    price: Number(data.market_data.price_usd),
    realVolume: Number(data.market_data.real_volume_last_24_hours),
    change: {
      day: Number(data.market_data.percent_change_usd_last_24_hours),
      hour: Number(data.market_data.percent_change_usd_last_1_hour),
      month: Number(data.roi_data.percent_change_last_1_month),
      week: Number(data.roi_data.percent_change_last_1_week),
      year: Number(data.roi_data.percent_change_last_1_year),
    },
    reportedMarketcap: Number(data.marketcap.current_marketcap_usd),
  };
}
