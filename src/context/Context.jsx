import React, { useState } from 'react';
import { IntlProvider } from 'react-intl'
import MensajeIngles from './language/en.json';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  // Always default to English
  const [locale, setLocale] = useState('en-US');
  const [mensaje, setMensaje] = useState(MensajeIngles);

  // Optional: if you want to support switching in future
  const selectLanguage = (language) => {
    setMensaje(MensajeIngles);
    setLocale('en-US');
    localStorage.setItem('lang', 'en-US');
  };

  return (
    <langContext.Provider value={{ selectLanguage }}>
      <IntlProvider locale={locale} messages={mensaje}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };