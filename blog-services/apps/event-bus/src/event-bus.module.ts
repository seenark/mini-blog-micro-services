import { Module } from "@nestjs/common"
import { EventBusController } from "./event-bus.controller"
import { EventBusService } from "./event-bus.service"

@Module({
  imports: [],
  controllers: [EventBusController],
  providers: [EventBusService],
})
export class EventBusModule {}
