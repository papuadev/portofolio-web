import React from "react";
import { Navbar } from "../organisms/Navbar";
import { siteMetadata } from "@/data/data";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} {siteMetadata.title.split("|")[0].trim()}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
