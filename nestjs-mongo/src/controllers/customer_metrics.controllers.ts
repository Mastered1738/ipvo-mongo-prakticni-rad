import { Controller } from '@nestjs/common';
import { CustomerMetricService } from 'src/providers/customer_metrics.service';

@Controller()
export class CustomerMetricController {
  constructor(private customerMetricService: CustomerMetricService) {}
}
