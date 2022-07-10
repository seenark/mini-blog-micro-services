import { Module } from "@nestjs/common"
import { ModerationController } from "./moderation.controller"
import { ModerationService } from "./moderation.service"
import { EventsController } from './events/events.controller';

@Module({
  imports: [],
  controllers: [ModerationController, EventsController],
  providers: [ModerationService],
})
export class ModerationModule {}
