import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductionMetricController } from 'src/controllers/production_metrics.controller';
import { ProductionMetricService } from 'src/providers/production_metrics.service';
import {
  ProductionMetric,
  ProductionMetricSchema,
} from 'src/schemas/production_metrics.model';

@Module({
  imports: [
    CacheModule.register(),
    MongooseModule.forFeature(
      [
        {
          name: ProductionMetric.name,
          schema: ProductionMetricSchema,
          collection: 'production_mterics',
        },
      ],
      'torac-mongo',
    ),
  ],
  controllers: [ProductionMetricController],
  providers: [ProductionMetricService],
})
export class ProductionMetricModule {}
