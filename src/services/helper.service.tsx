import { Wallet } from "../store/types";
import { isMainNet } from "../xrpl.config";
import XRPL_CLIENT from "./xrpl.client.service";
const WAValidator = require("@swyftx/api-crypto-address-validator");
const regexBTC = /^[13][a-zA-Z0-9]{27,34}/;
const regexETH = /^0x[a-fA-F0-9]{40}$/;

export const reverseString = (str: string) => {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

export const shuffleArray = (array: Array<string>) => {
  return array.sort(() => Math.random() - 0.5);
};

export const parseBalance = (asset: Wallet) => {
  if (asset.symbol === "XRP" && asset.Balance) {
    return XRPL_CLIENT.dropsToXRP(asset.Balance);
  } else {
    return asset.Balance;
  }
};

export const parseFiatBalance = (asset: Wallet) => {
  // TODO: Handle after conversion rates
  if (asset.symbol === "XRP" && asset.Balance) {
    return XRPL_CLIENT.dropsToXRP(asset.Balance);
  } else {
    return asset.Balance;
  }
};

export const validateAddress = (
  asset: Wallet,
  address: string,
  isRipple: boolean
) => {
  if (asset.symbol === "BCY") return false;

  if (asset.symbol === "XRP" || isRipple) {
    return XRPL_CLIENT.isValidAddress(address);
  } else {
    if (isMainNet) {
      return WAValidator.validate(address, asset.symbol);
    }
    return WAValidator.validate(address, asset.symbol, "testnet");
  }
};

export const isValidAddress = (symbol: string, address: string) => {
  try {
    if (symbol === "BCY") return true;
    if (isMainNet) {
      return WAValidator.validate(address, symbol);
    }
    return WAValidator.validate(address, symbol, "testnet");
  } catch (error) {
    return WAValidator.validate(address, "XRP", "testnet");
  }
};

export const hasSufficientBalance = (asset: Wallet, value: string) => {
  if (asset.Balance && asset.symbol === "XRP") {
    return +value + 0.00001 < +asset.Balance;
  } else {
    return asset.Balance && +value < +asset.Balance;
  }
};

export const calculateMaxTotal = (
  asset: Wallet,
  value: number,
  fee: number
) => {
  if (asset.symbol === "XRP") {
    return (Number(value) + +fee)?.toFixed(4)?.toString();
  } else {
    return Number(value)?.toFixed(4)?.toString();
  }
};

export const getTransactionCost = async () => {
  const fee = await XRPL_CLIENT.getTransactionCost();
  return fee?.toString() || "0.000012";
};

export const parseHexValue = (input: string) => {
  var hex = input.toString();
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str.slice(0, str.indexOf("\x00", 0));
};

export function parseHexDomain(str1:string)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }

export const parseToHex = (str: string) => {
  var hex = "";
  for (var i = 0; i < 40 - str.length; i++) {
    hex +=
      "" +
      (str.length > i ? str.charCodeAt(i).toString(16) : "0").toUpperCase();
  }
  return hex;
};

export function CheckIsValidDomain(domain: string) {
  var re = new RegExp(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
  );
  return domain.match(re);
}

export const debounce = function (func: any, delay: number) {
  let timer: any;
  return function () {
    //anonymous function
    // @ts-ignore
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};
