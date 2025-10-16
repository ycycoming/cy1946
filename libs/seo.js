import config from "@/config";

// These are all the SEO tags you can add to your pages.
// It prefills data with default title/description/OG, etc.. and you can cusotmize it for each page.
// It's already added in the root layout.js so you don't have to add it to every pages
// But I recommend to set the canonical URL for each page (export const metadata = getSEOTags({canonicalUrlRelative: "/"});)
// See https://shipfa.st/docs/features/seo
export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
} = {}) => {
  return {
    // up to 50 characters (what does your app do for the user?) > your main should be here
    title: title || config.appName,
    // up to 160 characters (how does your app help the user?)
    description: description || config.appDescription,
    // some keywords separated by commas. by default it will be your app name
    keywords: keywords || [config.appName],
    applicationName: config.appName,
    // set a base URL prefix for other fields that require a fully qualified URL (.e.g og:image: og:image: 'https://yourdomain.com/share.png' => '/share.png')
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`
    ),

    openGraph: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: openGraph?.title || config.appName,
      // If you add an opengraph-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [
      //   {
      //     url: `https://${config.domainName}/share.png`,
      //     width: 1200,
      //     height: 660,
      //   },
      // ],
      locale: "zh_CN",
      type: "website",
    },

    twitter: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      // If you add an twitter-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [openGraph?.image || defaults.og.image],
      card: "summary_large_image",
      creator: "@CY1946",
    },

    // If a canonical URL is given, we add it. The metadataBase will turn the relative URL into a fully qualified URL
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    // If you want to add extra tags, you can pass them here
    ...extraTags,
  };
};

// Enhanced structured data for AI crawlers and rich results
// Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// Test your data: https://search.google.com/test/rich-results
export const renderSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: config.appName,
          description: config.appDescription,
          image: `https://${config.domainName}/icon.png`,
          url: `https://${config.domainName}/`,
          author: {
            "@type": "Organization",
            name: "春阳AI团队",
            url: `https://${config.domainName}/`,
          },
          datePublished: "2025-01-01",
          dateModified: new Date().toISOString().split('T')[0],
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: config.stripe.plans.map(plan => ({
            "@type": "Offer",
            name: plan.name,
            description: plan.description,
            price: plan.price.toString(),
            priceCurrency: "CNY",
            priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          })),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "156",
            bestRating: "5",
            worstRating: "1",
          },
        }),
      }}
    ></script>
  );
};

// FAQ Schema for AI understanding
export const renderFAQSchema = (faqs) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: typeof faq.answer === 'string' ? faq.answer : faq.answer.props?.children || '',
            },
          })),
        }),
      }}
    ></script>
  );
};

// Organization Schema
export const renderOrganizationSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: config.appName,
          alternateName: "春阳AI",
          url: `https://${config.domainName}/`,
          logo: `https://${config.domainName}/icon.png`,
          description: config.appDescription,
          contactPoint: {
            "@type": "ContactPoint",
            email: config.resend.supportEmail,
            contactType: "Customer Service",
            availableLanguage: ["Chinese", "zh-CN"],
          },
          sameAs: [
            // Add your social media links here
          ],
        }),
      }}
    ></script>
  );
};

// Breadcrumb Schema
export const renderBreadcrumbSchema = (items) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `https://${config.domainName}${item.path}`,
          })),
        }),
      }}
    ></script>
  );
};
