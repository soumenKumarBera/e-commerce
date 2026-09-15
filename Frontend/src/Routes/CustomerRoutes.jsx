import { Route, Routes } from "react-router-dom";

import Navigations from "../customer/componets/Navigation/Navigation.jsx";
import Cart from "../customer/componets/Cart/Cart";
import HomePage from "../customer/pageas/HomePage/HomePage";
import Footer from "../customer/componets/Footer/Footer";
import Product from "../customer/componets/Product/Product";
import ProductDetails from "../customer/componets/ProductDetailas/ProductDetails.jsx";
import Checkout from "../customer/componets/Checkout/Checkout.js";
import Order from "../customer/componets/Order/Order.jsx";
import OderDetails from "../customer/componets/Order/OrderDetails.jsx";
const CustomerRoutes = () =>{
return <div>

  <div>
     <Navigations />
  </div>
  

  <Routes>

    <Route path="/" element={<HomePage />} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/:lavelOne/:lavelTwo/:lavelThre" element={<Product />} />
        <Route path="/:product/:productId" element={<ProductDetails />} />
     <Route path="/checkout" element={<Checkout />} />
      <Route path="/account/order" element={<Order />} />
       <Route path="/account/order/:oredrId" element={<OderDetails/>} />



   
     


        {/* <Order /> */}
        {/* <OderDetails /> */}



  </Routes>

  <div>
          <Footer />
  </div>

</div>

}
export default CustomerRoutes;