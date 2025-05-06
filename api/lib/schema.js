// Simplified schema for Vercel
import { z } from 'zod';

export const downloadRequestSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
  watermark: z.boolean().default(false)
});