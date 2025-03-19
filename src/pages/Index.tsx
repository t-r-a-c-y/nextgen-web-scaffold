
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const handleViewSettings = () => {
    navigate('/settings');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 animate-fadeIn">
      <div className="max-w-3xl w-full mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to PandemicNet</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A beautifully designed application with attention to detail and premium user experience
          </p>
          
          <div className="glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-md">
            <h2 className="text-2xl font-medium mb-6">Getting Started</h2>
            <p className="text-gray-600 mb-8">
              Explore our settings page to customize your experience and configure your profile.
            </p>
            
            <Button onClick={handleViewSettings} className="btn-primary">
              View Settings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-12 text-gray-500 text-sm">
            Built with precision and care for the perfect user experience
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
