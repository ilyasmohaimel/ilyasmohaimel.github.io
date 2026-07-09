interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface WorkProcessProps {
  process: ProcessStep[];
}

export const WorkProcess = ({ process }: WorkProcessProps) => {
  return (
    <div id="process" className="space-y-8 p-6 border border-dark-600/20 rounded-lg bg-dark-900/50">
      <h3 className="text-xs font-bold tracking-widest text-dark-400">WORK PROCESS</h3>
      <div className="space-y-8">
        {process.map((step) => (
          <div key={step.id} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center border border-dark-600/40">
              <span className="text-lg">{step.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-dark-400">{step.id}</span>
                <h4 className="font-semibold text-dark-200">{step.title}</h4>
              </div>
              <p className="text-sm text-dark-400 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};