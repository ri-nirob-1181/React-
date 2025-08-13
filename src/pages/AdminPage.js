import React from 'react';

const AdminPage = () => {
  return (
    <div className="admin-panel">
      <div className="container">
        <div className="admin-header">
          <h2 className="section-title">Admin Dashboard</h2>
          <button className="btn">Back to Site</button>
        </div>
        
        <div className="admin-stats">
          <div className="stat-card">
            <h3>1,248</h3>
            <p>Total Products</p>
          </div>
          <div className="stat-card">
            <h3>$42,867</h3>
            <p>Total Revenue</p>
          </div>
          <div className="stat-card">
            <h3>324</h3>
            <p>New Orders</p>
          </div>
          <div className="stat-card">
            <h3>1,876</h3>
            <p>Customers</p>
          </div>
        </div>
        
        <div className="admin-actions">
          <button className="btn"><i className="fas fa-plus"></i> Add New Product</button>
          <button className="btn btn-secondary"><i className="fas fa-chart-bar"></i> View Reports</button>
          <button className="btn btn-secondary"><i className="fas fa-users"></i> Manage Users</button>
        </div>
        
        <h3>Recent Orders</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#ORD-7841</td>
              <td>John Smith</td>
              <td>Jun 12, 2023</td>
              <td>$249.99</td>
              <td><span style={{color: '#4caf50'}}>Completed</span></td>
              <td>
                <button className="action-btn edit-btn"><i className="fas fa-edit"></i></button>
                <button className="action-btn delete-btn"><i className="fas fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>#ORD-7840</td>
              <td>Emma Johnson</td>
              <td>Jun 11, 2023</td>
              <td>$129.99</td>
              <td><span style={{color: '#ff9800'}}>Processing</span></td>
              <td>
                <button className="action-btn edit-btn"><i className="fas fa-edit"></i></button>
                <button className="action-btn delete-btn"><i className="fas fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>#ORD-7839</td>
              <td>Michael Brown</td>
              <td>Jun 10, 2023</td>
              <td>$89.99</td>
              <td><span style={{color: '#4caf50'}}>Completed</span></td>
              <td>
                <button className="action-btn edit-btn"><i className="fas fa-edit"></i></button>
                <button className="action-btn delete-btn"><i className="fas fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>#ORD-7838</td>
              <td>Sarah Davis</td>
              <td>Jun 9, 2023</td>
              <td>$199.99</td>
              <td><span style={{color: '#f44336'}}>Cancelled</span></td>
              <td>
                <button className="action-btn edit-btn"><i className="fas fa-edit"></i></button>
                <button className="action-btn delete-btn"><i className="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;