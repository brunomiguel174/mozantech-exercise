import React, {useEffect, useState} from "react";
import partTypes from "../../service/api_partTypes";

import "./index.css";

export default function Select({valueType, setValueType}) {
    
    const [types, setTypes] = useState([]);

    const myFunction = async () => {
        const result = await partTypes(); 
        setTypes(result);
    }

    useEffect(() => {
        myFunction();
    }, [partTypes])

    useEffect(()=> {
    }, [types])

    return (
        <div className="select-container">
            <select className="select" value={valueType} onChange={(e) => setValueType(e.target.value)}>
                <option value="Type" key={"type"} selected>Type</option>
                {types.map((option) => (
                    <option value={option} key={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
