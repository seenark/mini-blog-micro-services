import { IEvent } from "@app/events"
import { ConfigService } from "@nestjs/config"
import { NestFactory } from "@nestjs/core"
import axios from "axios"
import { TQueryEnv } from "./env-validate"
import { handleEvent } from "./post/post.repository"
import { QueryModule } from "./query.module"

async function bootstrap() {
  const app = await NestFactory.create(QueryModule)
  app.enableCors()
  const config = app.get(ConfigService<TQueryEnv>)
  await app.listen(4002, async () => {
    try {
      const res = await axios.get<IEvent[]>(
        `${config.get("EVENT_BUS_URL")}/events`,
      )
      const event = res.data
      event.forEach((e) => {
        handleEvent(e)
      })
    } catch (error) {
      console.log(error)
    }
  })
}
bootstrap()
