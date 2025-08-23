import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 md:px-0">
    
      <section className="text-center py-24">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Olá, eu sou <span className="text-green-800">João Victor T. Dias</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
          Desenvolvedor Full-Stack focado em back-end, apaixonado por criar
          soluções escaláveis, performáticas e com código limpo.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-600 transition text-center"
          >
            Ver Projetos
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-center"
          >
            Ler Blog
          </Link>
        </div>
      </section>

      
      <section className="py-16 text-center max-w-xl sm:max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">Quem sou eu?</h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Sou desenvolvedor com experiência em Node.js, Fastify, TypeScript,
          Laravel e Java. Gosto de resolver problemas complexos aplicando boas
          práticas como DDD, SOLID e testes. Estou sempre em busca de evoluir e
          compartilhar conhecimento.
        </p>
        <Link
          href="/about"
          className="inline-block mt-6 text-green-600 font-medium hover:underline"
        >
          Leia mais →
        </Link>
      </section>

     
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
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
            <p className="mt-2 text-gray-600">
              Saiba mais sobre minha trajetória.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
