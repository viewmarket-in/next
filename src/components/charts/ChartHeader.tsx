"use client";

import React from "react";
import Image from "next/image";

import { person1 } from "@/utils/images";

/**
 * ChartHeader Component
 *
 * A Client Component that displays the header for the charts page.
 * Contains the profile logo and any other header elements.
 */
export function ChartHeader() {
  return (
    <header className="flex h-10 w-full items-center border-b border-border bg-background px-4">
      <div className="h-7 w-7 overflow-hidden rounded-full">
        <Image
          src={person1}
          alt="Profile"
          width={28}
          height={28}
          className="object-cover"
        />
      </div>
    </header>
  );
}
