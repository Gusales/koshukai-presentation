import {useState} from "react";
import {Steps} from "../contants";

export const useStep = () => {
    const [step, setStep] = useState<number>(1);

    function nextStep() {
        setStep((current) => {
            if (current === 7) return current;
            return current += 1;
        })
    }

    function previousStep() {
        setStep((current) => {
            if (current === 1) return current;
            return  current -= 1;
        })
    }

    return {
        step: Steps[step],
        stepPosition: step,
        nextStep,
        previousStep
    }
}
