import "./App.css";
import { useEffect } from "react";
import HomePage from "./container/home-pages/HomePage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProductPage from "./container/product-pages/ProductPage";
import AboutPage from "./container/about-pages/AboutPage";
import LoginPage from "./container/login-pages/LoginPage";
import ProductDetail from "./container/product-pages/ProductDetail";
import ProductForm from "../src/container/product-pages/ProductForm";
import RegisterPage from "./container/register-pages/RegisterPage";
import CategoryPage from "./container/category-pages/CategoryPage";
import InfoPage from "./container/info-page/InfoPage";
import CartPage from "./container/cart-pages/CartPage";
import InfoForm from "./container/info-page/InfoForm";
import PostPage from "./container/post-pages/PostPage";
import PostDetail from "./container/post-pages/PostDetail";
import PostForm from "./container/post-pages/PostForm";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />

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
            <Route
              path="register"
              element={<RegisterPage />}
            />
            <Route
              path="category"
              element={<CategoryPage />}
            />
            <Route
              path={`info/:id`}
              element={<InfoPage />}
            />
            <Route
              path={`edit/:id`}
              element={<InfoForm />}
            />
            <Route
              path={`cart`}
              element={<CartPage />}
            />
            <Route
              path="post"
              element={<PostPage />}
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
            <Route
              path="edit/:id"
              element={<ProductForm />}
            />
            <Route
              path="add"
              element={<ProductForm />}
            />
          </Route>
          <Route path="/post/">
            <Route
              index
              element={<PostPage />}
            />
            <Route
              path={`:id`}
              element={<PostDetail />}
            />
            <Route
              path="edit/:id"
              element={<PostForm />}
            />
            <Route
              path="add"
              element={<PostForm />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
