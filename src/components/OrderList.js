import React from "react";
import {Link, Outlet} from "react-router-dom";

function OrderList({orders}){
    
  return(
    <div className="list">
      <h2>Current Orders</h2>
      <nav>
        {orders.map((order) => (
          <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/orders/${order.id}`}
          key={order.id}
          >
          {order.pickup_date}
        </Link>
        ))} 
      </nav>
      <Outlet />
    </div>
  )
}
export default OrderList;