'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

const sampleReviews = [
  {
    id: 1,
    rating: 5,
    comment: 'Love these tees! Super comfortable and fit perfectly. I will definitely be ordering more.',
    reviewer: 'John Doe',
  },
  {
    id: 2,
    rating: 4,
    comment: 'Great quality, but the black tees fade a bit after washing.',
    reviewer: 'Jane Smith',
  },
  {
    id: 3,
    rating: 5,
    comment: 'Very soft and breathable. Perfect for everyday wear.',
    reviewer: 'Emily Johnson',
  },
  {
    id: 4,
    rating: 3,
    comment: 'The fit is nice, but I wish the fabric was a little thicker.',
    reviewer: 'Michael Brown',
  },
  {
    id: 5,
    rating: 4,
    comment: 'Good value for the price, and they hold up well in the wash.',
    reviewer: 'Sarah Williams',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CourseDetails() {
  return (
    <div className="bg-white">
      <div className="pt-6 pb-10"> {/* Added pb-10 for padding-bottom */}
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Single Image and Product Info */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="overflow-hidden rounded-lg lg:max-w-md">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-172 w-full object-cover object-center"
            />
          </div>

          {/* Product info */}
          <div className="mt-4 lg:mt-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            <p className="text-3xl tracking-tight text-gray-900 mt-2">{product.price}</p>

            {/* Reviews */}
            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <p className="text-base text-gray-900 mt-2">{product.description}</p>
            </div>

            {/* Highlights */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <ul role="list" className="list-disc pl-4 space-y-2 text-sm">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-600">{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Details */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Details</h3>
              <p className="text-sm text-gray-600 mt-2">{product.details}</p>
            </div>

            {/* Buttons: Bookmark and Enroll */}
            <div className="mt-8 space-y-4">
              <button
                type="button"
                className="w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Bookmark this course
              </button>
              <button
                type="button"
                className="w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Enroll this course now
              </button>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-medium text-gray-900">Customer Reviews</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleReviews.map((review) => (
              <div key={review.id} className="border-t border-gray-200 pt-4">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating ? 'text-indigo-600' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>
                <p className="mt-2 text-sm text-gray-500">{review.comment}</p>
                <p className="mt-1 text-sm font-medium text-gray-900">- {review.reviewer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
