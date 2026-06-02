type FooterProps = {
  text?: string;
};

export default function Footer({ text = "Student project footer" }: FooterProps) {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto w-full max-w-5xl px-6 py-4 text-sm text-zinc-600">
        {text}
      </div>
    </footer>
  );
}
