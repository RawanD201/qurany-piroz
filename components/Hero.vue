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
      class="flex flex-col items-center gap-8 p-4 lg:items-start lg:p-0 lg:w-1/3"
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
        class="px-2 text-justify"
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
        <a
          href="/qurany-piroz.apk"
          download
          class="transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-xl"
        >
          <div class="flex items-center justify-around w-40 h-12 bg-black rounded-xl px-1.5">
            <span class="font-sans text-xs font-semibold text-white">Download (APK)</span>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#ffffff"
                  d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6"
                />
              </svg>
            </div>
          </div>
        </a>
        <!-- <a
          href="/فەرهەنگی ڕیشەییی هێڤی.pdf"
          class="transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-xl"
        >
          <div class="flex items-center justify-center w-40 h-12 bg-black rounded-xl px-1.5 text-center">
            <span class="font-sans text-xs font-semibold text-white">فەرهەنگی ڕیشەییی هێڤی (PDF)
            </span>
          </div>
        </a> -->
      </div>
    </div>
    <div class="flex items-end self-end justify-end gap-4 p-4 lg:p-0">
      <iPhone15ProMockup
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
        src="/images/2.png"
        class="lg:max-w-xs max-w-[8rem] max-h-fit"
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
