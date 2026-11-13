import { z } from 'zod';

export const AnalyticsSummarySchema = z.object({
  daily: z.array(
    z.object({
      date: z.string(),
      page_views: z.number(),
      form_clicks: z.number(),
      lead_submits: z.number(),
    }),
  ),
  referrals: z.array(
    z.object({
      source: z.string(),
      count: z.number(),
    }),
  ),
  funnel: z.object({
    page_views: z.number(),
    form_clicks: z.number(),
    lead_submits: z.number(),
  }),
});

export type AnalyticsSummary = z.infer<typeof AnalyticsSummarySchema>;
