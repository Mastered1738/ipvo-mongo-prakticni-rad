import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DailyMetricController } from 'src/controllers/daily_metrics.controller';
import { DailyMetricService } from 'src/providers/daily_metrics.service';
import {
  DailyMetric,
  DailyMetricSchema,
} from 'src/schemas/daily_metrics.model';

@Module({
  imports: [
    HttpModule,
    CacheModule.register(),
    MongooseModule.forFeature(
      [
        {
          name: DailyMetric.name,
          schema: DailyMetricSchema,
          collection: 'daily_metrics',
        },
      ],
      'torac-mongo',
    ),
  ],
  controllers: [DailyMetricController],
  providers: [DailyMetricService],
})
export class DailyMetricModule {}
