import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";
import { MDXComponents } from "nextra/mdx-components";
import { GitHubIcon } from "nextra/icons";
import { Pre, withIcons } from "nextra/components";

const docsComponents = getDocsMDXComponents({
  pre: withIcons(Pre, { js: GitHubIcon }),
});

export function useMDXComponents(
  components: MDXComponents = {}
): MDXComponents {
  return {
    ...docsComponents,
    ...components,
  };
}
