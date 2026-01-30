import { useTranslation } from "react-i18next"
import { PresentationSection } from "../../components/animate-presence"
import { Steps } from "../../contants"

export const IntroductionView = () => {
    const { t } = useTranslation()

    return (
        <PresentationSection key={Steps[0]}>
            <div className="max-w-6xl w-full space-y-12 text-center">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl tracking-tighter text-gray-900">
                    { t('introduction.title') }
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500">
                        { t('introduction.subTitle') }
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    <article className="relative w-full h-48 md:h-64 rounded-md overflow-hidden group">
                        <figure className="absolute inset-0">
                            <img 
                                src="https://www.europeanbusinessreview.com/wp-content/uploads/2024/05/iStock-1131423516-1.jpg"
                                alt="Koi Fish Art"
                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                        </figure>

                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <p className="text-lg font-medium">
                                { t('introduction.themes.education') }
                            </p>
                        </div>
                    </article>
                    
                    <article className="relative w-full h-48 md:h-64 rounded-md overflow-hidden group">
                        <figure className="absolute inset-0">
                            <img 
                                src="https://s3.amazonaws.com/assets.dotlib.com/public/images/ranking-de-melhores-cientistas-do-mundo-tem-10-pesquisadores-do-brasil.png"
                                alt="Koi Fish Art"
                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                        </figure>

                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <p className="text-lg font-medium">
                                { t('introduction.themes.science') }
                            </p>
                        </div>
                    </article>

                    <article className="relative w-full h-48 md:h-64 rounded-md overflow-hidden group">
                        <figure className="absolute inset-0">
                            <img 
                                src="https://thumbs.dreamstime.com/b/digital-map-south-america-brazil-highlighted-glowing-neon-blue-lines-dots-global-network-connectivity-concept-abstract-405871789.jpg"
                                alt="Koi Fish Art"
                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                        </figure>


                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <p className="text-lg font-medium">
                                { t('introduction.themes.technology') }
                            </p>
                        </div>
                    </article>
                </div>

                <p className="text-3xl text-gray-800">
                    {t('introduction.action')}
                </p>
            </div>
        </PresentationSection>
    )
}