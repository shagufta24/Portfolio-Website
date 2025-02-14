export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shagufta Anjum",
    url: "https://shagufta.dev",
    jobTitle: "",
    description:
      "",
    sameAs: [
      "https://www.linkedin.com/in/shaguftaanjum",
      "https://github.com/shagufta24"
    ],
    knowsAbout: [
      
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shagufta Anjum - Portfolio",
    url: "https://shagufta.dev",
    description:
      "Personal portfolio of Shagufta Anjum",
    author: {
      "@type": "Person",
      name: "Shagufta Anjum",
    },
  };
}

interface StructuredDataProps {
  type: "person" | "website" | "both";
}

export default function StructuredData({ type }: StructuredDataProps) {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
