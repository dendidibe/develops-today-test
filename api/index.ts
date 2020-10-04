import axios from "axios";
import { Data, Post } from '../store/actions/actionTypes';

axios.defaults.baseURL = "https://simple-blog-api.crew.red/";

export function getAllPosts(): Promise<Data> {
    return axios.get("posts");
}

export function getEmbededPost(id: number): Promise<Data> {
    return axios.get(`posts/${id}`);
}

export function postData(title: string, body: string): Promise<Post> {
    return axios.post("posts", {
        title,
        body,
    });
}
