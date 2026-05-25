import { ArrowLeft, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <TrendingUp className="size-4 text-primary" />
            <span className="font-mono text-sm font-semibold">
              QuantTam<span className="text-muted-foreground">.vn</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 sm:flex">
            <Link
              href="/#expertise"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Expertise
            </Link>
            <Link
              href="/#projects"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Article */}
      <main className="mx-auto max-w-2xl px-6 py-12 md:py-16">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3" />
          Back
        </Link>
        <article className="mt-10">{children}</article>
      </main>
    </div>
  );
}
