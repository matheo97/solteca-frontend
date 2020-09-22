export const options: Array<{ value: string, copy: string }>  = [
  { value: 'customers', copy: 'Clientes' },
  { value: 'suppliers', copy: 'Proveedores' },
];

export const header: Array <{ name: string, width: string}> = [
  { name: 'nit', width: '20%'},
  { name: 'cliente', width: '30%'},
  { name: 'direccion', width: '20%'},
  { name: 'autoretenedor', width: '10%'},
  { name: '', width: '20%'},
];

export const rows = [
  { nit: '125', client: 'pmi representaciones', address: '$15.000.000', selfWithholdingTaxes : true, actions: '' },
  { nit: '125', client: 'pmi representaciones', address: '$15.000.000', selfWithholdingTaxes : true, actions: '' },
  { nit: '125', client: 'pmi representaciones', address: '$15.000.000', selfWithholdingTaxes : true, actions: '' },
  { nit: '125', client: 'pmi representaciones', address: '$15.000.000', selfWithholdingTaxes : true, actions: '' },
  { nit: '125', client: 'pmi representaciones', address: '$15.000.000', selfWithholdingTaxes : true, actions: '' },
  { nit: '125', client: 'pmi representaciones', address: '$15.000.000', selfWithholdingTaxes : true, actions: '' },
];