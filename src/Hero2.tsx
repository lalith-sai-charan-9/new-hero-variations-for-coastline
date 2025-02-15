import React from 'react';
import { Zap, Shield, Clock, ChevronRight, Phone } from 'lucide-react';

function Hero2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full">
              <Zap className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-600 font-medium">24/7 Emergency Service</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Powering Your World with{' '}
              <span className="text-red-600 relative">
                Expert
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 8" fill="none">
                  <path d="M2 5.8c54.7-4.7 163.7-8.9 350 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-red-200"/>
                </svg>
              </span>{' '}
              Care
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Trusted electrical solutions for homes and businesses since 1983. 
              Licensed professionals delivering excellence in every connection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                Get Free Quote
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              
              <button className="inline-flex items-center px-6 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors">
                <Phone className="mr-2 w-5 h-5" />
                (555) 123-4567
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Shield className="w-8 h-8 text-red-600" />
                <div>
                  <div className="font-semibold">Licensed</div>
                  <div className="text-sm text-gray-600">& Insured</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-8 h-8 text-red-600" />
                <div>
                  <div className="font-semibold">40+ Years</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Zap className="w-8 h-8 text-red-600" />
                <div>
                  <div className="font-semibold">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80" 
                alt="Electrician working" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=800&auto=format&fit=crop&q=80" 
                alt="Electrical installation" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=800&auto=format&fit=crop&q=80" 
                alt="Electrical panel" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&auto=format&fit=crop&q=80" 
                alt="Smart home installation" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-100 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;