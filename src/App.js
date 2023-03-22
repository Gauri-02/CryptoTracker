import React, { useState, useEffect } from "react";
import "./App.css";
// import { get } from '../node_modules/@jridgewell/set-array/src/set-array';
import axios from "axios";
import Coins from "./Coin";

//

function App() {
  const [coins, setCoins] = useState([]);
  const [searchs, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coine) =>
    coine.name.toLowerCase().includes(searchs.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="search"
            className="coin-input"
            onChange={handleChange}
          ></input>
        </form>
      </div>
      {filterCoins.map((coines) => {
        return (
          <Coins
            key={coines.id}
            name={coines.name}
            image={coines.image}
            symbol={coines.symbol}
            marketcap={coines.market_cap}
            price={coines.current_price}
            priceChange={coines.price_change_percentage_24h}
            volume={coines.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
