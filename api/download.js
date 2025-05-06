// Vercel-compatible API endpoint for TikTok Downloader
import { getIdVideo, getVideo } from '../server/downloader.js';
import { downloadRequestSchema } from '../shared/schema.js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Parse and validate the request body
    const { url, watermark } = downloadRequestSchema.parse(req.body);
    
    // Get video ID and data
    const videoId = await getIdVideo(url);
    const videoData = await getVideo(url, watermark);
    
    if (!videoData) {
      return res.status(500).json({ message: 'Failed to fetch video data' });
    }
    
    // Return appropriate response based on content type
    if (videoData.images.length > 0) {
      return res.json({
        success: true,
        type: 'slideshow',
        id: videoData.id,
        message: 'This is a slideshow, not a video'
      });
    } else {
      return res.json({
        success: true,
        type: 'video',
        id: videoData.id,
        url: videoData.url
      });
    }
  } catch (error) {
    console.error('Download error:', error);
    
    // Handle validation errors
    if (error.errors) {
      return res.status(400).json({
        message: 'Invalid request data',
        errors: error.errors
      });
    }
    
    // Handle general errors
    return res.status(500).json({
      message: 'An error occurred while processing your request'
    });
  }
}