import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
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
