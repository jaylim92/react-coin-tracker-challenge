import { useOutletContext } from 'react-router-dom';
import { CoinPriceData } from '../Interface/ICoinData';
import { Card, CardTitle, CardWrapper } from './Coin';

function CoinPrice() {
  const priceData = useOutletContext<CoinPriceData>();
  return (
    <CardWrapper>
      <Card>
        <CardTitle>Price BTC</CardTitle>
        {priceData?.price_btc}
      </Card>
      <Card>
        <CardTitle>Price</CardTitle>$
        {Math.floor(parseInt(`${priceData?.price_usd}`))}
      </Card>
      <Card>
        <CardTitle>MAX SUPPLY</CardTitle>
        {priceData?.max_supply}
      </Card>
      <Card>
        <CardTitle>PERCENT 1H</CardTitle>
        {priceData?.percent_change_1h}
      </Card>
    </CardWrapper>
  );
}

export default CoinPrice;
