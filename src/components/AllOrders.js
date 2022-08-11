import React from "react";
import {Link, Outlet} from "react-router-dom";

function AllOrders({orders}){
    return(
        <div>
            <h2>All Orders</h2>
            <p>Orders by all Dog Pod members</p>
            <ul>
                {orders.map((order) => (
                    <Link to={`/orders/${order.id}`} key={order.id}>
                    <li>Order ID: {order.id}</li>
                    </Link>
                    ))} 
            </ul>
            <Outlet />
        </div>
    )
}
export default AllOrders;