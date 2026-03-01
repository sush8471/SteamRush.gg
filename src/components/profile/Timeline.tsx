import React from 'react';

export interface TimelineEvent {
  year: number | string;
  title: string;
  description: string;
  eventType: 'milestone' | 'struggle' | 'achievement';
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const getEventColor = (type: TimelineEvent['eventType']) => {
    switch (type) {
      case 'milestone':
        return 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]';
      case 'struggle':
        return 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]';
      case 'achievement':
        return 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]';
      default:
        return 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]';
    }
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
          Gaming Journey
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>

      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>

        <div className="space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center group ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Event Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 border-2 border-black">
                <div className={`w-full h-full rounded-full ${getEventColor(event.eventType)} animate-pulse`}></div>
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 px-4 md:px-12">
                <div 
                  className={`relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}
                >
                  <div className={`absolute top-6 -left-2 md:-left-auto md:-right-2 w-4 h-4 bg-white/5 border-l border-b border-white/10 transform rotate-45 ${
                    index % 2 === 0 ? 'md:left-auto md:-right-2 md:rotate-[225deg]' : 'md:-left-2 md:rotate-45'
                  }`}></div>
                  
                  <span className="text-4xl font-black text-white/20 mb-1 block">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed italic">
                    "{event.description}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
