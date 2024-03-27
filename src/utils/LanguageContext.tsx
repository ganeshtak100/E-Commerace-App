import {createContext} from 'react';
const languages = ['Hindi', 'English', 'Gujarati'];
const contextValue = {
  language: languages,
  setLanguage: () => {},
};
export const LanguageContext = createContext(contextValue);
