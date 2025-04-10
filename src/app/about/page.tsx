import data from '@/data/about.json';

export default function AboutPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="mt-4 text-lg leading-relaxed">{data.description}</p>
    </main>
  );
}