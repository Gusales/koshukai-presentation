import { useTranslation } from "react-i18next"
import { PresentationSection } from "../../components/animate-presence"
import { Steps } from "../../contants"

export const EngenieeringView = () => {
    const { t } = useTranslation()
    const step = Steps[4]

    return (
        <PresentationSection key={step}>
            <div className="flex flex-col gap-12">
                <h1 className="text-4xl md:text-6xl text-center text-gray-600 mb-12"> { t('engineering.title') } </h1>

                <section className="grid md:grid-cols-2 gap-4">
                    <article className="p-5 bg-white/60 backdrop-blur-sm rounded w-sm md:w-2xl shadow-sm">
                        <figure className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1763296479464-fe8bee23eb65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbmdpbmVlcmluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="" className="h-full object-cover w-full" />
                        </figure>

                       <div className="space-y-4 mt-6">
                            <h3 className="text-xl text-red-500"> { t('engineering.aerospace.title') } </h3>
                            <div className="w-16 h-1 bg-yellow-600" />
                            <p className="text-sm text-gray-500"> { t('engineering.aerospace.description') } </p>
                       </div>
                    </article>

                    <article className="p-5 bg-white/60 backdrop-blur-sm rounded w-sm md:w-2xl shadow-sm">
                        <figure className="h-64 overflow-hidden">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Itaipu_geral.jpg/2560px-Itaipu_geral.jpg" alt="" className="h-full object-cover w-full" />
                        </figure>

                        <div className="space-y-4 mt-6">
                            <h3 className="text-xl text-red-500"> { t('engineering.civil.title') } </h3>
                            <div className="w-16 h-1 bg-yellow-600" />
                            <p className="text-sm text-gray-500"> { t('engineering.civil.description') } </p>
                        </div>
                    </article>
                </section>

                <section className="p-5 text-center space-y-5 bg-white/60 backdrop-blur-sm rounded w-sm md:w-full shadow">
                    <figure className="w-full h-64">
                        <img src="https://anptrilhos.org.br/wp-content/uploads/2019/04/monotrilho-linha15-SP-1920px-1.jpg" alt="" className="w-full h-full object-cover" />
                    </figure>

                    <p className="text-lg text-gray-600"> { t('engineering.action') } </p>
                </section>

                <section className="space-y-3 overflow-hidden p-5 bg-white/60 backdrop-blur-sm rounded w-sm md:w-full text-center shadow">
                    <h2 className="text-2xl text-gray-700">
                        { t('engineering.subTitle') }
                    </h2>
                </section>
            </div>
        </PresentationSection>
    )
}