import { ArrowRight, Building2, CheckCircle, Users } from "lucide-react";

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Ce que Scalasup peut faire pour vous
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Pour les étudiants</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Découverte des universités
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Inscription en ligne rapide
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-yellow-500 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Pour les parents</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Informations fiables
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Suivi des candidatures
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <Building2 className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Pour les universités</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Gestion simplifiée
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Analyse de données
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition inline-flex items-center">
            Voir tous les services
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
