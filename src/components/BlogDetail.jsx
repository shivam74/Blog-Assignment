import { useBlog } from '@/hooks/useBlogs'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { format } from 'date-fns'
import { Share2, ThumbsUp, MessageCircle } from 'lucide-react'

// Calculate read time (rough estimate: 200 words per minute)
function calculateReadTime(content) {
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return minutes
}

export function BlogDetail({ blogId }) {
  const { data: blog, isLoading, error } = useBlog(blogId)

  if (!blogId) {
    return (
      <div className="w-full md:w-2/3 p-8 bg-white flex items-center justify-center">
        <div className="text-gray-400 text-center">
          <p className="text-xl mb-2">Select a blog post to view</p>
          <p className="text-sm">Choose a blog from the list on the left</p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="w-full md:w-2/3 p-8 bg-white overflow-y-auto">
        <Skeleton className="h-64 w-full mb-4" />
        <Skeleton className="h-8 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/4 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full md:w-2/3 p-8 bg-white flex items-center justify-center">
        <div className="text-red-500 text-center">
          Error loading blog: {error.message}
        </div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="w-full md:w-2/3 p-8 bg-white flex items-center justify-center">
        <div className="text-gray-400">Blog not found</div>
      </div>
    )
  }

  const formattedDate = format(new Date(blog.date), 'MMM dd, yyyy')
  const readTime = calculateReadTime(blog.content || '')

  return (
    <div className="w-full md:w-2/3 p-8 bg-white overflow-y-auto">
      {blog.coverImage && (
        <div className="w-full h-96 object-cover rounded-lg mb-6 overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <span>{blog.category?.[0] || 'TECH'}</span>
        <span>•</span>
        <span>{readTime} min read</span>
      </div>

      <div className="flex items-start justify-between mb-6">
        <h1 className="text-4xl font-bold text-gray-900 pr-4">{blog.title}</h1>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Share2 className="w-4 h-4 mr-2" />
          Share Article
        </Button>
      </div>

      <Card className="mb-8 bg-gray-50 border-gray-200">
        <CardContent className="p-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-xs text-gray-500 uppercase mb-1">Category</div>
              <div className="text-sm font-semibold text-gray-900">
                {blog.category?.join(' & ') || 'General'}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase mb-1">Read Time</div>
              <div className="text-sm font-semibold text-gray-900">{readTime} Mins</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase mb-1">Date</div>
              <div className="text-sm font-semibold text-gray-900">{formattedDate}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="prose max-w-none mb-8">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {blog.description}
        </p>
        <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
          {blog.content}
        </div>
      </div>

      {blog.tags && blog.tags.length > 0 && (
        <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400">
          <p className="text-blue-900 italic text-lg">
            "{blog.tags.join(', ')}"
          </p>
        </div>
      )}

      <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600 font-semibold">AM</span>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Written by Shivam Raghuwanshi</div>
            <div className="text-sm text-gray-600">Senior Financial Analyst</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ThumbsUp className="w-5 h-5" />
            <span>Like</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
        </div>
      </div>
    </div>
  )
}
