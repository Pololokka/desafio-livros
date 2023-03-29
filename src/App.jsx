import "./App.css";

import Section from "./Components/Section/Index";
import Changer from "./Components/Changer/Index";

function App() {
  return (
    <>
      <nav className="nav__container">
        <Changer
          titlePath="nav.title"
          lang1Path="nav.langF"
          lang2Path="nav.langS"
          lang3Path=""
        />
      </nav>
      <header>
        <h1 className="titulo titulo-hover">Qualquer coisa aqui</h1>
      </header>
      <main className="App">
        <h2 className="subtitulo titulo-hover">Importância da Leitura</h2>
        <Section titlePath="sectionF.title" textPath="sectionF.text" />
        <Section titlePath="sectionF.title" textPath="sectionF.text" />

        <div className="card__container">
          <h2 className="subtitulo titulo-hover">Gêneros Favoritos</h2>
          <Section
            titlePath="Placeholder foda"
            textPath="ei amigo, o que leva no caixão? um monte de bosta. e quem foi o cagão? aposto que não foi o cu de sua mãe!"
          />
          <Section
            titlePath="Placeholder foda"
            textPath="ei amigo, o que leva no caixão? um monte de bosta. e quem foi o cagão? aposto que não foi o cu de sua mãe!"
          />
          <Section
            titlePath="Placeholder foda"
            textPath="ei amigo, o que leva no caixão? um monte de bosta. e quem foi o cagão? aposto que não foi o cu de sua mãe!"
          />
        </div>
      </main>
    </>
  );
}

export default App;
