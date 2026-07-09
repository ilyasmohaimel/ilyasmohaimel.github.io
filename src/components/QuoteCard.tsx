interface Quote {
  text: string;
  author: string;
  cta: string;
}

interface QuoteCardProps {
  quote: Quote;
}

export const QuoteCard = ({ quote }: QuoteCardProps) => {
  return (
    <div className="bg-gradient-to-br from-dark-800 to-dark-900 p-8 rounded-lg border border-dark-600/30 h-full flex flex-col justify-center">
      <blockquote className="text-2xl font-medium leading-relaxed mb-10 text-dark-200">
        &ldquo;{quote.text}&rdquo;
      </blockquote>
      <div className="flex justify-between items-end">
        <div>
          <p className="font-semibold text-dark-200">{quote.author}</p>
        </div>
        <button className="text-xs border border-dark-600/40 px-4 py-2 rounded hover:bg-dark-900 transition-colors text-dark-400 tracking-wider font-medium">
          {quote.cta}
        </button>
      </div>
    </div>
  );
};