import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Product from "./pages/Product";
import { useState } from "react";
import Checkout from "./pages/Checkout";
import ShoppingCart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addItem = (product, quantity) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...exist, quantity: exist.quantity + quantity }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };
  const addItemFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    }
  };
  const removeItemFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const removeAllProducts = () => {
    setCartItems([]);
  };

  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <Navbar
        cartItems={cartItems}
        addItemFromCart={addItemFromCart}
        removeItemFromCart={removeItemFromCart}
        removeAllProducts={removeAllProducts}
        handleCart={handleCart}
      />
      <ShoppingCart
        cartItems={cartItems}
        addItemFromCart={addItemFromCart}
        removeItemFromCart={removeItemFromCart}
        isCartVisible={isCartVisible}
        removeAllProducts={removeAllProducts}
        setIsCartVisible={setIsCartVisible}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="headphones" element={<Headphones />}></Route>
        <Route path="speakers" element={<Speakers />}></Route>
        <Route path="earphones" element={<Earphones />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path=":slug" element={<Product addItem={addItem} />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
