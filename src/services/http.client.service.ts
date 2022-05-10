import axios, {AxiosInstance} from 'axios';
import { RootState, store } from '../store/configureStore';
import { BASE_URL } from '../utils/constants/api.constants';

export const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

HTTP_CLIENT.interceptors.request.use(
  config => {
    const state: RootState = store.getState();

    config.headers = {
      Authorization: `Bearer ${state.wallet.defaultAsset.authToken}`,
      Accept: 'application/json',
    };

    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export default HTTP_CLIENT;
