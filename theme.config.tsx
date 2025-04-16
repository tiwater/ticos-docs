import { useRouter } from "next/navigation";

const config = {
  logo: <span style={{ fontWeight: "bold" }}>Hetu Docs</span>,
  project: {
    link: "https://github.com/tiwater/hetu",
  },
  docsRepositoryBase: "https://github.com/tiwater/hetu/tree/main/docs",
  footer: {
    text: <span>{new Date().getFullYear()} Hetu Project.</span>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Hetu Docs",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Hetu Documentation" />
      <meta name="og:title" content="Hetu Documentation" />
    </>
  ),
  i18n: [
    { locale: "en", text: "English" },
    { locale: "cn", text: "中文" },
  ],
  sidebar: {
    titleComponent: ({ title, type }: { title: string; type: string }) => {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  primaryHue: 230, // Ticos blue color hue

  // Search configuration
  search: {
    component: "input",
  },

  // Navigation configuration
  navigation: {
    next: true,
    prev: true,
  },

  // Table of contents configuration
  toc: {
    float: true,
  },
};

export default config;
