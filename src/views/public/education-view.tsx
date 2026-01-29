import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react"
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PresentationSection } from "../../components/animate-presence"
import { Steps } from "../../contants"

export const EducationView = () => {
    const { t } = useTranslation()
    const step = Steps[1]

    return (
        <PresentationSection key={step}>
            <div className="space-y-12 md:space-y-14">
                <section className="max-w-6x1 w-full space-y-8">
                    <h1 className="text-4xl md:text-6xl text-center text-gray-800 mb-12">
                        { t('education.title') }
                    </h1>

                    <p className="text-2xl text-gray-500 text-center max-w-3xl">
                        { t('education.subTitle') }
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-6 p-6 bg-white/60 shadow rounded">
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
                                { t('education.stats.students') }
                            </p>
                        </div>
                    </article>

                    <article className="relative w-full h-48 md:h-64 rounded-md overflow-hidden group">
                        <figure className="absolute inset-0">
                            <img 
                                src="https://ufsj.edu.br/portal2-repositorio/Image/ascom/noticias/enade_ifessite.jpg"
                                alt="Koi Fish Art"
                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                        </figure>

                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <p className="text-lg font-medium">
                                { t('education.stats.universities') }
                            </p>
                        </div>
                    </article>
                </section>

                <Timeline />

                <p className="text-lg text-gray-500 text-center">
                    { t('education.action') }
                </p>
            </div>
        </PresentationSection>
    )
}

export const Timeline = () => {
    const { t } = useTranslation()
    const itens = [
        {
            id: 'education-preschool',
            title: t('education.preschool.title'),
            description: t('education.preschool.description'),
            details: t('education.preschool.details'),
            images: [
                'https://thumbor.novaescola.org.br/JeNK2z4eSxH3uBUQW9AUOW7X758=/nova-escola-producao.s3.amazonaws.com/vExVynAhuaSwSMkgcBZWNnvfDAPAy8Q778AyYJt7WYGKxXH7xWzH6ZAMPqhf/pre-escola-leitura.jpg',
                'https://projetocolabora.com.br/wp-content/uploads/2017/10/067_314930-e1503699344207.jpg',
                'https://imagens.ebc.com.br/NLF1MxoVMhjBbUNszezBA-PV6b8=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/arquivo_escola.jpg?itok=vMs47W3H',
            ],
        },
        {
            id: 'education-elementary',
            title: t('education.elementary.title'),
            description: t('education.elementary.description'),
            details: t('education.elementary.details'),
            images: [
                'https://s2.glbimg.com/BcGrj9Te74jRTOaVJc-o1Crtrdg=/620x430/e.glbimg.com/og/ed/f/original/2016/01/02/escola.jpg',
                'https://www.pragmatismopolitico.com.br/wp-content/uploads/2017/09/brasil-tem-investimento-europeu-em-universidades.jpg',
                'https://www.parana.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2024-10/escolas-antes-11.jpg',
            ],
        },
        {
            id: 'education-secondary',
            title: t('education.secondary.title'),
            description: t('education.secondary.description'),
            details: t('education.secondary.details'),
            images: [
                'https://s3-sa-east-1.amazonaws.com/agencia-do-radio/uploads/aula%20sala%20regiao.jpg',
                'https://imagens.ebc.com.br/d2Tdxn2s8kRJA3yWkgcY4RKsav4=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/27539804993_69eb0dd440_z.jpg?itok=uALt0k1c',
                'https://www.redeinspiraeducadores.com.br/wp-content/uploads/2021/12/post_thumbnail-d949e6b963583af13260dda56459fa49.jpg',
            ],
        },
        {
            id: 'education-higher',
            title: t('education.higher.title'),
            description: t('education.higher.description'),
            details: t('education.higher.details'),
            images: [
                'https://www5.usp.br/wp-content/uploads/2022/11/20221130_inclusao_usp2.jpg?x36440',
                'https://imagens.ebc.com.br/5S1b-x8n2hCirIb61M1uNBfqoGA=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/unb2.jpg?itok=MAB8ZLY7',
                'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27892/ensino-superior-afe.jpg',
            ],
        },
    ];

    return (
        <div className="relative overflow-hidden">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#d4af37]/30 transform -translate-x-1/2"/>

            <div className="space-y-12 md:space-y-16">
                {
                    itens.map((item, i) => (
                        <TimelineItem item={item} index={i}  />
                    ))
                }
            </div>
        </div>
    )
}

export interface TimelineItemInterface { 
    item: { 
        id: string, 
        title: string, 
        description: string, 
        details: string,
        images: string[]
    }, 
    index: number
}

export const TimelineItem = ({ item, index }: TimelineItemInterface) => {
    return (
        <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
        >
            {/* Carousel column (desktop only) */}
            <div className="w-full md:w-1/2 hidden md:block">
                <TimeLineCarousel images={item.images} itemId={item.id} itemTitle={item.title} />
            </div>

            {/* Center icon (desktop) */}
            <div className="hidden md:flex w-0 h-0 md:w-12 md:h-12 shrink-0 md:bg-[#c62828] rounded-full items-center justify-center shadow-lg z-30">
                <GraduationCap className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className={`w-full md:w-1/2 ${
            index % 2 === 0 ? 'md:text-right' : 'md:text-left'
            }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-md p-6 shadow-sm border border-black/10">
                <h3 className="text-lg md:text-xl text-[#c62828] mb-2">
                {item.title}
                </h3>
                {item.description && (
                <p className="text-sm text-[#6e6e6e]">
                    {item.description}
                </p>
                )}
                {
                    item.details && (
                        <p className="text-sm text-[#1a1a1a] mt-3 pt-3 border-t border-[#e8e7e4]">
                            {item.details}
                        </p>
                    )
                }
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden mt-4">
                <TimeLineCarousel images={item.images} itemId={item.id} itemTitle={item.title} />
            </div>
            </div>

            {/* Mobile step number */}
            <div className="md:hidden flex items-center justify-center w-10 h-10 bg-[#c62828] rounded-full text-white">
                {/* Mobile indicator */}
            </div>
        </motion.div>
    )
}

interface TimelineCarouselProps {
    images: string[]
    itemId: string
    itemTitle: string
}

export const TimeLineCarousel = ({ images, itemId, itemTitle }: TimelineCarouselProps) => {
    const [carouselIndex, setCarouselIndex] = useState<number>(0)
    const [carouselDirection, setCarouselDirection] = useState<number>(1)

    const slideVariants: Variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            },
        },
        exit: (dir: number) => ({
            x: dir > 0 ? '-100%' : '100%',
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            },
        }),
    }

    const nextSlide = () => {
        setCarouselDirection(1)
        setCarouselIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setCarouselDirection(-1)
        setCarouselIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const setSlide = (slide: number) => {
        setCarouselDirection(carouselIndex <= slide ? 1 : -1)
        setCarouselIndex(slide)
    }

    if (!images || images.length === 0) return null

    return (
        <div className="relative h-48 md:h-64 overflow-hidden rounded-md ring-4 ring-[#d4af37]/20">
            <AnimatePresence initial={false} custom={carouselDirection}>
                <motion.div
                    key={`${itemId}-slide-${carouselIndex}`}
                    custom={carouselDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={images[carouselIndex]}
                        alt={`${itemTitle} ${carouselIndex + 1}`}
                        className="w-full h-full object-cover box-border"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Previous button */}
            <button
                aria-label="Previous image"
                onClick={prevSlide}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/45 text-white rounded-full p-2 shadow hover:bg-black/60 transition-colors"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next button */}
            <button
                aria-label="Next image"
                onClick={nextSlide}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/45 text-white rounded-full p-2 shadow hover:bg-black/60 transition-colors"
            >
                <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setSlide(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                            carouselIndex === i ? 'bg-[#c62828]' : 'bg-[#e8e7e4]'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}