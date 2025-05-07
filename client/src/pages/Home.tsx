import React from "react";
import DownloadForm from "@/components/DownloadForm";
import Instructions from "@/components/Instructions";
import Faqs from "@/components/Faqs";
import FeaturesSection from "@/components/FeaturesSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[hsl(var(--dark))] text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="material-icons text-[#FF0050] text-3xl">video_library</span>
            <h1 className="text-xl md:text-2xl font-bold">TikTok Downloader</h1>
          </div>
          <div className="flex items-center">
            <a href="#about" className="text-gray-300 hover:text-white transition duration-150">
              <span className="material-icons">help_outline</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <DownloadForm />
          <Instructions />
          <Faqs/>
          <FeaturesSection/>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
         
            <h3 className="text-xl font-bold text-whitw mb-2">TikTok Video Downloader</h3>
           
          </div>
          
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TikTok Video Downloader. All rights reserved by Awais Asif. </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Home;
