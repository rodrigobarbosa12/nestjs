import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { WaysmartMemberRepository } from '../waysmart-member-repository';

@Injectable()
export class PrismaWaysmartMemberRepository
  implements WaysmartMemberRepository
{
  constructor(private prisma: PrismaService) {}

  async create(name: string, func: string): Promise<void> {
    await this.prisma.memberTeamWaySmart.create({
      data: {
        id: randomUUID(),
        name,
        func,
      },
    });
  }
}
