# Charts Component Architecture Rules

This document outlines the architectural principles and rules for developing components in the charts section of the application. Following these rules ensures consistency, maintainability, scalability, and performance across the codebase, aligning with our enterprise Next.js standards.

## Table of Contents

1. [Component Structure](#component-structure)
2. [Server Components vs Client Components](#server-components-vs-client-components)
3. [Component Development Guidelines](#component-development-guidelines)
4. [Page Structure](#page-structure)
5. [Performance Optimization](#performance-optimization)
6. [Future Development Process](#future-development-process)
7. [Best Practices](#best-practices)
8. [Code Quality](#code-quality)

## Component Structure

### Directory Organization
```
src/
├── components/
│   ├── charts/
│   │   ├── ChartHeader.tsx          # Header component
│   │   ├── ChartContainer.tsx       # Main chart area wrapper
│   │   ├── RightSidePanel.tsx       # Right side panel component
│   │   ├── ChartFooter.tsx          # Footer component
│   │   ├── ChartButtons.tsx         # Interactive buttons (when implemented)
│   │   ├── ChartPopups/             # Directory for popup components
│   │   │   ├── SettingsPopup.tsx
│   │   │   ├── IndicatorsPopup.tsx
│   │   │   └── SharePopup.tsx
│   │   ├── index.ts                 # Barrel export file
│   │   └── COMPONENT_ARCHITURE_RULES.md  # This file
```

## Server Components vs Client Components

### Server Components (Default)
- Default component type in Next.js App Router
- Used for static content and data fetching
- Should compose Client Components rather than containing interactivity directly
- Benefits: Reduced client-side JavaScript bundle, improved performance, better SEO

### Client Components
- Use `"use client"` directive at the top of the file
- Required for components with:
  - Event handlers (onClick, onChange, etc.)
  - State management (useState, useReducer)
  - Lifecycle effects (useEffect)
  - Custom hooks that use client-only features
- Place in `src/components/charts/` directory

## Component Development Guidelines

### 1. Component Naming
- Use PascalCase for component names (e.g., `ChartHeader`)
- Name files identically to their default export component
- Use descriptive names that clearly indicate the component's purpose

### 2. Component Implementation

#### File Structure
```tsx
"use client"; // Only for Client Components

import React from "react";
// Other imports...

/**
 * ComponentName Component
 * 
 * Brief description of the component's purpose and functionality.
 */
export function ComponentName(props: ComponentProps) {
  // Implementation
  return (
    // JSX
  );
}
```

#### Props Interface
- Define a clear interface for component props
- Use TypeScript for type safety
- Document complex props with JSDoc comments

#### Exports
- Use named exports for all components
- Export components in the `index.ts` barrel file

### 3. Styling
- Use Tailwind CSS classes for styling
- Follow the existing color scheme (`bg-background`, `border-border`, etc.)
- Maintain consistent spacing and sizing units
- Use responsive design principles

### 4. Composition
- Compose components in the page file rather than creating deeply nested components
- Keep components focused on a single responsibility
- Pass data between components via props

## Page Structure

The main charts page (`src/app/charts/page.tsx`) should:
1. Be a Server Component by default (no `"use client"` unless absolutely necessary)
2. Import and compose chart components
3. Handle any server-side data fetching
4. Pass data to Client Components via props

Example:
```tsx
import React from "react";
import { 
  ChartHeader, 
  ChartContainer, 
  RightSidePanel, 
  ChartFooter 
} from "@/components/charts";

export default function ChartsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ChartHeader />
      <div className="flex flex-grow">
        <ChartContainer />
        <RightSidePanel />
      </div>
      <ChartFooter />
    </div>
  );
}
```

## Performance Optimization

### Bundle Size Optimization
- Minimize Client Components: Only use Client Components when absolutely necessary
- Dynamic Imports: Use dynamic imports for heavy components
- Code Splitting: Leverage Next.js automatic code splitting

### Data Fetching Optimization
- Server-Side Data Fetching: Fetch data in Server Components when possible
- Caching Strategies:
  ```tsx
  // Static data fetching (cached indefinitely)
  const staticData = await fetch(`https://...`, { cache: 'force-cache' });
  
  // Dynamic data fetching (no caching)
  const dynamicData = await fetch(`https://...`, { cache: 'no-store' });
  
  // Revalidated data fetching (revalidate every 10 seconds)
  const revalidatedData = await fetch(`https://...`, {
    next: { revalidate: 10 }
  });
  ```

### Lazy Loading
- Component Lazy Loading: Use `dynamic()` imports for non-critical components
- Route Lazy Loading: Leverage Next.js automatic route code splitting

## Future Development Process

### Adding New Components
1. Create a new file in `src/components/charts/` following the naming convention
2. Implement the component following the guidelines above
3. Export the component in `src/components/charts/index.ts`
4. Import and use the component in the charts page or other components

### Adding Interactive Features
1. Determine if the feature requires client-side interactivity
2. If yes, create a Client Component with `"use client"` directive
3. Implement the interactive logic using React hooks
4. Compose the component in the page structure

### Adding Popup Panels
1. Create a new component file in the `ChartPopups` directory
2. Implement as a Client Component with appropriate interactivity
3. Export in the main index file
4. Integrate with the triggering component (e.g., a button)

## Best Practices

1. **Separation of Concerns**: Keep UI logic separate from business logic
2. **Reusability**: Design components to be reusable across different contexts
3. **Performance**: Minimize bundle size by using Server Components where possible
4. **Accessibility**: Ensure all components are accessible with proper ARIA attributes
5. **Testing**: Write unit tests for complex components
6. **Documentation**: Comment complex logic and maintain this documentation
7. **Type Safety**: Use TypeScript interfaces for all component props
8. **Error Handling**: Implement proper error boundaries and loading states

## Code Quality

1. Follow TypeScript best practices
2. Use ESLint and Prettier for code formatting
3. Write meaningful commit messages
4. Keep pull requests focused and small
5. Review code thoroughly before merging
6. Follow the DRY (Don't Repeat Yourself) principle
7. Maintain consistent coding standards across the team

By following these rules, we ensure a consistent, maintainable, and scalable charts component architecture that aligns with Next.js best practices and our enterprise standards.