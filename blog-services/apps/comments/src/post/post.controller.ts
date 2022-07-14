import { IEvent } from "@app/events"
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import axios from "axios"
import { TCommentsEnv } from "../env-validate"
import { PostService } from "./post.service"

@Controller("post")
export class PostController {
  constructor(
    private readonly postsService: PostService,
    private readonly config: ConfigService<TCommentsEnv>,
  ) {}

  @Get("/:id/comments")
  getComments(@Param("id") postId: string) {
    return this.postsService.getComments(postId)
  }

  @Post(":id/comments")
  @HttpCode(HttpStatus.CREATED)
  async createComment(
    @Param("id") postId: string,
    @Body("content") content: string,
  ) {
    const data = this.postsService.createComment(postId, content)
    const url = `${this.config.get("EVENT_BUS_URL")}/events`
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
