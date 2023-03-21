import React, {useState, useEffect }from 'react';
import './App.css';
// import { get } from '../node_modules/@jridgewell/set-array/src/set-array';
import axios from 'axios';

//  

function App() {

  const[coins,setCoins]=useState([]);

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').
    then(res=>{
      setCoins(res.data);
      console.log(res.data);
    }).catch(error=>console.log(error));
  });

  return (
    <div className="App">
      <h1>APIIIII</h1>
    </div>
  );
}

export default App;
