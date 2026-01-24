import { motion } from 'framer-motion'
import { GraduationCap } from "lucide-react"
import { useTranslation } from 'react-i18next'
import { PresentationSection } from "../../components/animate-presence"
import { Steps } from "../../contants"

export const EducationView = () => {
    const { t } = useTranslation()
    const step = Steps[1]

    return (
        <PresentationSection key={step}>
            <div className="space-y-12 md:space-y-14">
                <div className="max-w-6x1 w-full space-y-8">
                    <h1 className="text-4xl md:text-6xl text-center text-gray-600 mb-12">
                        { t('education.title') }
                    </h1>

                    <h3 className="text-2xl text-gray-500 text-center">
                        { t('education.subTitle') }
                    </h3>
                </div>

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
        },
        {
            id: 'education-elementary',
            title: t('education.elementary.title'),
            description: t('education.elementary.description'),
            details: t('education.elementary.details'),
        },
        {
            id: 'education-secondary',
            title: t('education.secondary.title'),
            description: t('education.secondary.description'),
            details: t('education.secondary.details'),
        },
        {
            id: 'education-higher',
            title: t('education.higher.title'),
            description: t('education.higher.description'),
            details: t('education.higher.details'),
        },
    ];

    return (
        <div className="relative overflow-hidden">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-200/30 transform -translate-x-1/2"/>

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

export const TimelineItem = ({ item, index }: { item: { id: string, title: string, description: string, details: string }, index: number }) => {
              return (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                    {/* Conteúdo */}
                    <div className={`w-full md:w-[calc(50%-2rem)] ${
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
                        {item.details && (
                        <p className="md:hidden text-sm text-[#1a1a1a] mt-3 pt-3 border-t border-[#e8e7e4]">
                            {item.details}
                        </p>
                        )}
                    </div>
                    </div>

                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#c62828] rounded-full items-center justify-center shadow-lg z-10">
                        <GraduationCap className="w-6 h-6 text-white" />
                    </div>

                    <div className="md:hidden flex items-center justify-center w-10 h-10 bg-[#c62828] rounded-full text-white">
                        {index + 1}
                    </div>
                </motion.div>
              )
}