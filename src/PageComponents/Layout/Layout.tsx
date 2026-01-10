"use client";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import ApplicationModal from "@/components/layouts/Application";
import { ThemeProvider } from "@/components/theme-provider";
import { useAppStore } from "@/stores/store";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isApplicationMenuOpen = useAppStore(
    (state) => state.isApplicationMenuOpen
  );
  return (
    <main className="min-h-screen bg-background">
      <ThemeProvider>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
      {isApplicationMenuOpen && <ApplicationModal />}
    </main>
  );
}
