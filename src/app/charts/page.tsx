"use client";

import React from "react";
import Image from "next/image";

import { person1 } from "@/utils/images";
import TradingViewChart from "@/components/TradingViewChart";

export default function ChartsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Minimal header with reduced height and profile logo */}
      <header className="flex h-10 w-full items-center border-border bg-background px-4">
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
      {/* Main content area with right side panel */}
      <div className="flex flex-grow">
        {/* Main content - TradingView chart */}
        <div className="flex-grow">
          <TradingViewChart />
        </div>
        {/* Right side panel with same width as header height (40px = h-10 = w-10) and same background color as header */}
        <div className="w-10 border-l border-border bg-background"></div>
      </div>
      {/* Minimal footer with same height as header */}
      <footer className="h-10 w-full border-t border-border bg-background"></footer>
    </div>
  );
}
