import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoins } from '../api';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Header = styled.header`
  margin: 30px;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: ${(props) => props.theme.btnColor};
  border-radius: 10px;
  position: relative;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColors};
  font-size: 3rem;
`;

const CoinImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
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

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>(['allCoins'], fetchCoins, {
    select: (data) => data.slice(0, 100),
  });

  return (
    <Container>
      <Header>
        <Title>All That Coins</Title>
      </Header>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <CoinsList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <CoinImg
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
