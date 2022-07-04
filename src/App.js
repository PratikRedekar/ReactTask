import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
      <Route path="/" element={<ProductListing/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
      {/* <Route path="/product/:product/2" element={<InsideHtml/>} /> */}
      <Route>404 Not Found</Route>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
