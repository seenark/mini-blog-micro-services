import { Module } from "@nestjs/common"
import { PostService } from "./post/post.service"
import { PostController } from "./post/post.controller"
import { EventsController } from "./events/events.controller"
import { EventsService } from "./events/events.service"
import { ConfigModule } from "@nestjs/config"
import { PostEnvValidate } from "./env-validate"
import { PostsController } from "./posts.controller"
import { PostsService } from "./posts.service"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: PostEnvValidate,
      envFilePath: "./apps/posts/.env",
    }),
  ],
  controllers: [PostsController, PostController, EventsController],
  providers: [PostsService, PostService, EventsService],
})
export class PostsModule {}
