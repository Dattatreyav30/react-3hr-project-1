import React, { Fragment, useState, useEffect } from "react";
import OrderInput from "./components/OrderInput/OrderInput";
import OrderList from "./components/OrderList/OrderList";

const App = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    localStorage.setItem("orderLists", JSON.stringify(lists));
  }, [lists]);

  const onSaveHandler = (newOrder) => {
    setLists((prevLists) => [...prevLists, newOrder]);
  };

  const onDeleteHandler = (orderId) => {
    setLists((prevLists) => prevLists.filter((order) => order.id !== orderId));
  };

  return (
    <Fragment>
      <OrderInput onAddOrder={onSaveHandler} />
      <OrderList items={lists} onDelete={onDeleteHandler} />
    </Fragment>
  );
};

export default App;
