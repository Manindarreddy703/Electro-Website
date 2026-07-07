import type { Metadata } from "next";

const SITE_NAME = "Electro — Premium Electronics Store";
const SITE_URL = "https://electro-store.example.com";
const DEFAULT_DESCRIPTION =
  "Shop premium electronics — MacBooks, iPhones, iPads, AirPods, Apple Watches, mechanical keyboards, and more, curated for people who care about the details.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface BuildMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

/**
 * Builds a consistent Metadata object for every route: canonical URL,
 * Open Graph, and Twitter card fields all derive from the same inputs so
 * pages can't drift out of sync with each other.`
 */
export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title === SITE_NAME ? title : `${title} | Electro`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION };
