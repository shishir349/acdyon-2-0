"use client";

import React from "react";
import { Carousel } from "@/components/ui/carousel";
import { ProgramCard } from "@/components/cards/program-card";
import { programCategories } from "@/lib/data/site";

export function ProgramCategoriesMobileCarousel() {
  return (
    <div>
      <Carousel
        items={programCategories.map((program) => (
          <div className="px-0" key={program.title}>
            <ProgramCard {...program} />
          </div>
        ))}
      />
    </div>
  );
}

export default ProgramCategoriesMobileCarousel;
