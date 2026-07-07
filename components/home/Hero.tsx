"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.apple.com/newsroom/videos/videos-2024/autoplay/2024/09/apple-iphone-16-pro-4k120-fps-video-recording-dolby-vision/posters/Apple-iPhone-16-Pro-4K120-fps-video-recording-Dolby-Vision-240909.jpg.large_2x.jpg"
          alt="Premium technology background"
          fill
          priority
          className="object-cover object-center  select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      </div>


      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between px-6 py-20 text-center">
        

        <div className="mt-12 flex flex-col items-center">

          <span className="rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-300 backdrop-blur-md">
            New Arrivals
          </span>


          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight leading-[1.08] sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-white via-white to-neutral-300 bg-clip-text text-transparent">
            Technology, <br className="hidden sm:inline" />
            chosen with intention.
          </h1>

       
          <p className="mt-4 max-w-xl text-lg font-normal text-neutral-300 sm:text-xl drop-shadow-md">
            The gear worth keeping, not the gear that fills a warehouse.
          </p>
        </div>


        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Link href="/products">
            <Button
              size="sm"
              className="rounded-full bg-white/10 px-4 py-3 text-base font-medium text-black transition-all hover:border-blue-100 hover:scale-105"
            >
              Buy Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/about">
            <Button
              size="sm"
              className="group text-base font-medium text-blue-400 transition-all hover:text-blue-400"
            >
              Learn More 
              <span className="inline-block translate-x-1 transition-transform group-hover:translate-x-2">&rarr;</span>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}