import type { Link } from "../types";

export const SITE = {
  title: "Grain & Gradient",
  description: "A news website built with Astro",
  author: "Samuel Dorkey",
  url: "https://grainandgradient.vercel.app",
  github: "https://github.com/Sloane-J/astro-news-site",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/current-affairs",
    text: "Current Affairs",
  },
  {
    href: "/categories/technology",
    text: "Technology",
  },
  {
    href: "/categories/trailers",
    text: "Trailers",
  },
  {
    href: "/categories/entertainment",
    text: "Entertainment",
  },
  {
    href: "/categories/deals",
    text: "Deals",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "About us",
  },
  {
    href: "/authors",
    text: "Authors",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/privacy",
    text: "Privacy",
  },
  {
    href: "/terms",
    text: "Terms",
  },
  {
    href: "/cookie-policy",
    text: "Cookie Policy",
  },
  {
    href: "https://grainandgradient.vercel.app/rss.xml",
    text: "RSS",
  },
  {
    href: "https://grainandgradient.vercel.app/sitemap-index.xml",
    text: "Sitemap",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com/Sloane-J",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "httpe://www.t.me/sloan_e",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com/sloanejnr",
    text: "Twitter",
    icon: "newTwitter",
  },
  {
    href: "https://www.facebook.com/Samuel D Jnr",
    text: "Facebook",
    icon: "facebook",
  },
];
