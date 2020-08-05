export const options: Array<{ value: string, copy: string }>  = [
  { value: '3', copy: 'ultimos 3 meses' },
  { value: '6', copy: 'ultimos 6 meses' },
  { value: '12', copy: 'ultimos 12 meses' },
  { value: '0', copy: 'mas de un año' },
];

export const header: Array <{ name: string, width: string}> = [
  { name: 'factura', width: '20%'},
  { name: 'proveedor', width: '30%'},
  { name: 'total', width: '20%'},
  { name: 'fecha', width: '20%'},
  { name: 'acciones', width: '10%'},
];

export const rows = [
  { facturaNo: '125', client: 'pmi representaciones', total: '$15.000.000', date: 'febrero 20 de 2020', paid: true },
  { facturaNo: '125', client: 'pmi representaciones', total: '$15.000.000', date: 'febrero 20 de 2020', paid: false },
  { facturaNo: '125', client: 'pmi representaciones', total: '$15.000.000', date: 'febrero 20 de 2020', paid: false },
  { facturaNo: '125', client: 'pmi representaciones', total: '$15.000.000', date: 'febrero 20 de 2020', paid: true },
  { facturaNo: '125', client: 'pmi representaciones', total: '$15.000.000', date: 'febrero 20 de 2020', paid: true },
  { facturaNo: '125', client: 'pmi representaciones', total: '$15.000.000', date: 'febrero 20 de 2020', paid: false },
];