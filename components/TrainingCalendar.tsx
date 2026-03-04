
import React from 'react';

const TrainingCalendar: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const times = ['05:00 AM', '07:30 AM', '09:00 AM', '11:00 AM', '13:00 PM', '15:30 PM', '18:00 PM'];

  const sessions = [
    { day: 'Mon', time: '05:00 AM', title: 'Chest & Triceps', duration: '60 min' },
    { day: 'Tue', time: '09:00 AM', title: 'Leg Day', duration: '90 min' },
    { day: 'Wed', time: '05:00 AM', title: 'Back & Biceps', duration: '60 min', highlight: true },
    { day: 'Wed', time: '13:00 PM', title: 'Cardio & Core', duration: '45 min', highlight: true },
    { day: 'Thu', time: '07:30 AM', title: 'HIIT Circuit', duration: '45 min' },
    { day: 'Fri', time: '05:00 AM', title: 'Shoulders', duration: '60 min' },
    { day: 'Sat', time: '11:00 AM', title: 'Full Body', duration: '120 min' },
    { day: 'Sun', time: '09:00 AM', title: 'Recovery', duration: '30 min' },
  ];

  return (
    <section className="py-24 bg-black overflow-hidden" id="classes">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-widest mb-4">Training Calendar Preview</h2>
          <div className="w-20 h-1.5 bg-[#E2FF00] mx-auto mb-10"></div>
        </div>

        <div className="overflow-x-auto pb-6">
          <div className="min-w-[800px] grid grid-cols-8 gap-1 border border-white/10 p-1 bg-[#111111] rounded-lg">
            {/* Header row */}
            <div className="bg-black/50 p-4 border-b border-white/5"></div>
            {days.map(day => (
              <div key={day} className={`p-4 text-center border-b border-white/5 font-black uppercase tracking-wider ${day === 'Wed' ? 'text-[#E2FF00]' : 'text-zinc-500'}`}>
                {day}
              </div>
            ))}

            {/* Time rows */}
            {times.map(time => (
              <React.Fragment key={time}>
                <div className="bg-black/50 p-4 text-xs font-mono text-zinc-500 border-r border-white/5 flex items-center justify-center">
                  {time}
                </div>
                {days.map(day => {
                  const session = sessions.find(s => s.day === day && s.time === time);
                  return (
                    <div key={`${day}-${time}`} className={`p-2 min-h-[80px] relative border border-white/5 transition-all ${day === 'Wed' ? 'bg-[#E2FF00]/5' : ''}`}>
                      {session && (
                        <div className={`h-full p-2 rounded-sm text-[10px] leading-tight flex flex-col justify-between transition-transform hover:scale-105 cursor-pointer ${session.highlight ? 'bg-[#E2FF00] text-black font-black' : 'bg-[#222] text-white'}`}>
                          <span className="uppercase">{session.title}</span>
                          <span className="opacity-70">{session.duration}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <button className="text-[#E2FF00] font-black border-b-2 border-[#E2FF00] pb-1 hover:opacity-80 transition-opacity uppercase tracking-widest">
              View Full Calendar
            </button>
        </div>
      </div>
    </section>
  );
};

export default TrainingCalendar;
