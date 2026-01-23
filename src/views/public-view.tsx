import {useStep} from "../hooks/use-step.ts";

export const PublicView = () => {
    const { step, stepPosition } = useStep()

    return (
        {
            switch (stepPosition) {
                case 1:

            }
        }
    )
}