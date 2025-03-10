import { Bell, BookOpen, FileText, Search, Shield } from "lucide-react";

export function Description() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Pourquoi choisir Scalasup ?
        </h2>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8 text-center">
            Scalasup est bien plus qu'une simple plateforme ; c'est un pont
            entre les étudiants, les lycéens et l'enseignement supérieur, conçu
            pour rendre l'éducation plus accessible, moderne, et pratique.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                Processus d'inscription simplifié
              </h3>
              <p className="text-gray-600">
                Fini les longues files d'attente et les démarches complexes !
                Inscrivez-vous à vos programmes préférés en quelques clics.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Search className="h-6 w-6 text-yellow-500 mr-2" />
                Centralisation des informations
              </h3>
              <p className="text-gray-600">
                Trouvez toutes les informations dont vous avez besoin en un seul
                endroit : programmes, frais, conditions d'admission.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Bell className="h-8 w-8 text-blue-600 mb-4" />
              <h4 className="font-semibold mb-2">Alertes personnalisées</h4>
              <p className="text-gray-600">
                Les utilisateurs reçoivent des notifications pour les dates
                limites d’inscription, les événements éducatifs, et les
                nouveautés des universités.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <BookOpen className="h-8 w-8 text-yellow-500 mb-4" />
              <h4 className="font-semibold mb-2">Guides interactifs</h4>
              <p className="text-gray-600">
                Des tutoriels et supports vidéo pour accompagner les étudiants à
                chaque étape.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <Shield className="h-8 w-8 text-blue-600 mb-4" />
              <h4 className="font-semibold mb-2">Paiements sécurisés</h4>
              <p className="text-gray-600">
                Une option rapide et fiable pour régler les frais d’inscription
                et de scolarité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
