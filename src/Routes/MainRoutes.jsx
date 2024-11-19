import React from "react";
import { Routes, Route } from "react-router-dom";

import * as Pages from "./Import";

import NotFound from "../Components/NotFound";
import Loader from "../Components/Loader";
import Navbar from "../UI/Nav/NavBar";
import Footer from "../UI/Footer/Footer";

const MainRoutes = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="rs-page-content-wrapper">
        <React.Suspense fallback={<Loader fallback />}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/">
              <Route index element={<Pages.Home />} />
              <Route path="product" element={<Pages.Product />} />
            </Route>
          </Routes>
        </React.Suspense>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default MainRoutes;
