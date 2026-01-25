import { useTranslation } from "react-i18next"
import { PresentationSection } from "../../components/animate-presence"
import { Steps } from "../../contants"

export const UniversityView = () => {
    const { t } = useTranslation()
    const step = Steps[2]

    return (
        <PresentationSection key={step}>
            <div>
                <h1 className="text-4xl md:text-6xl text-center text-gray-600 mb-12">
                    { t('university.title') }
                </h1>

                <section className="grid md:grid-cols-2 gap-6">
                    <UniversityCard
                        description={t('university.USP.description')}
                        imageAlt={t('university.USP.name')}
                        imageUrl="https://imagens.usp.br/wp-content/uploads/Praca-do-Relogio_249-24_Foto-Cecilia-Bastos_USP-Imagens-20-Editar.jpg"
                        name={t('university.USP.name')}
                    />
                    <UniversityCard
                        description={t('university.UNICAMP.description')}
                        imageAlt={t('university.UNICAMP.name')}
                        imageUrl="https://unicamp.br/unicamp/sites/default/files/banco_imagens/2018/06/14/foto_entrada_unicamp_perri_DSC_0196_0.JPG"
                        name={t('university.UNICAMP.name')}
                    />
                </section>

                <div className="bg-white/60 backdrop-blur-sm w-full text-center shadow-sm p-4 my-5">
                    <p className="text-lg text-gray-600">
                        { t('university.action') }
                    </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm w-full text-center shadow-sm p-4">
                    <p className="text-2xl text-gray-700">
                        { t('university.subTitle') }
                    </p>
                </div>
            </div>
        </PresentationSection>
    )
}

export interface UniversityCardProps {
    name: string
    description: string
    imageUrl: string
    imageAlt: string
}

export const UniversityCard = ({ description, imageAlt, imageUrl, name }: UniversityCardProps) => {
    return (
        <article className="space-y-3 overflow-hidden p-0 bg-white/60 backdrop-blur-sm rounded w-sm md:w-2xl shadow-sm">
            <figure className="relative h-48">
                <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            </figure>

            <div className="p-6 grid gap-2">
                <h3 className="text-xl text-red-400">{name}</h3>
                <div className="w-16 h-1 bg-amber-400"/>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </article>
    )
}