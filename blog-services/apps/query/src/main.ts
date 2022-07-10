import { IEvent } from "@app/events"
import { NestFactory } from "@nestjs/core"
import axios from "axios"
import { handleEvent } from "./post/post.repository"
import { QueryModule } from "./query.module"

async function bootstrap() {
  const app = await NestFactory.create(QueryModule)
  app.enableCors()
  await app.listen(4002, async () => {
    try {
      const res = await axios.get<IEvent[]>("http://localhost:4005/events")
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
