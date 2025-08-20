// ProductList.jsx

import React from 'react';
import "./productlist.css"
import Header from '../dashboard/farmer/layout/Header';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: '001',
      name: 'Organic Rice',
      description: '100% organic rice from local farms.',
      category: 'Grains',
      qty: 50,
      qtyUnit: 'kg',
      unitPrice: 30,
      isAvailable: true,
    },
    {
      id: '002',
      name: 'Fresh Mangoes',
      description: 'Fresh seasonal mangoes from the farm.',
      category: 'Fruits',
      qty: 100,
      qtyUnit: 'kg',
      unitPrice: 60,
      isAvailable: true,
    },
    {
      id: '003',
      name: 'Carrot',
      description: 'Fresh organic carrots.',
      category: 'Vegetables',
      qty: 200,
      qtyUnit: 'kg',
      unitPrice: 20,
      isAvailable: false,
    },
  ];

  return (
    <React.Fragment>
    <Header/>
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h4>Product List</h4>
        <button className="btn btn-agriculture" onClick={()=>{
            navigate('/farmer/manage-products/add');
        }}>Add Product</button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="bg-agriculture text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.qty} {product.qtyUnit}</td>
                <td>${product.unitPrice}</td>
                <td>
                  {product.isAvailable ? (
                    <span className="badge bg-success">Available</span>
                  ) : (
                    <span className="badge bg-danger">Out of Stock</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </React.Fragment>
  );
};

export default ProductList;
