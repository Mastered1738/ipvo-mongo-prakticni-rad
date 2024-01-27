import { Controller } from '@nestjs/common';
import { DailyMetricService } from 'src/providers/daily_metrics.service';

@Controller()
export class DailyMetricController {
  constructor(private readonly dailyMetricService: DailyMetricService) {}
}
