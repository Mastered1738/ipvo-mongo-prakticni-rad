import { CACHE_MANAGER, CacheStore } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DailyMetric } from 'src/schemas/daily_metrics.model';

@Injectable()
export class DailyMetricService {
  constructor(
    @InjectModel(DailyMetric.name, 'torac-mongo')
    private readonly dailyMetric: Model<DailyMetric>,
    @Inject(CACHE_MANAGER) private cache: CacheStore,
  ) {}
}
