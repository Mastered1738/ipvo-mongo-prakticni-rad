import mongoose from 'mongoose';

export const DailyMetricSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId },
  total_processed_olives: Number,
  total_oil_made: Number,
  analyzed_at_time: Date,
  avarage_oil_percentage: Number,
});

export class DailyMetric {
  constructor(
    public id: string,
    public total_processed_olives: number,
    public total_oil_made: number,
    public analyzed_at_time: Date,
    public avarage_oil_percentage: number,
  ) {}
}
