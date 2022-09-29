import React, {useEffect, useState} from "react";
import apiParts from "../../service/api_parts"; 
import Modal from "react-modal";
import Loader from "../Loader";

import {customStyles} from "./modalStyle";
import "./index.css";

function Ticket({inputSearch, valueType, priceOrder}) {

    const [parts, setParts] = useState([]);
    const [copyParts, setCopyParts] = useState([]);

    const [mouse, setMouse] = useState([]);
    const [mousepad, setMousepad] = useState([]);
    const [keyboard, setKeyBoard] = useState([]);
    const [monitor, setMonitor] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, SetIsLoaded] = useState(false);
    
    const [modalName, setModalName] = useState("");
    const [modalType, setModalType] = useState("");
    const [modalPrice, setModalPrice] = useState(0);

    let result = "";

    const myFunction = async () => {

        const result = await apiParts();

        if(result) {

            result.sort(function(a, b) {
                return parseInt(b.price) - parseInt(a.price);
            });

            setParts(result);
            setCopyParts(result);
            SetIsLoaded(true);

            let a = result.filter(e => e.type.toLowerCase() === "mouse");
            let b = result.filter(e => e.type.toLowerCase() === "mousepad");
            let c = result.filter(e => e.type.toLowerCase() === "keyboard");
            let d = result.filter(e => e.type.toLowerCase() === "monitor");

            setMouse(a);
            setMousepad(b);
            setKeyBoard(c);
            setMonitor(d);
        }
    }

    function receiveValues(name, type, price) {
        setModalName(name)
        setModalType(type)
        setModalPrice(price)
        setIsOpen(true)
    }
    
    useEffect(()=> {
        myFunction()
    }, [apiParts])


    useEffect(() => {

        orderPrice(parts, priceOrder)
        controlFilters(valueType)
            
        if(inputSearch === "" && valueType === "type") {
            setParts(copyParts)
        } else if(inputSearch !== "") {
            result = parts.filter(item => item.name.toLowerCase().includes(inputSearch.toLowerCase()));
            setParts(result);
        }

    }, [inputSearch, valueType, priceOrder])

    function controlFilters(valueType) {

        if(valueType === "" || valueType.toLowerCase() === "type") {
            setParts(copyParts)
        }   else if (valueType.toLowerCase() === "mouse") {
            setParts(mouse)
        }   else if (valueType.toLowerCase() === "mousepad") {
            setParts(mousepad)
        }   else if (valueType.toLowerCase() === "keyboard") {
            setParts(keyboard)
        }   else if (valueType.toLowerCase() === "monitor") {
            setParts(monitor)
        }
    }

    function orderPrice(parts,priceOrder) {
        let order; 
        
        if(priceOrder.toLowerCase() === "lower") { 

            order = parts.sort(function(a,b) {
                return parseInt(a.price) - parseInt(b.price)
            })
            setParts(order)

        } else if (priceOrder.toLowerCase() === "higher") {

              order = parts.sort(function(a, b) {
                return parseInt(b.price) - parseInt(a.price);
            });
            setParts(order)
        }
    }

    if (isLoaded) {
    return (
        <div className="list-ticket">
            {parts.map((part) => (
                <div className="individual-ticket" 
                onClick={() => receiveValues(part.name, part.type, part.price)}
                >   
                    <p>{part.name}</p>
                    <p>{part.type}</p>
                    <p>{part.price}</p>
                </div>

            ))}

        <Modal 
            isOpen={isOpen}
            style={customStyles}
        >
            <span 
            style={{position: "absolute", top:0, right:"6px", fontSize: 20, cursor:"pointer"}}
            onClick={() => setIsOpen(false)}
            >
                x
            </span>
            <p>{modalName}</p>
            <p>{modalType}</p>
            <p>{modalPrice}</p>
        </Modal>

        </div>
    )
}
    return <Loader />
};

export default Ticket;