import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./pages/index";
import { Context, createContext, useState } from "react";

export const UserContext = createContext(null);

function App() {
  const swapCurrencies = [
    {
      id: 0,
      name: "BITCOIN",
      symbol: "btc",
      logo: "https://assets.coincap.io/assets/icons/btc@2x.png",
    },
    {
      id: 1,
      name: "BITCOIN",
      symbol: "btc",
      logo: "https://assets.coincap.io/assets/icons/btc@2x.png",
    },
  ];

  const [fromCoin, setFromCoin] = useState(swapCurrencies[0]);
  const [toCoin, setToCoin] = useState(swapCurrencies[1]);

  return (
    <UserContext.Provider
      value={[
        (fromCoin: fromCoin),
        (setFromCoin: setFromCoin),
        (toCoin: toCoin),
        (setToCoin: setToCoin),
      ]}
    >
      <Routes>
        {routes.map((data, index) => (
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            exact={true}
            path={data.path}
            element={data.component}
            key={index}
          />
        ))}
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
