export const isMainNet = true;

const XRPL_ENV_MAIN = {
  URL: "wss://xrplcluster.com/",
  EXPLORER: "https://mainnet.xrpl.org/transactions/",
};

const XRPL_ENV_TEST = {
  URL: "wss://s.altnet.rippletest.net:51233",
  EXPLORER: "https://testnet.xrpl.org/transactions/",
};

const XRPL_ENV = isMainNet ? XRPL_ENV_MAIN : XRPL_ENV_TEST;

export { XRPL_ENV };
