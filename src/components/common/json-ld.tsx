/**
 * Renders a JSON-LD <script> for structured data (SEO).
 * Safe: data is serialized server-side from trusted, static sources.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
