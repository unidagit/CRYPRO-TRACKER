import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
// import Price from "./routes/Price";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId" element={<Coin />}>
          {/* 자식 route를 부모 element의 내부가 아닌 route 내부에 작성하는 방법 */}
          {/* 그리고 이 자식 Route들이 어디에 render 될지 부모의 element안에 Outlet을 이용해 표시 */}
          {/* <Route path="chart" element={<Chart />} /> */}
          {/* <Route path="price" element={<Price />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
