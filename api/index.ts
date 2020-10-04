import axios from "axios";
import { Data, Post } from "../store/actions/actionTypes";

axios.defaults.baseURL = "https://simple-blog-api.crew.red/";

export function getAllPosts(): Promise<Data | any> {
    return axios.get("posts");
}

export function getEmbededPost(id: number): Promise<Data> {
    return axios.get(`posts/${id}?_embed=comments`);
}

export function postData(title: string, body: string): Promise<Post> {
    return axios.post("posts", {
        title,
        body,
    });
}

export function postComment(id: number, comment: string): Promise<Post> {
    return axios.post("comments", {
        postId: id,
        body: comment,
    });
}
