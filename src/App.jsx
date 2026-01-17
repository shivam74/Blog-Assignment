import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BlogList } from './components/BlogList'
import { BlogDetail } from './components/BlogDetail'
import { CreateBlogForm } from './components/CreateBlogForm'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Button } from './components/ui/button'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState(null)
  const [showCreateForm, setShowCreateForm] = useState(false)

  const handleBlogSelect = (id) => {
    setSelectedBlogId(id)
    setShowCreateForm(false)
  }

  const handleCreateSuccess = () => {
    setShowCreateForm(false)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        {showCreateForm ? (
          <div className="flex-1 p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
                  CA Monk Blog
                </h1>
                <p className="text-center text-gray-600">
                  Stay updated with the latest trends in finance, accounting, and career growth.
                </p>
              </div>
              <CreateBlogForm onSuccess={handleCreateSuccess} />
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1">
              <div className="text-center py-8 bg-white border-b border-gray-200">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  CA Monk Blog
                </h1>
                <p className="text-gray-600">
                  Stay updated with the latest trends in finance, accounting, and career growth.
                </p>
              </div>
              <div className="flex h-[calc(100vh-280px)]">
                <BlogList
                  selectedBlogId={selectedBlogId}
                  onBlogSelect={handleBlogSelect}
                />
                <BlogDetail blogId={selectedBlogId} />
              </div>
            </div>
            <div className="bg-white border-t border-gray-200 p-4 flex justify-center">
              <Button
                onClick={() => {
                  setShowCreateForm(!showCreateForm)
                  setSelectedBlogId(null)
                }}
                variant={showCreateForm ? 'secondary' : 'default'}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                {showCreateForm ? 'View Blogs' : 'Create New Blog'}
              </Button>
            </div>
          </>
        )}
        
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App
