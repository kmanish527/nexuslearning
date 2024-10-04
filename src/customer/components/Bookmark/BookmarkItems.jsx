'use client'

import { useState } from 'react'

const bookmarkedCourses = [
  {
    id: 1,
    title: 'Introduction to Python',
    price: '$99',
    imageUrl: '/public/assets/exampledata/PyhtonForDataScence.jpg',
  },
  {
    id: 2,
    title: 'CyberSecurity',
    price: '$149',
    imageUrl: '/public/assets/exampledata/CyberSecurity.jpeg',
  },
  {
    id: 3,
    title: 'Advanced JavaScript',
    price: '$199',
    imageUrl: '/public/assets/exampledata/JavaScript.png',
  },
]

export default function BookmarkItems() {
  const [bookmarks, setBookmarks] = useState(bookmarkedCourses)

  const handleRemoveBookmark = (id) => {
    setBookmarks(bookmarks.filter(course => course.id !== id))
  }

  const handleEnrollNow = (id) => {
    console.log(`Enrolled in course ID: ${id}`)
    // You can add your logic to enroll in the course here.
  }

  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Bookmarked Courses</h1>
        {bookmarks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarks.map((course) => (
              <div key={course.id} className="border rounded-lg p-4">
                <img src={course.imageUrl} alt={course.title} className="h-48 w-full object-cover rounded-md mb-4" />
                <h2 className="text-xl font-semibold text-gray-900">{course.title}</h2>
                <p className="text-lg font-medium text-gray-600">{course.price}</p>
                <div className="mt-4 space-y-2">
                  <button
                    onClick={() => handleEnrollNow(course.id)}
                    className="w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white hover:bg-green-700"
                  >
                    Enroll Now
                  </button>
                  <button
                    onClick={() => handleRemoveBookmark(course.id)}
                    className="w-full items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Remove Bookmark
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg">You have no bookmarked courses.</p>
        )}
      </div>
    </div>
  )
}
