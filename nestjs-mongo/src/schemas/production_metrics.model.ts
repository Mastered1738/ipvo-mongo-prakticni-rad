import mongoose from 'mongoose';

export const ProductionMetricSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId },
});

export class ProductionMetric {
  constructor(public id: string) {}
}
