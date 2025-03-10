import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { diplomaAds } from "../../data/data";

export function AdBanner() {
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
  );
}
