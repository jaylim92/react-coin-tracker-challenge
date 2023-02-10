import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getCoinData, getPriceData } from '../api';
import { CoinInfo, CoinPriceData } from '../Interface/ICoinData';

const Header = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  font-size: 65px;
  font-weight: 700;
  color: ${(prop) => prop.theme.accentColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-template-rows: repeat(2, 2fr);
  gap: 25px 30px;
`;

const CoinInfoBar = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  text-align: center;
  font-weight: 700;
  background-color: #fd8700;
  border-radius: 10px;
  span {
    padding: 5px;
    font-size: 30px;
    p {
      margin-bottom: 15px;
    }
    p:nth-child(2) {
      font-weight: 300;
    }
  }
  img {
    width: 30px;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 200px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-weight: 700;
  flex-direction: column;
  font-weight: 200;
  :first-child {
    background-color: #4935faf2;
  }
  :nth-child(2) {
    background-color: #1477f8f1;
  }
  :nth-child(3) {
    background-color: #fa35b8f1;
  }
  :nth-child(4) {
    background-color: #f8e914f0;
  }
`;
export const CardTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const CardSummary = styled.div`
  display: flex;
  width: 500px;
  margin-top: 40px;
  font-weight: 700;
`;

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 80px;
`;
const Btn = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  padding: 10px 50px;
  border-radius: 10px;
  background-color: #4a2ada;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColors};
  a {
    display: block;
    font-weight: 600;
  }
`;

function Coin() {
  const { state } = useLocation() as { state: { name: string } };
  const { coinId } = useParams() as { coinId: string };
  const priceMatch = useMatch('/:coinId/price');
  const chartMatch = useMatch('/:coinId/chart');
  console.log(state);
  const { isLoading: dataLoading, data: coinData } = useQuery<CoinInfo>(
    ['coinData', coinId],
    () => getCoinData(coinId)
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<CoinPriceData>(
    ['coinPrice', coinId],
    () => getPriceData(coinId)
  );

  const loading = dataLoading || priceLoading;

  return (
    <>
      <Header>Coin : {state?.name || coinData?.name}</Header>
      {loading ? (
        'Loading...'
      ) : (
        <Container>
          <CoinInfoBar>
            <span>
              <p>Rank</p>
              <p>{coinData?.rank}</p>
            </span>
            <span>
              <p>Symbol</p>
              <p>{coinData?.symbol}</p>
            </span>
            <span>
              <p>Logo</p>
              <img src={`${coinData?.logo}`} />
            </span>
          </CoinInfoBar>
          <CardSummary>{coinData?.description}</CardSummary>
          <BtnContainer>
            <Btn isActive={priceMatch !== null}>
              <Link to={'price'}>Price</Link>
            </Btn>
            <Btn isActive={chartMatch !== null}>
              <Link to={'chart'}>Chart</Link>
            </Btn>
          </BtnContainer>
          <Outlet context={priceData} />
        </Container>
      )}
    </>
  );
}

export default Coin;
