export type BlogGuideData = {
  /** data-page key of the surviving URL */
  key: string;
  slug: string;
  /** visible H1 */
  title: string;
  /** <title>, without the brand suffix */
  seoTitle: string;
  /** meta description (120-155 chars) */
  description: string;
  /** short line for the blog listing */
  listDesc: string;
  tags: string[];
  keywords: string[];
  published: string;
  updated: string;
  /** 40-60 word direct answer shown first */
  answer: string;
  body: string;
  faq: { q: string; a: string }[];
  related: { href: string; label: string }[];
  ctaEyebrow: string;
  ctaLabel: string;
};
