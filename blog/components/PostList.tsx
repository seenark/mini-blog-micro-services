import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList, { IComment } from "./CommentList";

export interface IPost {
    id: string;
    title: string;
    comments: IComment[]
}

export type TPosts = { [key: string]: IPost };
interface IPostListProps {
}

const PostList: React.FunctionComponent<IPostListProps> = (props) => {

    const [posts, setPosts] = useState<TPosts>({})

    const fetchPosts = useCallback(async () => {
        const url = `http://localhost:4002/post`
        const res = await axios.get<TPosts>(url)
        console.log(res.data)
        setPosts(res.data)
    }, [])

    useEffect(() => {
        (async () => {
            console.log("fetch posts")
            await fetchPosts()
        })()
    }, [fetchPosts])

    const renderPosts = Object.values(posts).map(post => {
        return (
            <div key={post.id} className="flex flex-row justify-between border border-gray-400 rounded p-4">
                <div className="px-4">
                    <h3 className=" text-[20px] w-[240px]">{post.title}</h3>
                    <CommentList comments={post.comments}  />
                    <CommentCreate postId={post.id} />
                </div>

            </div>
        )
    })

    return (
        <div className="flex flex-row gap-2 flex-wrap">
            {
                renderPosts
            }
        </div>
    );
};

export default PostList;
