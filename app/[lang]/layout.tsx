/* eslint-env node */
import type { Metadata } from "next";
import {
  LastUpdated,
  Layout,
  Link,
  LocaleSwitch,
  Navbar,
} from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { FC, ReactNode } from "react";
import { getDictionary, getDirection } from "../_dictionaries/get-dictionary";
import "./styles.css";
import "./global.css";
import { Locale } from "@app/i18n-utils";

export const metadata: Metadata = {
  description:
    "Ticos Cloud is a platform for building and deploying AI agents.",
  title: {
    absolute: "",
    template: "%s | Ticos Docs",
  },
  metadataBase: new URL("https://docs.ticos.ai"),
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
  const currentLocale = lang as Locale;

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
            alt="Ticos Docs"
            height="24"
            width="24"
            style={{ height: "24px", width: "auto" }}
          />
          <span
            className="ms-2 select-none font-extrabold max-md:hidden"
            title={`Ticos Docs: ${dictionary.logo.title}`}
          >
            Ticos Docs
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
            defaultOpen: true,
            toggleButton: true,
          }}
          toc={{
            float: true,
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
