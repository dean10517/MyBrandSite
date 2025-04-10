import data from '@/data/home.json';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="p-0 max-w-full">
      <div className="relative w-full h-96">
        <Image
          src={data.bannerImage}
          alt="首頁主視覺"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
            {data.title}
          </h1>
        </div>
      </div>
      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-xl text-gray-600 mt-2">{data.subtitle}</h2>
        <p className="mt-6 text-lg leading-relaxed">{data.description}</p>
      </section>
    </main>
  );
}