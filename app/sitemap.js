const siteUrl = "https://avenra.org";

export default function sitemap() {
  return ["", "/about", "/contact", "/product", "/services", "/privacy", "/terms"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    })
  );
}
