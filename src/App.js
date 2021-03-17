import { ChakraProvider } from "@chakra-ui/react";
import Formview from "./Component/Formview";
import "./index.css";
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Formview></Formview>
      </div>
    </ChakraProvider>
  );
}

export default App;
