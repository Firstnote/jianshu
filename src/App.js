import { ChakraProvider } from "@chakra-ui/react";
import Formview from "./Component/Formview";
import "./index.css";
function App() {
  return (
    <ChakraProvider>
      <Formview></Formview>
    </ChakraProvider>
  );
}

export default App;
