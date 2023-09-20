export default function Card({ title, content, icon }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <main className="flex flex-col w-72 gap-2">
      {icon}
      <h1 className="font-semibold">{title}</h1>
      <p className="text-white text-justify">{content}</p>
    </main>
  );
}
