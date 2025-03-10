import { ArrowRight } from "lucide-react";

export function Blog() {
  return (
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
  );
}
