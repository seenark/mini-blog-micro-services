import { ICommentEvent, IEvent } from "@app/events"
import { Body, Controller, Post } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import axios from "axios"
import { TCommentsEnv } from "../env-validate"
import { commentsByPostId } from "../post/comments.repository"

@Controller("events")
export class EventsController {
  constructor(private readonly config: ConfigService<TCommentsEnv>) {}
  @Post()
  async receiveEvent(@Body() event: IEvent) {
    console.log("RCVD event", event.type)
    if (event.type === "CommentModerated") {
      const data = event.data as ICommentEvent
      const comments = commentsByPostId[data.postId]
      const comment = comments.find((c) => {
        return c.id === data.id
      })
      comment.status = data.status

      const newEvent: IEvent<"CommentUpdated"> = {
        type: "CommentUpdated",
        data: {
          id: data.id,
          content: data.content,
          postId: data.postId,
          status: data.status,
        },
      }
      await axios.post(`${this.config.get("EVENT_BUS_URL")}/events`, newEvent)
    }
    return {}
  }
}
