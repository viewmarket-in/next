"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

export default function AuthPage() {
  const router = useRouter();

  const handleGoogleSignIn = () => {
    // In a real app, this would initiate the Google OAuth flow
    // For this task, we'll just redirect to the charts page
    router.push("/charts");
  };

  const handleGitHubSignIn = () => {
    // In a real app, this would initiate the GitHub OAuth flow
    // For this task, we'll just redirect to the charts page
    router.push("/charts");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="flex w-full max-w-md flex-col items-center">
        {/* Sign In Heading */}
        <h1 className="mb-8 text-4xl font-bold text-foreground">Sign In</h1>

        {/* Sign in buttons */}
        <div className="mb-6 flex w-full flex-col space-y-4">
          {/* Google Sign In Button */}
          <button
            className="w-full items-center justify-center rounded-full border border-border bg-card px-8 py-4 font-medium text-card-foreground shadow-sm transition-all duration-200 hover:bg-card/80 hover:shadow-md"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="mr-2" />
            <span>Sign in with Google</span>
          </button>

          {/* GitHub Sign In Button */}
          <button
            className="w-full items-center justify-center rounded-full border border-border bg-card px-8 py-4 font-medium text-card-foreground shadow-sm transition-all duration-200 hover:bg-card/80 hover:shadow-md"
            onClick={handleGitHubSignIn}
          >
            <SiGithub className="mr-2" />
            <span>Sign in with GitHub</span>
          </button>
        </div>

        {/* Terms and Privacy Text */}
        <p className="mt-8 max-w-xs text-center text-sm leading-relaxed text-muted-foreground">
          By signing in, you agree to our{" "}
          <Link
            href="/legal/terms"
            className="hover:underline"
            style={{ color: "#ffffff" }}
          >
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link
            href="/legal/privacy"
            className="hover:underline"
            style={{ color: "#ffffff" }}
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
