import { ConfigModule } from "@nestjs/config"
import { Module } from "@nestjs/common"
import { EventBusController } from "./event-bus.controller"
import { EventBusService } from "./event-bus.service"
import { envValidate } from "./env-validate"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: "./apps/event-bus/.env",
      validate: envValidate,
    }),
  ],
  controllers: [EventBusController],
  providers: [EventBusService],
})
export class EventBusModule {}
