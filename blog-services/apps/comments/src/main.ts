import { NestFactory } from "@nestjs/core"
import { CommentsModule } from "./comments.module"

async function bootstrap() {
  const app = await NestFactory.create(CommentsModule)
  app.enableCors()
  await app.listen(4001)
}
bootstrap()
