import React from "react";
import { useSelector } from "react-redux";
import Burger from "./Burger";
import Menu from "./Menu";

export default function BaiTapBurger() {
  const { burger, menu, total } = useSelector((state) => state.burger);


  return (
    <div className="container">
      <div className="row pt-5">
        <Burger />
        
        <Menu />
       
      </div>
    </div>
  );
}
