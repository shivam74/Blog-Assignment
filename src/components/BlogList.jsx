import { useBlogs } from '@/hooks/useBlogs'
import { BlogCard } from './BlogCard'
import { Skeleton } from '@/components/ui/skeleton'
import { Card } from '@/components/ui/card'

export function BlogList({ selectedBlogId, onBlogSelect }) {
  const { data: blogs, isLoading, error } = useBlogs()

  if (isLoading) {
    return (
      <div className="w-full md:w-1/3 bg-gray-50 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4 bg-white">
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-4 w-full" />
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full md:w-1/3 bg-gray-50 p-6">
        <div className="text-red-500 text-center">
          Error loading blogs: {error.message}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full md:w-1/3 bg-gray-50 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
      <div>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              isSelected={selectedBlogId === blog.id}
              onClick={() => onBlogSelect(blog.id)}
            />
          ))
        ) : (
          <div className="text-gray-500 text-center py-8">
            No blogs found. Create your first blog!
          </div>
        )}
      </div>
    </div>
  )
}
