import React, {useState} from "react";

import Header from './components/Header';
import Main from './components/Main';

import './App.css';

function App() {

  const [inputSearch, setInputSearch] = useState("");
  const [valueType, setValueType] = useState("")
  const [priceOrder, setPriceOrder] = useState("higher");

  return (
    <div className="App">

      <Header 
      inputSearch={inputSearch} 
      setInputSearch={setInputSearch} 
      valueType={valueType}
      setValueType={setValueType}
      priceOrder={priceOrder}
      setPriceOrder={setPriceOrder}
      />

      <Main inputSearch={inputSearch} valueType={valueType} priceOrder={priceOrder}/>
    </div>
  );
}

export default App;
