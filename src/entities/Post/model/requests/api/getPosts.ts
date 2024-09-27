import axios from "axios";

export default async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/10');

    return data;
} 