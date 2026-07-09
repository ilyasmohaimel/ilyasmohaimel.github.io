interface FooterData {
  copyright: string;
  location: string;
  tagline: string;
}

interface FooterProps {
  data: FooterData;
}

export const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="py-12 px-8 border-t border-dark-600/20">
      <div className="max-w-7xl mx-auto text-center text-xs text-dark-400 space-y-2">
        <p>{data.copyright}</p>
        <p>{data.location}</p>
        <p className="italic">{data.tagline}</p>
      </div>
    </footer>
  );
};