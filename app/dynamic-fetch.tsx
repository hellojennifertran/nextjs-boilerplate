export default async function Page() {
  // Since this page is dynamic, it will run through a Vercel Function
  const dynamic = await fetch('https://api.vercel.app/products', {
    cache: 'no-store',
  });
  const products = await dynamic.json();
 
  // Cache the staticb data and avoid slow origin fetches
  const staticb = await fetch('https://api.vercel.app/blog', {
    next: {
      revalidate: 3600, // 1 hour
    },
  });
  const blog = await staticb.json();
 
  return '...';
}
