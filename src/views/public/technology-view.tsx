import { ExternalLink } from "lucide-react"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { PresentationSection } from "../../components/animate-presence"
import { Steps } from "../../contants"

export const TechnologyView = () => {
    const { t } = useTranslation()
    const step = Steps[5]

    const links = useMemo(() => [
        {
            name: t('technology.links.space'),
            link: 'https://www.gov.br/inpe/pt-br'
        },
        {
            name: t('technology.links.pix'),
            link: 'https://www.bcb.gov.br/estabilidadefinanceira/pix'
        },
        {
            name: t('technology.links.curitiba'),
            link: 'https://www.curitiba.pr.gov.br/'
        },
        {
            name: t('technology.links.superpc'),
            link: 'https://www.cptec.inpe.br/'
        },
        {
            name: t('technology.links.scala'),
            link: 'https://scaladatacenters.com/'
        },
        {
            name: t('technology.links.mecatronica'),
            link: 'https://www.educamaisbrasil.com.br/educacao/carreira/tecnico-em-mecatronica-e-uma-das-profissoes-mais-valorizadas-no-mercado'
        },
    ], [t])

    return (
        <PresentationSection key={step} className="container mx-auto flex flex-col gap-12">
                <h1 className="text-4xl md:text-6xl text-center text-gray-800 mb-12">{ t('technology.title') }</h1>

                <section className="w-full grid md:grid-cols-2 md:grid-rows-3 gap-5">
                    { links.map(({ link, name }, index) => (
                        <a href={link} key={index} className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded py-4 px-6 shadow hover:shadow-md text-lg md:text-xl transition-all" target="_blank" rel="noopener noreferrer">
                            {name}

                            <ExternalLink className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                        </a>
                    )) }
                </section>

                <section className="bg-white/60 backdrop-blur-sm rounded text-center p-6 w-full shadow text-2xl text-gray-700">
                { t('technology.subTitle') }
                </section>
        </PresentationSection>
    )
}