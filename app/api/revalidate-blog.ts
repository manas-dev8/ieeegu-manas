import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret token to confirm this is a valid request
  if (req.body.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const { slug } = req.body;
    
    // Revalidate specific post if slug is provided
    if (slug) {
      await res.revalidate(`/blog/${slug}`);
      return res.json({ revalidated: true, path: `/blog/${slug}` });
    }
    
    // Otherwise revalidate all blog pages
    await Promise.all([
      res.revalidate('/blog'),
      res.revalidate('/blog/category'),
      res.revalidate('/blog/author'),
    ]);
    
    return res.json({ revalidated: true, path: '/blog/*' });
  } catch (err) {
    // If there was an error, Next.js will continue to show the last successful generated page
    return res.status(500).json({ message: 'Error revalidating', error: err });
  }
}
