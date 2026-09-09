import type { MetadataRoute } from "next";

/**
 * Nothing here should be crawled while this is a prototype on a temporary
 * domain. See the `robots` block in app/layout.tsx for why.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
