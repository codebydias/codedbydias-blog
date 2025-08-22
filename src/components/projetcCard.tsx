import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  status: "Em andamento" | "Em breve" | "Concluído";
  repoUrl?: string;
  siteUrl?: string;
  videoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  status,
  repoUrl,
  siteUrl,
  videoUrl,
}: ProjectCardProps) {
  const statusColor =
    status === "Em andamento"
      ? "bg-yellow-200 text-yellow-800"
      : status === "Em breve"
      ? "bg-blue-200 text-blue-800"
      : "bg-green-200 text-green-800";

  return (
    <div className="relative p-6 bg-white rounded-lg shadow hover:shadow-md transition flex flex-col justify-between">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span
          className={`px-2 py-1 text-xs rounded-full font-medium ${statusColor}`}
        >
          {status}
        </span>

        <div className="flex space-x-2">
          {repoUrl && (
            <Link
              href={repoUrl}
              target="_blank"
              className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200 transition"
            >
              Repositório
            </Link>
          )}
          {videoUrl && (
            <Link
              href={videoUrl}
              target="_blank"
              className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200 transition"
            >
              Vídeo
            </Link>
          )}
          {siteUrl && (
            <Link
              href={siteUrl}
              target="_blank"
              className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200 transition"
            >
              Site
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
