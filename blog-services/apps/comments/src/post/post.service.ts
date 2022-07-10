import { Injectable } from "@nestjs/common"
import { commentsByPostId } from "./comments.repository"
import * as crypto from "crypto"
import { IComment } from "@app/events"

@Injectable()
export class PostService {
  createComment(postId: string, commentContnent: string) {
    const comments = commentsByPostId[postId] || []
    const newComment: IComment = {
      id: crypto.randomUUID(),
      content: commentContnent,
      status: "pending",
    }

    comments.push(newComment)
    commentsByPostId[postId] = comments
    return newComment
  }

  getComments(postId: string) {
    return commentsByPostId[postId] || []
  }
}
