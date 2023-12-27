import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";

import Pricing from "./Pages/Pricing";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Homepage from "./Pages/HomePage";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import CityList from "./Components/CityList";
import City from "./Components/City";
import Form from "./Components/Form";
import CountryList from "./Components/CountryList";
import { CityProvider } from "../Contexts/CityProvider";
import { AuthProvider } from "../Contexts/AuthProvider";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CityProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="Pricing" element={<Pricing />} />
            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CityProvider>
    </AuthProvider>
  );
}

export default App;
