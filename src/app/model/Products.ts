export interface IProduc {
    id?: number,
    name: string,
    price: number,
    subject: string,
    status: boolean
}
export interface IUser{
    id?: number,
    username?:string,
    email?:string,
    password?: string,
    role?: number
}