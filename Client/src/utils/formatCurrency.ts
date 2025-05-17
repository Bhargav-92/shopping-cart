const currencyFormatter = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency',
});

const formatCurrency = (number: number) => {
  return currencyFormatter.format(number);
};

export default formatCurrency;
