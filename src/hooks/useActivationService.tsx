import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AccountStatus, TransactionResponse } from '../enums';
import XRPL_CLIENT from '../services/xrpl.client.service';
import { checkAccountActivation } from '../store/actions/WalletActions';
import { RootState } from '../store/configureStore';
import { setDefaultAsset } from '../store/reducers/walletReducer';

const useActivationService = () => {
  const dispatch = useDispatch();

  const {defaultAsset} = useSelector((state: RootState) => state.wallet);

  useEffect(() => {
    if (defaultAsset.accountStatus === AccountStatus.CHECKING) {
      dispatch(checkAccountActivation());
    }
  }, [defaultAsset.accountStatus, dispatch]);

  const activateInitialTransactionListener = async () => {
    await XRPL_CLIENT.activateTransactionListener([defaultAsset.address]);
    // Check if account activated on app load
    dispatch(checkAccountActivation());

    XRPL_CLIENT.connection.on('transaction', (data: any) => {
      console.log('🚀 ~ Transaction Received', data);
      if (data.engine_result === TransactionResponse.SUCCESS) {
        dispatch(
          setDefaultAsset({
            ...defaultAsset,
            accountStatus: AccountStatus.CHECKING,
          }),
        );
      }
    });
  };

  useEffect(() => {
    if (defaultAsset.accountStatus === AccountStatus.REQUIRES_ACTIVATION) {
      activateInitialTransactionListener();
    }

    return () => {
      if (defaultAsset.accountStatus === AccountStatus.REQUIRES_ACTIVATION) {
        XRPL_CLIENT?.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultAsset.accountStatus]);

  return null;
};

export default useActivationService;
