import React, { useContext } from "react";
import { SeoComponent } from "@entities/common.types";
import Head from "next/head";
import { getStrapiMediaUrl } from "@core/http";
import { SeoContext } from "../contexts/seo.context";

export const Seo: React.FC<{ seo?: SeoComponent }> = ({ seo }) => {
  const globalCtx = useContext(SeoContext);
  if (!seo) {
    return null;
  }
  const title = [seo.metaTitle, globalCtx.metaTitle]
    .filter(Boolean)
    .join(" | ");

  return (
    <>
      {seo && (
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} key="og:title" />
          <meta name="description" content={seo.metaDescription} />
          <meta
            property="og:description"
            content={seo.metaDescription}
            key="og:description"
          />
          {seo.keywords && <meta name="keywords" content={seo.keywords} />}
          {seo.metaRobots && <meta name="robots" content={seo.metaRobots} />}
          {seo.canonicalURL && <link rel="canonical" href={seo.canonicalURL} />}
          {seo.metaViewport && (
            <meta name="viewport" content={seo.metaViewport} />
          )}
          {seo.structuredData && (
            <script type="application/ld+json">
              {JSON.stringify(seo.structuredData)}
            </script>
          )}
          <meta
            name="twitter:card"
            content="summary_large_image"
            key="twitter:card"
          />
          <meta property="og:url" content={""} key="og:url" />

          {seo.metaImage && (
            <meta
              property="og:image"
              content={getStrapiMediaUrl(seo.metaImage.data)}
              key="og:image"
            />
          )}
        </Head>
      )}
    </>
  );
};
