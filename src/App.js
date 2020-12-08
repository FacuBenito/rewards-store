import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import ProductContextProvider from "./context/ProductContext";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Header/>
        <Main />
      </ProductContextProvider>
    </div>
  );
}

export default App;
