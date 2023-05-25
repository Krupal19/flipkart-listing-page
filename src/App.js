import './App.css';
// import Header from './components/Header';
import ProductContainer from './components/ProductContainer';
import { useState } from "react";

function App() {
  const [searchTitle] = useState("");
  return (
    <div className="App">
      <ProductContainer searchTitle={searchTitle} />
    </div>
  );
}

export default App;
