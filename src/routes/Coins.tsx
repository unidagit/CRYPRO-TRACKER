import styled from "styled-components";

const Container = styled.div``;

const Header = styled.header``;

const CoinList = styled.ul``;

const Coin = styled.li``;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function Coins() {
  return <Title>Coins</Title>;
}

export default Coins;
