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
import PackBolinha from "./components/pages/GarlicBreadZinho/Paes/PackBolinha/PackBolinha";
import HomePreparation from "./components/pages/Preparation/HomePreparation/HomePreparation";
import Churrasqueira from "./components/pages/Preparation/ItensDePreparo/Churrasqueira/Churrasqueira";
import ChurrasqueiraEletrica from "./components/pages/Preparation/ItensDePreparo/ChurrasqueiraEletrica/ChurrasqueiraEletrica";
import Frigideira from "./components/pages/Preparation/ItensDePreparo/Frigideira/Frigideira";
import Grill from "./components/pages/Preparation/ItensDePreparo/Grill/Grill";
import Forno from "./components/pages/Preparation/ItensDePreparo/Forno/Forno";
import AirFryer from "./components/pages/Preparation/ItensDePreparo/AirFryer/AirFryer";

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
          <Route path="pack-bolinha" element={<PackBolinha />}></Route>
          {/* Fim da Rota de Pães */}

          <Route
            path="pao-de-alho-zinho-recheado"
            element={<BreadsApresentationRecheados />}
          ></Route>
          <Route path="preparo" element={<HomePreparation />}></Route>

          {/* Início de Itens do modo de Preparo */}
          <Route path="churrasqueira" element={<Churrasqueira />}></Route>
          <Route
            path="churrasqueira_eletrica"
            element={<ChurrasqueiraEletrica />}
          ></Route>
          <Route path="frigideira" element={<Frigideira />}></Route>
          <Route path="grill" element={<Grill />}></Route>
          <Route path="forno" element={<Forno />}></Route>
          <Route path="air_fryer" element={<AirFryer />}></Route>
          {/* Fim dos itens do mode de Preparo */}
        </Routes>
        <Footer />
        <Socials />
      </Router>
    </div>
  );
}

export default App;
