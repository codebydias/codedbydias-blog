// import Link from "next/link";

import ProjectCard from "@/components/projetcCard";

export default async function Projects() {
  return (
    <main className="mt-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Projetos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="DevMatch"
          description="Rede social para devs, com feed, conexões e perfil profissional."
          status="Em andamento"
          repoUrl="https://github.com/codebydias/dev-match-api"
          // videoUrl=""
        />

        <ProjectCard
          title="Meu Portifolio"
          description="Meu portfólio online, construído com Next.js e Tailwind CSS, onde apresento meus projetos, habilidades e experiências profissionais e com layout responsivo."
          status="Em andamento"
          repoUrl="https://github.com/codedbydias-blog"
          siteUrl="https://codedbydias-blog.vercel.app"
          // videoUrl=""
        />
        <ProjectCard
          title="Mais em breve"
          description="Em breve"
          status="Em breve"
          // repoUrl="https://github.com/codebydias"
          // videoUrl=""
        />
      </div>
    </main>
  );
}
