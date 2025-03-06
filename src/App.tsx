import { useState, useEffect } from "react";
import {
  GraduationCap,
  FileText,
  Clock,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Building2,
  Users,
  BookOpen,
  Bell,
  Shield,
  Search,
  CheckCircle,
  Award,
} from "lucide-react";

function App() {
  const diplomaAds = [
    {
      diploma: "Licence en Informatique",
      university: "Université d'Antananarivo",
      deadline: "30 Avril 2024",
    },
    {
      diploma: "Master en Finance",
      university: "INSCAE",
      deadline: "15 Mai 2024",
    },
    {
      diploma: "Ingénieur en Réseaux",
      university: "ESTI",
      deadline: "1 Juin 2024",
    },
    {
      diploma: "MBA International",
      university: "INSCAE",
      deadline: "20 Mai 2024",
    },
    {
      diploma: "Doctorat en Sciences",
      university: "Université d'Antananarivo",
      deadline: "30 Juin 2024",
    },
  ];

  const universities = [
    {
      name: "Université d'Antananarivo",
      diplomas: [
        "Licence en Informatique",
        "Master en Gestion",
        "Doctorat en Sciences",
      ],
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800",
    },
    {
      name: "INSCAE",
      diplomas: [
        "Bachelor en Commerce",
        "MBA International",
        "Master en Finance",
      ],
      image:
        "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=800",
    },
    {
      name: "ESTI",
      diplomas: [
        "Ingénieur en Informatique",
        "Master en Réseaux",
        "Licence en IA",
      ],
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800",
    },
  ];

  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) =>
        prevIndex === diplomaAds.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Ad Banner */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex items-center justify-center space-x-8 overflow-hidden">
              <div className="flex items-center space-x-4 animate-fade-in">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-yellow-300">
                    {diplomaAds[currentAdIndex].diploma}
                  </span>
                </div>
                <span className="text-2xl">|</span>
                <div className="flex flex-col">
                  <span className="font-semibold">
                    {diplomaAds[currentAdIndex].university}
                  </span>
                </div>
                <span className="text-2xl">|</span>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-yellow-300" />
                  <span className="text-yellow-300">
                    Date limite: {diplomaAds[currentAdIndex].deadline}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm hover:bg-yellow-600 transition whitespace-nowrap ml-4">
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Why Choose Scalasup Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Pourquoi choisir Scalasup ?
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-8 text-center">
              Scalasup est bien plus qu'une simple plateforme ; c'est un pont
              entre les étudiants, les lycéens et l'enseignement supérieur,
              conçu pour rendre l'éducation plus accessible, moderne, et
              pratique.
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
                  Trouvez toutes les informations dont vous avez besoin en un
                  seul endroit : programmes, frais, conditions d'admission.
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
                  Des tutoriels et supports vidéo pour accompagner les étudiants
                  à chaque étape.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6">
                <Shield className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Paiements sécurisés</h4>
                <p className="text-gray-600">
                  Une option rapide et fiable pour régler les frais
                  d’inscription et de scolarité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              <h3 className="text-xl font-semibold mb-4">
                Pour les universités
              </h3>
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

      {/* Universities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Nos universités partenaires
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {universities.map((uni, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{uni.name}</h3>
                  <div className="space-y-2">
                    {uni.diplomas.map((diploma, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-600"
                      >
                        <Award className="h-5 w-5 text-yellow-500 mr-2" />
                        <span>{diploma}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition inline-flex items-center">
              Rejoindre nos universités partenaires
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Découvrez les dernières nouvelles de l'éducation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "L'avenir de l'éducation numérique",
                image:
                  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800",
                excerpt:
                  "Découvrez comment la technologie transforme l'expérience éducative.",
              },
              {
                title: "Guide des études supérieures",
                image:
                  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800",
                excerpt:
                  "Tout ce que vous devez savoir pour réussir vos études supérieures.",
              },
              {
                title: "Conseils pour les nouveaux étudiants",
                image:
                  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800",
                excerpt:
                  "Les meilleures pratiques pour bien débuter votre parcours universitaire.",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-yellow-500" />
                <span className="ml-2 text-2xl font-bold">Scalasup</span>
              </div>
              <p className="text-gray-400">
                Votre passerelle vers l'excellence académique
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>contact@scalasup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+261 12 345 67</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Antananarivo, Madagascar</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-500">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-yellow-500">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-yellow-500">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-yellow-500">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Scalasup. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
