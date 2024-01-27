import mongoose from 'mongoose';

export const ReceiptSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId },
  worker_name: String,
  buyer_name: String,
  amount: Number,
  timestamp: Date,
});

export class Receipt {
  constructor(
    public id: string,
    public worker_name: string,
    public buyer_name: string,
    public amount: number,
    public timestamp: Date,
  ) {}
}
