import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
}

const BASE_URL = 'https://valleycollege.sc.ug';
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;

export function SEO({ title, description, keywords, path = '', image }: SEOProps) {
  const fullTitle = title === 'Home' 
    ? 'Valley College Bushenyi | Best Secondary School in Western Uganda'
    : `${title} | Valley College Bushenyi`;
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Valley College Bushenyi" />
      <meta property="og:locale" content="en_UG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
