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
