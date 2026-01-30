import { ExternalLink } from "lucide-react"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { PresentationSection } from "../../components/animate-presence"
import { TimeLineCarousel } from "../../components/caroussel"
import { Steps } from "../../contants"

export const TechnologyView = () => {
  const { t } = useTranslation()
  const step = Steps[5]

  const links = useMemo(
    () => [
      {
        name: t("technology.links.space"),
        link: "https://www.gov.br/inpe/pt-br",
        images: [
          "https://www.aereo.jor.br/wp-content/uploads//2013/06/logo_inpe.gif",
          "https://s2.glbimg.com/7U9aViIBGhVHLPhQDlYkJOtLAjs=/e.glbimg.com/og/ed/f/original/2019/07/23/011-lit_interior.jpg",
          "/images/assets/technology/marcos-pontes.png",
        ],
      },
      {
        name: t("technology.links.pix"),
        link: "https://www.bcb.gov.br/estabilidadefinanceira/pix",
        images: ["https://i.pinimg.com/736x/01/9a/2d/019a2d16277d159cd2ef1298a4c60ab8.jpg"],
      },
      {
        name: t("technology.links.curitiba"),
        link: "https://www.curitiba.pr.gov.br/",
        images: ["https://mid-noticias.curitiba.pr.gov.br/2023/capa/00394122.jpg"],
      },
      {
        name: t("technology.links.superpc"),
        link: "https://www.cptec.inpe.br/",
        images: [
          "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2025/12/supercomputador-jaci-comeca-a-operar-no-enfrentamento-a-desafios-climaticos-brasileiros/whatsapp-image-2025-12-11-at-17-37-10-2.jpeg/@@images/cefa2e03-36a6-4fab-bfc3-04e07ecc20fe.jpeg",
        ],
      },
      {
        name: t("technology.links.scala"),
        link: "https://scaladatacenters.com/",
        images: ["/images/assets/engenieer/scala-datacenters.png"],
      },
      {
        name: t("technology.links.mecatronica"),
        link: "https://www.educamaisbrasil.com.br/educacao/carreira/tecnico-em-mecatronica-e-uma-das-profissoes-mais-valorizadas-no-mercado",
        images: ["https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/jpl_29ZCcaZ.jpg"],
      },
    ],
    [t]
  )

  return (
    <PresentationSection key={step} className="container mx-auto flex flex-col gap-12">
      <h1 className="text-4xl md:text-6xl text-center text-gray-800 mb-12">{t("technology.title")}</h1>

      <section className="w-full grid md:grid-cols-2 md:grid-rows-3 gap-5">
        {links.map(({ link, name, images }, index) => {
          const safeImages = images.filter((src) => src && src.trim().length > 0)
          const hasCarousel = safeImages.length > 1

          return (
              <article className="bg-white/60 backdrop-blur-sm rounded py-4 px-6 space-y-4 shadow hover:shadow-md text-lg md:text-xl transition-all group h-full">
                  {!hasCarousel ? (
                  <figure className="relative w-full h-48 md:h-64 rounded-md overflow-hidden">
                      <img
                      src={safeImages[0]}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  </figure>
                  ) : (
                  <TimeLineCarousel images={safeImages} itemId={link} itemTitle={name} />
                  )}
                    <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    >

                        <div className="flex items-center justify-between group-hover:underline underline-offset-2">
                        {name}
                        <ExternalLink className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                        </div>
                    </a>
              </article>
          )
        })}
      </section>

      <section className="bg-white/60 backdrop-blur-sm rounded text-center p-6 w-full shadow text-2xl text-gray-700">
        {t("technology.subTitle")}
      </section>
    </PresentationSection>
  )
}
