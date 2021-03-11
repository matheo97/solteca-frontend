export const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

export const moneyDeformatter = (currency: string) =>
  currency ? Number(currency.replace(/[^0-9.-]+/g, '')) : 0;
