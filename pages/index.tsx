import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';

const DUMMY_POSTS: any = [
  { 
    slug: "getting-started-with-nextjs1", 
    title: "Getting Started withNextJS", 
    image: 'IMG_3847.JPG',
    excerpt: 'NextJS is the React for production', 
    date: '2022-02-10'
  },
  { 
    slug: "getting-started-with-nextjs2", 
    title: "Getting Started withNextJS", 
    image: 'IMG_3847.JPG',
    excerpt: 'NextJS is the React for production', 
    date: '2022-02-10'
  },
  { 
    slug: "getting-started-with-nextjs3", 
    title: "Getting Started withNextJS", 
    image: 'IMG_3847.JPG',
    excerpt: 'NextJS is the React for production', 
    date: '2022-02-10'
  },
  { 
    slug: "getting-started-with-nextjs4", 
    title: "Getting Started withNextJS", 
    image: 'IMG_3847.JPG',
    excerpt: 'NextJS is the React for production', 
    date: '2022-02-10'
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </>
  ) 
}

export default HomePage;