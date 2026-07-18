/* base-aware links for GitHub Pages project hosting */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const href = (path: string): string =>
  `${base}${path.startsWith("/") ? path : `/${path}`}`;
