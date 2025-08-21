
import React from 'react';

export default function AlumniHero() {
    return (
        <div className="flex flex-wrap justify-center gap-6 mb-12">
            {
                
                    [{
                        icon: '🚀',
                        title: 'Inspire',
                        description: 'We connect aspiring entrepreneurs with leaders, including our alumni, through speaker sessions, workshops, and competitions, inspiring innovative thinking and startup dreams.'
                    },
                    {
                        icon: '🛠️',
                        title: 'Learn-by-Doing',
                        description: 'Through hackathons, startup weekends, and pitch events, we provide hands-on experience and practical skills to build and scale ideas.'
                    },
                    {
                        icon: '🌍',
                        title: 'Impact',
                        description: 'Our alumni play a crucial role in mentoring, funding, and supporting the next generation of IITP entrepreneurs, driving meaningful change in the entrepreneurial ecosystem.'
                    }
                    ].map((card, index) => (
                        <div key={index} className="backdrop-blur-lg bg-black/40 border border-amber-500/30 text-white rounded-xl overflow-hidden shadow-lg p-8 flex flex-col items-center justify-center text-center hover:bg-black/50 hover:shadow-amber-500/20 transition duration-300 max-w-[300px] w-full">
                            <div className="flex items-center justify-center w-28 h-28 rounded-full border-4 border-amber-400 mb-6 bg-black/20">
                                <span className="text-5xl">{card.icon}</span>
                            </div>

                            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">{card.title}</h2>
                            <p className="text-blue-100 text-sm max-w-md">{card.description}</p>
                        </div>
                    ))
                }
        </div>
    );
}
