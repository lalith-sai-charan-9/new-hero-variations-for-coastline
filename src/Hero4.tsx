import React, { useState, useEffect } from 'react';
import { Zap, Shield, Clock, ChevronRight, Phone, Sparkles, Lightbulb, Wrench, Plug, ArrowRight } from 'lucide-react';

function Hero4() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Lightbulb,
      title: "Residential",
      desc: "Complete home electrical solutions",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80",
      benefits: ["Smart Home Integration", "Safety Inspections", "Emergency Repairs"]
    },
    {
      icon: Wrench,
      title: "Commercial",
      desc: "Business electrical systems",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
      benefits: ["Energy Efficiency", "24/7 Support", "Code Compliance"]
    },
    {
      icon: Plug,
      title: "Industrial",
      desc: "Heavy-duty electrical work",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&auto=format&fit=crop&q=80",
      benefits: ["Power Distribution", "System Maintenance", "Safety Standards"]
    },
    {
      icon: Sparkles,
      title: "Smart Systems",
      desc: "Modern automation solutions",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&auto=format&fit=crop&q=80",
      benefits: ["Home Automation", "Energy Monitoring", "Remote Control"]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Emergency Banner */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-red-600 text-white px-6 py-2 rounded-full shadow-lg flex items-center space-x-2">
          <Zap className="w-5 h-5 animate-pulse" />
          <span className="font-medium">24/7 Emergency Service Available</span>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10"></div>
          <img
            src={services[activeService].image}
            alt="Background"
            className="w-full h-screen object-cover transition-opacity duration-1000"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
          <div className="grid grid-cols-12 gap-8 h-full items-center">
            {/* Left Column - Main Content */}
            <div className="col-span-12 lg:col-span-6 space-y-8">
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-7xl font-bold text-gray-900 leading-tight">
                  Powering
                  <span className="block mt-2">
                    Your
                    <span className="relative mx-4">
                      <span className="relative z-10 text-red-600">Future</span>
                      <span className="absolute -bottom-2 left-0 right-0 h-3 bg-red-100"></span>
                    </span>
                  </span>
                </h1>
                
                <p className="mt-6 text-xl text-gray-600 max-w-xl">
                  Bringing four decades of electrical expertise to your doorstep. 
                  Experience excellence in every connection, every project, every time.
                </p>

                {/* CTA Section */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button className="group bg-red-600 text-white px-8 py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-red-700 transition-all transform hover:translate-x-1">
                    <span className="text-lg font-semibold">Schedule Service</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  
                  <button className="group px-8 py-4 border-2 border-red-200 rounded-xl flex items-center justify-center space-x-2 hover:bg-red-50 transition-all">
                    <Phone className="w-5 h-5 text-red-500" />
                    <span className="text-lg font-semibold text-gray-800">(555) 123-4567</span>
                  </button>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600">40+</div>
                    <div className="mt-1 text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600">10k+</div>
                    <div className="mt-1 text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600">100%</div>
                    <div className="mt-1 text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Service Showcase */}
            <div className="col-span-12 lg:col-span-6 h-full flex items-center">
              <div className="w-full space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-500 ${
                      activeService === index
                        ? 'bg-red-50 scale-105'
                        : 'bg-white hover:bg-gray-50'
                    } rounded-xl p-6 cursor-pointer shadow-lg`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${
                        activeService === index ? 'bg-red-100' : 'bg-gray-100'
                      }`}>
                        <service.icon className={`w-6 h-6 ${
                          activeService === index ? 'text-red-600' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600">{service.desc}</p>
                        
                        <div className={`mt-4 space-y-2 transition-all duration-500 ${
                          activeService === index ? 'opacity-100' : 'opacity-0 h-0'
                        }`}>
                          {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center space-x-2 text-gray-600">
                              <ChevronRight className="w-4 h-4 text-red-500" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero4;