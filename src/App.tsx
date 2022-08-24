import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Formularios from "./views/formularios";
import Inicio from "./views/inicio";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/formularios" element={<Formularios />} />
    </Routes>
  </Router>
  );
}

export default App;
