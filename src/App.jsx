import "./App.css";

import Section from "./Components/Section/Index";
import Changer from "./Components/Changer/Index";

import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <nav className="nav__container">
        <Changer
          titlePath="nav.title"
          lang1Path="nav.langF"
          lang2Path="nav.langS"
          lang3Path="nav.langT"
        />
      </nav>
      <header>
        <h1 className="titulo titulo-hover">{t("header.title")}</h1>
      </header>
      <main className="App">
        <h2 className="subtitulo titulo-hover">{t("main.titleF")}</h2>
        <Section titlePath="sectionF.title" textPath="sectionF.text" />
        <Section titlePath="sectionS.title" textPath="sectionS.text" />

        <div className="card__container">
          <h2 className="subtitulo titulo-hover">{t("main.titleS")}</h2>
          <Section titlePath="sectionT.title" textPath="sectionT.text" />
          <Section titlePath="sectionFo.title" textPath="sectionFo.text" />
          <Section titlePath="sectionFi.title" textPath="sectionFi.text" />
        </div>
      </main>
    </>
  );
}

export default App;
