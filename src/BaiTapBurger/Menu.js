import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBreadMid } from "../redux/action/burgerAction";

export default function Menu() {
  const { burger, menu, total } = useSelector((state) => state.burger);

  const dispatch = useDispatch();

  const handleAddMidBread = (food, amount) =>{

    dispatch(addBreadMid(food, amount));
  }

  const renderMenu = () => {
    return Object.entries(menu).map(([food, price], index) => {
      return (
        <tr key={index} className="text-center">
          <td>{food}</td>
          <td
            style={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <button
              className="btn btn-success"
              onClick={() => {
                handleAddMidBread(food, -1);
              }}
            >
              -
            </button>
            <p className="px-2">{burger[food]}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                handleAddMidBread(food, 1);
              }}
            >
              +
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[food] * price}</td>
        </tr>
      );
    });
  };

  return (
    <div className="col-6">
      <h3 className="text-center py-3">Menu</h3>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th>Food</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tfoot>
          <tr className="text-center">
            <td colSpan="2"></td>
            <td>Total</td>
            <td>{total}</td>
          </tr>
        </tfoot>
        {renderMenu()}
      </table>
    </div>
  );
}
