import { FaDocker, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import {
  SiFastify,
  SiTypescript,
  SiLaravel,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiPhp,
} from "react-icons/si";

export default function Tecnologias() {
  const techs = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Fastify", icon: <SiFastify className="text-black" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
    { name: "Php", icon: <SiPhp className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "Next", icon: <SiNextdotjs className="text-black" /> },
    { name: "Vue 3", icon: <FaVuejs className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "Prisma", icon: <SiPrisma className="text-gray-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Tecnologias</h2>
      <div className="flex flex-wrap gap-3">
        {techs.map((tech) => (
          <span
            key={tech.name}
            className="flex items-center gap-2 px-3 py-1 bg-gray-100 border border-gray-300 rounded-full shadow-sm text-sm font-medium hover:scale-105 transition-transform duration-200"
          >
            {tech.icon}
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
}
