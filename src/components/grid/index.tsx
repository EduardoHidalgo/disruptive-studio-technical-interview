import { FC } from "react";
import Image from "next/image";

import { Button } from "../button";
import { TableHeader } from "./tableHeader";
import { TableData } from "./tableData";
import { CoinData } from "../../types/common";
import { UsdChange } from "../usdChange";

export interface GridProps {
  data: Array<CoinData>;
  onClickInvest: () => void;
}

export const Grid: FC<GridProps> = ({ data, onClickInvest }) => {
  const headers = [
    "asset",
    "price (usd)",
    "change vs usd(1h)",
    "change vs usd(24h)",
    "reported marketcap",
    "real volume (24h)",
    "change vs usd (7d)",
    "change vs usd (30d)",
    "change vs usd (1y)",
  ];

  const coinLabel = (type: CoinData["type"]) => {
    switch (type) {
      case "ada":
        return "Cardano";
      case "btc":
        return "Bitcoin";
      case "eth":
        return "Ethereum";
    }
  };

  const numberAbbreviation = (value: number) => {
    return Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-4">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-font leading-6">
            Assets
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button label="invest" onClick={onClickInvest} />
        </div>
      </div>
      <div className="mt-6 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-600">
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <TableHeader
                      header={header}
                      key={header}
                      first={index === 0}
                    />
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600 bg-background">
                {data.map((coin, index) => (
                  <tr key={index} className="even:bg-surface text-right">
                    <TableData>
                      <div className="flex flex-row gap-1 items-center">
                        <Image
                          src={`/${coin.type}.png`}
                          alt={coin.type}
                          className="w-4 h-4 bg-white rounded-full mr-1"
                          width={1000}
                          height={1000}
                        />
                        <span className="text-primary">
                          {coinLabel(coin.type)}
                        </span>
                        <span className="text-font uppercase">
                          &#x2022; {coin.type}
                        </span>
                      </div>
                    </TableData>
                    <TableData>
                      <span className="text-font">
                        ${coin.price.toFixed(2)}
                      </span>
                    </TableData>
                    <TableData>
                      <UsdChange value={coin.change.hour} />
                    </TableData>
                    <TableData>
                      <UsdChange value={coin.change.day} />
                    </TableData>
                    <TableData>
                      <span className="text-font">
                        ${numberAbbreviation(coin.reportedMarketcap)}
                      </span>
                    </TableData>
                    <TableData>
                      <span className="text-font">
                        ${numberAbbreviation(coin.realVolume)}
                      </span>
                    </TableData>
                    <TableData>
                      <UsdChange value={coin.change.week} />
                    </TableData>
                    <TableData>
                      <UsdChange value={coin.change.month} />
                    </TableData>
                    <TableData>
                      <UsdChange value={coin.change.year} />
                    </TableData>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
