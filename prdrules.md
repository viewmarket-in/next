# Next.js App Router Component Architecture Rules

This document outlines the architectural principles, best practices, and optimization strategies for developing components in a Next.js App Router project. Following these rules ensures consistency, maintainability, scalability, and performance across the codebase.

## Table of Contents

1. [Component Architecture Principles](#component-architecture-principles)
2. [Server Components vs Client Components](#server-components-vs-client-components)
3. [Component Design Patterns](#component-design-patterns)
4. [Performance Optimization Strategies](#performance-optimization-strategies)
5. [Scalability Patterns](#scalability-patterns)
6. [Directory Structure and Organization](#directory-structure-and-organization)
7. [Best Practices for Maintainability](#best-practices-for-maintainability)
8. [Error Handling and Resilience](#error-handling-and-resilience)
9. [Theming and UI Consistency](#theming-and-ui-consistency)
10. [Execution Guidelines](#execution-guidelines)

## Component Architecture Principles

### 1. React Server Components as Default

- **Default to Server Components**: Use Server Components by default for all pages and layouts
- **Client Components Only When Necessary**: Only use Client Components when interactivity, state, or lifecycle effects are required
- **Clear Separation of Concerns**: Separate data fetching and static rendering (Server) from interactivity (Client)

### 2. Component Composition

- **Compose Components in Pages**: Pages should compose components rather than contain complex logic
- **Single Responsibility Principle**: Each component should have one clear purpose
- **Props-Driven Communication**: Pass data between components via props, not global state when possible

### 3. TypeScript Everywhere

- **Strict Typing**: Use TypeScript for all components with strict type checking
- **Interface Definitions**: Define clear interfaces for component props
- **Type Safety**: Ensure type safety for all data flows

## Server Components vs Client Components

### Server Components (Default)

**Use Cases:**
- Static content rendering
- Data fetching from databases or APIs
- Layout composition
- Components that don't require interactivity

**Benefits:**
- Reduced client-side JavaScript bundle
- Improved performance through server-side rendering
- Automatic code splitting
- Better SEO

**Implementation:**
```tsx
// Server Component (default)
export default async function Page() {
  const data = await fetchData();
  
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
```

### Client Components

**Use Cases:**
- Event handlers (onClick, onChange, etc.)
- State management (useState, useReducer)
- Lifecycle effects (useEffect)
- Custom hooks that use client-only features

**Implementation:**
```tsx
'use client'; // Directive required at top of file

import React, { useState } from "react";

export function InteractiveComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## Component Design Patterns

### 1. Component Structure

#### File Structure
```tsx
'use client'; // Only for Client Components

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
```tsx
interface ComponentNameProps {
  /**
   * Description of the title prop
   */
  title: string;
  
  /**
   * Optional description with default value
   * @default false
   */
  isActive?: boolean;
  
  /**
   * Callback function with parameter description
   */
  onClick?: (id: string) => void;
}
```

### 2. Barrel Exports

Use barrel files for clean imports:
```ts
// components/charts/index.ts
export { ChartHeader } from './ChartHeader'
export { ChartContainer } from './ChartContainer'
export { RightSidePanel } from './RightSidePanel'
export { ChartFooter } from './ChartFooter'
```

### 3. Component Composition Pattern

Compose components in pages rather than creating deeply nested components:
```tsx
// pages/charts/page.tsx (Server Component)
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

## Performance Optimization Strategies

### 1. Bundle Size Optimization

- **Minimize Client Components**: Only use Client Components when absolutely necessary
- **Dynamic Imports**: Use dynamic imports for heavy components:
  ```tsx
  import dynamic from 'next/dynamic';
  
  const HeavyChartComponent = dynamic(
    () => import('@/components/charts/HeavyChartComponent'),
    { ssr: false }
  );
  ```
- **Code Splitting**: Leverage Next.js automatic code splitting
- **Tree Shaking**: Configure webpack for optimal tree shaking

### 2. Data Fetching Optimization

- **Server-Side Data Fetching**: Fetch data in Server Components when possible
- **Caching Strategies**:
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
- **Parallel Data Fetching**: Use `Promise.all` for concurrent requests:
  ```tsx
  const [userData, postsData] = await Promise.all([
    fetchUser(),
    fetchPosts()
  ]);
  ```

### 3. Image Optimization

- **Next.js Image Component**: Always use `next/image` for optimized image loading
- **Proper Sizing**: Set appropriate `sizes` property for responsive images
- **Remote Patterns**: Configure `remotePatterns` in `next.config.js` for external images

### 4. Lazy Loading

- **Component Lazy Loading**: Use `dynamic()` imports for non-critical components
- **Route Lazy Loading**: Leverage Next.js automatic route code splitting

## Scalability Patterns

### 1. Modular Architecture

- **Feature-Based Directory Structure**: Organize components by feature rather than type
- **Reusability**: Design components to be reusable across different contexts
- **Decoupling**: Minimize dependencies between components

### 2. Horizontal Scaling

- **Stateless Components**: Prefer stateless components when possible
- **External State Management**: Use external state management solutions for complex applications
- **API Abstraction**: Abstract data fetching behind service layers

### 3. Cloud-Native Readiness

- **Edge Compatibility**: Design components to work in edge environments
- **Streaming Support**: Use React Suspense for progressive rendering
- **Micro-Frontends**: Structure for potential micro-frontend architecture

## Directory Structure and Organization

```
src/
├── app/                    # App Router pages and layouts
│   ├── charts/            # Charts feature
│   │   ├── page.tsx       # Charts page (Server Component)
│   │   └── loading.tsx    # Loading state
│   └── layout.tsx         # Root layout
├── components/            # Shared components
│   ├── charts/            # Charts components
│   │   ├── ChartHeader.tsx
│   │   ├── ChartContainer.tsx
│   │   ├── RightSidePanel.tsx
│   │   ├── ChartFooter.tsx
│   │   ├── index.ts       # Barrel export
│   │   └── COMPONENT_ARCHITURE_RULES.md
│   ├── shared/            # Shared components
│   └── ui/                # UI primitives
├── lib/                   # Utility functions and shared logic
├── utils/                 # Helper functions
└── types/                 # TypeScript types
```

## Best Practices for Maintainability

### 1. Code Quality

- **ESLint and Prettier**: Use consistent code formatting and linting
- **Meaningful Commit Messages**: Follow conventional commit format
- **Small Pull Requests**: Keep changes focused and small
- **Thorough Code Reviews**: Review code before merging

### 2. Documentation

- **Component Documentation**: Document component purpose and props
- **Architecture Documentation**: Keep architecture rules updated
- **Inline Comments**: Comment complex logic and business rules

### 3. Testing

- **Unit Tests**: Write tests for complex components
- **Integration Tests**: Test component compositions
- **Accessibility Testing**: Ensure components are accessible

## Error Handling and Resilience

### 1. Error Boundaries

Implement error boundaries for graceful error handling:
```tsx
// ChunkErrorBoundary.tsx
class ChunkErrorBoundary extends Component {
  static getDerivedStateFromError(error: Error) {
    // Handle chunk loading errors
    const isChunkLoadError = 
      error.name === "ChunkLoadError" ||
      (error.message && error.message.includes("Loading chunk"));
      
    if (isChunkLoadError) {
      return { hasError: true, error };
    }
    
    return { hasError: false, error: null };
  }
  
  render() {
    if (this.state.hasError) {
      return <FallbackUI />;
    }
    
    return this.props.children;
  }
}
```

### 2. Loading States

Implement proper loading states:
```tsx
// Show loading state while chart initializes
if (!isClient) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div>Loading chart...</div>
    </div>
  );
}
```

## Theming and UI Consistency

### 1. Theme Provider Pattern

Use a theme provider for consistent theming:
```tsx
// theme-provider.tsx
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);
  
  React.useLayoutEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    // Render light theme version on server to avoid hydration mismatch
    return (
      <NextThemesProvider {...props} defaultTheme="light" enableSystem={false}>
        {children}
      </NextThemesProvider>
    );
  }
  
  return (
    <NextThemesProvider {...props} enableSystem defaultTheme="system">
      {children}
    </NextThemesProvider>
  );
}
```

### 2. Consistent Styling

- **Tailwind CSS**: Use Tailwind for consistent styling
- **Design System**: Follow a consistent design system
- **Responsive Design**: Ensure components work on all screen sizes

## Execution Guidelines

### 1. Component Development Process

1. **Identify Component Type**: Determine if component needs to be Server or Client
2. **Create Component File**: Follow naming conventions and file structure
3. **Implement Component**: Follow design patterns and best practices
4. **Export Component**: Add to barrel export file
5. **Integrate Component**: Use in pages or other components
6. **Test Component**: Verify functionality and performance

### 2. Adding New Features

1. **Create Feature Directory**: Organize components by feature
2. **Implement Components**: Follow component architecture rules
3. **Compose in Pages**: Integrate components in page files
4. **Optimize Performance**: Apply performance optimization strategies
5. **Document Changes**: Update documentation as needed

### 3. Performance Monitoring

- **Bundle Analysis**: Regularly analyze bundle size with `ANALYZE=true npm run build`
- **Performance Metrics**: Monitor key performance metrics
- **Optimization Reviews**: Periodically review and optimize performance

### 4. Code Review Checklist

- [ ] Correct component type (Server vs Client)
- [ ] Proper TypeScript typing
- [ ] Component documentation
- [ ] Performance optimization applied
- [ ] Accessibility considerations
- [ ] Error handling implemented
- [ ] Tests written (if applicable)
- [ ] Code follows established patterns

By following these rules and guidelines, we ensure a consistent, maintainable, and scalable component architecture that aligns with Next.js best practices and Context 7 MCP framework principles.