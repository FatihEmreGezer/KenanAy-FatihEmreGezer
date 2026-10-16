"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    { id: 1, text: "Next.js projesini kur", done: true },
    { id: 2, text: "Sayfa tasarımını güncelle", done: true },
    { id: 3, text: "Kendi harika fikrini ekle!", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo.trim(), done: false },
    ]);
    setNewTodo("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black text-zinc-900 dark:text-zinc-100 flex flex-col justify-between p-6 sm:p-12 font-sans">
      <header className="max-w-4xl w-full mx-auto flex items-center justify-between py-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <h1 className="text-xl font-bold tracking-tight">Next.js Demo App</h1>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
          App Router • Tailwind CSS • TypeScript
        </span>
      </header>

      <main className="max-w-4xl w-full mx-auto my-12 flex flex-col gap-10">
        {/* Hero Section */}
        <section className="text-center sm:text-left space-y-4">
          <div className="inline-block rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            🎉 Kurulum Başarıyla Tamamlandı!
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Next.js Projeniz Çalışmaya Hazır
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Projeniz en güncel Next.js özellikleri, TypeScript ve Tailwind CSS ile kuruldu.
            Aşağıda projeniz üzerinde yapılan örnek interaktif değişiklikleri görebilirsiniz.
          </p>
        </section>

        {/* Interactive Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Interactive Counter */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <span>⚡</span> Etkileşimli Sayaç
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                React durum yönetimini (useState) test edin.
              </p>
            </div>
            <div className="my-8 flex items-center justify-center gap-6">
              <button
                onClick={() => setCount((prev) => prev - 1)}
                className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-2xl font-bold flex items-center justify-center transition-colors"
                aria-label="Azalt"
              >
                -
              </button>
              <span className="text-5xl font-extrabold font-mono tracking-tight min-w-[3ch] text-center">
                {count}
              </span>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-2xl font-bold flex items-center justify-center transition-colors"
                aria-label="Artır"
              >
                +
              </button>
            </div>
            <div className="text-xs text-center text-zinc-400">
              Butonlara basarak sayacı artırıp azaltabilirsiniz.
            </div>
          </div>

          {/* Card 2: Interactive Todo List */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <span>📝</span> Hızlı Görev Listesi
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Görevleri tamamlayın veya yeni görev ekleyin.
              </p>
            </div>

            <ul className="my-4 space-y-2 max-h-48 overflow-y-auto pr-1">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-all ${
                    todo.done
                      ? "bg-zinc-100 dark:bg-zinc-800/50 text-zinc-400 line-through"
                      : "bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-750"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => {}}
                    className="rounded border-zinc-300 text-emerald-500 focus:ring-emerald-400"
                  />
                  <span className="text-sm">{todo.text}</span>
                </li>
              ))}
            </ul>

            <form onSubmit={addTodo} className="flex gap-2 mt-2">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Yeni görev yazın..."
                className="flex-1 px-3 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90 transition-opacity"
              >
                Ekle
              </button>
            </form>
          </div>
        </div>

        {/* Quick Tips & Tech Stack */}
        <section className="p-6 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-base font-semibold mb-3">🛠️ Faydalı Komutlar & Bilgiler</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-white dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/50">
              <p className="font-mono font-medium text-emerald-600 dark:text-emerald-400">npm run dev</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">Geliştirme sunucusunu başlatır (http://localhost:3000)</p>
            </div>
            <div className="p-3 bg-white dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/50">
              <p className="font-mono font-medium text-emerald-600 dark:text-emerald-400">npm run build</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">Üretim (production) sürümünü derler</p>
            </div>
            <div className="p-3 bg-white dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700/50">
              <p className="font-mono font-medium text-emerald-600 dark:text-emerald-400">src/app/page.tsx</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">Ana sayfa bileşeni dosyanız</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-4xl w-full mx-auto text-center text-xs text-zinc-500 py-6 border-t border-zinc-200 dark:border-zinc-800">
        Next.js & React ile geliştirildi • Başarılar dileriz!
      </footer>
    </div>
  );
}
