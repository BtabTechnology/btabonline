"use client"

import React from "react"
import Head from "next/head"

const VendorProfilePage = () => {
  // Mock data
  const vendorInfo = {
    name: "TechGadgets Inc.",
    joinDate: "January 15, 2023",
    productsCount: 47,
    rating: 4.7,
  }

  const productPerformance = [
    { name: "Smartphone X", sales: 1200, revenue: 600000 },
    { name: "Tablet Pro", sales: 800, revenue: 320000 },
    { name: "SmartWatch 3", sales: 1500, revenue: 225000 },
    { name: "Wireless Earbuds", sales: 2200, revenue: 176000 },
    { name: "Power Bank", sales: 1800, revenue: 72000 },
  ]

  return (
    <>
      <Head>
        <title>Vendor Profile - {vendorInfo.name}</title>
      </Head>
      <div className="container">
        <h1 className="title">Vendor Dashboard</h1>

        {/* Vendor Info Card */}
        <div className="card">
          <h2>{vendorInfo.name}</h2>
          <p>Member since {vendorInfo.joinDate}</p>
          <div className="flex-between">
            <div>
              <p>Products: {vendorInfo.productsCount}</p>
              <p>Rating: {vendorInfo.rating}/5</p>
            </div>
            <button className="btn">Edit Profile</button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="btn">Add New Product</button>
          <button className="btn">Update Inventory</button>
          <button className="btn">Manage Retailers</button>
        </div>

        {/* Product Performance */}
        <div className="card">
          <h2>Product Performance</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {productPerformance.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.sales}</td>
                  <td>${product.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Inventory Status */}
        <div className="card">
          <h2>Inventory Status</h2>
          <div className="inventory-list">
            <div className="inventory-item">
              <div className="flex-between">
                <span>Smartphone X</span>
                <span>75% in stock</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="inventory-item">
              <div className="flex-between">
                <span>Tablet Pro</span>
                <span>45% in stock</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "45%" }}></div>
              </div>
            </div>
            <div className="inventory-item">
              <div className="flex-between">
                <span>SmartWatch 3</span>
                <span>90% in stock</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Retailer Relationships */}
        <div className="card">
          <h2>Retailer Relationships</h2>
          <div className="retailer-list">
            <div className="flex-between">
              <span>TechMart</span>
              <span className="badge badge-active">Active</span>
            </div>
            <div className="flex-between">
              <span>Gadget World</span>
              <span className="badge badge-active">Active</span>
            </div>
            <div className="flex-between">
              <span>ElectroHub</span>
              <span className="badge badge-pending">Pending</span>
            </div>
          </div>
          <button className="btn full-width">Add New Retailer</button>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
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
        .inventory-list,
        .retailer-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .progress-bar {
          background-color: #e0e0e0;
          height: 20px;
          border-radius: 10px;
          overflow: hidden;
        }
        .progress {
          background-color: #4caf50;
          height: 100%;
        }
        .badge {
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 12px;
        }
        .badge-active {
          background-color: #4caf50;
          color: white;
        }
        .badge-pending {
          background-color: #ffc107;
          color: black;
        }
        .full-width {
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default VendorProfilePage
