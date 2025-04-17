/* eslint-env node */
import { SwrIcon, VercelIcon } from "@app/_icons";
import type { Metadata } from "next";
import {
  Footer,
  LastUpdated,
  Layout,
  Link,
  LocaleSwitch,
  Navbar,
} from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Image from "next/image";
import type { FC, ReactNode } from "react";
import { getDictionary, getDirection } from "../_dictionaries/get-dictionary";
import "./styles.css";

export const metadata: Metadata = {
  description:
    "Ticos Cloud is a platform for building and deploying AI agents.",
  title: {
    absolute: "",
    template: "%s | Ticos Docs",
  },
  metadataBase: new URL("https://docs.ticos.ai"),
  openGraph: {
    images:
      "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg",
  },
  appleWebApp: {
    title: "Ticos Docs",
  },
  other: {
    "msapplication-TileColor": "#fff",
  },
};

type LayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
}>;

const RootLayout: FC<LayoutProps> = async ({ children, params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  let pageMap = await getPageMap(`/${lang}`);

  if (lang === "en") {
    pageMap = [...pageMap];
  }
  const banner = (
    <Banner storageKey="swr-2">
      Ticos Cloud is out! <Link href="#">Read more →</Link>
    </Banner>
  );
  const navbar = (
    <Navbar
      logo={
        <>
          <img
            src="/logo.svg"
            alt="Ticos Cloud"
            height="24"
            width="24"
            style={{ height: "24px", width: "auto" }}
          />
          <span
            className="ms-2 select-none font-extrabold max-md:hidden"
            title={`Ticos Cloud: ${dictionary.logo.title}`}
          >
            Ticos Cloud
          </span>
        </>
      }
      projectLink="https://github.com/tiwater/ticos-docs"
    >
      <LocaleSwitch lite />
    </Navbar>
  );
  return (
    <html lang={lang} dir={getDirection(lang)} suppressHydrationWarning>
      <Head
        backgroundColor={{
          dark: "#111",
          light: "#fff",
        }}
        color={{
          hue: { dark: 204, light: 204 },
          saturation: { dark: 100, light: 100 },
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          docsRepositoryBase="https://github.com/tiwater/ticos-docs"
          i18n={[
            { locale: "en", name: "English" },
            { locale: "zh", name: "中文" },
          ]}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
          }}
          toc={{
            backToTop: dictionary.backToTop,
          }}
          editLink={dictionary.editPage}
          pageMap={pageMap}
          nextThemes={{ defaultTheme: "dark" }}
          lastUpdated={<LastUpdated>{dictionary.lastUpdated}</LastUpdated>}
          themeSwitch={{
            dark: dictionary.dark,
            light: dictionary.light,
            system: dictionary.system,
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
