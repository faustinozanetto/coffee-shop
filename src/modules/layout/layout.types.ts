export type ISeoData = {
  /** SEO Title */
  title?: string;
  /** SEO Description */
  description?: string;
  /** SEO Canonical URL */
  canonicalUrl?: string;
  /** SEO URL */
  url?: string;
  /** SEO Image URL */
  imageUrl?: string;
  /** SEO Image Alt */
  imageAlt?: string;
  /** SEO Image Dimensions */
  imageDimensions?: {
    width?: number;
    height?: number;
  };
};
