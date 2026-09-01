import { MantineProvider } from "@mantine/core";

import Navigation from "./customer/componets/Navigation/Navigation"

import "@mantine/core/styles.css";
// ‼️ import carousel styles after core package styles
import "@mantine/carousel/styles.css";
import HomePage from "./customer/pageas/HomePage/HomePage";
import Footer from "./customer/componets/Footer/Footer";

const App =() => {
  return <MantineProvider>
     <Navigation />
    
      <div>
        <HomePage />
      </div>

      <Footer />
      
     
  </MantineProvider>
}

export default App;
