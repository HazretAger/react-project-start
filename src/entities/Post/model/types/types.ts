export interface IPost {
    name: string;
    surname: string;
    middlename: string;
    birthdate: number;
}

export interface IPostStore {
    post: IPost | null;
    setPost: (post: IPost) => void;
} 