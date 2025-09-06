"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  // Use layout effect for better SSR compatibility
  React.useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a light theme version on the server to avoid hydration mismatch
    return (
      <NextThemesProvider
        {...props}
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    );
  }

  // Render the actual theme provider on the client
  return (
    <NextThemesProvider
      {...props}
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
