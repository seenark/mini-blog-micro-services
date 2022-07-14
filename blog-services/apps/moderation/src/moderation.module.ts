import { Module } from "@nestjs/common"
import { ModerationController } from "./moderation.controller"
import { ModerationService } from "./moderation.service"
import { EventsController } from "./events/events.controller"
import { ConfigModule } from "@nestjs/config"
import { validateEnv } from "./env-validatiion"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
      envFilePath: "./apps/moderation/.env",
    }),
  ],
  controllers: [ModerationController, EventsController],
  providers: [ModerationService],
})
export class ModerationModule {}
