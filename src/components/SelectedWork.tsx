interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
}

interface SelectedWorkProps {
  projects: Project[];
}

export const SelectedWork = ({ projects }: SelectedWorkProps) => {
  return (
    <section id="work" className="py-20 px-8 max-w-7xl mx-auto border-t border-dark-600/20">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold tracking-wider text-dark-200">SELECTED WORK</h2>
        <a href="#" className="text-xs text-dark-400 hover:text-dark-200 transition-colors flex items-center gap-2 tracking-widest font-medium">
          VIEW ALL WORK <span className="text-base">→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative bg-dark-900 rounded-lg overflow-hidden border border-dark-600/30 hover:border-dark-400/50 transition-all">
            <div className="h-56 bg-dark-800 flex items-center justify-center">
              <span className="text-2xl font-bold text-dark-600/40">PROJECT</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-4xl font-black text-dark-600">{project.id}</span>
                <span className="text-2xl text-dark-400 group-hover:translate-x-2 transition-transform">→</span>
              </div>
              <h3 className="text-xl font-bold text-dark-200 mb-2">{project.title}</h3>
              <p className="text-xs text-dark-400 mb-4 tracking-wider">{project.category}</p>
              <p className="text-sm text-dark-400 leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};