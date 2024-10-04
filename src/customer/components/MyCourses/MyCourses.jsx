'use client'

import { useState } from 'react'
import { LinearProgress } from '@mui/material'

// Example course data
const purchasedCourses = [
  {
    id: 1,
    title: 'React Basics',
    progress: 50,
    status: 'inprogress', // inprogress or completed
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    progress: 100,
    status: 'completed',
  },
  {
    id: 3,
    title: 'Tailwind CSS',
    progress: 75,
    status: 'inprogress',
  },
  {
    id: 4,
    title: 'Node.js and Express',
    progress: 100,
    status: 'completed',
  },
]

export default function MyCourses() {
  const [filter, setFilter] = useState('all') // 'all', 'inprogress', 'completed'

  const filteredCourses = purchasedCourses.filter(course => {
    if (filter === 'all') return true
    return course.status === filter
  })

  return (
    <div className="bg-white p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">My Courses</h1>

      {/* Buttons to filter courses */}
      <div className="mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 mr-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('inprogress')}
          className={`px-4 py-2 mr-2 ${filter === 'inprogress' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          In Progress
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Completed
        </button>
      </div>

      {/* Display filtered courses */}
      <div className="space-y-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <div key={course.id} className="border border-gray-200 p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">{course.title}</h2>
              <p className="text-sm text-gray-600">Progress: {course.progress}%</p>
              <LinearProgress variant="determinate" value={course.progress} className="mt-2" />
            </div>
          ))
        ) : (
          <p className="text-gray-600">No courses found for this filter.</p>
        )}
      </div>
    </div>
  )
}
