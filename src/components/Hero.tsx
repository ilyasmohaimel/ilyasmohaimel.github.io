import { portfolioData } from '../data/portfolio';

interface HeroProps {
  data: typeof portfolioData;
}

export const Hero = ({ data }: HeroProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Huge background PORTFOLIO text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[clamp(9rem,18vw,18rem)] font-black text-dark-800/20 select-none leading-none tracking-tighter">
          PORTFOLIO
        </h1>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center w-full">
        {/* Left text block */}
        <div className="lg:col-span-1 space-y-6">
          <div className="space-y-2">
            <p className="text-dark-400 text-xs font-medium tracking-widest leading-relaxed">
              SYSTEMS BUILDER<br />DIGITAL CREATOR
            </p>
            <p className="text-dark-400 text-lg italic font-light">Hello, I'm</p>
            <h2 className="text-6xl md:text-8xl font-black tracking-tight leading-none text-dark-200">
              ILYAS<br />MOHAIMEL
            </h2>
            <p className="text-xl font-semibold text-dark-200">
              {data.hero.role}
            </p>
          </div>
          <div className="space-y-4 text-dark-400 text-sm leading-relaxed">
            <p>{data.hero.intro}</p>
            <p>{data.hero.supporting}</p>
            <p className="text-xs font-medium tracking-widest">BASED IN {data.location.toUpperCase()}</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 border border-dark-600 rounded hover:bg-dark-900 transition-colors text-xs tracking-widest font-medium">
              VIEW SELECTED WORK
            </button>
            <button className="px-6 py-3 border border-dark-600 rounded hover:bg-dark-900 transition-colors text-xs tracking-widest font-medium">
              CONTACT ME
            </button>
          </div>
        </div>
        {/* Center portrait */}
        <div className="lg:col-span-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src="/src/assets/profile-photo.jpg"
              alt="Portrait of Ilyas Mohaimel holding a camera"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
        {/* Right quick facts */}
        <div className="lg:col-span-1 space-y-4">
          {data.hero.quickFacts.map((fact, index) => (
            <div key={index} className="flex justify-between items-center border-b border-dark-600/30 pb-4">
              <span className="text-dark-400 text-xs tracking-wider">{fact.label}</span>
              <span className="text-3xl font-bold text-dark-200">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};