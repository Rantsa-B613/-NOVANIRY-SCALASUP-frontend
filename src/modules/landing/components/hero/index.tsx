import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-20 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transformez vos ambitions éducatives en réalité
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Scalasup : La passerelle numérique qui rapproche étudiants,
              parents, et universités pour une éducation sans frontières.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition flex items-center">
                Je suis Etudiant
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center">
                Rejoindre en tant qu'université
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800"
              alt="Students using Scalasup"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
