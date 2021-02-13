import { AnyAction } from 'redux';
import { GET_INFO } from '../../shared/constants/actions';
import api from '../../api';

const getCompanyInfo = () => async (
  dispatch: (x: AnyAction | {}) => void
): Promise<void> => {
  try {
    const { data } = await api.get('/company/getInfo');
    console.log('data', data);
    dispatch({
      type: GET_INFO,
      payload: {
        ...data,
        moneyOwned: data.moneyOwned[0]?.total,
        moneyOwnedToUs: data.moneyOwnedToUs[0]?.total,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default getCompanyInfo;
