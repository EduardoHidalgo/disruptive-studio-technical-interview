import { MessariAssetMetric } from "../types/common";

async function getCoinMetric(
  coin: "btc" | "eth" | "ada",
  messariKey: string | undefined
): Promise<MessariAssetMetric> {
  if (messariKey === undefined)
    throw new Error(
      "Messari key was undefined. Please provide some Messari API Key as an environment variable."
    );

  const endpoint = `https://data.messari.io/api/v1/assets/${coin}/metrics`;

  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-messari-api-key": messariKey!,
    },
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }

  const json: MessariAssetMetric = await res.json();

  return json.data;
}

export async function getCoins(
  messariKey: string | undefined
): Promise<Array<MessariAssetMetric> | Error> {
  return Promise.all([
    getCoinMetric("btc", messariKey),
    getCoinMetric("ada", messariKey),
    getCoinMetric("eth", messariKey),
  ])
    .then((data) => data)
    .catch((error) => new Error(error));
}
