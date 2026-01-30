import { Instagram, Linkedin } from "lucide-react"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { PresentationSection } from "../../components/animate-presence"
import { Steps } from "../../contants"

interface Team {
    name: string
    role: string
    imageUrl: string
    socials: {
        instagram?: string
        linkedin?: string
    }
}

export const ConclusionView = () => {
    const { t } = useTranslation()
    const step = Steps[6]

    const team: Team[] = useMemo<Team[]>(() => [
        {
            name: t('conclusion.team.members.daisy.name'),
            role: t('conclusion.team.members.daisy.role'),
            imageUrl: '/images/daisy.png',
            socials: {
                instagram: 'https://www.instagram.com/daisyfukuda/'
            }
        },
        {
            name: t('conclusion.team.members.gustavo.name'),
            role: t('conclusion.team.members.gustavo.role'),
            imageUrl: 'https://github.com/Gusales.png',
            socials: {
                linkedin: 'https://www.linkedin.com/in/devgusales/',
                instagram: 'https://www.instagram.com/devgusales/'
            }
        },
        {
            name: t('conclusion.team.members.hugo.name'),
            role: t('conclusion.team.members.hugo.role'),
            imageUrl: '/images/hugo.png',
            socials: {
                linkedin: 'https://www.linkedin.com/in/hugo-lima-240ab6209/',
            }
        },
        {
            name: t('conclusion.team.members.nicolas.name'),
            role: t('conclusion.team.members.nicolas.role'),
            imageUrl: '/images/nicolas.png',
            socials: {
                instagram: 'https://www.instagram.com/nicolastaniguti/'
            }
        },
        {
            name: t('conclusion.team.members.priscila.name'),
            role: t('conclusion.team.members.priscila.role'),
            imageUrl: '/images/priscila.png',
            socials: {
                linkedin: 'https://www.linkedin.com/in/priscila-o-a41288157',
                instagram: 'https://www.instagram.com/drapriscilaendocrino/'
            }
        },
        {
            name: t('conclusion.team.members.raquel.name'),
            role: t('conclusion.team.members.raquel.role'),
            imageUrl: '/images/raquel.png',
            socials: {
                linkedin: 'https://www.linkedin.com/in/devgusales/',
                instagram: 'https://www.instagram.com/devgusales/'
            }
        },
        {
            name: t('conclusion.team.members.teruko.name'),
            role: t('conclusion.team.members.teruko.role'),
            imageUrl: '/images/teruko.png',
            socials: {
                linkedin: 'https://www.linkedin.com/in/teruko-arimori/',
                instagram: 'https://www.instagram.com/arimori_teruko/'
            }
        },
    ], [t])

    return (
        <PresentationSection key={step} className="flex flex-col container mx-auto gap-6">
            <h1 className="text-4xl md:text-6xl text-center text-gray-600 mb-12">
                {t('conclusion.title')}
            </h1>

            <figure
                className="relative w-full h-48 md:h-64 rounded-md overflow-hidden mb-8"
            >
                <img
                    src="https://images.unsplash.com/photo-1660485345088-c398363c1f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjkzODk3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Gratuadion Celebration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-0 from-[#f8f7f4] via-transparent to-transparent" />
            </figure>

            <section className="grid md:grid-cols-2 gap-6 mb-5 w-full">
                <article className="bg-white/60 p-4 md:p-8 shadow w-full text-center">
                    <h3 className="text-2xl text-red-500 text-center">
                        { t('conclusion.cards.colaboration') }
                    </h3>
                </article>
                <article className="bg-white/60 p-4 md:p-8 shadow w-full text-center">
                    <h3 className="text-2xl text-red-500 text-center">
                        { t('conclusion.cards.research') }
                    </h3>
                </article>
            </section>

            <div className="w-full text-center">
                <h2 className="text-3xl text-gray-500 text-center">
                    { t('conclusion.team.title') }
                </h2>
            </div>

            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    team.map((member) => (
                        <article
                            className="bg-white/60 flex flex-col items-center justify-center p-4 md:p-8 shadow"
                        >
                            <figure className="relative w-full aspect-square rounded-md overflow-hidden mb-3">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </figure>

                            <p className="text-lg text-[#1a1a1a]">{member.name}</p>
                            <p className="text-sm text-[#6e6e6e]">{member.role}</p>

                            <nav>
                                <ul className="flex gap-2 mt-5">
                                    { member.socials.instagram ? (
                                    <li>
                                        <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                                            <Instagram className="w-6 h-6 hover:scale-110 transition-all hover:text-red-500" />
                                        </a>
                                    </li>
                                    ) : (<></>) }
                                    { member.socials.linkedin ? (
                                    <li>
                                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                            <Linkedin className="w-6 h-6 hover:scale-110 transition-all hover:text-red-500" />
                                        </a>
                                    </li>
                                        
                                    ) : (<></>) }
                                </ul>
                            </nav>
                        </article>
                    ))
                }
            </section>

            <div className="bg-white/60 w-full p-4 md:p-8 shadow text-centerx">
                <p className="text-3xl text-gray-500 text-center">
                    { t('conclusion.acknowledgment') }
                </p>
            </div>
        </PresentationSection>
    )
}