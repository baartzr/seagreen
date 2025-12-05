export interface InsightItem {
  title: string;
  description: string;
  icon: 'trending' | 'shield' | 'clock';
}

export interface InsightsData {
  insights: InsightItem[];
}
