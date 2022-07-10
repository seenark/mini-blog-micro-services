import { Module } from "@nestjs/common"
import { QueryController } from "./query.controller"
import { QueryService } from "./query.service"
import { PostController } from "./post/post.controller"
import { PostService } from "./post/post.service"
import { EventsController } from "./events/events.controller"
import { EventsService } from "./events/events.service"

@Module({
  imports: [],
  controllers: [QueryController, PostController, EventsController],
  providers: [QueryService, PostService, EventsService],
})
export class QueryModule {}
