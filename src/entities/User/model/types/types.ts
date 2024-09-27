export interface IUser {
    name: string;
    surname: string;
    middlename: string;
    birthdate: number;
}

export interface IUseUserStore {
    user: IUser | null;
    setUser: (user: IUser) => void;
} 