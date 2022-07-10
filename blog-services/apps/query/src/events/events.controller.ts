import { IEvent } from "@app/events"
import { Body, Controller, Post } from "@nestjs/common"
import { handleEvent } from "../post/post.repository"

@Controller("events")
export class EventsController {
  @Post()
  receiveEvent(@Body() event: IEvent) {
    handleEvent(event)
  }
}
