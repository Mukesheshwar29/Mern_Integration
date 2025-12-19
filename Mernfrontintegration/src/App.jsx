import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddProducts from "./components/AddProducts";
import Sidebar from "./components/Sidebar";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Routes>
      <Route
        path="*"
        element={
          <div className="min-h-screen flex flex-col w-full bg-transparent overflow-x-hidden">
            <Header cartLength={cart.length} toggleSidebar={toggleSidebar} />
            <div className="flex flex-1 relative">
              <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
              <div className="flex-1 flex flex-col transition-all duration-300">
                {/* 🔥 FIXED HERE */}
                <main className="flex-grow w-full px-6 py-8">
                  <Routes>
                    <Route path="/" element={<Products cart={cart} setCart={setCart} />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route
                      path="/cart"
                      element={
                        <ProtectedRoute>
                          <Cart cart={cart} setCart={setCart} />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/buynow/:id"
                      element={
                        <ProtectedRoute>
                          <BuyNow />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </main>

                <Footer />
              </div>
            </div>
          </div>
        }
      />

      <Route path="/addproduct" element={<AddProducts />} />
    </Routes>
  );
}

export default App;
