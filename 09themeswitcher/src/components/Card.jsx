import React from "react"

export default function Card() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative backdrop-blur-xl bg-gray-200/30 dark:bg-gray-800/30 rounded-3xl border border-gray-300/40 dark:border-gray-600/40 shadow-2xl overflow-hidden hover:scale-105 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 dark:from-gray-700/20 to-transparent pointer-events-none"></div>

        <div className="relative overflow-hidden rounded-t-3xl">
          <img
            className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-700"
            src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Apple Watch Series 7"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 dark:from-black/70 to-transparent"></div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight tracking-tight">
            Apple Watch Series 7 GPS
            <span className="block text-sm font-normal text-gray-600 dark:text-gray-300 mt-1">
              Aluminium Case, Starlight Sport
            </span>
          </h3>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 dark:text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-gray-700/70 text-blue-800 dark:text-blue-200 rounded-full backdrop-blur-sm border border-blue-200 dark:border-gray-600/50">
              4.0
            </span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              $599
            </span>

            <a
              href="#"
              className="px-6 py-3 bg-gray-200/40 dark:bg-gray-700/40 hover:bg-gray-300/50 dark:hover:bg-gray-600/50 text-gray-800 dark:text-white font-medium rounded-2xl backdrop-blur-sm border border-gray-300/50 dark:border-gray-600/30 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Add to cart
            </a>
          </div>
        </div>

        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-gray-400/15 dark:from-gray-500/15 to-gray-600/15 dark:to-gray-700/15 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-gray-300/15 dark:from-gray-600/15 to-gray-500/15 dark:to-gray-800/15 rounded-full blur-xl"></div>
      </div>
    </div>
  )
}
