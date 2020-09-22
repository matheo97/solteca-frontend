import dashboard from '../../../images/sideBar/dashboard.svg';
import purchases from '../../../images/sideBar/purchases.svg';
import sales from '../../../images/sideBar/sales.svg';
import companies from '../../../images/sideBar/customers.svg';
import taxes from '../../../images/sideBar/taxes.svg';

export interface Item {
  label: string;
  icon: string;
  key: string;
}

const items: Item[] = [
  {
    label: 'panel',
    icon: dashboard,
    key: 'dashboard',
  },
  {
    label: 'compras',
    icon: purchases,
    key: 'compras',
  },
  {
    label: 'ventas',
    icon: sales,
    key: 'ventas',
  },
  {
    label: 'empresas',
    icon: companies,
    key: 'companies',
  },
  {
    label: 'impuestos',
    icon: taxes,
    key: 'impuestos',
  },
];

export default items;
