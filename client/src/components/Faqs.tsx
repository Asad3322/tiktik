import React from 'react';

const Faqs: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mt-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="font-medium text-gray-800 mb-1">Is this TikTok downloader free to use?</h3>
          <p className="text-gray-600">Yes, our service is completely free with no hidden charges. You can download as many videos as you like without any cost.</p>
        </div>
        <div className="border-b border-gray-200 pb-4">
          <h3 className="font-medium text-gray-800 mb-1">What's the difference between with and without watermark options?</h3>
          <p className="text-gray-600">The "with watermark" option keeps the TikTok logo and username on the video, while "without watermark" provides a clean version without these elements.</p>
        </div>
        <div className="border-b border-gray-200 pb-4">
          <h3 className="font-medium text-gray-800 mb-1">Can I download private TikTok videos?</h3>
          <p className="text-gray-600">No, our service can only download public TikTok videos. Private videos require authentication from the account owner.</p>
        </div>
        <div className="border-b border-gray-200 pb-4">
          <h3 className="font-medium text-gray-800 mb-1">What video quality can I expect?</h3>
          <p className="text-gray-600">We provide the highest quality available from the source video, typically up to 1080p HD resolution.</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-800 mb-1">Is there a limit to how many videos I can download?</h3>
          <p className="text-gray-600">No, there are no limits. You can download as many videos as you want, whenever you want.</p>
        </div>
      </div>
    </section>
  );
};

export default Faqs;