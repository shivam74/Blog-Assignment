import { useState } from 'react'
import { useCreateBlog } from '@/hooks/useBlogs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CreateBlogForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    content: '',
    coverImage: '',
    tags: '',
  })

  const createBlog = useCreateBlog()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const blogData = {
      title: formData.title,
      category: formData.category.split(',').map(c => c.trim().toUpperCase()).filter(c => c),
      description: formData.description,
      content: formData.content,
      coverImage: formData.coverImage || 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
      date: new Date().toISOString(),
      tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
    }

    try {
      await createBlog.mutateAsync(blogData)
      // Reset form
      setFormData({
        title: '',
        category: '',
        description: '',
        content: '',
        coverImage: '',
        tags: '',
      })
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      console.error('Error creating blog:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white">
      <CardHeader>
        <CardTitle className="text-2xl">Create New Blog Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="category">Category (comma-separated)</Label>
            <Input
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g., TECH, FINANCE"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={8}
              required
            />
          </div>

          <div>
            <Label htmlFor="coverImage">Cover Image URL (optional)</Label>
            <Input
              id="coverImage"
              name="coverImage"
              type="url"
              value={formData.coverImage}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="e.g., React, JavaScript, Tutorial"
            />
          </div>

          <Button
            type="submit"
            disabled={createBlog.isPending}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            {createBlog.isPending ? 'Creating...' : 'Create Blog'}
          </Button>

          {createBlog.isError && (
            <div className="text-red-500 text-sm">
              Error: {createBlog.error?.message || 'Failed to create blog'}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
