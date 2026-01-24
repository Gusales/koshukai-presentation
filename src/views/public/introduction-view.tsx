import { useTranslation } from "react-i18next"
import { PresentationSection } from "../../components/animate-presence"
import { Steps } from "../../contants"

export const IntroductionView = () => {
    const { t } = useTranslation()

    return (
        <PresentationSection key={Steps[0]}>
            <div className="max-w-6xl w-full space-y-12 text-center">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl tracking-tighter text-gray-700">
                    { t('introduction.title') }
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500">
                        { t('introduction.subTitle') }
                    </p>
                </div>

                <div>
                    <div className="relative w-full h-64 md:h-96 rounded-md overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1637071690952-039888a82b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2klMjBmaXNoJTIwamFwYW5lc2UlMjBhcnR8ZW58MXx8fHwxNzY5MDM5NjM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Koi Fish Art"
                            className="w-full h-full object-cover opacity-60"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-[#f8f7f4] via-transparent to-transparent" />
                    </div>
                </div>

                <p className="text-3xl text-gray-500">
                    {t('introduction.action')}
                </p>
            </div>
        </PresentationSection>
    )
}