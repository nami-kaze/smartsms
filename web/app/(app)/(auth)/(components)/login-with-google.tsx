"use client";

import { Routes } from "@/config/routes";
import { toast } from "@/hooks/use-toast";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginWithGoogle() {
  const router = useRouter();

  const onGoogleLoginSuccess = async (
    credentialResponse: CredentialResponse
  ) => {
    try {
      const result = await signIn("google-id-token-login", {
        redirect: false,
        idToken: credentialResponse.credential,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      if (result?.ok) {
        router.push(Routes.dashboard);
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast({
        title: "Error",
        description: "Failed to login with Google",
        variant: "destructive",
      });
    }
  };

  return (
    <GoogleLogin
      onSuccess={onGoogleLoginSuccess}
      onError={() => {
        toast({
          title: "Error",
          description: "Google sign-in failed",
          variant: "destructive",
        });
      }}
      useOneTap={false} // Disable one-tap for now
      width={300}
      size="large"
      shape="pill"
      theme="outline"
      text="continue_with"
    />
  );
}
