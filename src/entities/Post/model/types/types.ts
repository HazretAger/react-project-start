export interface IPost {
    name: string;
    surname: string;
    middlename: string;
    birthdate: number;
}

export interface IPostStore {
    user: IUser | null;
    setPost: (user: IPost) => void;
} 