interface QuoteProps {
  text: string;
  author: string;
}

export const Quote = ({ text, author }: QuoteProps) => {
  return (
    <div className="max-w-2xl mx-auto text-center p-8">
      <p className="text-2xl md:text-3xl font-light text-white/90 mb-4">
        {text}
      </p>
      <p className="text-lg text-white/60">
        — {author}
      </p>
    </div>
  );
};