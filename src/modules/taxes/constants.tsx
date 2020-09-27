export const options: Array<{ value: string, copy: string }>  = [
  { value: '1-2020', copy: 'CUATRIMESTRE 1 - 2020' },
  { value: '2-2020', copy: 'CUATRIMESTRE 2 - 2020' },
  { value: '3-2020', copy: 'CUATRIMESTRE 3 - 2020' },
];

export const header: Array <{ name: string, width: string}> = [
  { name: 'factura', width: '20%'},
  { name: 'proveedor', width: '30%'},
  { name: 'total', width: '20%'},
  { name: 'fecha', width: '20%'},
];

export const rows = [
  { facturaNo: '125', client: 'pmi representaciones', total: '$15.000.000', date: 'febrero 20 de 2020', paid: true },
  { facturaNo: '125', client: 'pmi representaciones', total: '$15.000.000', date: 'febrero 20 de 2020', paid: false },
  { facturaNo: '125', client: 'pmi representaciones', total: '$15.000.000', date: 'febrero 20 de 2020', paid: false },
  { facturaNo: '125', client: 'pmi representaciones', total: '$15.000.000', date: 'febrero 20 de 2020', paid: true },
  { facturaNo: '125', client: 'pmi representaciones', total: '$15.000.000', date: 'febrero 20 de 2020', paid: true },
  { facturaNo: '125', client: 'pmi representaciones', total: '$15.000.000', date: 'febrero 20 de 2020', paid: false },
];