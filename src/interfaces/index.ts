export interface IUserData {
    userName: string
    address: string
    email: string
    password: string
}

export interface IInputData {
    label: string
    type: string
    id: string
    name: keyof IUserData
}