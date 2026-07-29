import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const BLOG_ROOT = path.resolve(BLOG_DIR);

function isSafeBlogPath(targetPath: string): boolean {
  const resolvedPath = path.resolve(targetPath);
  return resolvedPath === BLOG_ROOT || resolvedPath.startsWith(BLOG_ROOT + path.sep);
}

function isSafeSlug(slug: string): boolean {
  return /^[a-z0-9-]+$/.test(slug);
}

export interface PostFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}

export interface PostSummary extends PostFrontmatter {
  slug: string;
}

export interface PostContent extends PostSummary {
  content: string;
}

/**
 * Retorna a lista de todos os posts (metadados apenas), ordenada da
 * mais recente para a mais antiga. Usada na pagina de listagem /blog.
 */
export function getAllPosts(): PostSummary[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .filter((file) => {
      const fullPath = path.resolve(BLOG_DIR, file);
      return isSafeBlogPath(fullPath);
    });

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.resolve(BLOG_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      ...(data as PostFrontmatter),
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Retorna um post especifico (metadados + conteudo em markdown cru),
 * usado na pagina /blog/[slug] junto com o MDXRemote para renderizar.
 */
export function getPostBySlug(slug: string): PostContent | null {
  if (!isSafeSlug(slug)) {
    return null;
  }

  const fullPath = path.resolve(BLOG_DIR, `${slug}.mdx`);

  if (!isSafeBlogPath(fullPath) || !fs.existsSync(fullPath)) {
    return null;
  }

  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    content,
    ...(data as PostFrontmatter),
  };
}

/**
 * Retorna todos os slugs disponiveis, usado no generateStaticParams
 * da pagina [slug] para SSG.
 */
export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
