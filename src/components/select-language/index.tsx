import type {LanguageType} from "./types";
import {useState} from "react";
import {useTranslation} from "react-i18next";

export const INITIAL_LANGUAGE: LanguageType = 'jp';
export const LANGUAGE_LABELS: Record<LanguageType, string> = {
    'jp': '日本語',
    'en': 'English',
    'br': 'Português'
}

export const SelectLanguage = () => {
    const [language, setLanguage] = useState<LanguageType>(INITIAL_LANGUAGE)
    const { i18n: lang } = useTranslation()

    async function handleSetTranslation(value: LanguageType) {
        setLanguage(value)
        await lang.changeLanguage(value)
    }
    return (
        <select>
            {
                ((Object.entries(LANGUAGE_LABELS) as [LanguageType, string][]).map(([key, value]) => {
                    <option key={key} value={key}>
                        {value}
                    </option>
                })
            }
        </select>
    )
}