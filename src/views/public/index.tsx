import { KoiBackground } from "../../components/koi";
import { SelectLanguage } from "../../components/select-language/index.tsx";
import { SelectStep } from "../../components/select-step/index.tsx";
import { useStep } from "../../contexts/step-context.tsx";
import { ConclusionView } from "./conclusion-view.tsx";
import { DefaultView } from "./default-view.tsx";
import { EducationView } from "./education-view.tsx";
import { EngenieeringView } from "./engineering-view.tsx";
import { IntroductionView } from "./introduction-view.tsx";
import { ScienceView } from "./science-view.tsx";
import { TechnologyView } from "./technology-view.tsx";
import { UniversityView } from "./university-view.tsx";

export const PublicView = () => {
    const { stepPosition } = useStep()

    const render = () => {
        switch (stepPosition) {
            case 1:
                return <IntroductionView />
            case 2:
                return <EducationView />
            case 3:
                return <UniversityView />
            case 4:
                return <ScienceView />
            case 5:
                return <EngenieeringView />
            case 6:
                return <TechnologyView />
            case 7:
                return <ConclusionView />
            default:
                return <DefaultView />
        }
    }

    return (
        <div className="min-h-screen bg-amber-50 relative overflow-hidden">
            <KoiBackground />

            {/* Only dev */}
            <SelectLanguage />
            <SelectStep />
            {render()}
        </div>
    )
}