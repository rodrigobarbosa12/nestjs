import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaWaysmartMemberRepository } from './repositories/prisma/prisma-waysmart-member-repository';
import { WaysmartMemberRepository } from './repositories/waysmart-member-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: WaysmartMemberRepository,
      useClass: PrismaWaysmartMemberRepository,
    },
  ],
})
export class AppModule {}
