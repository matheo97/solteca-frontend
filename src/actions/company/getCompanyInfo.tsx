import { AnyAction } from 'redux';
import { GET_INFO } from '../../shared/constants/actions';
import { companyService } from '../../services/company';

const getCompanyInfo = () => async (
  dispatch: (x: AnyAction | {}) => void
): Promise<void> => {
  try {
    const companyInfo = await companyService.getCompanyInfo();
    dispatch({
      type: GET_INFO,
      payload: {
        ...companyInfo,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default getCompanyInfo;
