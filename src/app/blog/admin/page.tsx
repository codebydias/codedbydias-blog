"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminCreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) throw new Error("Falha ao criar post");
      router.push("/blog");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro inesperado");
      }
    }
  };

  return (
    <main className="max-w-3xl mx-auto mt-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Criar Novo Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold">Título</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Conteúdo</label>
          <textarea
            className="w-full border rounded-lg p-2 h-64"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Salvando..." : "Criar Post"}
        </button>
      </form>
    </main>
  );
}
