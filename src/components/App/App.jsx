import React from "react";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import DetailsPage from "../../pages/DetailsPage/DetailsPage";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
