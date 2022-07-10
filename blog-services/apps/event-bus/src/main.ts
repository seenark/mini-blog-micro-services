import { NestFactory } from "@nestjs/core"
import { EventBusModule } from "./event-bus.module"

async function bootstrap() {
  const app = await NestFactory.create(EventBusModule)
  await app.listen(4005)
}
bootstrap()
