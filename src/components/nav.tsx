import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 shadow-md z-50">
      <div className="mx-auto px-4 py-3 max-w-6xl flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-bold text-gray-800 hover:text-blue-600"
        >
          Codebydias
        </Link>

        <ul className="flex space-x-4">
          <li>
          </li>
          <li>
            <Link
              href="/about"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
            >
              Blog
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
