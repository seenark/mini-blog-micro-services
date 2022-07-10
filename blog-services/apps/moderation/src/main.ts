import { NestFactory } from "@nestjs/core"
import { ModerationModule } from "./moderation.module"

async function bootstrap() {
  const app = await NestFactory.create(ModerationModule)
  await app.listen(4003)
}
bootstrap()
