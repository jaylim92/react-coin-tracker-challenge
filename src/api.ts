import axios from "axios";

export   function fetchCoins(){
return  axios.get('https://api.coinpaprika.com/v1/coins').then(res=>res.data)
}

export const getCoinData = (coinId:string | undefined) => {
    return axios.get(`https://api.coinpaprika.com/v1/coins/${coinId}`).then(res=>res.data)
  };

export const getPriceData = (coinId:string | undefined) => {
  return axios.get(`https://api.coinpaprika.com/v1/ticker/${coinId}`).then(res=>res.data)  
  };