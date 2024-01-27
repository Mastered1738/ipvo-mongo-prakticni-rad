import mongoose from 'mongoose';

export const DailyMetricSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId },
});

export class DailyMetric {
  constructor(public id: string) {}
}
