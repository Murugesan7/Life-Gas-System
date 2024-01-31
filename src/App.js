import './App.css';
import React from 'react';
import Header from "./Components/Header/Header"
import TopContent from './Components/TopContent/TopContent';
import ProductContainer from './Components/ProductContainer/ProductContainer';

function App() {
  return (
    <div>
      <Header/>
      <TopContent/>
      <ProductContainer/>
    </div>
  );
}

export default App; 
