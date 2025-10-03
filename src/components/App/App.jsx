import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";
import CardInfo from "../CardInfo/CardInfo.jsx";
import LogoSection from "../LogoSection/LogoSection.jsx";
import placeholderLogo from "../../assets/circle_placeholder.jpeg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
