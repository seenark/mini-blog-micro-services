import { IEvent } from "@app/events"
import { Body, Controller, Get, Post } from "@nestjs/common"
import axios from "axios"
import { PostService } from "./post.service"

@Controller("post")
export class PostController {
  constructor(private readonly postsService: PostService) {}
  @Get()
  getPosts() {
    return this.postsService.getPosts()
  }

  @Post()
  async createPost(@Body("title") title: string) {
    const data = this.postsService.createPost(title)

    const url = `http://localhost:4005/events`
    const event: IEvent<"PostCreated"> = {
      type: "PostCreated",
      data: data,
    }
    const res = await axios.post(url, event)
    console.log(res.data)

    return data
  }
}
