import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerMetricController } from 'src/controllers/customer_metrics.controllers';
import { CustomerMetricService } from 'src/providers/customer_metrics.service';
import {
  CustomerMetric,
  CustomerMetricSchema,
} from 'src/schemas/customer_metrics.model';

@Module({
  imports: [
    CacheModule.register(),
    MongooseModule.forFeature(
      [
        {
          name: CustomerMetric.name,
          schema: CustomerMetricSchema,
          collection: 'customer_metrics',
        },
      ],
      'torac-mongo',
    ),
  ],
  controllers: [CustomerMetricController],
  providers: [CustomerMetricService],
})
export class CustomerMetricModule {}
