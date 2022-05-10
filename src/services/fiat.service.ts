import axios from "axios";
import { API_URL } from "../utils/constants/api.constants";
import HTTP_CLIENT from "./http.client.service";

export const getFiatExchangeRate = async (currency: string) => {
  try {
    console.log(process.env.REACT_APP_XUMM_API_KEY,"process.env.REACT_APP_XUMM_API_KEY");
    
    const response = await axios.get(API_URL.FIAT_RATE + currency, {
      headers: {
        "X-API-Key": "1a509d89-743f-4e89-a21d-61837c23ff85",
        "X-API-Secret": "7c38fbdf-b985-4a13-93d2-8a90ec83189c",
      },
    });

    if (response.status === 200) {
      return {
        rate: response.data.XRP,
        symbol: response.data.__meta.currency.symbol,
        code: response.data.__meta.currency.code,
      };
    } else return null;
  } catch (e: any) {
    return null;
  }
};
