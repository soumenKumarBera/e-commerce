import { MantineProvider } from "@mantine/core";
import Navigations from "./customer/componets/Navigation/Navigation.jsx";



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


const App =() => {
  return <MantineProvider>
   
    <Navigations />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Order /> */}
        <OderDetails />
      </div>

      <Footer />
      
     
  </MantineProvider>
}

export default App;
