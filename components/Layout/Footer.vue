<template>
  <div class="relative overflow-hidden border-t-primary-600 mt-20">
    <div
      class="absolute top-0 h-[1px] w-full bg-primary-300 dark:bg-primary-600"
    ></div>
    <div class="relative -z-50">
      <div class="flex flex-row justify-center">
        <div
          class="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-100 to-transparent"
        ></div>
        <div
          class="w-[300px] h-[300px] bg-violet-100 rounded-full absolute -top-[150px] filter blur-3xl opacity-20"
        ></div>
      </div>
    </div>
    <UContainer class="py-10">
      <div
        class="flex flex-col space-y-5 md:flex-row justify-between items-center"
      >
        <div class="text-gray-700 dark:text-gray-100">© Code with Stero</div>
        <div class="flex flex-row space-x-5">
          <a
            aria-label="Stero tECH's YouTube Channel"
            href="https://www.youtube.com/@sterotech"
            target="_blank"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="text-violet-500 dark:text-white"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
              ></path></svg></a
          ><a
            aria-label="Stero tECH's Twitter"
            href="https://twitter.com/sterotech/"
            target="_blank"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="text-violet-500 dark:text-white"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              ></path></svg></a
          >
        </div>
        <div class="text-sm flex space-x-5">
          <a class="no-underline" href="/p/terms">Terms of Use</a
          ><a class="no-underline" href="/p/privacy">Privacy Policy</a>
        </div>
      </div>
    </UContainer>
  </div>
</template>
