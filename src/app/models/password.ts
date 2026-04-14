


export interface Password {
    id: string,
    url: string,
    username: string
    password: string,
    createdAt: string
    lastTimeUsed: string
    lastTimeChanged: string
    securityScore: number
    breaches: number | undefined
}

