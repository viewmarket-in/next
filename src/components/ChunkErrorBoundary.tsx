"use client";

import React, { Component, ErrorInfo } from "react";

import { Button } from "@/components/ui/button";

// prettier-ignore
interface ChunkErrorBoundaryProps {
  children: React.ReactNode
}

// prettier-ignore
interface ChunkErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

class ChunkErrorBoundary extends Component<
  ChunkErrorBoundaryProps,
  ChunkErrorBoundaryState
> {
  constructor(props: ChunkErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Check if this is a chunk loading error
    const isChunkLoadError =
      error.name === "ChunkLoadError" ||
      (error.message && error.message.includes("Loading chunk")) ||
      (error.message && error.message.includes("ChunkLoadError"));

    if (isChunkLoadError) {
      // Return a fallback UI for chunk loading errors
      return { hasError: true, error };
    }

    // For other errors, we don't handle them here
    return { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Log the error to console
    console.error("ChunkErrorBoundary caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    // Clear the error state
    this.setState({ hasError: false, error: null, errorInfo: null });

    // Attempt to reload the page to get fresh chunks
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      // Render fallback UI for chunk loading errors
      return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
          <div className="max-w-md text-center">
            <h2 className="mb-4 text-2xl font-bold">Content Loading Issue</h2>
            <p className="mb-4 text-muted-foreground">
              We&apos;re having trouble loading some content. This might be due
              to a network issue or a temporary problem with our servers.
            </p>
            <Button onClick={this.handleRetry} variant="default">
              Reload Page
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              If the problem persists, please try again later.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ChunkErrorBoundary;
