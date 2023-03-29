import { useTranslation } from "react-i18next";

const Changer = ({ titlePath, lang1Path, lang2Path, lang3Path }) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleChangeLang = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="changer__container">
      <p className="texto">{t(titlePath)}</p>
      <p
        className="texto texto-hover"
        onClick={() => handleChangeLang("pt-BR")}
      >
        {t(lang1Path)}
      </p>
      <p
        className="texto texto-hover"
        onClick={() => handleChangeLang("en-us")}
      >
        {t(lang2Path)}
      </p>
      {/* <p className="texto texto-hover" onClick={() => handleTranslate("pt-br")} >Português</p> */}
    </div>
  );
};

export default Changer;
