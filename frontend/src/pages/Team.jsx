import AlumniGrid from "../sections/AlumniGrid";

export default function Team() {
  return (
    <main className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none">
        <img 
          src="/favicon.jpg" 
          alt="Logo Background" 
          className="w-3/4 max-w-[800px] opacity-10"
        />
      </div>

      <div className="relative z-[5]">
        <AlumniGrid />
      </div>
    </main>
  );
}