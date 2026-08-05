<script setup>
import { inject } from 'vue';
const __ = inject('locale');
</script>

<template>
  <div class="py-8 lg:py-16">
    <h1
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 800,
          ease: 'easeOut'
        }
      }"
      class="w-full py-10 text-2xl text-center lg:text-4xl"
    >
      تایبەتمەندییەکان
    </h1>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 100,
            ease: 'easeOut'
          }
        }"
        class="flex flex-col items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-2 bg-[#e2bd37] rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-component"
          >
            <path
              d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
            />
            <path
              d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"
            />
            <path
              d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"
            />
            <path
              d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
            />
          </svg>
        </div>
        <span>
          نابیستانیش دەتوانن سوود لەم بەرنامەیە وەربگرن چونکە زمانی ئاماژەی لەخۆ گرتووە!
        </span>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 150,
            ease: 'easeOut'
          }
        }"
        class="flex flex-col items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-2 bg-[#e2bd37] rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-copy"
          >
            <rect
              width="14"
              height="14"
              x="8"
              y="8"
              rx="2"
              ry="2"
            />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        </div>
        <span>
          كۆپیكردنی هه‌ر دەقێكی عه‌ره‌بی بێت یان كوردی یان پێکەوە كه‌ خۆت بته‌وێت.
        </span>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 200,
            ease: 'easeOut'
          }
        }"
        class="flex flex-col items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-2 bg-[#e2bd37] rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-pin"
          >
            <path d="M12 17v5" />
            <path
              d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
            />
          </svg>
        </div>
        <span>
          لیستی دڵخوازه‌كان بۆ بینینەوەی ئەو ئایەتانەی کە خۆت دڵخوازت کردوون
        </span>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 250,
            ease: 'easeOut'
          }
        }"
        class="flex flex-col items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-2 bg-[#e2bd37] rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-languages"
          >
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
          </svg>
        </div>
        <span>
          بەرنامەکە بە هەرسێ شێوەزاری بادینانی و زاری کوردیی ناوەندی و زاری کوردیی ماچۆیی (هەورامانی) بەردەستە.
        </span>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 300,
            ease: 'easeOut'
          }
        }"
        class="flex flex-col items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-2 bg-[#e2bd37] rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-search"
          >
            <circle
              cx="11"
              cy="11"
              r="8"
            />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <span>
          گەڕانی تەفسیر بۆ گەڕان بەدوای ئایەتەکاندا بەپێی تەفسیرە کوردییەکان.
        </span>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 350,
            ease: 'easeOut'
          }
        }"
        class="flex flex-col items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-2 bg-[#e2bd37] rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-git-branch-plus"
          >
            <path d="M6 3v12" />
            <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path d="M15 6a9 9 0 0 0-9 9" />
            <path d="M18 15v6" />
            <path d="M21 18h-6" />
          </svg>
        </div>
        <span>
          دەقەكانی نێو سورەتەكان بە زمانی عه‌ره‌بی و سیازدە ته‌فسیری كوردییه‌وه‌ (هێڤی، پوخت، هەژار، ئاسان، ڕامان،
          ڕێبه‌ر، مویەسەر، ڕۆشن، تەوحید، ژیان، ساناهی، ڕوناهی، قورئانی کەریم بە هورامی).
        </span>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 400,
            ease: 'easeOut'
          }
        }"
        class="flex flex-col items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-2 bg-[#e2bd37] rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-arrow-down-z-a"
          >
            <path d="m3 16 4 4 4-4" />
            <path d="M7 4v16" />
            <path d="M15 4h5l-5 6h5" />
            <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
            <path d="M20 18h-5" />
          </svg>
        </div>
        <span>
          بەشێک بە ناوی 'پۆلنامەی قورئان' بۆ پۆلێنکارییی ئایەتەکان.
        </span>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 450,
            ease: 'easeOut'
          }
        }"
        class="flex flex-col items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-2 bg-[#e2bd37] rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-file-question"
          >
            <path d="M12 17h.01" />
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
            <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
          </svg>
        </div>
        <span>
          بەشێک بە ناوی 'تاقیکردنەوەی قورئانی'.
        </span>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 500,
            ease: 'easeOut'
          }
        }"
        class="flex flex-col items-center gap-4 p-4 overflow-hidden text-center rounded-lg bg-card"
      >
        <div class="w-auto p-2 bg-[#e2bd37] rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white lucide lucide-hand-helping"
          >
            <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
            <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
            <path d="m2 13 6 6" />
          </svg>
        </div>
        <span>
          بەشێک بە ناوی 'نزاکانی نێو قورئان'.
        </span>
      </div>
    </div>
  </div>
</template>
