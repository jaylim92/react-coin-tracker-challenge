import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './routes/Coin';
import CoinChart from './routes/CoinChart';
import CoinPrice from './routes/CoinPrice';
import Coins from './routes/Coins';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId/*" element={<Coin />}>
          <Route path="price" element={<CoinPrice />} />
          <Route path="chart" element={<CoinChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
