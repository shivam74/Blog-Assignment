import { Card, CardContent } from '@/components/ui/card'
import { formatDistanceToNow } from 'date-fns'
import { 
  TrendingUp, 
  GraduationCap, 
  FileText, 
  Settings, 
  Monitor 
} from 'lucide-react'

const categoryIcons = {
  FINANCE: TrendingUp,
  TECH: Monitor,
  TECHNOLOGY: Monitor,
  CAREER: GraduationCap,
  REGULATIONS: FileText,
  SKILLS: Settings,
  DEVELOPMENT: Settings,
}

const categoryColors = {
  FINANCE: 'text-gray-700',
  TECH: 'text-gray-700',
  TECHNOLOGY: 'text-gray-700',
  CAREER: 'text-gray-700',
  REGULATIONS: 'text-gray-700',
  SKILLS: 'text-gray-700',
  DEVELOPMENT: 'text-gray-700',
}

export function BlogCard({ blog, isSelected, onClick }) {
  const timeAgo = formatDistanceToNow(new Date(blog.date), { addSuffix: true })
  const primaryCategory = blog.category?.[0] || 'TECH'
  const IconComponent = categoryIcons[primaryCategory] || FileText

  return (
    <Card
      className={`mb-4 cursor-pointer transition-all hover:shadow-lg bg-white border-gray-200 relative ${
        isSelected ? 'border-l-4 border-l-purple-600' : ''
      }`}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <IconComponent className={`w-4 h-4 ${categoryColors[primaryCategory] || 'text-gray-700'}`} />
            <span className="text-sm text-gray-600 font-medium">
              {primaryCategory}
            </span>
          </div>
          <span className="text-xs text-gray-500">{timeAgo}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {blog.description}
        </p>
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
              {blog.tags[0]}
            </span>
            {isSelected && (
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                Featured
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
