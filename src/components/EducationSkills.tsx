interface EducationItem {
  title: string;
  institution: string;
}

interface EducationSkillsProps {
  education: EducationItem[];
  skills: string[];
}

export const EducationSkills = ({ education, skills }: EducationSkillsProps) => {
  return (
    <div className="space-y-10 p-6 border border-dark-600/20 rounded-lg bg-dark-900/50">
      <div>
        <h3 className="text-xs font-bold tracking-widest text-dark-400 mb-6">EDUCATION</h3>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="border-b border-dark-600/20 pb-4">
              <h4 className="font-semibold text-dark-200">{item.title}</h4>
              <p className="text-sm text-dark-400">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xs font-bold tracking-widest text-dark-400 mb-4">SKILLS</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1.5 border border-dark-600/40 rounded text-xs text-dark-400">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};