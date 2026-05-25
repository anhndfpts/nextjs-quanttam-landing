import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-12 border-b border-border pb-2 text-xl font-semibold text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-base font-semibold text-foreground">
        {children}
      </h3>
    ),

    // Body text
    p: ({ children }) => (
      <p className="mb-5 leading-8 text-muted-foreground">{children}</p>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="mb-6 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-6 space-y-2 pl-5 [counter-reset:item]">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="flex items-baseline gap-3 leading-7 text-muted-foreground">
        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
        <span>{children}</span>
      </li>
    ),

    // Inline text
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-muted-foreground">{children}</em>
    ),

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-primary pl-5 text-muted-foreground">
        {children}
      </blockquote>
    ),

    // Code
    code: ({ children }) => (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-primary">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-6 overflow-x-auto rounded-xl border border-border bg-card p-5 font-mono text-sm leading-7 text-foreground">
        {children}
      </pre>
    ),

    // Divider
    hr: () => <hr className="my-10 border-border" />,

    ...components,
  };
}
