import {
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
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
  );
}
