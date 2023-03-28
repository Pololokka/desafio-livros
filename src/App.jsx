import "./App.css";

import Section from "./Components/Section/Index";

function App() {
  return (
    <>
      <nav className="nav__container">
        <p className="texto">Escolha a língua de exibição</p>
      </nav>
      <header>
        <h1 className="titulo titulo-hover">Qualquer coisa aqui</h1>
      </header>
      <main className="App">
        <h2 className="subtitulo titulo-hover">Importância da Leitura</h2>
        <Section
          titlePath="Placeholder foda"
          textPath="ei amigo, o que leva no caixão? um monte de bosta. e quem foi o cagão? aposto que não foi o cu de sua mãe!"
        />
        <Section
          titlePath="Placeholder foda"
          textPath="ei amigo, o que leva no caixão? um monte de bosta. e quem foi o cagão? aposto que não foi o cu de sua mãe!"
        />

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
