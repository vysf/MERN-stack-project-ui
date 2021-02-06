import React from "react";
import "./App.css";
import { Routes, store } from "../config";
import { Provider } from "react-redux";

function App() {
  return (
    // membungkus dengan provider untuk menambahkan
    // props store yang berisi seluruh state global
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
