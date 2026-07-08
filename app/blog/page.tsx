import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog | SP START Solucoes em TI",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Blog"
        title="Conteudo sobre infraestrutura, seguranca e gestao de TI"
      />

      {posts.length === 0 ? (
        <p className="text-sm text-foreground-subtle">
          Nenhum post publicado ainda.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-card border border-border bg-surface-1 p-6 transition-colors hover:border-foreground-subtle"
            >
              <span className="text-xs text-accent">{post.tag}</span>
              <h3 className="mt-2 text-base font-medium leading-snug text-foreground">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-subtle">
                {post.excerpt}
              </p>
              <span className="mt-4 block text-xs text-foreground-subtle">
                {formatDate(post.date)}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
