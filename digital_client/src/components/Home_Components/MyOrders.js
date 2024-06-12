import React, { useEffect, useState } from 'react';
import CustomerNavbar from '../Common/CustomerNavbar';
import CustomerFooter from '../Common/CustomerFooter';

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    const customerId = userdata._id;

    fetch(`http://localhost:4000/customer/getOrders/${customerId}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setOrders(data.orders);
        } else {
          console.error('Error fetching orders:', data.message);
        }
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <>
      <CustomerNavbar />
      {/* -------------Top Bar Start--------------- */}
      <div
        style={{
          backgroundColor: "#3b5d50",
          padding: "5px 0px 20px 0px",
        }}
      >
        <h1 style={{ marginLeft: "50px", marginTop: "20px" }}>My Orders</h1>
      </div>
      {/* -------------Top Bar End--------------- */}
      <div className="container">
        {orders.length === 0 ? (
          <p>You have not placed any orders yet.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                  <td>₹{order.total.toFixed(2)}</td>
                  <td>
                    <ul>
                      {order.items.map(item => (
                        <li key={item.productId._id}>
                          <img
                            src={`http://localhost:4000${item.productId.imageUrl}`}
                            alt="Product"
                            style={{ width: "50px", height: "50px", marginRight: "10px" }}
                          />
                          {item.productId.name} - ₹{item.price.toFixed(2)}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <CustomerFooter />
    </>
  );
}

export default MyOrders;
