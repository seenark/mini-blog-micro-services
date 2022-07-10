import { Injectable } from "@nestjs/common"
import { posts } from "./post.repository"
import { randomUUID } from "crypto"
import { IPost } from "@app/events"

@Injectable()
export class PostService {
  createPost(title: string) {
    const id = randomUUID()
    const newPost: IPost = {
      id: id,
      title,
    }
    posts[id] = newPost
    return newPost
  }

  getPosts() {
    return posts
  }
}
