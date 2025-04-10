import data from '@/data/services.json';

export default function ServicesPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <ul className="mt-6 space-y-4">
        {data.services.map((service, idx) => (
          <li key={idx}>
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="text-gray-700">{service.desc}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}