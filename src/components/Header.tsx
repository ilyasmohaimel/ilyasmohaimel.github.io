export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex flex-col text-xs">
          <span className="text-dark-400 font-medium tracking-widest">SYSTEMS BUILDER</span>
          <span className="text-dark-400 font-medium tracking-widest">DIGITAL CREATOR</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest font-medium">
          <a href="#" className="text-dark-400 hover:text-dark-200 transition-colors">HOME</a>
          <a href="#work" className="text-dark-400 hover:text-dark-200 transition-colors">WORK</a>
          <a href="#process" className="text-dark-400 hover:text-dark-200 transition-colors">PROCESS</a>
          <a href="#contact" className="text-dark-400 hover:text-dark-200 transition-colors">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};