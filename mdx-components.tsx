import type { MDXComponents } from "mdx/types";

/**
 * Tipografía de los artículos del blog. Mismo espíritu que LegalArticle
 * (sin plugin de tipografía externo, coherente con el sistema de diseño)
 * pero como mapeo de componentes MDX, la forma recomendada por Next.js
 * para estilar contenido renderizado desde .mdx.
 */
const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 font-heading text-2xl font-semibold tracking-tight text-foreground first:mt-0 sm:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 font-heading text-xl font-semibold text-foreground sm:text-2xl"
      {...props}
    />
  ),
  h4: (props) => (
    <h4 className="mt-6 font-heading text-lg font-medium text-foreground" {...props} />
  ),
  p: (props) => (
    <p className="mt-5 leading-relaxed text-muted-foreground first:mt-0" {...props} />
  ),
  ul: (props) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-medium text-foreground" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-5 border-l-2 border-primary/40 pl-4 text-foreground italic"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-10 border-border/60" {...props} />,
  table: (props) => (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full text-left text-sm text-muted-foreground" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="border-b border-border/60 py-2 pr-4 font-heading font-medium text-foreground" {...props} />
  ),
  td: (props) => <td className="border-b border-border/40 py-2 pr-4" {...props} />,
};

export function getMDXComponents(): MDXComponents {
  return components;
}
