import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our TikTok Downloader</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-pink-100 text-pink-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <h3 className="font-medium text-gray-800 mb-1">High Quality</h3>
          <p className="text-gray-600">Download videos in HD quality without compression</p>
        </div>
        <div className="text-center">
          <div className="bg-pink-100 text-pink-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="font-medium text-gray-800 mb-1">No Registration</h3>
          <p className="text-gray-600">Download videos instantly without signing up</p>
        </div>
        <div className="text-center">
          <div className="bg-pink-100 text-pink-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <h3 className="font-medium text-gray-800 mb-1">Cloud Storage</h3>
          <p className="text-gray-600">Option to save your downloads to cloud storage</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;