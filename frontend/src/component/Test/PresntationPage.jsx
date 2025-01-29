import React from 'react';
import { Car, Home, Heart, PiggyBank, Shield, Bike, Umbrella, User } from 'lucide-react';

function PresntationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-[#020203]">
              LOGO
            </div>
            <div className="hidden md:flex space-x-8">
              {['AUTO', 'MOTO', 'HABITATION', 'EPARGNE', 'PRÉVOYANCE', 'SANTÉ', 'LOISIRS'].map((item) => (
                <button key={item} className="text-gray-700 hover:text-[#103BB9] transition-colors">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#ffe564] to-[#9fb608] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Découvrez nos offres sur mesure
              </h1>
              <p className="text-xl mb-8">
                Pour mieux répondre à vos besoins!
              </p>
              <button className="bg-white text-[#103BB9] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                En savoir plus
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
                alt="Hero"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

    
      {/* Quick Actions Section */}
      <div className="bg-gray-50 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Perssones Eligible </h2>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border justify-center border-gray-200 rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <User size={48} className="text-[#000000] mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                User
              </h3>
             
            </div>
            <div className="bg-white border justify-center border-gray-200 rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <User size={48} className="text-[#000000] mb-4" />
              <h3 className="text-xl font-semibold mb-4">
               User
              </h3>
              
            </div>
            <div className="bg-white border justify-center border-gray-200 rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <User size={48} className="text-[#000000] mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                User
              </h3>
            
            </div>
          </div>
        </div>
      </div>
        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Nos services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { icon: <Car size={32} />, title: 'Auto' },
            { icon: <Home size={32} />, title: 'Habitation' },
            { icon: <Heart size={32} />, title: '' },
     
            { icon: <Shield size={32} />, title: '' },
            { icon: <Bike size={32} />, title: 'Moto' },
            { icon: <Umbrella size={32} />, title: 'Protection' },
          ].map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#103BB9] group"
            >
              <div className="text-[#103BB9] mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

    </div>
    
  );
}

export default PresntationPage;