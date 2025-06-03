import { Document } from 'mongoose';

export interface IPrompt extends Document {
  userId: string;
  chatId: string;
  prompt: string;
  createdAt: Date;
  updatedAt: Date;
}
