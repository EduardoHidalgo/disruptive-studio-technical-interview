import { Coins } from "@/components/coins";
import { getCoins } from "../events/getCoins";
import { mapCoin } from "../utils/coinMap";

/** Render page on server-side, also fetch coins.
 */
export default async function Home() {
  const data = await getCoins(process.env.MESSARI_KEY);

  if (data instanceof Error) throw data;

  const coins = data.map((coin) => mapCoin(coin));

  return (
    <main>
      <Coins data={coins} />
    </main>
  );
}
