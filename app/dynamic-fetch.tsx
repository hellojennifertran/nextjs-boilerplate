export default async function Page() {
  // Since this page is dynamic, it will run through a Vercel Function
  const dynamic = await fetch('https://api.vercel.app/products', {
    cache: 'no-store',
  });
  const products = await dynamic.json();
 
  // Cache the statica data and avoid slow origin fetches
  const statica = await fetch('https://api.vercel.app/blog', {
    next: {
      tags: ['blog'], // Invalidate with revalidateTag('blog') on-demand
    },
  });
  const blog = await statica.json();
 
  return '...';
}
