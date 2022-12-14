import { useParams } from "react-router-dom";

interface RouterParams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<RouterParams>();
  console.log(coinId);
  return (
    <div>
      <h1>Coin {coinId}</h1>
    </div>
  );
}

export default Coin;
