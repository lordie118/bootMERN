import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-[#ffe564]/90 to-[#9fb608]">
        <div className="absolute inset-0 bg-black/30" />
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt="Services hero"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Découvrez notre gamme complète de services professionnels
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        {/* Services Grid - Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              title: "Service 1",
              description: "Description détaillée du service 1 et ses avantages pour les clients.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Service 2",
              description: "Description détaillée du service 2 et ses avantages pour les clients.",
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Service 3",
              description: "Description détaillée du service 3 et ses avantages pour les clients.",
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Service 4",
              description: "Description détaillée du service 4 et ses avantages pour les clients.",
              image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
          ].map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="inline-flex items-center text-gray-900 transition-colors">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Principal</h2>
            <p className="text-gray-600 mb-8">
              Une description détaillée de notre service principal et comment il peut bénéficier à votre entreprise. Nous nous engageons à fournir des solutions de haute qualité.
            </p>
            <ul className="space-y-4 mb-8">
              {['Avantage 1', 'Avantage 2', 'Avantage 3'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-900  mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center gap-2 bg-yellow-200 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors">
              Commencer maintenant
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Featured service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Valeurs</h3>
            <ul className="space-y-4">
              {[
                'Qualité de service exceptionnelle',
                'Innovation continue',
                'Engagement client',
                'Expertise professionnelle'
              ].map((value, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Support 24/7",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Expertise",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((item, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden group">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}