export interface authRes {
    message: string
    user: User
    token: string
    statusMsg: string
}

export interface User {
    name: string
    email: string
    role: string
}
