"use client"

import React from "react"
import Head from "next/head"

const RetailerProfilePage = () => {
  // Mock data
  const retailerInfo = {
    name: "GadgetWorld Store",
    joinDate: "March 10, 2023",
    productsCount: 128,
    ordersFulfilled: 1547,
  }

  const topSellingProducts = [
    { name: "Smartphone X", sales: 250, inventory: 50 },
    { name: "Wireless Earbuds Pro", sales: 180, inventory: 30 },
    { name: "Smart Home Hub", sales: 120, inventory: 25 },
    { name: "Fitness Tracker Elite", sales: 100, inventory: 40 },
    { name: "4K Action Camera", sales: 80, inventory: 15 },
  ]

  const recentOrders = [
    { id: "12345", date: "2023-07-28", status: "Shipped", total: 599.99 },
    { id: "12346", date: "2023-07-27", status: "Processing", total: 149.99 },
    { id: "12347", date: "2023-07-26", status: "Delivered", total: 299.99 },
    { id: "12348", date: "2023-07-25", status: "Cancelled", total: 79.99 },
  ]

  return (
    <>
      <Head>
        <title>Retailer Profile - {retailerInfo.name}</title>
      </Head>
      <div className="container">
        <h1 className="title">Retailer Dashboard</h1>

        {/* Retailer Info Card */}
        <div className="card">
          <h2>{retailerInfo.name}</h2>
          <p>Member since {retailerInfo.joinDate}</p>
          <div className="flex-between">
            <div>
              <p>Products: {retailerInfo.productsCount}</p>
              <p>Orders Fulfilled: {retailerInfo.ordersFulfilled}</p>
            </div>
            <button className="btn">Edit Store</button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="btn">Add New Products</button>
          <button className="btn">Manage Inventory</button>
          <button className="btn">Process Orders</button>
        </div>

        {/* Top Selling Products */}
        <div className="card">
          <h2>Top Selling Products</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
                <th>Inventory</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {topSellingProducts.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.sales}</td>
                  <td>{product.inventory}</td>
                  <td>
                    <button className="btn btn-small">Restock</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Orders */}
        <div className="card">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>
                    <span
                      className={`badge badge-${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    <button className="btn btn-small">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Store Performance */}
        <div className="card">
          <h2>Store Performance</h2>
          <div className="performance-grid">
            <div className="performance-item">
              <h3>Total Revenue</h3>
              <p className="large-number">$45,678.90</p>
            </div>
            <div className="performance-item">
              <h3>Conversion Rate</h3>
              <p className="large-number">3.2%</p>
            </div>
            <div className="performance-item">
              <h3>Average Order Value</h3>
              <p className="large-number">$127.50</p>
            </div>
            <div className="performance-item">
              <h3>Customer Satisfaction</h3>
              <p className="large-number">4.7/5.0</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .card {
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .flex-between {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .btn {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
        }
        .btn-small {
          padding: 5px 10px;
          font-size: 12px;
        }
        .quick-actions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th,
        td {
          text-align: left;
          padding: 8px;
          border-bottom: 1px solid #ddd;
        }
        .badge {
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 12px;
        }
        .badge-shipped {
          background-color: #4caf50;
          color: white;
        }
        .badge-processing {
          background-color: #ffc107;
          color: black;
        }
        .badge-delivered {
          background-color: #2196f3;
          color: white;
        }
        .badge-cancelled {
          background-color: #f44336;
          color: white;
        }
        .performance-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .performance-item {
          background-color: #ffffff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .performance-item h3 {
          margin: 0 0 10px 0;
          font-size: 16px;
          color: #333;
        }
        .large-number {
          font-size: 24px;
          font-weight: bold;
          color: #007bff;
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default RetailerProfilePage
