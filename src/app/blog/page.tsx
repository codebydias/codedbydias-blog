import { prisma } from "@/libs/prisma";
import Link from "next/link";

export const revalidate = 0; // ssr

export default async function BlogPage() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="mt-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-12 text-center">Blog</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <article className="border rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow bg-white">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

              {/* Prévia do conteúdo */}
              <p className="text-gray-700 mb-4">
                {post.content.length > 150
                  ? post.content.slice(0, 150) + "..."
                  : post.content}
              </p>

              <small className="text-gray-500">
                {new Date(post.createdAt).toLocaleDateString("pt-BR")}
              </small>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
