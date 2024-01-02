export default async function Page() {
  // Since this page is dynamic, it will run through a Vercel Function
  const dynamic = await fetch('https://api.vercel.app/products', {
    cache: 'no-store',
  });
  const products = await dynamic.json();
 
  // Cache the static data and avoid slow origin fetches
  const static = await fetch('https://api.vercel.app/blog', {
    next: {
      tags: ['blog'], // Invalidate with revalidateTag('blog') on-demand
    },
  });
  const blog = await static.json();
 
  return '...';
}
