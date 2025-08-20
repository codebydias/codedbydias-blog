export default function Footer() {
  return (
    <footer className=" py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-4">Vamos nos conectar?</h2>
        <p className="text-gray-600 mb-6">
          Me encontre no GitHub ou LinkedIn — sempre aberto a novas ideias e
          colaborações.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://github.com/codebydias"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/codebydias"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600  text-white rounded-lg hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} João Victor T. Dias. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
