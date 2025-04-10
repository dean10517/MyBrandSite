import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex space-x-6 text-lg">
      <Link href="/">首頁</Link>
      <Link href="/about">關於我們</Link>
      <Link href="/services">服務項目</Link>
      <Link href="/contact">聯絡我們</Link>
    </nav>
  );
}