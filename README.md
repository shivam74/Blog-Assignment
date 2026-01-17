# Blog Application

A modern blog application built with React, TanStack Query, Tailwind CSS, and shadcn/ui components.

## Overview

▶️ Click to watch demo  
https://github.com/shivam74/Blog-Assignment/raw/main/demo.mp4


*CA Monk Blog - A modern blog application with a clean, two-column layout featuring blog list and detail views.*

## Prerequisites

- Node.js (v18 or higher)
- Git
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the JSON Server (Backend API)

In one terminal, run:

```bash
npm run server
```

The API will run on http://localhost:3001

### 3. Start the Development Server

In a new terminal, run:

```bash
npm run dev
```

The app will run on http://localhost:5173

## Features

- ✅ View all blogs in a list (left panel)
- ✅ View individual blog details (right panel)
- ✅ Create new blog posts
- ✅ Loading states with skeletons
- ✅ Error handling
- ✅ Responsive design
- ✅ Modern UI with Tailwind CSS and shadcn/ui components

## Technologies Used

- **React** - UI library
- **TanStack Query** - Server state management and data fetching
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **JSON Server** - Mock REST API
- **Vite** - Build tool

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components
│   ├── BlogCard.jsx
│   ├── BlogList.jsx
│   ├── BlogDetail.jsx
│   └── CreateBlogForm.jsx
├── hooks/
│   └── useBlogs.js  # TanStack Query hooks
├── lib/
│   ├── api.js       # API service functions
│   └── utils.js     # Utility functions
├── App.jsx
├── main.jsx
└── index.css
```

## API Endpoints

The JSON Server provides the following endpoints:

- `GET /blogs` - Get all blogs
- `GET /blogs/:id` - Get a specific blog by ID
- `POST /blogs` - Create a new blog

## Sample Blog Object

```json
{
  "id": 1,
  "title": "Future of Fintech",
  "category": ["FINANCE", "TECH"],
  "description": "Exploring how AI and blockchain are reshaping financial services",
  "date": "2026-01-11T09:12:45.120Z",
  "coverImage": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
  "content": "Full blog content...",
  "tags": ["AI", "Blockchain", "Finance"]
}
```
