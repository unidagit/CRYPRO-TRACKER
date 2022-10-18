import axios from "axios";
const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  // 데이터 얻는법
  // axios.get(url).then(res => console.log(res.data))
  const res = await axios.get(`${BASE_URL}/coins`);
  return res.data;
};
