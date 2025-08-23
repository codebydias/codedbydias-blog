// import { prisma } from "@/libs/prisma";
import Experiencia from "@/components/experience";
import Tecnologias from "@/components/tech";
import Link from "next/link";

export default async function About() {
  //   const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="mt-16 px-4 sm:px-6 lg:px-0 max-w-5xl mx-auto space-y-12">

      <section className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Sobre mim
        </h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Olá, eu sou <strong>João Dias</strong>, desenvolvedor FullStack com
          foco em construir soluções de forma pragmática, modular e escalável,
          sempre atento a boas práticas e arquitetura limpa. Minhas principais
          stacks no <span className="font-semibold">Back-end</span> são{" "}
          <span className="font-semibold">Node.js (Fastify + TypeScript)</span>{" "}
          e <span className="font-semibold">Laravel</span>. Já no{" "}
          <span className="font-semibold">Front-end</span>, trabalho com React,
          Next.js e Vue, utilizando{" "}
          <span className="font-semibold">Tailwind CSS</span> para estilização.
        </p>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
          Além do domínio técnico, valorizo{" "}
          <span className="font-semibold">código legível</span>,{" "}
          <span className="font-semibold">testes</span> e{" "}
          <span className="font-semibold">princípios como SOLID e DDD</span>.
          Busco sempre alinhar tecnologia às necessidades do negócio, entregando
          soluções{" "}
          <span className="font-semibold">
            eficientes, escaláveis e de impacto
          </span>
          .
        </p>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
          Já trabalhei tanto em projetos que nasceram do zero quanto em{" "}
          <span className="font-semibold">sistemas em evolução</span>,
          aprendendo que cada linha de código é uma oportunidade de{" "}
          <span className="font-semibold">melhoria contínua</span>.
        </p>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
          Acredito que tecnologia vai muito além de ferramentas: ela deve{" "}
          <span className="font-semibold">resolver problemas reais</span> e{" "}
          <span className="font-semibold">gerar valor para as pessoas</span>. No
          fim do dia, o que mais me motiva é ver ideias ganhando vida e fazendo
          diferença de verdade.
        </p>
      </section>

      {/* Projetos em destaque */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Projetos em Destaque
        </h2>
        <p className="mb-4 text-gray-600 text-sm sm:text-base">
          Confira todos os projetos em{" "}
          <Link href={"/projects"} className="underline text-blue-400">
            /projects
          </Link>
        </p>
      </section>

      <Tecnologias />
      <Experiencia />
    </main>
  );
}
