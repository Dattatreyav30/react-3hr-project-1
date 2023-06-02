import React, { Fragment, useState } from "react";
import './OrderInput.css'
const OrderInput = (props) => {
  const [inputId, setIdInput] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [select, setSelect] = useState("");

  const idInputHandler = (e) => {
    setIdInput(e.target.value);
  };

  const priceInputHandler = (e) => {
    setPrice(e.target.value);
  };

  const dishInputHandler = (e) => {
    setDish(e.target.value);
  };

  const selectHandler = (e) => {
    setSelect(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const newOrder = {
      id: inputId,
      price: price,
      dish: dish,
      table: select,
    };
    props.onAddOrder(newOrder);
    setIdInput("");
    setPrice("");
    setDish("");
    setSelect("");
  };

  return (
    <Fragment>
      <form method="post" onSubmit={formHandler} id = 'user-form'>
        <input type="text" placeholder="OrderId" value={inputId} onChange={idInputHandler} />
        <input type="number" placeholder="Price" value={price} onChange={priceInputHandler} />
        <input type="text" placeholder="Dish" value={dish} onChange={dishInputHandler} />
        <select value={select} onChange={selectHandler}>
          <option>select Table</option>
          <option>Table 1</option>
          <option>Table 2</option>
          <option>Table 3</option>
        </select>
        <button type="submit">Order</button>
      </form>
    </Fragment>
  );
};

export default OrderInput;
