import React from "react";

import {
  ChartHeader,
  ChartContainer,
  RightSidePanel,
  ChartFooter,
} from "@/components/charts";

/**
 * ChartsPage Component
 *
 * Main page component for the charts view.
 * Composes all chart-related components into a complete page layout.
 * This is a Server Component by default, which helps with performance
 * by reducing client-side JavaScript bundle size.
 */
export default function ChartsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ChartHeader />
      {/* Main content area with right side panel */}
      <div className="flex flex-grow">
        <ChartContainer />
        <RightSidePanel />
      </div>
      <ChartFooter />
    </div>
  );
}
