import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";
import Socials from "./components/utilities/SocialsFixed/Socials";
import AboutZinho from "./components/pages/About/About";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import WorkInZinho from "./components/pages/WorkInZinho/WorkinZinho";
import BreadsApresentation from "./components/pages/GarlicBreadZinho/BreadsApresentation/BreadsApresentation";
import BreadsApresentationRecheados from "./components/pages/GarlicBreadZinho/BreadsApresentationRecheados/BreadsApresentationRecheados";
import BagueteTradicional from "./components/pages/GarlicBreadZinho/Paes/BagueteTradicional/BagueteTradicional";
import BaguetePicante from "./components/pages/GarlicBreadZinho/Paes/BaguetePicante/BaguetePicante";
import BolinhaTradicional from "./components/pages/GarlicBreadZinho/Paes/BolinhaTradicional/BolinhaTradicional";
import BolinhaPicante from "./components/pages/GarlicBreadZinho/Paes/BolinhaPicante/BolinhaPicante";
import BolinhaRecheadoCatupiry from "./components/pages/GarlicBreadZinho/Paes/BolinhaRecheadoCatupiry/BolinhaRecheadoCatupiry";
import BolinhaRecheadoLinguica from "./components/pages/GarlicBreadZinho/Paes/BolinhaRecheadoLinguica/BolinhaRecheadoLinguica";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/empresa" element={<AboutZinho />}></Route>
          <Route path="/contato" element={<ContactUs />}></Route>
          <Route path="trabalhe-conosco" element={<WorkInZinho />}></Route>
          <Route
            path="pao-de-alho-zinho"
            element={<BreadsApresentation />}
          ></Route>
          {/* Rota de Pães */}
          <Route
            path="pao-baguete-tradicional"
            element={<BagueteTradicional />}
          ></Route>
          <Route
            path="pao-baguete-picante"
            element={<BaguetePicante />}
          ></Route>
          <Route
            path="pao-bolinha-tradicional"
            element={<BolinhaTradicional />}
          ></Route>
          <Route
            path="pao-bolinha-picante"
            element={<BolinhaPicante />}
          ></Route>
          <Route
            path="pao-bolinha-recheado-catupiry"
            element={<BolinhaRecheadoCatupiry />}
          ></Route>
          <Route
            path="pao-bolinha-recheado-linguica"
            element={<BolinhaRecheadoLinguica />}
          ></Route>

          {/* Fim da Rota de Pães */}
          <Route
            path="pao-de-alho-zinho-rechado"
            element={<BreadsApresentationRecheados />}
          ></Route>
        </Routes>
        <Footer />
        <Socials />
      </Router>
    </div>
  );
}

export default App;
