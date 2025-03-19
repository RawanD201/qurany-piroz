<script setup>
import content from '~/assets/contents/main.json';
import { inject } from 'vue';
import iPhone15ProMockup from '~/components/iPhone15ProMockup.vue';

const __ = inject('locale');
</script>

<template>
  <div class="relative flex flex-col items-center justify-between w-full gap-8 pt-20 lg:flex-row">

    <div
      v-motion
      :initial="{ opacity: 0, x: -100 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 800, ease: 'easeOut' } }"
      class="flex flex-col items-start gap-8 p-4 lg:p-0 lg:w-1/3"
    >
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 600 } }"
        src="/images/logo.png"
        class="shadow-lg w-36 h-36 rounded-xl"
        alt="Logo"
      />
      <span
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 400, duration: 600 } }"
      >
        {{ __.translate(content.navigations.description) }}
      </span>
      <!-- App store buttons with animation -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300, ease: 'easeOut' } }"
        class="flex flex-wrap justify-center gap-4"
      >
        <NuxtLink
          to="https://apps.apple.com/us/app/%D9%82%D9%88%D8%B1%D8%A6%D8%A7%D9%86%DB%8C-%D9%BE%DB%8C%D8%B1%DB%86%D8%B2-%D9%BE%DB%95%DA%95%D8%AA%D9%88%D9%88%DA%A9%DB%8C-%D8%AE%D9%88%D8%AF%D8%A7/id1240368293?ign-itscg=30200&ign-itsct=apps_box_link&mttnsubad=1240368293"
          class="transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-xl"
        >
          <img
            class="w-40 h-12 rounded-xl"
            src="/images/app-store-badge.jpg"
            alt="App Store"
          >
        </NuxtLink>
        <!-- <NuxtLink
          to="/"
          class="transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-xl"
        >
          <img
            class="w-40 h-12 rounded-xl"
            src="/images/play-store-badge.png"
            alt="Google Play Store"
          >
        </NuxtLink> -->
      </div>
    </div>
    <div class="flex items-end self-end justify-end gap-4 p-4 lg:p-0">
      <iPhone15ProMockup
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
        src="/images/2.png"
        class="lg:max-w-xs max-w-[10rem] max-h-fit"
      />
      <iPhone15ProMockup
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 900 } }"
        src="/images/1.png"
        class="lg:max-w-sm max-w-[13rem] max-h-fit"
      />
    </div>
  </div>
</template>
