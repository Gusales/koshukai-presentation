/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type Dispatch, type ReactNode, type SetStateAction } from "react";

import { useState } from "react";
import { Steps } from "../contants";

export interface StepContextInterface {
    step: string,
    stepPosition: number
    nextStep: () => void
    previousStep: () => void
    setStep: Dispatch<SetStateAction<number>>
}

export const StepContext = createContext<StepContextInterface>({} as StepContextInterface)

export const StepContextProvider = ({ children }: { children: ReactNode }) => {
    const [step, setStep] = useState<number>(0);

    function nextStep() {
        setStep((current) => {
            if (current === 6) return current;
            return current += 1;
        })
    }

    function previousStep() {
        setStep((current) => {
            if (current === 1) return current;
            return current -= 1;
        })
    }

    const value: StepContextInterface = {
        step: Steps[step],
        stepPosition: step,
        setStep,
        nextStep,
        previousStep
    }

    return (
        <StepContext value={value}>
            { children }
        </StepContext>
    )
}

export const useStep = () => {
    return useContext(StepContext)
}
