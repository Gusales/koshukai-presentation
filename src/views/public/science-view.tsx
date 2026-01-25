import { useTranslation } from "react-i18next";
import { PresentationSection } from "../../components/animate-presence";
import { Steps } from "../../contants";

export const ScienceView = () => {
    const { t } = useTranslation()
    const step = Steps[3]

    return (
        <PresentationSection key={step}>
            <div className="grid gap-12 items-center">
                <h1 className="text-4xl md:text-6xl text-center text-gray-800 mb-12">
                    { t('science.title') }
                </h1>

                <figure className="h-64 overflow-hidden rounded shadow">
                    <img 
                        src="https://images.unsplash.com/photo-1669101283985-ab2b293923df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </figure>

                <section className="p-5 bg-white/60 backdrop-blur-sm rounded w-full text-center shadow-sm">
                    <p>{ t('science.action') }</p>
                </section>

                <section className="grid md:grid-cols-2 gap-4">
                    <article className="space-y-3 overflow-hidden p-5 bg-white/60 backdrop-blur-sm rounded w-sm md:w-2xl shadow-sm">
                        <h3 className="text-xl text-red-500"> { t('science.sections.agricultural.title') } </h3>
                        <div className="w-16 h-1 bg-yellow-600"/>
                        <p className="text-sm text-gray-500"> { t('science.sections.agricultural.description') } </p>
                    </article>
                    <article className="space-y-3 overflow-hidden p-5 bg-white/60 backdrop-blur-sm rounded w-sm md:w-2xl shadow-sm">
                        <h3 className="text-xl text-red-500"> { t('science.sections.medicine.title') } </h3>
                        <div className="w-16 h-1 bg-yellow-600"/>
                        <p className="text-sm text-gray-500"> { t('science.sections.medicine.description') } </p>
                    </article>
                </section>

                <section className="p-5 bg-white/60 backdrop-blur-sm rounded w-full text-center shadow-sm">
                    <h2 className="text-lg"> { t('science.subTitle') } </h2>
                </section>
            </div>
        </PresentationSection>
    )
}
