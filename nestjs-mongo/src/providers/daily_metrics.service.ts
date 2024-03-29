import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, CacheStore } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
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

  @Cron('0 0 22 * * *', { timeZone: 'UTC+1' })
  async getDailyMetrics(): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.httpService.post('http://nestjs-pos:3000/orders/daily_metrics'),
      );

      const dailyMetricData = {
        total_processed_olives: response.data.total_processed_olives,
        total_oil_made: response.data.total_oil_made,
        analyzed_at_time: response.data.analyzed_at_time,
        avarage_oil_percentage: response.data.avarage_oil_percentage,
      };

      // Save the document to MongoDB
      const createdDailyMetric = await this.dailyMetric.create(dailyMetricData);
      console.log('Created Daily Metric:', createdDailyMetric);
    } catch (error) {
      // Handle errors appropriately
      console.error('Error fetching and saving daily metrics:', error);
    }
  }
}
