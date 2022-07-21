import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";

const Bhishm = ()=> {
    
   const [menuData, setManuData]= useState(Menu);

   const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      });
  
      setManuData(updatedList);
    };
    
    return (
        <>
        <div className="q">
            <div className="q1">Home</div>
            <div className="q1">Contact Us</div>
            <div className="q1">About As</div>
            <div className="q1">Dealership</div>
            <div className="q1 log"  >Cart</div>
            <div className="q1 log"  >Login</div>
            </div>
        <nav className="navbar">
            <div className="btn-group">

                <button className="btn-group__item" onClick={()=>filterItem("detergent cake")}>Detergent Cake</button>
                <button className="btn-group__item" onClick={()=>filterItem("detergent power")}>Detergent Power</button>
                <button className="btn-group__item" onClick={()=>filterItem("Toilet Tleaner")}>Toilet Cleaner</button>
                <button className="btn-group__item" onClick={()=>filterItem("Combo Prodect")}>Combo Prodect</button>
                <button className="btn-group__item" onClick={()=>setManuData(Menu)}>All</button>
            </div>
        </nav>
         <MenuCard menuData={menuData}/>   
        </>
    )
}

export default Bhishm;