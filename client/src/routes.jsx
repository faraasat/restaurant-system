import { Routes, Route } from "react-router-dom";

import About from "./pages/about";
import NotFound from "./pages/404";
import Gallery from "./pages/gallery";
import Products from "./pages/products";
import ProductsList from "./pages/products-list";
import ProductDetails from "./pages/product-details";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import AdminPanel from "./pages/admin-panel";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="gallery" element={<Gallery />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productType" element={<ProductsList />} />
      <Route path="products/product/:productId" element={<ProductDetails />} />
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signup" element={<Signup />} />
      <Route path="admin-panel" element={<AdminPanel />} />
      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CustomRoutes;
