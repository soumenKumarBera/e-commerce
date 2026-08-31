import { MantineProvider } from "@mantine/core";

import Navigation from "./customer/componets/Navigation/Navigation"

import "@mantine/core/styles.css";
// ‼️ import carousel styles after core package styles
import "@mantine/carousel/styles.css";
import HomePage from "./customer/pageas/HomePage/HomePage";

const App =() => {
  return <MantineProvider>
     <Navigation />
    
      <div>
        <HomePage />
      </div>
      
     
  </MantineProvider>
}

export default App;
