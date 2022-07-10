import { IEvent } from "@app/events"
import { Body, Controller, Get, Post } from "@nestjs/common"
import axios from "axios"
import { EventBusService } from "./event-bus.service"

@Controller()
export class EventBusController {
  constructor(private readonly eventBusService: EventBusService) {}

  @Post("events")
  sentEvent(@Body() event: IEvent) {
    this.eventBusService.addEvent(event)
    const body = event
    axios
      .post("http://localhost:4000/events", body)
      .catch((err) => console.log(err))
    axios
      .post("http://localhost:4001/events", body)
      .catch((err) => console.log(err))
    axios
      .post("http://localhost:4002/events", body)
      .catch((err) => console.log(err))
    axios
      .post("http://localhost:4003/events", body)
      .catch((err) => console.log(err.message))
  }

  @Get("events")
  getEvents() {
    return this.eventBusService.getEvents()
  }
}
