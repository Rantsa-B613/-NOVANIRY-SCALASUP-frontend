import { GraduationCap } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-2xl font-bold text-blue-600">
              Scalasup
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Accueil
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              À propos
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </nav>
          <div className="flex space-x-4">
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
              Connexion
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
