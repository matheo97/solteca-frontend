import { AnyAction } from 'redux';
import { GET_INFO } from '../../shared/constants/actions';
import api from '../../api';

const getCompanyInfo = () => async (
  dispatch: (x: AnyAction | {}) => void
): Promise<void> => {
  try {
    const { data } = await api.get('/company/getInfo');
    dispatch({
      type: GET_INFO,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export default getCompanyInfo;
