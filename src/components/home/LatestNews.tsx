import React from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  source: string;
  imageUrl: string;
}

const news: NewsItem[] = [
  {
    id: 1,
    title: "Verstappen domina el GP de Arabia Saudí",
    summary: "Max Verstappen de Red Bull logró otra victoria dominante en una impresionante actuación en el Gran Premio de Arabia Saudí...",
    date: "2024-03-10",
    source: "Formula1.com",
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f"
  },
  {
    id: 2,
    title: "Ferrari presenta importante paquete de mejoras",
    summary: "Scuderia Ferrari ha anunciado importantes actualizaciones para su SF-24 antes del GP de Australia...",
    date: "2024-03-12",
    source: "Motorsport.com",
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f"
  },
  {
    id: 3,
    title: "Mercedes confía en su dirección de desarrollo",
    summary: "Toto Wolff expresa confianza en el camino de desarrollo de Mercedes a pesar del desafiante inicio de 2024...",
    date: "2024-03-14",
    source: "Autosport",
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f"
  }
];

const LatestNews = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Últimas Noticias</h2>
      
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {news.map((item) => (
              <div 
                key={item.id}
                className="w-full flex-shrink-0"
              >
                <div className="relative h-48 mb-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(item.date).toLocaleDateString('es-ES')}</span>
                    <span className="flex items-center">
                      {item.source}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
          aria-label="Noticia anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
          aria-label="Siguiente noticia"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        <div className="flex justify-center space-x-2 mt-4">
          {news.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#e10600]' : 'bg-gray-300'
              }`}
              aria-label={`Ir a la noticia ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;