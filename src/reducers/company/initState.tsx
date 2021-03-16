import { CompanyInfo } from 'services/api';

const companyInitState: CompanyInfo = {
  salesPerMonth: [],
  files: [],
  moneyOwned: 0,
  moneyOwnedToUs: 0,
  companyDetails: {
    createdAt: '',
    updatedAt: '',
    id: null,
    nit: null,
    name: null,
    address: null,
    selfWithHoldingUrl: null,
    moneyAvailable: null,
    type: 'both',
    moneyAvailableUpdatedAt: '',
  },
  balanceIVA: {
    iva: 0,
    status: 'No bills found',
  },
};

export default companyInitState;
