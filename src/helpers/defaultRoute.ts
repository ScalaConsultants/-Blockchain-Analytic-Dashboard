const getDefaultRoute = () => {
  const oneDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  const from = today.getTime() - oneDay;
  const to = today.getTime();

  return `/buyer/ETH,XTZ/10/${from}/${to}`;
};

export default getDefaultRoute;
