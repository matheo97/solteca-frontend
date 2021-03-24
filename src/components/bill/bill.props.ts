import { ArrayField, Control } from 'react-hook-form';

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

export interface BillTableProps {
  header: Array<{ name: string; width: string }>;
  isQuote: boolean;
  calculateTotalAndIva(): void;
  control: Control<{
    billNo: string;
    date: string;
    otherExpenses: string | null;
    iva: string | null;
    totalValue: string | null;
    provider: string | null;
    products:
      | Product[]
      | {
          quantityField: number;
          productField: null;
          detailField: null;
          totalField: null;
        }[];
  }>;
  fields: Partial<ArrayField<Record<string, any>, 'id'>>[];
  append: (
    value: Partial<Record<string, any>> | Partial<Record<string, any>>[],
    shouldFocus?: boolean | undefined
  ) => void;
  remove: (index?: number | number[] | undefined) => void;
}
