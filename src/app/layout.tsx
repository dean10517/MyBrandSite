import Navbar from "@/app/components/Navbar";
import "../globals.css";

export const metadata = {
  title: "品牌形象網站",
  description: "建立於 Next.js 的形象網站"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}