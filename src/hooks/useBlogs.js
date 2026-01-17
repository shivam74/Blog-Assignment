import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/api'

// Query key factory
export const blogKeys = {
  all: ['blogs'],
  lists: () => [...blogKeys.all, 'list'],
  list: (filters) => [...blogKeys.lists(), { filters }],
  details: () => [...blogKeys.all, 'detail'],
  detail: (id) => [...blogKeys.details(), id],
}

// Get all blogs
export function useBlogs() {
  return useQuery({
    queryKey: blogKeys.lists(),
    queryFn: api.getBlogs,
  })
}

// Get blog by ID
export function useBlog(id) {
  return useQuery({
    queryKey: blogKeys.detail(id),
    queryFn: () => api.getBlogById(id),
    enabled: !!id,
  })
}

// Create blog mutation
export function useCreateBlog() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: api.createBlog,
    onSuccess: () => {
      // Invalidate and refetch blogs list
      queryClient.invalidateQueries({ queryKey: blogKeys.lists() })
    },
  })
}
