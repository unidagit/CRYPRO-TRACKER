import axios from "axios";
const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  // 데이터 얻는법
  // axios.get(url).then(res => console.log(res.data))
  const res = await axios.get(`${BASE_URL}/coins`);
  return res.data;
};

//coin화면 api
export const coinUrl = async (coinId?: string) => {
  const res = await axios.get(`${BASE_URL}/coins/${coinId}`);
  return res.data;
};

//price 화면 api
export const priceUrl = async (coinId?: string) => {
  const res = await axios.get(`${BASE_URL}/tickers/${coinId}`);
  return res.data;
};

//chart 화면 api
export const coinHistoryUrl = async (coinId?: string) => {
  const res = await axios.get(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
  );
  return res.data;
};
// `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`,
