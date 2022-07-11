import { TPostEnv } from "./env-validate"
import { Controller, Get } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PostsService } from "./posts.service"

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getHello(): string {
    return this.postsService.getHello()
  }
}
