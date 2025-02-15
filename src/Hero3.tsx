import React, { useState, useEffect } from 'react';
import { Zap, Shield, Clock, ChevronRight, Phone, Sparkles, Lightbulb, Wrench, Plug } from 'lucide-react';

function Hero3() {
  const [isVisible, setIsVisible] = useState(false);
  const services = [
    { icon: Lightbulb, title: "Residential", desc: "Home Electrical Solutions" },
    { icon: Wrench, title: "Commercial", desc: "Business Solutions" },
    { icon: Plug, title: "Industrial", desc: "Heavy-duty Systems" },
    { icon: Sparkles, title: "Smart Home", desc: "Modern Automation" }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMjV2MTBINDB2LTEwaDEwem0tMzAgMHYxMEgxMHYtMTBoMTB6IiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] bg-repeat opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        {/* Emergency Service Banner */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <div className="bg-red-50 shadow-lg border border-red-100 rounded-full px-6 py-2 flex items-center space-x-2">
            <div className="animate-pulse">
              <Zap className="w-5 h-5 text-red-500" />
            </div>
            <span className="text-red-700 font-medium">24/7 Emergency Service Available</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`lg:col-span-6 space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-red-100 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-red-100 rounded-full opacity-50 blur-2xl"></div>
              <h1 className="relative text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                Powering 
                <span className="relative mx-4">
                  <span className="relative z-10 text-red-600">Excellence</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-red-100 transform -skew-x-12"></span>
                </span>
                <br />
                in Every Connection
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed relative z-10">
              Four decades of trusted electrical expertise, delivering innovative solutions 
              for homes and businesses with unmatched precision and reliability.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-red-600 rounded-xl overflow-hidden transition-all hover:scale-105 text-white shadow-lg shadow-red-200">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transition-transform duration-300 group-hover:scale-110"></div>
                <span className="relative flex items-center justify-center text-lg font-semibold">
                  Get Free Quote
                  <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              
              <button className="group px-8 py-4 border-2 border-red-200 rounded-xl hover:bg-red-50 transition-all text-gray-800">
                <span className="flex items-center justify-center text-lg font-semibold">
                  <Phone className="mr-2 w-5 h-5 text-red-500" />
                  (555) 123-4567
                </span>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-white rounded-lg shadow-xl transform transition-transform group-hover:scale-105"></div>
                <div className="relative p-6 text-center">
                  <Shield className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Licensed & Insured</div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-white rounded-lg shadow-xl transform transition-transform group-hover:scale-105"></div>
                <div className="relative p-6 text-center">
                  <Clock className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900">40+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-white rounded-lg shadow-xl transform transition-transform group-hover:scale-105"></div>
                <div className="relative p-6 text-center">
                  <Zap className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Services Grid */}
          <div className={`lg:col-span-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/40 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&auto=format&fit=crop&q=80" 
                  alt="Professional Electrician"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Service Cards */}
                <div className="absolute inset-0 z-20 p-8">
                  <div className="h-full grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div 
                        key={index}
                        className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/90 transition-all duration-300 flex flex-col justify-center shadow-lg"
                      >
                        <service.icon className="w-8 h-8 text-red-500 mb-3 transform group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-semibold mb-1 text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-70"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero3;