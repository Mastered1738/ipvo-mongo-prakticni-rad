import mongoose from 'mongoose';

export const ReceiptSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId },
});

export class Receipt {
  constructor(public id: string) {}
}
