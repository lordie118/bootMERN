import React from 'react';
import { Car, Home, Heart, PiggyBank, Shield, Bike, Umbrella, User } from 'lucide-react';
import {  Zap, Star, Users, Trophy, Target } from 'lucide-react';
function PresntationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
     

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

    
      <div className="bg-gray-50 py-20">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 text-center mb-12">
  Personnes Éligibles
</h2>


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
            <div className="bg-white md:col-span-2 border justify-center border-gray-200 rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <User size={48} className="text-[#000000] mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                User
              </h3>
            
            </div>
          </div>
        </div>
      </div>


       
   {/* ufsiuqiuf */}
   <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold  text-yellow-300 mb-16">
          Vous pouvez assurer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Sécurité maximale", description: "Protection avancée de vos données" },
            { icon: Zap, title: "Performance", description: "Rapidité et efficacité garanties" },
            { icon: Heart, title: "Support 24/7", description: "Une équipe à votre écoute" }
          ].map((feature, index) => ( 
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-yellow-300  mb-16">
          Vos Avantages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Star, title: "Qualité Premium", description: "Service haut de gamme" },
            { icon: Users, title: "Communauté", description: "Rejoignez nos experts" },
            { icon: Trophy, title: "Récompenses", description: "Programme de fidélité" },
            { icon: Target, title: "Objectifs", description: "Atteignez vos buts" }
          ].map((advantage, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-violet-50 group-hover:bg-violet-100 transition-colors">
                  <advantage.icon className="w-6 h-6  text-black" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{advantage.title}</h3>
                <p className="text-sm text-gray-600 text-center">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-yellow-300">
              NOS VALEURS
            </h2>
            <div className="space-y-6">
              {[
                "Excellence et innovation continue",
                "Engagement envers nos clients",
                "Transparence et confiance",
                "Responsabilité sociale",
                "Développement durable"
              ].map((value, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <p className="text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-2xl transform -rotate-6 group-hover:rotate-6 transition-transform duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
    </div>

    ///////////
    
    
  );
}

export default PresntationPage;