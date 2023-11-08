<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
    <div class="md:mx-4">
      <div
        :class="['grid place-items-center w-12 h-12 rounded-full my-3', themeColorClass]"
      >
        <div :style="{ color: themeColor }">
          <svg
            :stroke="themeColor"
            :fill="themeColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- User-provided SVG content goes here -->
            <slot name="svgContent" />
          </svg>
        </div>
      </div>
      <span :class="['text-violet-500 dark:text-violet-60 mb-3 inline-block', titleFontClass]">
        {{ title }}
      </span>
      <h2 class="text-3xl">{{ description }}</h2>
      <p>{{ content }}</p>
    </div>
    <div class="flex justify-center">
      <NuxtImg :src="imageSrc" :alt="altText" loading="lazy" :width="imageWidth" :height="imageHeight" :decoding="imageDecoding" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    themeColor: {
      type: String,
      default: '',
    },
    title: String,
    description: String,
    content: String,
    altText: String,
    imageSrc: String,
    imageWidth: String,
    imageHeight: String,
    imageDecoding: String,
  },
  computed: {
    themeColorClass() {
      return this.themeColor ? `bg-${this.themeColor}-50 dark:bg-primary-800` : '';
    },
    titleFontClass() {
      return this.themeColor ? 'font-medium md:font-semibold' : '';
    },
  },
};
</script>
