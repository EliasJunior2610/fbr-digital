import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Rodape from "./components/Rodape/Rodape";
import Registro from "./components/Registro/Registro";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas renderizadas agora */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Rodape />
            </>
          }
        />
        {/* Links pra outras páginas */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
