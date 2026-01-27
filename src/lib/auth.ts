export interface TokenData {
    token: string
    createdAt: number
}

export const TOKEN_EXPIRY_MS = 24 * 60 * 60 * 1000 // 24 hours

export function isTokenValid(tokenData: TokenData): boolean {
    const now = Date.now()
    const expiresAt = tokenData.createdAt + TOKEN_EXPIRY_MS

    return now <= expiresAt
}

export function generateToken(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2)}`
}

export function saveToken(): void {
    const tokenData: TokenData = {
        token: generateToken(),
        createdAt: Date.now()
    }
    localStorage.setItem('ADMIN_TOKEN', JSON.stringify(tokenData))
}

export function getToken(): TokenData | null {
    const tokenString = localStorage.getItem('ADMIN_TOKEN')

    if (!tokenString) {
        return null
    }

    try {
        return JSON.parse(tokenString)
    } catch (e) {
        console.error('Failed to parse token:', e)
        return null
    }
}

export function clearToken(): void {
    localStorage.removeItem('ADMIN_TOKEN')
}

export function isAuthenticated(): boolean {
    const token = getToken()

    if (!token) {
        return false
    }

    return isTokenValid(token)
}
