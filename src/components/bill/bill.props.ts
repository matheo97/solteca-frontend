export interface Props {
  showModal(
    type: 'purchase' | 'sells',
    action: 'create' | 'edit' | 'show',
    isQuote: boolean
  ): void;
  hideModal(): void;
  type: 'purchase' | 'sells';
  isQuote: boolean;
  action: 'create' | 'edit' | 'show';
  selectedBill?: Bill;
}

interface Bill {
  billNo: string;
  date: string;
  provider: string;
  otherExpenses: string;
  iva: string;
  totalValue: string;
  products: Array<Product>;
}

export interface Product {
  totalField: string;
  detailField: string;
  productField: string;
  quantityField: string;
}
