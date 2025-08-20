export default function Experiencia() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Experiência</h2>
      <div className="space-y-6 border-l-2 border-gray-300 pl-6">
        <div>
          <h3 className="font-semibold">Desenvolvedor Web FullStack </h3>
          <p className="text-sm text-gray-600">
            Criativa Tecnolgia e Informatica (2024 - atual)
          </p>
          <p className="text-gray-700 mt-1">
            Desenvolvimento de{" "}
            <span className="font-medium">APIs robustas </span>
             com e Laravel, integração com bancos de dados relacional
            exclusivamente MySQL, além da criação de interfaces modernas com
            ReactJs. Experiência em estruturar aplicações{" "}
            <span className="font-medium">modulares e escaláveis</span>, sempre
            buscando alinhar tecnologia às necessidades reais de negócio.
          </p>
        </div>

        {/* Faculdade */}
        <div>
          <h3 className="font-semibold">Projetos Acadêmicos</h3>
          <p className="text-sm text-gray-600">
            Ciência da Computação – Universidade da Amazônia - UNAMA (2022.2 -
            2026)
          </p>
          <p className="text-gray-700 mt-1">
            Participação em projetos aplicados a contextos reais, como sistemas
            de gestão de clínicas entre outros projetos. Atuei tanto no
            <span className="font-medium"> back-end</span> quanto no
            <span className="font-medium"> front-end</span>, adquirindo
            experiência em
            <span className="font-medium">
              {" "}
              trabalho em equipe, versionamento de código e boas práticas de
              desenvolvimento
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
