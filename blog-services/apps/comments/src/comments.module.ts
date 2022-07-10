import { Module } from "@nestjs/common"
import { CommentsController } from "./comments.controller"
import { CommentsService } from "./comments.service"
import { PostController } from "./post/post.controller"
import { PostService } from "./post/post.service"
import { EventsController } from "./events/events.controller"
import { EventsService } from "./events/events.service"

@Module({
  imports: [],
  controllers: [CommentsController, PostController, EventsController],
  providers: [CommentsService, PostService, EventsService],
})
export class CommentsModule {}
