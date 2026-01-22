/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { LanguageType } from "./types";

export const INITIAL_LANGUAGE: LanguageType = 'jp';
export const LANGUAGE_LABELS: Record<LanguageType, string> = {
    'jp': '日本語',
    'en': 'English',
    'pt': 'Português'
}

export const SelectLanguage = () => {
    const [language, setLanguage] = useState<LanguageType>(INITIAL_LANGUAGE)
    const { i18n: lang } = useTranslation()

    async function handleSetTranslation(value: LanguageType) {
        setLanguage(value)
        localStorage.setItem('lang', value)
        await lang.changeLanguage(value)
    }
    return (
        <select value={language} onChange={(event) => handleSetTranslation(event.target.value as LanguageType)}>
            {
                Object.entries(LANGUAGE_LABELS).map(([key, value]) => {
                   return (
                     <option key={key} value={key} selected={key === INITIAL_LANGUAGE}>
                        {value}
                    </option>
                   )
                })
            }
        </select>
    )
}