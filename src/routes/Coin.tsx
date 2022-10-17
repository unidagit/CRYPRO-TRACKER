import { useParams } from "react-router";

function Coin() {
  const { coinId } = useParams<{ coinId: string }>();
  return <div>Coin</div>;
}

export default Coin;
