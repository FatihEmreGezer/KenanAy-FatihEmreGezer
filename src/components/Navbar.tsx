import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Başlık */}
        <Link href="/" className="font-bold text-lg text-gray-800 hover:text-blue-600 transition">
          📚 Ders Projesi
        </Link>

        {/* Menü Linkleri */}
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#giris" className="hover:text-blue-600 transition">
            Ana Sayfa
          </a>
          <a href="#hakkinda" className="hover:text-blue-600 transition">
            Hakkında
          </a>
          <a href="#teknolojiler" className="hover:text-blue-600 transition">
            Teknolojiler
          </a>
          <a href="#gorevler" className="hover:text-blue-600 transition">
            Görevler
          </a>
          <a href="#iletisim" className="hover:text-blue-600 transition">
            İletişim
          </a>
        </nav>
      </div>
    </header>
  );
}
