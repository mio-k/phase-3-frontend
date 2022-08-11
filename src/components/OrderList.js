import React from "react";
import {Link, Outlet} from "react-router-dom";

function OrderList({orders, dogName}){
    
  return(
    <div className="list">
      <h2>Current Orders for {dogName}</h2>
      <p>Here are upcoming orders for {dogName}.</p>
      <ul>
        {orders.map((order) => (
          <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/orders/${order.id}`}
          key={order.id}
          >
          <li>{order.pickup_date}</li>
        </Link>
        ))} 
      </ul>
      <Outlet />
    </div>
  )
}
export default OrderList;