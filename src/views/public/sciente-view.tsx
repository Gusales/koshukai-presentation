import {PresentationSection} from "../../components/animate-presence";
import {Steps} from "../../contants";
import {useTranslation} from "react-i18next";

export const ScienteView = () => {
    const { t } = useTranslation()
    const step = Steps[3]

    return (
        <PresentationSection key={step}>
            <h1>{ t('sciente.title') }</h1>

            <section>
                <figure>
                    <img src="" alt=""/>
                </figure>
            </section>
        </PresentationSection>
    )
}
