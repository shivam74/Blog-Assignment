const API_BASE_URL = 'http://localhost:3001'

export const api = {
  // Get all blogs
  getBlogs: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs`)
      if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.status}`)
      }
      return response.json()
    } catch (error) {
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        throw new Error('Cannot connect to server. Please make sure JSON Server is running on http://localhost:3001')
      }
      throw error
    }
  },

  // Get blog by ID
  getBlogById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/${id}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch blog: ${response.status}`)
      }
      return response.json()
    } catch (error) {
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        throw new Error('Cannot connect to server. Please make sure JSON Server is running on http://localhost:3001')
      }
      throw error
    }
  },

  // Create a new blog
  createBlog: async (blogData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      })
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Failed to create blog: ${response.status} ${errorText}`)
      }
      return response.json()
    } catch (error) {
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        throw new Error('Cannot connect to server. Please make sure JSON Server is running on http://localhost:3001')
      }
      throw error
    }
  },
}
