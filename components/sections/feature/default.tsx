import {
  BlibliImage,
  LazadaImage,
  ShopeeImage,
  TokopediaImage,
} from "@/assets/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, ChartLineIcon, LucideIcon, MapIcon, PackageIcon } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

const marketplaces = [
  {
    name: "Shopee",
    logo: ShopeeImage,
  },
  {
    name: "Tokopedia",
    logo: TokopediaImage,
  },
  {
    name: "Lazada",
    logo: LazadaImage,
  },
  {
    name: "Blibli",
    logo: BlibliImage,
  },
];

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <div className="mx-auto grid gap-4 lg:grid-cols-2">
          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={ChartLineIcon}
                title="Analisis Data Ecommerce"
                description="Sistem chat dengan AI untuk analisis data secara real-time."
              />
            </CardHeader>

            <div className="relative border-t border-dashed max-sm:mb-6">
              <div
                aria-hidden
                className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"
              />
              <div className="relative z-10 aspect-76/59 p-2">
                <DualModeImage
                  darkSrc="/analisis-chat.png"
                  lightSrc="/analisis-chat.png"
                  alt="chat illustration"
                  width={1800}
                  height={1384}
                  className="border-muted-foreground z-10 h-full w-full border object-cover"
                />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={PackageIcon}
                title="Data produk Ecommerce"
                description="Informasi produk real-time secara lengkap dan akurat."
              />
            </CardHeader>

            <div className="relative border-t border-dashed max-sm:mb-6">
              {/* <div */}
              {/*   aria-hidden */}
              {/*   className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]" */}
              {/* /> */}
              <div className="aspect-76/59 p-2">
                <DualModeImage
                  darkSrc="/product-list.png"
                  lightSrc="/product-list.png"
                  alt="chat illustration"
                  width={1800}
                  height={1384}
                  className="border-muted-foreground h-full w-full border object-cover"
                />
              </div>
            </div>
          </FeatureCard>

          {/* <FeatureCard> */}
          {/*   <CardHeader className="pb-3"> */}
          {/*     <CardHeading */}
          {/*       icon={Calendar} */}
          {/*       title="Data produk Ecommerce" */}
          {/*       description="Informasi produk real-time secara lengkap dan akurat." */}
          {/*     /> */}
          {/*   </CardHeader> */}
          {/**/}
          {/*   <CardContent> */}
          {/*     <div className="relative"> */}
          {/*       <div className="aspect-76/59 p-2"> */}
          {/*         <DualModeImage */}
          {/*           darkSrc="/product-list.png" */}
          {/*           lightSrc="/product-list.png" */}
          {/*           alt="product list illustration" */}
          {/*           width={1800} */}
          {/*           height={1384} */}
          {/*           className="border-foreground h-full w-full border object-cover" */}
          {/*         /> */}
          {/*       </div> */}
          {/*     </div> */}
          {/*   </CardContent> */}
          {/* </FeatureCard> */}

          <FeatureCard className="p-6 lg:col-span-2">
            <p className="mx-auto my-6 max-w-md text-center text-2xl font-semibold text-balance">
              Sumber Data dari Ecommerce terbaik di Indonesia
            </p>

            <div className="flex justify-center gap-12 overflow-hidden">
              {marketplaces.map((marketplace) => (
                <Image
                  key={marketplace.name}
                  src={marketplace.logo}
                  alt={marketplace.name}
                  width={300}
                  height={300}
                  // className="h-[100px] w-auto grayscale transition hover:grayscale-0"
                  className="h-[100px] w-auto"
                />
              ))}
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn("group relative rounded-none shadow-zinc-950/5", className)}
  >
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className="border-primary absolute -top-px -left-px block size-2 border-t-2 border-l-2"></span>
    <span className="border-primary absolute -top-px -right-px block size-2 border-t-2 border-r-2"></span>
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary absolute -right-px -bottom-px block size-2 border-r-2 border-b-2"></span>
  </>
);

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-muted-foreground flex items-center gap-2">
      <Icon className="size-4" />
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold">{description}</p>
  </div>
);

interface DualModeImageProps {
  darkSrc: string;
  lightSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const DualModeImage = ({
  darkSrc,
  lightSrc,
  alt,
  width,
  height,
  className,
}: DualModeImageProps) => (
  <>
    <Image
      src={darkSrc}
      className={cn("hidden dark:block", className)}
      alt={`${alt} dark`}
      width={width}
      height={height}
    />
    <Image
      src={lightSrc}
      className={cn("shadow dark:hidden", className)}
      alt={`${alt} light`}
      width={width}
      height={height}
    />
  </>
);

interface CircleConfig {
  pattern: "none" | "border" | "primary" | "blue";
}

interface CircularUIProps {
  label: string;
  circles: CircleConfig[];
  className?: string;
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={className}>
    <div className="from-border size-fit rounded-2xl bg-linear-to-b to-transparent p-px">
      <div className="from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] bg-linear-to-b p-4">
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn("size-7 rounded-full border sm:size-8", {
              "border-primary": circle.pattern === "none",
              "border-primary bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "border",
              "border-primary bg-background bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "primary",
              "bg-background z-1 border-blue-500 bg-[repeating-linear-gradient(-45deg,var(--color-blue-500),var(--color-blue-500)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "blue",
            })}
          ></div>
        ))}
      </div>
    </div>
    <span className="text-muted-foreground mt-1.5 block text-center text-sm">
      {label}
    </span>
  </div>
);
