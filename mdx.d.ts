declare module "*.mdx" {
  import type { FC } from "react";
  import type { MDXComponents } from "nextra/mdx-components";
  const ReactComponent: FC<{
    components?: MDXComponents;
  }>;
  export default ReactComponent;
}

// Needed for SWR API documentation processing
declare module "@mdx-js/loader" {
  const loader: any;
  export default loader;
}
