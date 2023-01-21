import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { GlobeIcon } from "./index";
import cookie from "js-cookie";
import { useEffect } from "react";

const language = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "us",
  },
  {
    code: "ar",
    name: "عربى",
    country_code: "sa",
    dir: "rtl",
  },
  {
    code: "uz",
    name: `O'zbekcha`,
    country_code: "uz",
  },
  {
    code: "ru",
    name: `Русский`,
    country_code: "ru",
  }
];

function App() {
  const currentLanguageCode = cookie.get("i18next") || "en";
  const currentLanguage = language.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="btn-group">
          <button
            type="button"
            className="btn border-0 dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <GlobeIcon />
          </button>
          <ul className="dropdown-menu">
            {language.map(({ code, name, country_code }) => {
              return (
                <li key={country_code}>
                  <button
                    className="dropdown-item"
                    onClick={() => i18next.changeLanguage(code)}
                    disabled={code === currentLanguageCode}
                  >
                    <span class={`flag-icon flag-icon-${country_code}`}></span>
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="d-flex flex-column align-item-center text-center">
        <h1 className="fw-bold mb-3">{t("welcome_message")}</h1>
        <h3 className="mb-2">{t("language")}</h3>
        <p className="mb-2">{t("description")}</p>
      </div>
    </div>
  );
}

export default App;
