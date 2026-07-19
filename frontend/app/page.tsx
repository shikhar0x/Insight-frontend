"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import AuthOverlay from "@/components/auth/AuthOverlay";

export default function Home() {
  const [authMode, setAuthMode] = useState<"none" | "login" | "register">("none");

  return (
    <main className="relative bg-[#050816] overflow-x-hidden">
      {/* Page-wide grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <Navbar 
        onLogin={() => setAuthMode("login")}
        onRegister={() => setAuthMode("register")}
        lockVisible={authMode !== "none"}
      />
      <AuthOverlay
        mode={authMode}
        close={() => setAuthMode("none")}
        switchMode={setAuthMode}
        onSuccess={() => setAuthMode("none")}
      />
      <Hero onRegister={() => setAuthMode("register")} />
      <Features />
      <HowItWorks onRegister={() => setAuthMode("register")} />
      <Pricing onRegister={() => setAuthMode("register")} />
      <Faq />
      <Footer />
    </main>
  );
}