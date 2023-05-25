import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./utils/hooks/DataContext";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Apartment from "./pages/Apartment";
const jsonData = require("./datas/apartmentDatas.json");

const App = () => {
  const [data, setData] = useState(jsonData);

  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Apartment' element={<Apartment />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
