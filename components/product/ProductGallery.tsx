"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50">
        {activeImage && (
          <Image
            src={activeImage}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            priority
            className="object-cover"
          />
        )}
      </div>
      {images.length > 1 && (
        <div
          className="flex gap-3 overflow-x-auto"
          role="tablist"
          aria-label="Product images"
        >
          {images.map((image, index) => (
            <button
              key={image + index}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show image ${index + 1} of ${images.length}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 bg-gray-50",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-950",
                index === activeIndex ? "border-ink-950" : "border-transparent",
              )}
            >
              <Image src={image} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
