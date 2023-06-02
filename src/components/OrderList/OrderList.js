import React from "react";
import OrderItem from "../OrderItem/OrderItem";

const OrderList = (props) => {
  const handleDelete = (orderId) => {
    props.onDelete(orderId);
  };

  return (
    <ul>
      {props.items.map((item) => (
        <OrderItem key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default OrderList;
