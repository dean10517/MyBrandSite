import data from '@/data/home.json';

export default function HomePage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <h2 className="text-xl text-gray-600 mt-2">{data.subtitle}</h2>
      <p className="mt-6 text-lg leading-relaxed">{data.description}</p>
    </main>
  );
}