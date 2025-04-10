import data from '@/data/contact.json';

export default function ContactPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <ul className="mt-6 space-y-2 text-lg">
        <li><strong>信箱：</strong>{data.email}</li>
        <li><strong>電話：</strong>{data.phone}</li>
        <li><strong>地址：</strong>{data.address}</li>
      </ul>
    </main>
  );
}