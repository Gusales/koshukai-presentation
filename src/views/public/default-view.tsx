import { useTranslation } from "react-i18next";
import { PresentationSection } from "../../components/animate-presence";
import { Steps } from "../../contants";

export const DefaultView = () => {
  const step = Steps[0]
  const { t } = useTranslation()

  return (
    <PresentationSection key={step}>
      <div className="max-w-6xl w-full flex flex-col items-center justify-center space-y-8 text-center min-h-[60vh]">
        <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1637071690952-039888a82b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2klMjBmaXNoJTIwamFwYW5lc2UlMjBhcnR8ZW58MXx8fHwxNzY5MDM5NjM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Koi Fish"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl tracking-tight text-[#1a1a1a]">
          {t('start.title')}
        </h1>
      </div>
    </PresentationSection>
  );
}
