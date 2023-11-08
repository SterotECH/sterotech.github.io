<template>
  <nav class="" aria-label="navigation bar">
    <div class="2xl:max-w-7xl mx-auto px-3 lg:px-6 py-3">
      <div class="flex flex-wrap items-center justify-between text-gray-900 dark:text-white">
        <div class="flex-shrink-0 flex items-center mr-14">
          <a aria-label="Code with Stero" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <!-- Pink Circle -->
              <circle cx="30" cy="50" r="20" fill="#FF69B4" />
              <!-- Purple Rectangle -->
              <rect x="50" y="30" width="25" height="40" fill="#800080" />
              <!-- primary Triangle -->
              <polygon points="75,70 90,50 60,50" fill="#0000FF" />
            </svg>
          </a>
        </div>
        <button
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:bg-primary-750 text-gray-400 hover:bg-primary-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Expand main menu</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="27"
            width="27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </button>
        <ul
          class="max-h-0 opacity-0 flex flex-col items-start mt-4 text-sm md:flex-row md:space-x-1 md:mt-0 md:border-0 w-full md:max-h-screen h-screen md:h-auto md:opacity-100 md:w-auto"
          id="navbar-default"
        >
          <li>
            <NuxtLink
              class="block px-4 py-2 outline-none no-underline hover:no-underline"
              href="/"
              >
              <div
                class="text-gray-700 hover:text-gray-400 dark:text-gray-200 dark:hover:text-white focus:text-white text-sm transition-colors duration-300"
              >
                Home
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block px-4 py-2 outline-none no-underline hover:no-underline"
              href="/project"
              >
              <div
                class="text-gray-700 hover:text-gray-400 dark:text-gray-200 dark:hover:text-white focus:text-white text-sm transition-colors duration-300"
              >
                Projects
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block px-4 py-2 outline-none no-underline hover:no-underline"
              href="/courses"
              >
              <div
                class="text-gray-700 hover:text-gray-400 dark:text-gray-200 dark:hover:text-white focus:text-white text-sm transition-colors duration-300"
              >
                Courses
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block px-4 py-2 outline-none no-underline hover:no-underline"
              href="/learning-paths"
              ><div
                class="text-gray-700 hover:text-gray-400 dark:text-gray-200 dark:hover:text-white focus:text-white text-sm transition-colors duration-300"
              >
                Learning Paths
              </div></NuxtLink>
          </li>
          <li>
            <NuxtLink

              class="block px-4 py-2 outline-none no-underline hover:no-underline"
              href="/blogs"
              ><div
                class="text-gray-700 hover:text-gray-400 dark:text-gray-200 dark:hover:text-white focus:text-white text-sm transition-colors duration-300"
              >
                Blog
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block px-4 py-2 outline-none no-underline hover:no-underline"
              href="/contact"
              ><div
                class="text-gray-700 hover:text-gray-400 dark:text-gray-200 dark:hover:text-white focus:text-white text-sm transition-colors duration-300"
              >
                Contact
              </div>
            </NuxtLink>
          </li>
          <li>
            <a
              class="block px-4 py-2 outline-none no-underline hover:no-underline bg-violet-500 hover:bg-violet-400 rounded-3xl"
              href="https://stero-tech.teachable.com/sign_in"
              ><div class="text-white text-sm transition-colors duration-300">
                Member Area
              </div></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
