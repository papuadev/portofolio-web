import { ThemeProvider } from "@/components/theme-provider";
import { Home } from "@/pages/Home";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { siteMetadata } from "@/data/data";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <Helmet>
          <title>{siteMetadata.title}</title>
          <meta name="description" content={siteMetadata.description} />
          <meta name="theme-color" content={siteMetadata.themeColor} />
        </Helmet>
        
        <Home />
        <Toaster position="bottom-right" />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
