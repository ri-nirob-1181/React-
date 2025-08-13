import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppProvider from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;