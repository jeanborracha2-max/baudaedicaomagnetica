export type PackCategory = 'all' | 'sfx' | 'overlays' | 'luts' | 'transitions' | 'templates' | 'fonts' | 'presets';

export interface PackItem {
  id: string;
  category: PackCategory;
  title: string;
  badge: string;
  itemCount: string;
  size: string;
  description: string;
  highlights: string[];
  iconName: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  channelOrNiche: string;
  subscribersOrIncome: string;
  avatar: string;
  stars: number;
  comment: string;
  verifiedStudent: boolean;
  metricsResult: string;
}

export interface BonusItem {
  id: string;
  number: number;
  title: string;
  tagline: string;
  originalValue: string;
  description: string;
  iconName: string;
  keyBenefits: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  originalPrice: number;
  price: number;
  installments: {
    count: number;
    value: number;
  };
  features: string[];
  bonusesIncluded: boolean;
  lifetimeAccess: boolean;
  isPopular: boolean;
  checkoutUrl: string;
}

export interface RecentSale {
  id: string;
  name: string;
  city: string;
  timeAgo: string;
  plan: string;
}
