// Vercel-compatible API endpoint for TikTok Downloader
import { getIdVideo, getVideo } from './lib/downloader.js';
import { downloadRequestSchema } from './lib/schema.js';

// Enhanced error logging
const logError = (message, error) => {
  console.error(`[TikTok Downloader] ${message}`);
  console.error(error);
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // For testing - respond to GET requests too
  if (req.method === 'GET') {
    return res.status(200).json({ 
      status: 'API is running',
      message: 'Use POST to download videos' 
    });
  }

  // Only allow POST requests for actual functionality
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Validate request body exists
  if (!req.body) {
    return res.status(400).json({ message: 'Missing request body' });
  }

  try {
    console.log('Processing request with body:', req.body);

    // Parse and validate the request body
    const { url, watermark } = downloadRequestSchema.parse(req.body);
    console.log(`Processing URL: ${url}, watermark: ${watermark}`);
    
    // Get video ID and data
    const videoId = await getIdVideo(url);
    console.log(`Video ID extracted: ${videoId}`);
    
    const videoData = await getVideo(url, watermark);
    
    if (!videoData) {
      logError('Failed to fetch video data', { url, watermark });
      return res.status(500).json({ message: 'Failed to fetch video data' });
    }
    
    // Return appropriate response based on content type
    if (videoData.images && videoData.images.length > 0) {
      console.log('Slideshow detected');
      return res.json({
        success: true,
        type: 'slideshow',
        id: videoData.id,
        message: 'This is a slideshow, not a video'
      });
    } else {
      console.log('Video download URL:', videoData.url);
      return res.json({
        success: true,
        type: 'video',
        id: videoData.id,
        url: videoData.url
      });
    }
  } catch (error) {
    logError('Download error:', error);
    
    // Handle validation errors
    if (error.errors) {
      return res.status(400).json({
        message: 'Invalid request data',
        errors: error.errors
      });
    }
    
    // Handle general errors
    return res.status(500).json({
      message: 'An error occurred while processing your request',
      error: error.message
    });
  }
}