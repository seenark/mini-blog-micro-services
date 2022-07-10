import { IEvent } from "@app/events"
import { Body, Controller, Post } from "@nestjs/common"

@Controller("events")
export class EventsController {
  @Post()
  async receiveEvent(@Body() event: IEvent) {
    console.log("recieve event", event.type)
    return {}
  }
}
