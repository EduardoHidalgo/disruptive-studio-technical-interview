import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { Modal } from "../modal";
import { CoinData, Invests } from "../../types/common";
import { Input } from "../input";

export interface InvestCalculatorProps {
  data: Array<CoinData>;
  openInvest: boolean;
  setOpenInvest: Dispatch<SetStateAction<boolean>>;
}

export const InvestCalculator: FC<InvestCalculatorProps> = ({
  data,
  openInvest,
  setOpenInvest,
}) => {
  const [invest, setInvest] = useState<Invests>({
    ada: 0,
    btc: 0,
    eth: 0,
  });

  const onChangeBtc = (e: ChangeEvent<HTMLInputElement>) => {
    setInvest({ ...invest, btc: Number(e.target.value) });
  };

  const onChangeAda = (e: ChangeEvent<HTMLInputElement>) => {
    setInvest({ ...invest, ada: Number(e.target.value) });
  };

  const onChangeEth = (e: ChangeEvent<HTMLInputElement>) => {
    setInvest({ ...invest, eth: Number(e.target.value) });
  };

  const coinInvestPrice = (type: CoinData["type"], invest: number): string => {
    const coin = data.find((c) => c.type === type);

    if (coin === undefined) return "0.00";

    return (invest / coin.price).toFixed(6);
  };

  const investmentROI = (type: CoinData["type"], invest: number) => {
    let result = 0;

    switch (type) {
      case "ada":
        result = (invest / 100) * 1;
        break;
      case "btc":
        result = (invest / 100) * 5;
        break;
      case "eth":
        result = (invest / 100) * 4.2;
        break;
    }

    return Number(result.toFixed(2));
  };

  const total =
    investmentROI("ada", invest.ada) +
    investmentROI("btc", invest.btc) +
    investmentROI("eth", invest.eth);

  return (
    <Modal open={openInvest} setOpen={setOpenInvest}>
      <h2 className="text-font text-xl mb-4">Invest in Crypto</h2>
      <dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-font">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <dt className="text-lg">BTC</dt>
            <dd className="text-font text-lg">
              <Input
                name="btc"
                value={invest.btc}
                onChange={onChangeBtc}
                type="number"
              />
            </dd>
          </div>
          <div className="flex justify-between items-center">
            <dt>Bitcoins</dt>
            <dd>{`${coinInvestPrice("btc", invest.btc)} BTC`}</dd>
          </div>
          <div className="flex justify-between items-center">
            <dt>5% monthly ROI</dt>
            <dd>{`${investmentROI("btc", invest.btc)} USD`}</dd>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <dt className="text-lg">ADA</dt>
            <dd className="text-font text-lg">
              <Input
                name="ada"
                value={invest.ada}
                onChange={onChangeAda}
                type="number"
              />
            </dd>
          </div>
          <div className="flex justify-between items-center">
            <dt>Cardanos</dt>
            <dd>{`${coinInvestPrice("ada", invest.ada)} ADA`}</dd>
          </div>
          <div className="flex justify-between items-center">
            <dt>1% monthly ROI</dt>
            <dd>{`${investmentROI("ada", invest.ada)} USD`}</dd>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <dt className="text-lg">ETH</dt>
            <dd className="text-font text-lg">
              <Input
                name="eth"
                value={invest.eth}
                onChange={onChangeEth}
                type="number"
              />
            </dd>
          </div>
          <div className="flex justify-between items-center">
            <dt>Ethereums</dt>
            <dd>{`${coinInvestPrice("eth", invest.eth)} ETH`}</dd>
          </div>
          <div className="flex justify-between items-center">
            <dt>4.2% monthly ROI</dt>
            <dd>{`${investmentROI("eth", invest.eth)} USD`}</dd>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-font">
          <dt className="text-base">Total monthly ROI</dt>
          <dd className="text-base">{`$${total.toFixed(2)}`}</dd>
        </div>
      </dl>
    </Modal>
  );
};
