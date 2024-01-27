import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReceiptController } from 'src/controllers/receipts.controller';
import { ReceiptService } from 'src/providers/receipts.service';
import { Receipt, ReceiptSchema } from 'src/schemas/receipts.model';

@Module({
  imports: [
    CacheModule.register(),
    MongooseModule.forFeature(
      [{ name: Receipt.name, schema: ReceiptSchema, collection: 'receipts' }],
      'torac-mongo',
    ),
  ],
  controllers: [ReceiptController],
  providers: [ReceiptService],
})
export class ReceiptModule {}
