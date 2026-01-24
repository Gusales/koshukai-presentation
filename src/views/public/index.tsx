import { KoiBackground } from "../../components/koi";
import { SelectLanguage } from "../../components/select-language/index.tsx";
import { SelectStep } from "../../components/select-step/index.tsx";
import { useStep } from "../../contexts/step-context.tsx";
import { EducationView } from "./education-view.tsx";
import { IntroductionView } from "./introduction-view.tsx";

export const PublicView = () => {
    const { step, stepPosition } = useStep()

    const render = () => {
        switch(stepPosition) {
            case 0:
                return <IntroductionView />
            case 1:
                return <EducationView />
            case 2:
                return <h1>{step}</h1>
            case 3:
                return <h1>{step}</h1>
            case 4:
                return <h1>{step}</h1>
            case 5:
                return <h1>{step}</h1>
            case 6:
                return <h1>{step}</h1>
            default:
                return <h1>texto padrão</h1>
        }
    }

    return (
        <div className="min-h-screen bg-amber-50 relative overflow-hidden">
            <KoiBackground />

            {/* Only dev */}
            <SelectLanguage />
            <SelectStep />
            { render() }
        </div>
    )
}