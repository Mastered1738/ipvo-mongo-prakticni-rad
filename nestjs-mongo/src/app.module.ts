import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { redisStore } from 'cache-manager-redis-yet';
import databaseConfig from 'config/database.config';
import { ReceiptModule } from './modules/receipts.module';
import { CustomerMetricModule } from './modules/customer_metrics.module';
import { ProductionMetricModule } from './modules/production_metrics.module';
import { DailyMetricModule } from './modules/daily_metrics.module';

@Module({
  imports: [
    ReceiptModule,
    CustomerMetricModule,
    ProductionMetricModule,
    DailyMetricModule,
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    MongooseModule.forRoot(
      `mongodb+srv://vinko:1jJ42M7ndfV8R063@torac-mongodb-1aa794cb.mongo.ondigitalocean.com/torac?tls=true&authSource=admin&replicaSet=torac-mongodb`,
      {
        connectionName: 'torac-mongo',
      },
    ),
    CacheModule.registerAsync({
      useFactory: async () => ({
        isGlobal: true,
        store: await redisStore({
          socket: {
            host: 'redis-mongo',
            port: 6379,
          },
        }),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
