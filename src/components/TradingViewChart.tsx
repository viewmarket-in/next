"use client";

import React, { useEffect, useRef, useState } from "react";

interface ChartDataPoint {
  time: string;
  value: number;
}

interface TradingViewChartProps {
  data?: ChartDataPoint[];
  className?: string;
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({
  data = [],
  className = "",
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);
  const seriesRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  // Generate sample data if none provided
  const generateSampleData = (): ChartDataPoint[] => {
    const sampleData: ChartDataPoint[] = [];
    let value = 10; // Starting value

    for (let i = 0; i < 50; i++) {
      // Reduced data points for better performance
      // Generate some random price movement
      const change = (Math.random() - 0.5) * 1.5; // Reduced volatility
      value += change;

      // Ensure value doesn't go negative
      value = Math.max(0, value);

      // Create timestamp for each day - ensure unique timestamps in ascending order
      const time = new Date(Date.now() - (49 - i) * 24 * 60 * 1000)
        .toISOString()
        .split("T")[0];

      sampleData.push({
        time,
        value: parseFloat(value.toFixed(2)),
      });
    }

    return sampleData;
  };

  // Helper function to ensure data is sorted and deduplicated
  const processChartData = (rawData: ChartDataPoint[]): ChartDataPoint[] => {
    if (!rawData || rawData.length === 0) return [];

    // Filter out invalid data points
    const validData = rawData.filter(
      (point): point is ChartDataPoint =>
        point &&
        typeof point.time === "string" &&
        typeof point.value === "number",
    );

    // Sort by time in ascending order
    const sortedData = validData.sort((a, b) => {
      // Handle both string and number time formats
      const timeA = new Date(a.time).getTime();
      const timeB = new Date(b.time).getTime();
      return timeA - timeB;
    });

    // Remove duplicates by keeping the last occurrence of each timestamp
    const deduplicatedData = sortedData.filter((point, index, self) => {
      if (index === 0) return true;
      const prevPoint = self[index - 1];
      return point.time !== prevPoint.time;
    });

    return deduplicatedData;
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !chartContainerRef.current) return;

    // Dynamically import the lightweight-charts library
    import("lightweight-charts")
      .then(({ createChart, AreaSeries }) => {
        // Create chart
        const chart = createChart(chartContainerRef.current!, {
          layout: {
            background: { color: "transparent" },
            textColor: "rgba(255, 255, 255, 0.7)",
            attributionLogo: false, // Hide the TradingView logo
          },
          grid: {
            vertLines: { color: "rgba(255, 255, 255, 0.1)" },
            horzLines: { color: "rgba(255, 255, 255, 0.1)" },
          },
          width: chartContainerRef.current!.clientWidth,
          height: chartContainerRef.current!.clientHeight,
          timeScale: {
            visible: true,
            borderColor: "rgba(255, 255, 255, 0.1)",
          },
          rightPriceScale: {
            visible: true,
            borderColor: "rgba(255, 255, 255, 0.1)",
          },
        });

        // Store chart reference
        chartRef.current = chart;

        // Add series - using the new v5 API
        const series = chart.addSeries(AreaSeries, {
          topColor: "rgba(33, 150, 243, 0.3)", // Reduced opacity for better performance
          bottomColor: "rgba(33, 150, 243, 0.05)",
          lineColor: "rgba(33, 150, 243, 0.8)",
          lineWidth: 1, // Reduced line width
        });

        // Store series reference
        seriesRef.current = series;

        // Set data
        const rawData = data.length > 0 ? data : generateSampleData();
        const chartData = processChartData(rawData);
        series.setData(chartData);

        // Handle resize
        const resizeObserver = new ResizeObserver((entries) => {
          if (entries.length === 0 || !entries[0].contentRect) return;
          const { width, height } = entries[0].contentRect;
          chart.applyOptions({ width, height });
        });

        resizeObserver.observe(chartContainerRef.current!);

        // Cleanup
        return () => {
          resizeObserver.disconnect();
          chart.remove();
        };
      })
      .catch((error) => {
        console.error("Failed to load lightweight-charts:", error);
      });

    // Cleanup function for the effect
    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, [isClient, data]);

  // Show loading state while chart is initializing
  if (!isClient) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center ${className}`}
      >
        <div className="text-foreground">Loading chart...</div>
      </div>
    );
  }

  return (
    <div ref={chartContainerRef} className={`h-full w-full ${className}`} />
  );
};

export default TradingViewChart;
