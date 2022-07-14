import { Module } from "@nestjs/common"
import { CommentsController } from "./comments.controller"
import { CommentsService } from "./comments.service"
import { PostController } from "./post/post.controller"
import { PostService } from "./post/post.service"
import { EventsController } from "./events/events.controller"
import { EventsService } from "./events/events.service"
import { ConfigModule } from "@nestjs/config"
import { validateEnv } from "./env-validate"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
      envFilePath: "./apps/comments/.env",
    }),
  ],
  controllers: [CommentsController, PostController, EventsController],
  providers: [CommentsService, PostService, EventsService],
})
export class CommentsModule {}
