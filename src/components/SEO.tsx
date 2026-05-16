import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}

const BASE_URL = 'https://valleycollege.sc.ug';
const DEFAULT_IMAGE = `${BASE_URL}/logo (2).png`;
const SITE_NAME = 'Valley College Secondary School Bushenyi';

export function SEO({ title, description, keywords, path = '', image, type = 'website', noindex = false }: SEOProps) {
  const fullTitle = title === 'Home' 
    ? 'Valley College Bushenyi | Best Secondary School in Uganda - O & A Level Education'
    : `${title} | Valley College Secondary School Bushenyi`;
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="UG-WE" />
      <meta name="geo.placename" content="Bushenyi, Western Uganda" />
      <meta name="geo.position" content="-0.5425;29.8853" />

      {/* Language */}
      <link rel="alternate" hreflang="en" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_UG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@valley_college" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
