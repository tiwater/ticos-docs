import "server-only";
import type { Dictionaries, Dictionary } from "./i18n-config";

// We enumerate all dictionaries here for better linting and TypeScript support
// We also get the default import for cleaner types
const dictionaries: Dictionaries = {
  en: () => import("./en"),
  zh: () => import("./zh"),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const { default: dictionary } = await // @ts-expect-error -- fixme
  (dictionaries[locale] || dictionaries.en)();

  return dictionary;
}

export function getDirection(locale: string): "ltr" | "rtl" {
  return locale === "zh" || locale === "en" ? "ltr" : "rtl";
}
