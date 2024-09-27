import { useQuery } from "react-query"
import getPosts from "../api/getPosts"

export const useQueryGetPosts = () => {
    return useQuery("posts", getPosts);
}