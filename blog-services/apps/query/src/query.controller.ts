import { Controller, Get } from "@nestjs/common"
import { QueryService } from "./query.service"

@Controller()
export class QueryController {
  constructor(private readonly queryService: QueryService) {}

  @Get("health")
  getHello(): string {
    return this.queryService.getHello()
  }
}
