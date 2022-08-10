import React from "react";
import {Link, Outlet} from "react-router-dom";

function AllOrders({orders}){
    return(
        <div className="list">
            <h2>All Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li><Link to={`/orders/${order.id}`} key={order.id}>
                    Order ID: {order.id}
                    </Link></li>
                    ))} 
            </ul>
            <Outlet />
        </div>
    )
}
export default AllOrders;