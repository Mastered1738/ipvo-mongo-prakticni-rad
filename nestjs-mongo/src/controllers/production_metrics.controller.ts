import { Controller } from '@nestjs/common';
import { ProductionMetricService } from 'src/providers/production_metrics.service';

@Controller()
export class ProductionMetricController {
  constructor(
    private readonly productionMetricService: ProductionMetricService,
  ) {}
}
