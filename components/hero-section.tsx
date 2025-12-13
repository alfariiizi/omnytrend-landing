"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      <div
        aria-hidden
        className="absolute inset-0 isolate z-2 hidden opacity-50 contain-strict lg:block"
      >
        <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <section className="bg-muted/50 dark:bg-background overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 pt-28 lg:pt-24">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold text-balance md:text-5xl lg:text-6xl">
              Modern Software testing reimagined
            </h1>
            <p className="text-muted-foreground mx-auto my-8 max-w-2xl text-xl">
              Officiis laudantium excepturi ducimus rerum dignissimos, and
              tempora nam vitae, excepturi ducimus iste provident dolores.
            </p>

            <Button asChild size="lg">
              <Link href="#">
                <span className="btn-label">Start Building</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto xl:max-w-[1440px]">
          <div className="group mask-r-from-75% mask-b-from-55% mask-b-to-100% pl-8 perspective-distant lg:pl-44">
            <Image
              className="absolute top-10 left-[30px] hidden h-full rotate-x-[30deg] skew-x-[20deg] rounded-(--radius) border shadow-xl transition-transform duration-700 ease-out group-hover:-translate-y-20 lg:h-176 dark:block"
              src="/dashboard-analisis.png"
              alt="Tailark hero section"
              width={2880}
              height={2074}
            />
            <Image
              className="absolute top-[10%] left-[100px] hidden h-full rotate-x-[30deg] skew-x-[20deg] rounded-(--radius) border shadow-xl transition-transform duration-700 ease-out group-hover:translate-x-20 lg:h-176 dark:block"
              src="/dashboard-analisis.png"
              alt="Tailark hero section"
              width={2880}
              height={2074}
            />
            <Image
              className="absolute top-[20%] hidden h-full rotate-x-[30deg] skew-x-[20deg] rounded-(--radius) border shadow-xl transition-transform duration-700 ease-out group-hover:translate-x-40 group-hover:translate-y-20 lg:h-176 dark:block"
              src="/dashboard-analisis.png"
              alt="Tailark hero section"
              width={2880}
              height={2074}
            />
            <div className="h-[800px] w-[3000px]" />
          </div>
        </div>
      </section>
    </div>
  );
}
