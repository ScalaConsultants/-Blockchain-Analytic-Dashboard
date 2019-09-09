export default {
  conseilServerInfo: {
    url: `${process.env.REACT_APP_CORS_PROXY}${process.env.REACT_APP_CONSEIL_URL}`,
    apiKey: `${process.env.REACT_APP_CONSEIL_KEY}`
  },
  platform: "tezos",
  network: "alphanet",
  entity: "operations"
};
