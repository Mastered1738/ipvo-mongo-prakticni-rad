import { CACHE_MANAGER, CacheStore } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductionMetric } from 'src/schemas/production_metrics.model';

@Injectable()
export class ProductionMetricService {
  constructor(
    @InjectModel(ProductionMetric.name, 'torac-mongo')
    private readonly productionMetric: Model<ProductionMetric>,
    @Inject(CACHE_MANAGER) private cache: CacheStore,
  ) {}
}
