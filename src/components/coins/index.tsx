"use client";
import { FC, useState } from "react";

import { Grid } from "../grid";
import { useInterval } from "../../hooks/useInterval";
import { getCoins } from "../../events/getCoins";
import { CoinData } from "../../types/common";
import { mapCoin } from "../../utils/coinMap";
import { InvestCalculator } from "../investCalculator";

const SECONDS_IN_ONE_MINUTE = 60;
const REVALIDATIONS_PER_MINUTE = 5;
const MS_PER_SECOND = 1000;
const REVALIDATION_INTERVAL =
  (SECONDS_IN_ONE_MINUTE / REVALIDATIONS_PER_MINUTE) * MS_PER_SECOND;

export interface CoinsProps {
  data: Array<CoinData>;
}

export const Coins: FC<CoinsProps> = ({ data }) => {
  const fetchInRealtime = process.env.NEXT_PUBLIC_REALTIME_FETCHING
    ? Boolean(process.env.NEXT_PUBLIC_REALTIME_FETCHING)
    : false;

  const [coins, setCoins] = useState<Array<CoinData>>(data);
  const [openInvest, setOpenInvest] = useState<boolean>(false);

  /** Perform the realtime fetching of coins. This would happen few times per
   * minute, due to messari request limits per minute and per day. Also this
   * will not perform if NEXT_PUBLIC_REALTIME_FETCHING environment variable is
   * false. */
  useInterval(async () => {
    if (fetchInRealtime) {
      const data = await getCoins(process.env.NEXT_PUBLIC_MESSARI_KEY);

      if (data instanceof Error) return console.error(data);

      const newCoins = data.map((coin) => mapCoin(coin));
      setCoins(newCoins);
    }
  }, REVALIDATION_INTERVAL);

  const onClickInvest = () => {
    setOpenInvest(!openInvest);
  };

  return (
    <main>
      <Grid data={coins} onClickInvest={onClickInvest} />
      <InvestCalculator
        data={data}
        openInvest={openInvest}
        setOpenInvest={setOpenInvest}
      />
    </main>
  );
};
