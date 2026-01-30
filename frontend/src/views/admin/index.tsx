import { SpeechScripts, Steps } from "../../contants"
import { useStep } from "../../contexts/step-context"
import { getToken, isAuthenticated } from "../../lib/auth"
import { LoginView } from "./login-view"

export const AdminView = () => {
    const { step, handleSetStep } = useStep()

    const adminToken = getToken()

    if (!adminToken || !isAuthenticated()) return <LoginView />

    return (
        <div className="min-h-screen bg-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 py-6 lg:px-0">
                <section className="mb-6 space-y-2">
                    <h1 className="text-3xl md:text-5xl tracking-tighter text-gray-700">Controle da Apresentação</h1>
                    <p className="text-lg md:text-xl tracking-tighter text-gray-700">Seção atual: <span className="text-red-400">{ step }</span></p>
                </section>

                <hr className="mb-4 bg-gray-500" />

                <div className="grid lg:grid-cols-3 justify-between gap-6">
                    <section className="lg:col-span-2 space-y-3">
                        <h2 className="text-xl text-gray-800 mb-4">
                            Navegar para Seção
                        </h2>

                        <div className="grid gap-5 w-full">
                            { Steps.map((stepName, index) => {
                                return (
                                    <button
                                        className="w-full cursor-pointer flex items-center gap-2 p-4 rounded-md transition-all duration-200 bg-white text-gray-600 shadow font-medium hover:bg-[#e8e7e4] disabled:bg-[#c62828] disabled:text-white disabled:pointer-events-none"
                                        disabled={stepName === step}
                                        key={index}
                                        onClick={() => handleSetStep(index)}
                                    >
                                        <span>
                                            { index + 1 }.
                                        </span>

                                        { stepName }
                                    </button>
                                )
                            }) }
                        </div>
                    </section>

                    <section className="bg-white/60 rounded shadow p-3">
                       <h2 className="text-xl">Script de Fala</h2>
                       <p>Quem está falando: <span className="text-red-400">{SpeechScripts[step].presenter}</span></p>

                       <div className="space-y-4 mt-4">
                            {
                                SpeechScripts[step].script.map((notes, index) => (
                                    <div key={index}>
                                        <p>{notes.japanese}</p>
                                        <p className="text-gray-600">{notes.romaji}</p>
                                    </div>
                                ))
                            }
                       </div>
                    </section>
                </div>
            </div>
        </div>
    )
}