import { BlogProvider } from '@/context/BlogContext';


export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogProvider>
      {children}
    </BlogProvider>
  );
}
