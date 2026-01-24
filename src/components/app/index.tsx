import { StepContextProvider } from "../../contexts/step-context"
import { PublicView } from "../../views/public"

export const App = () => {
    return(
        <StepContextProvider>
            <PublicView />
        </StepContextProvider>
    )
}