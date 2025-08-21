import { Marquee } from "./magicui/marquee";
import SceneCanvas from "../three/SceneCanvas";

export default function Speakers() {
  const row1Speakers = [
    {
      name: "Anubhav Dubey",
      profession: "Founder of Chai Sutta Bar",
      body: "If you are confident about the execution. Don’t stress much on idea, Start implementing Now.",
      img: "/AnubhavDubey.jpeg",
    },
    {
      name: "Sandeep Jain",
      profession: "Founder of GeeksforGeeks",
      body: "EdTech startups are playing an increasing role in Indian education system with the growth of the Digital India story.",
      img: "/SandeepJain.jpeg",
    },
    {
      name: "Amit Lodha",
      profession: "Additional Director General of Police (ADGP), IPS Officer",
      body: "In the journey of life, the only way to achieve success is to keep moving forward with determination and resilience.",
      img: "/amit.jpg",
    },
  ];

  const row2Speakers = [
    {
      name: "Dr. Tanu Jain",
      profession: "Former Bureaucrat, Founder of Tathastu ICS",
      body: "You are not behind in life. You are on your timeline. The only race that matters is the one with yourself.",
      img: "/tanujain.jpeg",
    },
    {
      name: "Dr. Praveen Sinha",
      profession: "CEO, Tata Power",
      body: "We are dedicated to becoming a customercentric utility by delivering innovative solutions, enhancing customer experiences and building a more sustainable energy future.",
      img: "/praveensinha.jpg",
    },
    {
      name: "Suresh Narasimha",
      profession: "Deep Tech Idea Stage Investor",
      body: "Failures are part of entrepreneurship. Good entrepreneurs take failure as part of the process and move on rather than engaging in self-pity.",
      img: "/Suresh.jpg",
    },
  ];

  const SpeakerCard = ({ spk }) => (
    <div className="w-64 backdrop-blur-lg bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center p-6 rounded-xl border border-white/20 shadow-xl shadow-purple-500/10 mx-4">
      <img
        src={spk.img}
        alt={spk.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-orange-300"
      />
      <h4 className="text-xl font-semibold text-orange-300">{spk.name}</h4>
      <p className="text-sm text-gray-400 mb-1">{spk.profession}</p>
      <p className="text-sm text-gray-300">{spk.body}</p>
    </div>
  );

  return (
    <section className="relative bg-gradient-to-br text-white py-20 px-4 md:px-20 min-h-screen overflow-hidden">

      {/* Background elements for depth */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10 bg-gradient-to-r from-yellow-200 via-orange-300 to-red-300 bg-clip-text text-transparent">
        Meet Our Speakers
      </h2>

      <div className="space-y-12 max-w-7xl mx-auto relative z-10">
        {/* Row 1 */}
        <Marquee pauseOnHover repeat={4}>
          {row1Speakers.map((spk, i) => (
            <SpeakerCard key={`row1-${i}`} spk={spk} />
          ))}
        </Marquee>

        

        {/* Row 2 (reverse) */}
        <Marquee pauseOnHover repeat={4} reverse>
          {row2Speakers.map((spk, i) => (
            <SpeakerCard key={`row2-${i}`} spk={spk} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
