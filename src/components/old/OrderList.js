import React from "react";
import Order from "./Order";

function OrderList({orders, onOrderDelete, onUpdateOrder}) {
  return (
    <div className="list">
      <h2>Current Orders</h2>
      <ul>
        {orders.map((order) => 
          <Order
            key={order.id}
            order={order}
            onOrderDelete={onOrderDelete}
            onUpdateOrder={onUpdateOrder}
          />
        )}
      </ul>
    </div>
  );
}

export default OrderList;