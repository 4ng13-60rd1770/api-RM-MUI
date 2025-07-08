import { createContext, useState, useEffect } from 'react';
import i18n from '../index';

const LanguageContext = createContext<{
  language: string;
  setLanguage: (lang: string) => void;
}>({
  language: 'es',
  setLanguage: () => {}
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState(localStorage.getItem('lang') || 'es');

  const setLanguage = (lang: string) => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
    setLanguageState(lang);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

