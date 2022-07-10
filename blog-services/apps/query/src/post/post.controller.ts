import { Controller, Get } from "@nestjs/common"
import { posts } from "./post.repository"

@Controller("post")
export class PostController {
  @Get()
  getPost() {
    return posts
  }
}
