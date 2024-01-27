import { CACHE_MANAGER, CacheStore } from '@nestjs/cache-manager';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerMetric } from 'src/schemas/customer_metrics.model';

@Injectable()
export class CustomerMetricService {
  constructor(
    @InjectModel(CustomerMetric.name, 'torac-mongo')
    private readonly customerMetricService: Model<CustomerMetric>,
    @Inject(CACHE_MANAGER) private cache: CacheStore,
  ) {}
}
