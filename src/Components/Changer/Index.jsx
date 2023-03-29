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
      <input
        type="button"
        value={t(lang1Path)}
        className="texto btn__geral"
        onClick={() => handleChangeLang("pt-BR")}
      />
      <input
        type="button"
        value={t(lang2Path)}
        className="texto btn__geral"
        onClick={() => handleChangeLang("en-us")}
      />
      <input
        type="button"
        value={t(lang3Path)}
        className="texto btn__geral"
        onClick={() => handleChangeLang("es")}
      />
    </div>
  );
};

export default Changer;
