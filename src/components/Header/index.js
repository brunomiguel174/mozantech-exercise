import React, {useEffect, useState} from "react";
import Select from "../Select";
import "./index.css";


function Header({inputSearch, setInputSearch, valueType, setValueType, priceOrder, setPriceOrder}) {
    return (
        <header>
        <div className="title"> 
          <h1>Store Parts</h1>
        </div>

            <div className="div-container">
                <input 
                id="input-search" 
                type="text" 
                placeholder="Search..."
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
                />

                <select className="select" onChange={(e) => setPriceOrder(e.target.value)}>
                    <option value="higher" key="higher"> Price order: ⇧ </option>
                    <option value="lower" key="lower">  Price order: ⇩ </option>
                </select>
                
                <Select 
                valueType={valueType} 
                setValueType={setValueType}
                /> 
                
            </div>
        </header>
    )
}

export default Header;