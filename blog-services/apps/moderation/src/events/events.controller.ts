import { ICommentEvent, IEvent } from "@app/events"
import { Body, Controller, Post } from "@nestjs/common"
import axios from "axios"

@Controller("events")
export class EventsController {
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
      const res = await axios.post("http://localhost:4005/events", newEvent)
      console.log("res", res.data)

      return {}
    }
  }
}
