// src/App.js

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Home from "./pages/Home/Home";
// import Catalog from "./pages/Catalog/Catalog";
// import Favorites from "./pages/Favorites/Favorites";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home/Home"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <div>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
