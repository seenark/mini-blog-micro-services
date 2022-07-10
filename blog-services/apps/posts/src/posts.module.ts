import { Module } from "@nestjs/common"
import { PostService } from "./post/post.service"
import { PostController } from "./post/post.controller"
import { EventsController } from "./events/events.controller"
import { EventsService } from "./events/events.service"

@Module({
  imports: [],
  controllers: [PostController, EventsController],
  providers: [PostService, EventsService],
})
export class PostsModule {}
