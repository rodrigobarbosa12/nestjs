import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { WaysmartMemberRepository } from './repositories/waysmart-member-repository';

@Controller('app')
export class AppController {
  constructor(private waysmartMemberRepository: WaysmartMemberRepository) {}

  @Post('hello')
  async postHello(@Body() body: CreateTeamMemberBody) {
    const { name, func } = body;

    await this.waysmartMemberRepository.create(name, func);
  }
}
