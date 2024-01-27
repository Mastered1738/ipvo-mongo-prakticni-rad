import { Controller } from '@nestjs/common';
import { ReceiptService } from 'src/providers/receipts.service';

@Controller()
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}
}
