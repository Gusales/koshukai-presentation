import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '../locales/en.json'
import jp from '../locales/jp.json'
import pt from '../locales/pt.json'

i18n.use(initReactI18next).init({
    fallbackLng: 'jp',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        pt: pt,
        jp: jp,
        en: en
    },
})