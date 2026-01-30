 
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { LanguageType } from "./types";


interface SelectLanguageInterface { 
    code: LanguageType; 
    label: string; 
    flag: string
}

const languages: SelectLanguageInterface[] = [
    { code: 'jp', label: '日本語', flag: '🇯🇵' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
];

export const INITIAL_LANGUAGE: SelectLanguageInterface = languages[0];

export const SelectLanguage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentLanguage, setLanguage] = useState<SelectLanguageInterface>(INITIAL_LANGUAGE)
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { i18n: lang } = useTranslation()

    const handleLanguageChange = async (code: LanguageType) => {
        setLanguage(languages.find(lang => lang.code === code) || INITIAL_LANGUAGE);
        setIsOpen(false);
        await lang.changeLanguage(code)
    };

    return (
        <div ref={dropdownRef} className="fixed top-6 right-6 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-md px-4 py-2 shadow-sm border border-black/10 hover:bg-white transition-all duration-200"
            >
                <span className="text-xl">{currentLanguage.flag}</span>
                <span className="text-sm text-[#1a1a1a]">{currentLanguage.label}</span>
                <ChevronDown className={`w-4 h-4 text-[#6e6e6e] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg border border-black/10 overflow-hidden min-w-40">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 hover:bg-red-600 hover:cursor-pointer hover:text-white`}
                    >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="text-sm">{lang.label}</span>
                    </button>
                ))}
                </div>
            )}
        </div>
    )
}