
import React from 'react';
import { ShieldCheck, Users, Dumbbell } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Dumbbell className="w-8 h-8 text-[#E2FF00]" />,
      title: "Elite Equipment",
      description: "State-of-the-art machines and free weights curated for serious athletes."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#E2FF00]" />,
      title: "Expert Coaching",
      description: "Train with champions. Our coaches provide personalized plans that deliver results."
    },
    {
      icon: <Users className="w-8 h-8 text-[#E2FF00]" />,
      title: "Supportive Community",
      description: "Join a tribe of dedicated individuals pushing each other to greatness every day."
    }
  ];

  return (
    <section className="bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-widest mb-4">Why Choose Us</h2>
          <div className="w-20 h-1.5 bg-[#E2FF00] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="group text-center flex flex-col items-center p-8 rounded-lg hover:bg-white/5 transition-all">
              <div className="mb-6 p-4 rounded-full bg-black border border-white/10 group-hover:border-[#E2FF00] transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 tracking-tighter">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
