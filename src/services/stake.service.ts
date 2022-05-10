
import { API_URL } from '../utils/constants/api.constants';
import HTTP_CLIENT from './http.client.service';
import XRPIcon from "../assets/icons/my-assets/xrp_coin.png";
import BA from "../assets/icons/my-assets/ba-coin.png";

export const getStakeAccounts = async () => {
  try {
    const accounts = await HTTP_CLIENT.get(API_URL.STAKE_ACCOUNTS);
    const stakeInfo = await HTTP_CLIENT.get(API_URL.STAKE_INFO);

    if (
      accounts.status === 200 &&
      accounts.data.status &&
      accounts.data.payload &&
      accounts.data.payload.receiver &&
      accounts.data.payload.issuer &&
      stakeInfo.status === 200 &&
      stakeInfo.data.status &&
      stakeInfo.data.payload &&
      stakeInfo.data.payload.length
    ) {
      const info = stakeInfo.data.payload.map((i: any) => {
        if (i.coin === 'XRP') {
          return {
            ...i,
            title: 'Ripple (XRP)',
            icon: XRPIcon,
          };
        } else if (i.coin === 'BISONARMY') {
          return {
            ...i,
            title: 'BISON ARMY',
            icon: BA,
          };
        }
      });
      return {...accounts.data.payload, info};
    }

    return null;
  } catch (e: any) {
    return null;
  }
};

export const getStakedDetails = async (address: string) => {
  try {
    const details = await HTTP_CLIENT.post(API_URL.STAKED_DETAILS, {
      xaccount: address,
    });

    if (details.status === 200 && details.data.status && details.data.payload) {
      return details.data.payload;
    }

    return null;
  } catch (e: any) {
    return null;
  }
};
