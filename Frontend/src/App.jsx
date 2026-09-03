import { MantineProvider } from "@mantine/core";
import Navigations from "./customer/componets/Navigation/Navigation.jsx";



import "@mantine/core/styles.css";
// ‼️ import carousel styles after core package styles
import "@mantine/carousel/styles.css";
import HomePage from "./customer/pageas/HomePage/HomePage";
import Footer from "./customer/componets/Footer/Footer";
import Product from "./customer/componets/Product/Product.jsx";


const App =() => {
  return <MantineProvider>
   
    <Navigations />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>

      <Footer />
      
     
  </MantineProvider>
}

export default App;
