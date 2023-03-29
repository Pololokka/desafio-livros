import "./Styles.css";

import { useTranslation } from "react-i18next";

const Section = ({ titlePath, textPath }) => {
  const { t } = useTranslation();

  return (
    <section className="section__container">
      <h3 className="subtitulo subtitulo-hover">{t(titlePath)}</h3>
      <p className="texto">{t(textPath)}</p>
    </section>
  );
};

export default Section;
