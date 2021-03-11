export const header = (isQuote: boolean, action: string) =>
  isQuote && action === 'create'
    ? [
        { name: 'CANTIDAD', width: '25%' },
        { name: 'PRODUCTO', width: '35%' },
        { name: 'DETALLE', width: '50%' },
      ]
    : [
        { name: 'CANTIDAD', width: '15%' },
        { name: 'PRODUCTO', width: '25%' },
        { name: 'DETALLE', width: '40%' },
        { name: 'VALOR TOTAL', width: '30%' },
      ];
