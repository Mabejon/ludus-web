export type FaqItem = {
  question: string;
  answer: string;
};

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type BlogPostingInput = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  authorName: string;
};

export function blogPostingJsonLd({
  title,
  description,
  url,
  publishedAt,
  authorName,
}: BlogPostingInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    author: {
      "@type": "Person",
      name: authorName,
    },
  };
}
