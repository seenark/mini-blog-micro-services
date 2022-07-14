import { IEvent } from "@app/events"
import { Body, Controller, Get, Post } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import axios from "axios"
import { TEventBusEnv } from "./env-validate"
import { EventBusService } from "./event-bus.service"

@Controller()
export class EventBusController {
  constructor(
    private readonly eventBusService: EventBusService,
    private readonly config: ConfigService<TEventBusEnv>,
  ) {}

  @Post("events")
  sentEvent(@Body() event: IEvent) {
    this.eventBusService.addEvent(event)
    const body = event
    // posts service
    axios
      .post(`${this.config.get("POSTS_URL")}/events`, body)
      .catch((err) => console.log(err))
    // comments
    axios
      .post(`${this.config.get("COMMENTS_URL")}/events`, body)
      .catch((err) => console.log(err))
    // query
    axios
      .post(`${this.config.get("QUERY_URL")}/events`, body)
      .catch((err) => console.log(err))
    // moderation
    axios
      .post(`${this.config.get("MODERATION_URL")}/events`, body)
      .catch((err) => console.log(err.message))
  }

  @Get("events")
  getEvents() {
    return this.eventBusService.getEvents()
  }

  @Get("/health")
  getHealth() {
    return "OK"
  }
}
