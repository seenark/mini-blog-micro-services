import { IEvent } from "@app/events"
import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import axios from "axios"
import { PostService } from "./post.service"

@Controller("post")
export class PostController {
  constructor(private readonly postsService: PostService) {}

  @Get("/:id/comments")
  getComments(@Param("id") postId: string) {
    return this.postsService.getComments(postId)
  }

  @Post(":id/comments")
  async createComment(
    @Param("id") postId: string,
    @Body("content") content: string,
  ) {
    const data = this.postsService.createComment(postId, content)
    const url = `http://localhost:4005/events`
    const event: IEvent<"CommentCreated"> = {
      type: "CommentCreated",
      data: {
        id: data.id,
        content: data.content,
        postId: postId,
        status: "pending",
      },
    }
    const res = await axios.post(url, event)
    console.log(res.data)
    return data
  }
}
