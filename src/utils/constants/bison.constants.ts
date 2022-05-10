import BA from "../../assets/icons/my-assets/ba-coin.png";
import BG from "../../assets/icons/my-assets/bg-coin.png";
import { isMainNet } from "../../xrpl.config";

export const BisonCoins = isMainNet
  ? [
      {
        id: "bison_army",
        name: "Bison Army",
        symbol: "BisonArmy",
        issuer: "rKewBkTsHrjWiDTnsrAB2kjTg9bkCTMMyc",
        ticker: "4269736F6E41726D790000000000000000000000",
        icon: BA,
        isBep20: false,
        isErc20: false,
      },
      {
        id: "bison_g",
        name: "Bison G",
        symbol: "BisonG",
        issuer: "rn3Gd6hQqc5ZK1VvfyWyrzhad3aTdPaFLs",
        ticker: "4269736F6E470000000000000000000000000000",
        icon: BG,
        isBep20: false,
        isErc20: false,
      },
    ]
  : [];
