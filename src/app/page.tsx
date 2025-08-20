import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="text-center py-24 ">
        <h1 className="text-5xl font-bold">
          Olá, eu sou <span className="text-blue-600">João Victor T. Dias</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Desenvolvedor Full-Stack focado em back-end, apaixonado por criar
          soluções escaláveis, performáticas e com código limpo.
        </p>
        <div className="mt-10 space-x-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Ver Projetos
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Ler Blog
          </Link>
        </div>
      </section>

      {/* MINI BIO */}
      <section className="py-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">Quem sou eu?</h2>
        <p className="mt-4 text-gray-600">
          Sou desenvolvedor com experiência em Node.js, Fastify, TypeScript,
          Laravel e Java. Gosto de resolver problemas complexos aplicando boas
          práticas como DDD, SOLID e testes. Estou sempre em busca de evoluir e
          compartilhar conhecimento.
        </p>
        <Link
          href="/about"
          className="inline-block mt-6 text-blue-600 font-medium hover:underline"
        >
          Leia mais →
        </Link>
      </section>

      {/* CHAMADAS RÁPIDAS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Link
            href="/projects"
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold">Projetos</h3>
            <p className="mt-2 text-gray-600">Veja no que estou trabalhando.</p>
          </Link>
          <Link
            href="/blog"
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold">Blog</h3>
            <p className="mt-2 text-gray-600">
              Artigos sobre tech e boas práticas.
            </p>
          </Link>
          <Link
            href="/about"
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold">Sobre mim</h3>
            <p className="mt-2 text-gray-600">Saiba mais sobre minha trajetória.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
