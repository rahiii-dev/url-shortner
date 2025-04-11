import mongoose, { Schema, Document } from "mongoose";

export interface IShortener extends Document {
  id: string;
  userId: string;
  originalUrl: string;
  shortCode: string;
  clickCount: number;
  isActive?: boolean;
  createdAt: Date;
}

const ShortenerSchema = new Schema<IShortener>(
  {
    userId: {
      type: String,
      required: true,
    },
    originalUrl: {
      type: String,
      required: true,
      trim: true,
    },
    shortCode: {
      type: String,
      required: true,
      unique: true,
    },
    clickCount: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export const Shortener = mongoose.model<IShortener>("Shortener", ShortenerSchema);
