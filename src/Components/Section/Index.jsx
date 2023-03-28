import "./Styles.css";

const Section = ({ titlePath, textPath }) => {
  return (
    <section className="section__container">
      <h3 className="subtitulo subtitulo-hover">{titlePath}</h3>
      <p className="texto">{textPath}</p>
    </section>
  );
};

export default Section;
