import "./App.css";
import HomePage from "./container/home-pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./container/product-pages/ProductPage";
import AboutPage from "./container/about-pages/AboutPage";
import LoginPage from "./container/login-pages/LoginPage";
import ProductDetail from "./container/product-pages/ProductDetail";
import { product_list } from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={<HomePage />}
            />
            <Route
              path="product"
              element={<ProductPage />}
            />
            <Route
              path="about"
              element={<AboutPage />}
            />
            <Route
              path="login"
              element={<LoginPage />}
            />
          </Route>
          <Route path="/product/">
            <Route
              index
              element={<ProductPage />}
            />
            <Route
              path={`:id`}
              element={<ProductDetail />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
