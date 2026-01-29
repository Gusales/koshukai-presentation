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

                <section className="grid md:grid-cols-2 gap-2">
                    <figure className="relative w-full h-48 rounded-md overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbnRpc3R8ZW58MXx8fHwxNzY5MzM1MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    </figure>
                    <figure className="relative w-full h-48 rounded-md overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1765294064316-6c72add9e9e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBoZWFsdGh8ZW58MXx8fHwxNzY5Mzg5NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                            alt="" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    </figure>
                </section>

                <section className="p-5 bg-white/60 backdrop-blur-sm rounded w-full text-center shadow-sm text-xl text-gray-600 font-medium">
                    <p>{ t('science.action') }</p>
                </section>

                <section className="grid md:grid-cols-2 gap-4">
                    <article className="space-y-3 overflow-hidden p-5 bg-white/60 backdrop-blur-sm rounded w-sm md:w-2xl shadow-sm">
                        <figure className="h-48 overflow-hidden rounded shadow">
                            <img 
                                src="https://images.unsplash.com/photo-1688677825986-4ffb926bafc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBmYXJtaW5nfGVufDF8fHx8MTc2OTM3NDMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </figure>
                        <h3 className="text-xl text-red-500"> { t('science.sections.agricultural.title') } </h3>
                        <div className="w-16 h-1 bg-yellow-600"/>
                        <p className="text-sm text-gray-500"> { t('science.sections.agricultural.description') } </p>
                    </article>

                    <article className="space-y-3 overflow-hidden p-5 bg-white/60 backdrop-blur-sm rounded w-sm md:w-2xl shadow-sm">
                        <figure className="h-48 overflow-hidden rounded shadow">
                            <img 
                                src="https://images.unsplash.com/photo-1669101283985-ab2b293923df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </figure>
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
