import { NestFactory } from "@nestjs/core"
import { PostsModule } from "./posts.module"

async function bootstrap() {
  const app = await NestFactory.create(PostsModule)
  app.enableCors()
  await app.listen(4000)
}
bootstrap()
