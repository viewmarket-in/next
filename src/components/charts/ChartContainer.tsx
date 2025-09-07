"use client";

import React from "react";

import TradingViewChart from "@/components/TradingViewChart";

/**
 * ChartContainer Component
 *
 * A Client Component that wraps the TradingViewChart component.
 * This provides a consistent container for the main chart area.
 */
export function ChartContainer() {
  return (
    <div className="flex-grow">
      <TradingViewChart />
    </div>
  );
}
