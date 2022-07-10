import { IEvent } from "@app/events"
import { Injectable } from "@nestjs/common"

const events: IEvent[] = []

@Injectable()
export class EventBusService {
  addEvent(event: IEvent) {
    events.push(event)
  }

  getEvents() {
    return events
  }
}
