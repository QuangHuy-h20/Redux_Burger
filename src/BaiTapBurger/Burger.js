import React from "react";
import { useSelector } from "react-redux";

export default function Burger() {

  const { burger } = useSelector((state) => state.burger);

  const renderBreadMid = () => {
    return Object.entries(burger).map(([name, value]) => {
      const breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={i} className={name}></div>);
      }
      return breadMid;
    });
  };

  return (
    <div className="col-6">
      <h3 className="text-center py-3">Burger Store</h3>
      <div className="breadTop"></div>
      {renderBreadMid()}
      <div className="breadBottom"></div>
    </div>
  );
}
