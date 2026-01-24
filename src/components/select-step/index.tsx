import { Steps } from "../../contants"
import { useStep } from "../../contexts/step-context"

export const SelectStep = () => {
    const { step, setStep } = useStep()

    function handleChangeStep(value: string) {
        const valueToNumber = Number(value)

        setStep(valueToNumber || 0)
    }

    return (
        <select name="" id="" onChange={(event) => handleChangeStep(event.target.value)}>
            { Steps.map((item, i) => (
                <option value={i} key={i} selected={item === step}>
                    { item }
                </option>
            )) }
        </select>
    )
}