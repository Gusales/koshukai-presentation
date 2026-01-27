import { useState } from "react"
import { saveToken } from "../../lib/auth"

export const LoginView = () => {
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        setTimeout(() => {
            const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD

            if (!adminPassword) {
                setError('Admin password not configured')
                setIsLoading(false)
                return
            }

            if (password === adminPassword) {
                saveToken()
                setPassword('')
                window.location.reload()
            } else {
                setError('Invalid password. Please try again.')
            }

            setIsLoading(false)
        }, 300)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl tracking-tighter text-gray-700 mb-2">
                            Painel de Administração
                        </h1>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Insira a Senha:
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Exemplo: Admin123456"
                                disabled={isLoading}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                required
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-md p-3">
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading || !password.trim()}
                            className="w-full py-2 px-4 bg-red-600 text-white rounded-md font-medium transition-all duration-200 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}