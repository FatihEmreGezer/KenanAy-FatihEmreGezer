"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  // Basit yapılacaklar listesi state'i
  const [tasks, setTasks] = useState([
    { id: 1, text: "Next.js projesi kuruldu", completed: true },
    { id: 2, text: "Sayfa düzeni ve Navbar eklendi", completed: true },
    { id: 3, text: "Tailwind CSS ile stiller verildi", completed: true },
    { id: 4, text: "Hakkında ve teknolojiler bölümü yazıldı", completed: true },
    { id: 5, text: "İletişim formu ve dinamik durum (state) eklendi", completed: true },
    { id: 6, text: "Projeyi Vercel üzerine yükleme", completed: false },
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  // Görev durumunu değiştirme
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Yeni görev ekleme
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: newTaskText.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  // İletişim formu state'i
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setFormSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormSent(false), 4000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-10 w-full space-y-16">
        {/* Giriş / Karşılama Bölümü */}
        <section id="giris" className="text-center py-8 border-b border-gray-100">
          <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
            Ders Ödevi / Dönem Projesi
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">
            Web Programlama Dersi Projesi
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base">
            Merhaba! Bu web sitesi, web tasarımı ve programlama dersi kapsamında
            Next.js ve Tailwind CSS kullanılarak geliştirilmiş örnek bir öğrenci projesidir.
          </p>

          <div className="flex justify-center gap-3 mt-6">
            <a
              href="#hakkinda"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            >
              Proje Hakkında
            </a>
            <a
              href="#gorevler"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
            >
              Görev Listesi
            </a>
          </div>
        </section>

        {/* Hakkında Bölümü */}
        <section id="hakkinda" className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
            Proje Hakkında
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Bu projenin temel amacı; modern JavaScript kütüphanesi olan React ve Next.js
            çatısının temel özelliklerini uygulamaktır. Projede sayfa yönlendirmeleri
            (App Router), bileşen (component) mimarisi ve Tailwind CSS ile basit ve
            temiz bir sayfa yerleşimi hedeflenmiştir.
          </p>
          <div className="bg-blue-50/60 p-4 rounded-lg border border-blue-100 text-sm text-blue-800">
            📌 <strong>Not:</strong> Sayfadaki bileşenler (Navbar, Footer, Görevler ve Form)
            React state mantığı kullanılarak dinamik şekilde çalışmaktadır.
          </div>
        </section>

        {/* Kullanılan Teknolojiler */}
        <section id="teknolojiler" className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
            Kullanılan Teknolojiler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition">
              <h3 className="font-semibold text-gray-800">⚛️ Next.js 16</h3>
              <p className="text-sm text-gray-600 mt-1">
                Sayfa yönetimi, App Router altyapısı ve hızlı sayfa yüklemeleri için kullanıldı.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition">
              <h3 className="font-semibold text-gray-800">🧩 React 19</h3>
              <p className="text-sm text-gray-600 mt-1">
                Yeniden kullanılabilir arayüz parçaları ve state yönetimi için kullanıldı.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition">
              <h3 className="font-semibold text-gray-800">🎨 Tailwind CSS</h3>
              <p className="text-sm text-gray-600 mt-1">
                Tüm stiller, responsive yerleşim ve buton görünümleri için tercih edildi.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition">
              <h3 className="font-semibold text-gray-800">📘 TypeScript</h3>
              <p className="text-sm text-gray-600 mt-1">
                Kodlama esnasında hata yapmayı önlemek ve tip güvenliği sağlamak için kullanıldı.
              </p>
            </div>
          </div>
        </section>

        {/* Görev / Yapılacaklar Listesi (Dinamik State Örneği) */}
        <section id="gorevler" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
              Proje Görev Listesi
            </h2>
            <span className="text-xs text-gray-500">
              Tamamlanan: {tasks.filter((t) => t.completed).length} / {tasks.length}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            (Aşağıdaki görevlerin üzerine tıklayarak durumlarını değiştirebilir veya yeni görev ekleyebilirsiniz.)
          </p>

          {/* Liste */}
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-100">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className="flex items-center gap-3 p-3.5 hover:bg-gray-50 cursor-pointer transition select-none"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => {}}
                  className="h-4 w-4 text-blue-600 rounded cursor-pointer"
                />
                <span
                  className={`text-sm ${
                    task.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700 font-medium"
                  }`}
                >
                  {task.text}
                </span>
              </div>
            ))}
          </div>

          {/* Yeni Görev Ekleme Formu */}
          <form onSubmit={handleAddTask} className="flex gap-2 pt-2">
            <input
              type="text"
              placeholder="Yeni görev veya not yazın..."
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition cursor-pointer"
            >
              Ekle
            </button>
          </form>
        </section>

        {/* İletişim / Mesaj Bölümü */}
        <section id="iletisim" className="space-y-4 border-t border-gray-100 pt-10">
          <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
            İletişim / Not Bırakın
          </h2>
          <p className="text-sm text-gray-600">
            Ders projesi hakkında görüşlerinizi veya sorularınızı bu formdan iletebilirsiniz.
          </p>

          {formSent && (
            <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
              ✅ Teşekkürler! Mesajınız başarıyla iletildi.
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-3 max-w-xl">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Adınız Soyadınız
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Örn: Ahmet Yılmaz"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                E-posta Adresiniz
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Örn: ahmet@example.com"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Mesajınız
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mesajınızı buraya yazın..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition cursor-pointer"
            >
              Mesajı Gönder
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
