import aboutData from '@/../public/data/about.json';

export default function AboutPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{aboutData.title}</h1>
      <p className="mt-4">{aboutData.description}</p>
    </main>
  );
}