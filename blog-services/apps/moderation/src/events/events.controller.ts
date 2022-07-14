import { ICommentEvent, IEvent } from "@app/events"
import { Body, Controller, Post } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import axios from "axios"
import { TModerationEnv } from "../env-validatiion"

@Controller("events")
export class EventsController {
  constructor(private readonly config: ConfigService<TModerationEnv>) {}
  @Post()
  async receiveEvent(@Body() event: IEvent) {
    if (event.type === "CommentCreated") {
      const data = event.data as ICommentEvent
      const status = data.content.includes("orange") ? "rejected" : "approved"
      const newEvent: IEvent<"CommentModerated"> = {
        type: "CommentModerated",
        data: {
          id: data.id,
          postId: data.postId,
          status,
          content: data.content,
        },
      }
      const res = await axios.post(
        `${this.config.get("EVENT_BUS_URL")}/events`,
        newEvent,
      )
      console.log("res", res.data)

      return {}
    }
  }
}
