import './App.css';
// import Header from './components/Header';
import ProductContainer from './components/ProductContainer';
import { useState } from "react";

function App() {
  const [searchTitle, setSearchTitle] = useState("");
  return (
    <div className="App">
      {/* <Header setSearchTitle={setSearchTitle} /> */}
      <ProductContainer searchTitle={searchTitle} />
    </div>
  );
}

export default App;
