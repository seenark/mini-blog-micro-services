import { TPostEnv } from "./../env-validate"
import { ConfigService } from "@nestjs/config"
import { IEvent } from "@app/events"
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from "@nestjs/common"
import axios from "axios"
import { PostService } from "./post.service"

@Controller("post")
export class PostController {
  constructor(
    private readonly postsService: PostService,
    private readonly config: ConfigService<TPostEnv>,
  ) {}
  @Get()
  getPosts() {
    return this.postsService.getPosts()
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createPost(@Body("title") title: string) {
    const data = this.postsService.createPost(title)

    const url = `${this.config.get("EVENT_BUS_URL")}/events`
    const event: IEvent<"PostCreated"> = {
      type: "PostCreated",
      data: data,
    }
    const res = await axios.post(url, event)
    console.log(res.data)

    return data
  }
}
