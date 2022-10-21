import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { isDarkAtom } from "../atom";
import { useSetRecoilState } from "recoil";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    transition: color 0.2s ease-in;
    padding: 10px;
    align-items: center;
  }
  &:hover {
    a {
      //Link는 a태그로 변환된다
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.textColor};
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Loader = styled.div`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

interface ICoinProps {}

function Coins({}: ICoinProps) {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  //위 한줄로 아래의 긴코드를 축약할 수 있다.
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);

  // const getCoins = async () => {
  //   const res = await axios("https://api.coinpaprika.com/v1/coins");
  //   setCoins(res.data.slice(0, 100));
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getCoins();
  // });

  return (
    <Container>
      <Helmet>
        <title>코인 </title>
      </Helmet>
      <Header>
        <Title>코인</Title>
        <button onClick={toggleDarkAtom}> Toggle Mode</button>
      </Header>
      {isLoading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                {/* 다른화면으로 state보내기 */}
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
