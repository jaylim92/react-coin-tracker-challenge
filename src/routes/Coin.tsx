import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

function Coin() {
  const [isLoading, setIsloading] = useState(true);
  const {
    state: { name },
  } = useLocation();
  const { coinId } = useParams();
  const [coinInfo, setCoinInfo] = useState({});
  const [coinPrice, setCoinPrice] = useState({});

  const getCoinData = async () => {
    try {
      const res = await axios.get(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      );
      setCoinInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPriceData = async () => {
    try {
      const res = await axios.get(
        `https://api.coinpaprika.com/v1/ticker/${coinId}`
      );
      setCoinPrice(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoinData();
    getPriceData();
  }, []);

  return (
    <>
      <div>Coin : {name}</div>
      {isLoading ? 'Loading...' : null}
    </>
  );
}

export default Coin;
