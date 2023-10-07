const CONFIG = {
  // profile setting (required)
  profile: {
    name: "🍅멋쟁이 토마토🍅",
    image: "/notion-avatar-1696105606401.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "OTAKU",
    bio: "Do What I LOVE",
    email: "seize365days@gmail.com",
    linkedin: "",
    github: "teachthegrace",
    instagram: "",
  },
  services: [
    {
      name: `Naver Blog`,
      href: "https://blog.naver.com/lililililillillil",
    },
    {
      //add github blog link test
      name: `GITHUB Blog`
      href: "https://github.com/teachthegrace",
    },
  ],
  // blog setting (required)
  blog: {
    title: "🍅멋쟁이 토마토🍅 집",
    description: "Welcome to 🍅Tomato🍅 House!",
  },

  // CONFIG configration (required)
  link: "https://blog-test-ing.vercel.app", //what?
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
