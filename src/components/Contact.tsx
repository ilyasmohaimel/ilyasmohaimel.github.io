interface ContactLink {
  label: string;
  value: string;
  href: string;
}

interface ContactData {
  heading: string;
  subtitle: string;
  availability: string;
  links: ContactLink[];
}

interface ContactProps {
  data: ContactData;
}

export const Contact = ({ data }: ContactProps) => {
  return (
    <section id="contact" className="py-20 px-8 max-w-7xl mx-auto border-t border-dark-600/20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1">
          <h2 className="text-5xl font-bold tracking-tight text-dark-200 leading-tight mb-6">
            {data.heading.split(' ').map((word, index) => (
              <span key={index} className="block">{word}</span>
            ))}
          </h2>
          <p className="text-dark-400 text-sm leading-relaxed">{data.subtitle}</p>
        </div>
        <div className="lg:col-span-1 space-y-6">
          <p className="text-xs font-bold tracking-widest text-dark-400">
            {data.availability}
          </p>
          <div className="space-y-4">
            {data.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex justify-between items-center border-b border-dark-600/20 pb-3 hover:border-dark-400/50 transition-colors group"
                target={link.href.startsWith('http') ? "_blank" : "_self"}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
              >
                <span className="text-xs text-dark-400 tracking-wider">{link.label}</span>
                <span className="text-sm text-dark-400 group-hover:text-dark-200 transition-colors">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1 bg-dark-900/50 p-6 rounded-lg border border-dark-600/20">
          <div className="h-48 bg-dark-800 rounded flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm font-bold text-dark-200">LINUX / AI / SYSTEMS</p>
              <p className="text-xs text-dark-400 mt-1">BUILT WITH CURIOSITY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};