import React from "react";
import { MessageSquare, BarChart2 } from "lucide-react";

const FeaturesCustom: React.FC = () => {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {/* Feature 1 */}
        <div className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all hover:-translate-y-2">
          <div className="bg-brand pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full opacity-10 blur-[80px]"></div>

          <div className="bg-brand/10 text-brand mb-6 inline-flex items-center justify-center rounded-xl p-3">
            <MessageSquare size={24} />
          </div>

          <h3 className="mb-3 text-2xl font-bold text-white">
            Analisis Data Ecommerce
          </h3>
          <p className="mb-8 max-w-sm leading-relaxed text-gray-400">
            Sistem chat dengan AI yang responsif untuk analisis data secara
            real-time dan akurat. Cukup ketik pertanyaanmu.
          </p>

          {/* Mockup Chat */}
          <div className="group-hover:border-brand/30 relative h-64 overflow-hidden rounded-xl border-2 border-white/10 bg-[#0B1120] p-4 transition-colors">
            <div className="space-y-4">
              <div className="animate-slide-in-left flex items-start gap-3">
                <div className="bg-brand/20 text-brand flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                  U
                </div>
                <div className="rounded-2xl rounded-tl-none bg-white/5 p-3 text-sm text-gray-300">
                  Carikan tren sunscreen bulan ini.
                </div>
              </div>
              <div
                className="animate-slide-in-right flex flex-row-reverse items-start gap-3"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="from-brand-teal to-brand flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-black shadow-lg">
                  AI
                </div>
                <div className="bg-brand/10 border-brand/20 rounded-2xl rounded-tr-none border p-3 text-sm text-gray-300">
                  <span className="text-brand-teal mb-1 block font-semibold">
                    Trending Naik 15% 📈
                  </span>
                  Produk sunscreen tipe gel sedang diminati di Shopee dengan
                  volume pencarian meningkat tajam di area Jabodetabek.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all hover:-translate-y-2">
          <div className="bg-brand-purple pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full opacity-10 blur-[80px]"></div>

          <div className="bg-brand-purple/10 text-brand-purple mb-6 inline-flex items-center justify-center rounded-xl p-3">
            <BarChart2 size={24} />
          </div>

          <h3 className="mb-3 text-2xl font-bold text-white">
            Data Produk Lengkap
          </h3>
          <p className="mb-8 max-w-sm leading-relaxed text-gray-400">
            Informasi produk real-time secara lengkap, mulai dari harga, stok,
            hingga sentimen ulasan pembeli.
          </p>

          {/* Mockup Bars */}
          <div className="group-hover:border-brand-purple/30 relative grid h-64 grid-cols-2 gap-4 overflow-hidden rounded-xl border-2 border-white/10 bg-[#0B1120] p-5 transition-colors">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="col-span-1 flex flex-col justify-end rounded-lg border border-white/5 bg-white/5 p-3 transition-colors group-hover:bg-white/[0.07]"
              >
                <div className="mb-3 aspect-video w-full rounded-md bg-gray-800/50"></div>
                <div className="mb-2 h-2 w-3/4 rounded bg-gray-700"></div>
                <div className="mt-2 flex items-center justify-between">
                  <div
                    className={`h-2 w-1/3 rounded ${i === 1 ? "bg-brand-teal" : "bg-brand-purple"}`}
                  ></div>
                  <div className="h-2 w-4 rounded-full bg-gray-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCustom;
