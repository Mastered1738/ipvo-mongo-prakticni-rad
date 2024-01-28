import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, CacheStore } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { firstValueFrom } from 'rxjs';
import { DailyMetric } from 'src/schemas/daily_metrics.model';

@Injectable()
export class DailyMetricService {
  constructor(
    @InjectModel(DailyMetric.name, 'torac-mongo')
    private readonly dailyMetric: Model<DailyMetric>,
    @Inject(CACHE_MANAGER) private cache: CacheStore,
    private readonly httpService: HttpService,
  ) {}

  async getDailyMetrics(): Promise<DailyMetric> {
    const response = await firstValueFrom(
      this.httpService.post('http://nestjs-pos:3000/orders/daily_metrics'),
    );

    const dailyMetricData = {
      total_processed_olives: response.data.total_processed_olives,
      total_oil_made: response.data.total_oil_made,
      analyzed_at_time: response.data.analyzed_at_time,
      avarage_oil_percentage: response.data.avarage_oil_percentage,
    };

    const createdDailyMetric = await this.dailyMetric.create(dailyMetricData);

    this.dailyMetric.insertMany(dailyMetricData);

    return createdDailyMetric;
  }
}
