
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatCard = ({ value, label, subtext }: { value: string, label: string, subtext?: string }) => {
  return (
    <Card className="border-none bg-white/50 dark:bg-gaming-dark/50 shadow-md hover-scale">
      <CardContent className="p-6 text-center">
        <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{value}</div>
        <div className="text-lg font-medium mb-1">{label}</div>
        {subtext && <div className="text-sm text-gray-500 dark:text-gray-400">{subtext}</div>}
      </CardContent>
    </Card>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gaming-light/30 dark:from-gaming-dark dark:to-gaming-dark/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our CPA marketing campaigns deliver measurable success for game publishers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            value="500+"
            label="Game Campaigns"
            subtext="Across multiple platforms"
          />
          <StatCard 
            value="38%"
            label="Average ROI Increase"
            subtext="Compared to traditional marketing"
          />
          <StatCard 
            value="12M+"
            label="Players Acquired"
            subtext="Quality gaming users"
          />
          <StatCard 
            value="45%"
            label="Lower User Acquisition Cost"
            subtext="Compared to industry average"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
