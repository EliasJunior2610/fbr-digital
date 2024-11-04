import Header from "./components/HeaderCliente/headerCliente";
import Rodape from "./components/Footer/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = 'FBR Digital'
  }, [])
  
  return (
    <div id="App">
      <Header />
      <Rodape />
    </div>
  );
}

export default App;
