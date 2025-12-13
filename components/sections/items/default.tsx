import {
  ActivityIcon,
  BarChart3Icon,
  BlocksIcon,
  BrainCircuitIcon,
  CloudDownloadIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MessageSquareIcon,
  MonitorSmartphoneIcon,
  RadarIcon,
  RocketIcon,
  ScanFaceIcon,
  ShieldCheckIcon,
  SquarePenIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Digerakkan sepenuhnya oleh AI",
  items = [
    {
      title: "Tanpa Input Manual",
      description:
        "AI secara otomatis mengumpulkan data dari berbagai platform e-commerce tanpa perlu Anda unggah apa pun.",
      icon: <CloudDownloadIcon className="size-5 stroke-1" />,
    },
    {
      title: "Scraping Otomatis & Cerdas",
      description:
        "Sistem kami mengekstrak data harga, produk, dan tren pasar dari berbagai sumber dengan presisi tinggi.",
      icon: <RadarIcon className="size-5 stroke-1" />,
    },
    {
      title: "Analisis Didukung AI",
      description:
        "AI menganalisis data hasil scraping untuk menemukan peluang penjualan, pola konsumen, dan prediksi performa.",
      icon: <BrainCircuitIcon className="size-5 stroke-1" />,
    },
    {
      title: "Chat dengan AI",
      description:
        "Cukup tanyakan apa pun — mulai dari tren penjualan hingga rekomendasi strategi, dan AI akan menjawab dalam hitungan detik.",
      icon: <MessageSquareIcon className="size-5 stroke-1" />,
    },
    {
      title: "Laporan Visual Otomatis",
      description:
        "Dapatkan grafik, metrik, dan insight visual yang dihasilkan langsung dari hasil analisis AI.",
      icon: <BarChart3Icon className="size-5 stroke-1" />,
    },
    {
      title: "Pemantauan Real-time",
      description:
        "Pantau perubahan harga, kompetitor, dan tren pasar secara langsung tanpa perlu membuka dashboard rumit.",
      icon: <ActivityIcon className="size-5 stroke-1" />,
    },
    {
      title: "Keamanan Data Terjamin",
      description:
        "Kami menjaga privasi dan keamanan data Anda — tidak ada penyimpanan sensitif atau pelacakan pengguna.",
      icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    },
    {
      title: "Siap Produksi & Terus Belajar",
      description:
        "Model AI terus berkembang berdasarkan data terbaru untuk memberikan insight yang semakin akurat setiap harinya.",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
