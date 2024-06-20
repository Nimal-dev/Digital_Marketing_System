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
     <Sidebar />
      <div class="content">
        <Navbar />
        {/* {usertype === 0 ? <Widgets /> : null} Conditionally render Widgets based on usertype  */}
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
     <div class="col-12">
        <div class="bg-secondary rounded h-100 p-4">
          <h6 class="mb-2">Orders</h6>
          <div class="table-responsive">
          {orders.length === 0 ? (
          <p>No orders found!</p>
        ) : (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Order Id</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Items</th>
                  <th scope="col">Date</th>
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
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default EntrepreneurOrders;
