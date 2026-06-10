import type { MDXComponents } from "mdx/types";

/**
 * Global MDX component overrides. Required by `@next/mdx` in the App Router.
 * Blog typography is handled by the `prose` wrapper in the post layout, so we
 * keep this minimal and let elements inherit those styles.
 */
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
