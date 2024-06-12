import React, { useEffect, useState } from 'react';
import Navbar from '../Common/Navbar';
import Sidebar from '../Common/Sidebar';


function EntrepreneurOrders() {
  const [orders, setOrders] = useState([]);
  const [entrepreneurId, setEntrepreneurId] = useState('');

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    const entrepreneurId = userdata._id;

    fetch(`http://localhost:4000/entrepreneur/getEntrepreneurOrders/${entrepreneurId}`)
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
      <Navbar />
      {/* -------------Top Bar Start--------------- */}
      <div
        style={{
          backgroundColor: "#3b5d50",
          padding: "5px 0px 20px 0px",
        }}
      >
        <h1 style={{ marginLeft: "50px", marginTop: "20px" }}>Customer Orders</h1>
      </div>
      {/* -------------Top Bar End--------------- */}
      <div className="container">
        <Sidebar/>
        {orders.length === 0 ? (
          <p>No orders found for your products.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.userId.name}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                  <td>₹{order.total.toFixed(2)}</td>
                  <td>
                    <ul>
                      {order.items.filter(item => item.productId.entrepreneurId === entrepreneurId).map(filteredItem => (
                        <li key={filteredItem.productId._id}>
                          <img
                            src={`http://localhost:4000${filteredItem.productId.imageUrl}`}
                            alt="Product"
                            style={{ width: "50px", height: "50px", marginRight: "10px" }}
                          />
                          {filteredItem.productId.name} - ₹{filteredItem.price.toFixed(2)}
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
      
    </>
  );
}

export default EntrepreneurOrders;
