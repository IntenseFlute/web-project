import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Nomal
import Layout from './components/Layout';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import BlogList from './BlogList';
import Blog from './Blog';
import ProductPage from './components/ProductPage';
import AdminDashboard from './AdminDashboard';



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/bl" element={<Blog />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/products" element={<ProductPage />} /> {/* Thêm route mới */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;