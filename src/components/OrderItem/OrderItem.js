import React, { Fragment } from "react";

const OrderItem = (props) => {

  const item = props.item
  const handleDelete = () => {
    props.onDelete(item.id);
  };

  return (
    <Fragment>
      <li>
        OrderId: {item.id}, Price: {item.price}, Dish: {item.dish}, Table:
        {item.table}
      </li>
      <button onClick={handleDelete}>Delete</button>
    </Fragment>
  );
};

export default OrderItem;
