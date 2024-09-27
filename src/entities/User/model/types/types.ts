export interface IUser {
    name: string;
    surname: string;
    middlename: string;
    birthdate: number;
}

export interface IUserStore {
    user: IUser | null;
    setUser: (user: IUser) => void;
} 