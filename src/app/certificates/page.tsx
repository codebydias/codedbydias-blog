import Image from "next/image";

export default function Certificados() {
  const certificados = [
    { name: "React + TypeScript", file: "/cert/front-end.jpg" },
    { name: "Fundamentos do Java", file: "/cert/fundamentos-java.jpg" },
    { name: "Versionamento com Git e Github", file: "/cert/gitGithub.jpg" },
    { name: "Laravel 11 && 12", file: "/cert/laravel.jpg" },
    { name: "Logica e pensamento computacional", file: "/cert/logica.jpg" },
    { name: "Java + SpringBoot", file: "/cert/springRocket.jpg" },
    { name: "NodeJs", file: "/cert/nodeRocket.jpg" },
  ];

  return (
    <main className="mt-20 px-4 sm:px-6 lg:px-0 max-w-5xl mx-auto space-y-12">
      <h1 className="text-2xl font-bold mb-6 text-center">Certificados</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {certificados.map((cert, i) => (
          <a
            key={i}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition text-center"
          >
            <Image
              src={cert.file}
              alt={cert.name}
              width={180}
              height={200}
              className="rounded-md mx-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
            <p className="text-sm text-gray-600">Visualizar certificado</p>
          </a>
        ))}
      </section>
    </main>
  );
}
