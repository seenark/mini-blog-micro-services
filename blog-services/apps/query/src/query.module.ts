import { Module } from "@nestjs/common"
import { QueryController } from "./query.controller"
import { QueryService } from "./query.service"
import { PostController } from "./post/post.controller"
import { PostService } from "./post/post.service"
import { EventsController } from "./events/events.controller"
import { EventsService } from "./events/events.service"
import { ConfigModule } from "@nestjs/config"
import { validateQueryEnv } from "./env-validate"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateQueryEnv,
      envFilePath: "./apps/query/.env",
    }),
  ],
  controllers: [QueryController, PostController, EventsController],
  providers: [QueryService, PostService, EventsService],
})
export class QueryModule {}
