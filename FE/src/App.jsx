import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import NewArrivals from "./pages/NewArrivals";
import Contact from "./pages/Contact";
import BasketProvider from "./context/BasketProvider";
import Basket from "./pages/Basket";
import WishListProvider from "./context/WishListProvider";
import WishList from "./pages/WishList";
import Admin from "./pages/Admin";
import Add from "./pages/Add";

function App() {

  return (
    <>
     <BasketProvider>
     <WishListProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/add" element={<Add />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wishList" element={<WishList />} />
        </Route>
      </Routes>
    </BrowserRouter>
     </WishListProvider>
     </BasketProvider>
    </>
  )
}

export default App
