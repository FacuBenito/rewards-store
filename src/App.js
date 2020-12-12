import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import ProductContextProvider from "./context/ProductContext";
import UserContextProvider from "./context/UserContext";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <UserContextProvider>
          <Header/>
          <Main />
        </UserContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
