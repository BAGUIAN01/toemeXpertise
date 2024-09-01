"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./textRevealCard";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[30rem] rounded-md w-[95%] ml-3 ">
      <TextRevealCard
        text="Une proposition sur mesure?"
        revealText="Contactez nous"
      >
        <TextRevealCardTitle>
        Nous sommes impatients de vous entendre !
        </TextRevealCardTitle>
      </TextRevealCard>
    </div>
  );
}
