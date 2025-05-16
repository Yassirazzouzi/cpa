
import React from 'react';
import { Gamepad, Search, TrendingUp, MousePointer } from 'lucide-react';

const StepCard = ({ number, icon: Icon, title, description }: { number: number, icon: any, title: string, description: string }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 p-6 hover-scale">
      <div className="w-16 h-16 flex-shrink-0 bg-gaming-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      
      <div>
        <div className="mb-3 flex items-center justify-center md:justify-start">
          <Icon className="w-5 h-5 text-gaming-primary mr-2" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">{description}</p>
      </div>
      
      {number < 4 && (
        <div className="hidden md:block absolute top-full left-8 w-0.5 h-16 bg-gradient-to-b from-gaming-primary to-transparent"></div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: Gamepad,
      title: "Game Analysis",
      description: "We analyze your game, target audience, and objectives to create a tailored CPA strategy."
    },
    {
      icon: Search,
      title: "Campaign Setup",
      description: "Our team sets up optimized CPA campaigns targeting the most relevant gaming audience."
    },
    {
      icon: MousePointer,
      title: "User Acquisition",
      description: "Drive high-quality traffic that converts into players, subscribers, or purchasers."
    },
    {
      icon: TrendingUp,
      title: "Optimization & Scaling",
      description: "Continuously refine campaigns based on performance data and scale what works."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our streamlined process makes implementing CPA marketing for your game simple and effective.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
