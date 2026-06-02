type HeaderProps = {
  title?: string;
};

export default function Header({ title = "Venue Vendors" }: HeaderProps) {
  return (
    <div className="text-xl font-semibold tracking-tight text-black">{title}</div>
  );
}
