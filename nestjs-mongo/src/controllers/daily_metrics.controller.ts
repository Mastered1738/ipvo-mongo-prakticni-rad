import { Controller, Post } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { DailyMetricService } from 'src/providers/daily_metrics.service';
import { DailyMetric } from 'src/schemas/daily_metrics.model';

@Controller('/metrics')
export class DailyMetricController {
  constructor(private readonly dailyMetricService: DailyMetricService) {}

  @Cron('0 0 22 * * *')
  @Post('/get-daily-metrics')
  async getDailyMetrics(): Promise<DailyMetric> {
    return this.dailyMetricService.getDailyMetrics();
  }
}
