import { useTranslation } from "react-i18next"
import { SelectLanguage } from "../select-language"

export const App = () => {
    const { t } = useTranslation()

    return(
        <div className="min-h-screen w-full flex items-center justify-center">
            <h1>{t('home.title')}</h1>
            <SelectLanguage />
        </div>
    )
}