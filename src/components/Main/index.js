import React from "react";
import Ticket from "../Ticket";
import "./index.css";

function Main({inputSearch, valueType, priceOrder}) {
    return (
        <main>
            <div className="main-container">
                <Ticket inputSearch={inputSearch} valueType={valueType} priceOrder={priceOrder}/> 
            </div>
        </main>
    )
}

export default Main;