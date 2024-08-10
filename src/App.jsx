// src/App.js

// import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";

// // import Home from "./pages/Home/Home";
// // import Catalog from "./pages/Catalog/Catalog";
// // import Favorites from "./pages/Favorites/Favorites";
// // import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// import Loader from "./components/Loader/Loader";
// import Layout from "./components/Layout/Layout";

// const Home = lazy(() => import("./pages/Home/Home"));
// const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
// const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

// const App = () => {
//   return (
//     <div>
//       <Layout>
//         <Suspense fallback={<Loader />}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/catalog" element={<Catalog />} />
//             <Route path="/favorites" element={<Favorites />} />
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </Suspense>
//       </Layout>
//     </div>
//   );
// };

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Favorites from "./pages/Favorites/Favorites";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
