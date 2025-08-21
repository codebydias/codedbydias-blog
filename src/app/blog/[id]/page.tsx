import { prisma } from "@/libs/prisma";

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await prisma.post.findUnique({ where: { id: params.id } });

  if (!post) return <p>Post não encontrado</p>;

  return (
    <main className="mt-16 px-6 max-w-3xl mx-auto prose prose-slate prose-lg dark:prose-invert">
      {/* Título */}
      <h1 className="text-5xl font-extrabold mb-4 text-center text-gray-900 dark:text-gray-700">
        {post.title}
      </h1>

      {/* Data do post */}
      <p className="text-sm text-gray-500 text-center mb-8">
        {new Date(post.createdAt).toLocaleDateString("pt-BR")}
      </p>

      {/* Conteúdo */}
      <div className="space-y-6">
        {post.content.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </main>
  );
}
