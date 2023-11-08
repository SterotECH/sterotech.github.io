<template>
  <section class="pt-10 pb-12 relative ">
    <div class="mx-auto px-2 md:px-5 lg:px-8 2xl:max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-start">
        <div
          class="p-2 pb-20 md:pb-10 flex flex-col justify-center items-start lg:pt-10 xl:max-w-xl"
        >
          <h1
            class="text-4xl lg:text-[2.6rem] md:font-extrabold lg:leading-[2.9rem] font-bold text-white leading-10"
          >
            Crafting code,<span class="text-green-400 mx-2">Solving Real-World Challenges</span
            > and Building the <span class="text-pink-500 mx-2">Digital Future.</span>
          </h1>
          <p
            class="leading-relaxed text-gray-300 text-lg my-5 md:my-7 md:text-xl"
          >
            Transforming<strong class="text-white mx-1">Complex Problems</strong>into Elegant Solutions <strong class="text-white mx-1">Through Code.</strong>
          </p>
          <a
            class="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-violet-600 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
            role="button"
            href="/courses"
            >Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="w-6 h-4 inline-block transition-all duration-200 ease-out group-hover:ml-3"
            >
              <path
                fill-rule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              ></path>
              </svg>
            </a>
        </div>
        <div>
          <div
            class="bg-gradient-to-r from-gray-700 to-indigo-900 rounded-lg select-none border border-gray-800 relative"
          >
            <div class="flex flex-row">
              <div
                class="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"
              ></div>
              <div
                class="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"
              ></div>
            </div>
            <div class="px-8 py-5">
              <div class="flex flex-row space-x-2">
                <div class="rounded-full bg-red-400 w-3 h-3"></div>
                <div class="rounded-full bg-orange-400 w-3 h-3"></div>
                <div class="rounded-full bg-green-200 w-3 h-3"></div>
              </div>
            </div>
            <div
              class="px-8 py-8 border-t-[2px] border-indigo-900 overflow-hidden"
            >
              <code class="font-mono"
                >
                <div class="blink">
                  <span class="text-pink-500 mr-2">const</span
                  ><span class="text-white mr-2">career</span
                  ><span class="text-pink-500 mr-2">=</span
                  ><span class="text-gray-400">{</span>
                </div>
                <div>
                  <span class="text-white ml-8 mr-2">name:</span
                  ><span class="text-gray-400">'</span
                  ><span class="text-amber-300">Software Engineer</span
                  ><span class="text-gray-400">',</span>
                </div>
                <div>
                  <span class="text-white ml-8 mr-2">skills:</span>
                  <span class="text-gray-400">['</span>
                  <span class="text-amber-300">React</span>
                  <span class="text-gray-400">', '</span>
                  <span class="text-amber-300">Vue</span>
                  <span class="text-gray-400">', '</span>
                  <span class="text-amber-300">Dart</span>
                  <span class="text-gray-400">', '</span>
                  <span class="text-amber-300">PHP</span>
                  <span class="text-gray-400">', '</span>
                  <span class="text-amber-300">Java</span>
                  <span class="text-gray-400">', '</span>
                  <span class="text-amber-300 ml-12">Rust</span>
                  <span class="text-gray-400">'],</span>
                </div>
                <div>
                  <span class="text-white ml-8 mr-2">hardWorker:</span
                  ><span class="text-orange-400">true</span
                  ><span class="text-gray-400">,</span>
                </div>
                <div>
                  <span class="text-white ml-8 mr-2">problemSolver:</span
                  ><span class="text-orange-400">true</span
                  ><span class="text-gray-400">,</span>
                </div>
                <div>
                  <span class="text-green-400 ml-8 mr-2">hireable:</span
                  ><span class="text-orange-400">function</span
                  ><span class="text-gray-400">() {</span>
                </div>
                <div>
                  <span class="text-orange-400 ml-16 mr-2">return</span
                  ><span class="text-gray-400">(</span>
                </div>
                <div>
                  <span class="text-cyan-400 ml-24">this.</span
                  ><span class="text-white mr-2">hardWorker</span
                  ><span class="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span class="text-cyan-400 ml-24">this.</span
                  ><span class="text-white mr-2">problemSolver</span
                  ><span class="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span class="text-cyan-400 ml-24">this.</span
                  ><span class="text-white mr-2">skills.length</span
                  ><span class="text-amber-300 mr-2">&gt;=</span
                  ><span class="text-orange-400">5</span>
                </div>
                <div><span class="text-gray-400 ml-16 mr-2">);</span></div>
                <div><span class="text-gray-400 ml-8">}</span></div>
                <div><span class="text-gray-400">}</span></div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
