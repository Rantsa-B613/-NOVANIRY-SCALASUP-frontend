import { ArrowRight, Award } from "lucide-react";
import { universities } from "../../data/data";

export function Universities() {
  return (
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
                    <div key={idx} className="flex items-center text-gray-600">
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
  );
}
