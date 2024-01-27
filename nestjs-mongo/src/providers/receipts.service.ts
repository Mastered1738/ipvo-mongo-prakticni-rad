import { CACHE_MANAGER, CacheStore } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Receipt } from 'src/schemas/receipts.model';

@Injectable()
export class ReceiptService {
  constructor(
    @InjectModel(Receipt.name, 'torac-mongo')
    private readonly receipt: Model<Receipt>,
    @Inject(CACHE_MANAGER) private cache: CacheStore,
  ) {}
}
