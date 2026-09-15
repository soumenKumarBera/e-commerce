import { MantineProvider } from "@mantine/core";




import "@mantine/core/styles.css";
// ‼️ import carousel styles after core package styles
import "@mantine/carousel/styles.css";
import HomePage from "./customer/pageas/HomePage/HomePage";
import Footer from "./customer/componets/Footer/Footer";
import Product from "./customer/componets/Product/Product.jsx";
import ProductDetails from "./customer/componets/ProductDetailas/ProductDetails.jsx";
import Cart from "./customer/componets/Cart/Cart.jsx";
import Checkout from "./customer/componets/Checkout/Checkout.js";
import Order from "./customer/componets/Order/Order.jsx";
import OderDetails from "./customer/componets/Order/OrderDetails.jsx";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routes/CustomerRoutes.jsx";


const App =() => {
  return <MantineProvider>

    <Routes>
    <Route path="/*" element={<CustomerRoutes />} />

    </Routes>


   
   
    


      
     
  </MantineProvider>
}

export default App;
