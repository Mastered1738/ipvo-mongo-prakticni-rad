import mongoose from 'mongoose';

export const CustomerMetricSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId },
});

export class CustomerMetric {
  constructor(public id: string) {}
}
