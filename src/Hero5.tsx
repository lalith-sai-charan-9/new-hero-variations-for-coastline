import React, { useState, useEffect } from 'react';
import { Zap, Phone, ArrowRight, Star, Award, Users, Shield } from 'lucide-react';

function Hero5() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      title: "Residential",
      description: "Smart home solutions & electrical maintenance",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "Commercial",
      description: "Complete business electrical systems",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "Industrial",
      description: "Heavy-duty power solutions",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop&q=80"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.05)_0%,rgba(255,255,255,0)_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,0,0,0.05)_0%,rgba(255,255,255,0)_50%)]"></div>
      </div>

      {/* Emergency Service Banner */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-full shadow-lg">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMjV2MTBINDB2LTEwaDEwem0tMzAgMHYxMEgxMHYtMTBoMTB6IiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] animate-slide"></div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 animate-pulse" />
            <span className="font-medium">24/7 Emergency Service Available</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="max-w-[2000px] mx-auto">
          <div className="grid grid-cols-12 min-h-screen">
            {/* Left Column - Content */}
            <div className="col-span-12 lg:col-span-5 flex items-center px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
              <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                {/* Main Heading */}
                <div className="relative">
                  <div className="absolute -left-4 -top-4 w-20 h-20 bg-red-50 rounded-full blur-2xl"></div>
                  <h1 className="relative text-6xl sm:text-7xl font-bold text-gray-900 leading-tight">
                    Expert
                    <span className="block mt-2">
                      <span className="relative">
                        <span className="relative z-10">Electrical</span>
                        <span className="absolute bottom-2 left-0 w-full h-3 bg-red-100 transform -rotate-1"></span>
                      </span>
                    </span>
                    <span className="block mt-2 text-red-600">Solutions</span>
                  </h1>
                </div>

                {/* Service Navigation */}
                <div className="flex space-x-4">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-6 py-3 rounded-xl transition-all ${
                        activeTab === index
                          ? 'bg-red-600 text-white shadow-lg shadow-red-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>

                {/* Description */}
                <p className="text-xl text-gray-600 max-w-xl">
                  {services[activeTab].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Licensed & Insured</h3>
                      <p className="text-gray-600 text-sm">Full coverage for your peace of mind</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <Award className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">40+ Years</h3>
                      <p className="text-gray-600 text-sm">Of trusted experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <Star className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">5-Star Service</h3>
                      <p className="text-gray-600 text-sm">Consistently rated excellent</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <Users className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Expert Team</h3>
                      <p className="text-gray-600 text-sm">Certified professionals</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group relative px-8 py-4 bg-red-600 rounded-xl overflow-hidden transition-all hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transition-transform duration-300 group-hover:scale-110"></div>
                    <span className="relative flex items-center justify-center text-lg font-semibold text-white">
                      Get Free Quote
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                  
                  <button className="group px-8 py-4 border-2 border-red-200 rounded-xl flex items-center justify-center space-x-2 hover:bg-red-50 transition-all">
                    <Phone className="w-5 h-5 text-red-500" />
                    <span className="text-lg font-semibold text-gray-800">(555) 123-4567</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Image Showcase */}
            <div className="col-span-12 lg:col-span-7 relative overflow-hidden">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeTab === index
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:from-transparent z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white lg:to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero5